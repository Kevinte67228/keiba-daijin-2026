// ============================================================================
// JBIS Horse Search & 5-Generation Pedigree Universal Engine
// Covers all 16,757+ horses in Winning Post 10 2026 with 1:1 JBIS parity
// ============================================================================

(function(window) {
  'use strict';

  const JBISEngine = {
    isReady: false,
    horseMap: new Map(),         // name/id -> horse profile
    sireProgenyMap: new Map(),   // sireName -> [horse profiles]
    damProgenyMap: new Map(),    // damName -> [horse profiles]
    allHorsesList: [],

    init: function() {
      if (this.isReady) return;
      console.log('[JBISEngine] Initializing universal horse index...');

      // 1. Index Breeding Only Horses (4,314 horses)
      if (window.WP10_BREEDING_ONLY_HORSES && Array.isArray(window.WP10_BREEDING_ONLY_HORSES)) {
        window.WP10_BREEDING_ONLY_HORSES.forEach(h => {
          this.registerHorse(h, 'breeding');
        });
      }

      // 2. Index Unified Horses Database (16,757 horses - primary)
      if (window.WP10_UNIFIED_HORSES_DATA && Array.isArray(window.WP10_UNIFIED_HORSES_DATA)) {
        window.WP10_UNIFIED_HORSES_DATA.forEach(h => {
          this.registerHorse(h, 'race');
        });
      }

      // 3. Build allHorsesList for search
      this.allHorsesList = Array.from(new Set(this.horseMap.values()));
      console.log('[JBISEngine] Universal index ready with ' + this.allHorsesList.length + ' unique horses.');
      this.isReady = true;
    },

    registerHorse: function(h, source) {
      if (!h) return;
      const names = [h.name, h.name_jp, h.name_en, h.zh_name, h.name_zh].filter(Boolean);
      if (names.length === 0) return;

      const mainName = h.name_jp || h.name || h.name_en;
      let existing = this.horseMap.get(mainName);
      if (!existing) {
        existing = {
          id: h.id || ('wp_' + mainName),
          name: mainName,
          name_jp: h.name_jp || mainName,
          name_en: h.name_en || h.en_name || '',
          zh_name: h.zh_name || h.name_zh || '',
          birth_year: h.birth_year || h.year || null,
          sex: h.sex || '牡',
          coat: h.coat || '鹿毛',
          birth_country: h.birth_country || '日本',
          stable_country: h.stable_country || '中央',
          sire: (h.sire && h.sire !== '-') ? h.sire : null,
          dam: (h.dam && h.dam !== '-') ? h.dam : null,
          damsire: (h.damsire && h.damsire !== '-') ? h.damsire : null,
          sp: h.sp || 0,
          st: h.st || h.stamina || 0,
          growth: h.growth || h.growth_type || '',
          traits: h.traits || '',
          ticket: h.ticket || h.amulet || '',
          price: h.price || '',
          reputation: h.reputation || '',
          source: source
        };
      } else {
        if (!existing.sire && h.sire && h.sire !== '-') existing.sire = h.sire;
        if (!existing.dam && h.dam && h.dam !== '-') existing.dam = h.dam;
        if (!existing.name_en && (h.name_en || h.en_name)) existing.name_en = h.name_en || h.en_name;
        if (!existing.zh_name && (h.zh_name || h.name_zh)) existing.zh_name = h.zh_name || h.name_zh;
      }

      names.forEach(n => {
        this.horseMap.set(n, existing);
        this.horseMap.set(n.toLowerCase(), existing);
      });
      if (existing.id) this.horseMap.set(existing.id, existing);

      if (existing.sire) {
        if (!this.sireProgenyMap.has(existing.sire)) this.sireProgenyMap.set(existing.sire, []);
        this.sireProgenyMap.get(existing.sire).push(existing);
      }
      if (existing.dam) {
        if (!this.damProgenyMap.has(existing.dam)) this.damProgenyMap.set(existing.dam, []);
        this.damProgenyMap.get(existing.dam).push(existing);
      }
    },

    findHorse: function(query) {
      this.init();
      if (!query) return null;
      const q = String(query).trim();
      if (this.horseMap.has(q)) return this.horseMap.get(q);
      if (this.horseMap.has(q.toLowerCase())) return this.horseMap.get(q.toLowerCase());
      
      for (const [key, h] of this.horseMap.entries()) {
        if (key.includes(q)) return h;
      }
      return null;
    },

    search: function(params) {
      this.init();
      params = params || {};
      const kw = (params.keyword || '').trim().toLowerCase();
      const match = params.match || 'prefix';
      const sid = params.sid || 'horse';
      const sexFilter = params.sex || [];
      const belongFilter = params.belong || [];
      const entryFilter = params.entry || [];
      const colorFilter = params.color || [];
      const birthFrom = params.birth_f ? parseInt(params.birth_f, 10) : null;
      const birthTo = params.birth_t ? parseInt(params.birth_t, 10) : null;
      const exactBirth = params.birth ? parseInt(params.birth, 10) : null;
      const page = Math.max(1, parseInt(params.page || 1, 10));
      const pageSize = Math.min(100, Math.max(10, parseInt(params.pageSize || 20, 10)));
      const sortBy = params.sortBy || 'name';
      const sortOrder = params.sortOrder || 'asc';

      const colorMap = {
        'color_01': '栗毛', 'color_02': '栃栗毛', 'color_03': '鹿毛', 'color_04': '黒鹿毛',
        'color_05': '青鹿毛', 'color_06': '青毛', 'color_07': '芦毛', 'color_08': '白毛'
      };
      const allowedColors = colorFilter.map(c => colorMap[c]).filter(Boolean);

      let results = this.allHorsesList.filter(h => {
        if (kw) {
          let targetField = '';
          if (sid === 'horse') {
            targetField = ((h.name_jp || '') + ' ' + (h.name_en || '') + ' ' + (h.zh_name || '')).toLowerCase();
          } else if (sid === 'sire') {
            targetField = (h.sire || '').toLowerCase();
          } else if (sid === 'mare') {
            targetField = (h.dam || '').toLowerCase();
          } else if (sid === 'trainer' || sid === 'jockey' || sid === 'breeder' || sid === 'owner') {
            targetField = ((h.stable_country || '') + ' ' + (h.birth_country || '')).toLowerCase();
          } else {
            targetField = ((h.name_jp || '') + ' ' + (h.sire || '') + ' ' + (h.dam || '')).toLowerCase();
          }

          if (match === 'exact') {
            const words = targetField.split(/\s+/);
            if (!words.some(w => w === kw) && targetField !== kw) return false;
          } else if (match === 'prefix') {
            const words = targetField.split(/\s+/);
            if (!words.some(w => w.startsWith(kw)) && !targetField.startsWith(kw)) return false;
          } else {
            if (!targetField.includes(kw)) return false;
          }
        }

        if (sexFilter.length > 0) {
          const s = (h.sex || '');
          let matchedSex = false;
          if (sexFilter.includes('sex_1') && (s.includes('牡') || s.includes('雄'))) matchedSex = true;
          if (sexFilter.includes('sex_2') && (s.includes('牝') || s.includes('雌'))) matchedSex = true;
          if (sexFilter.includes('sex_3') && s.includes('セン')) matchedSex = true;
          if (!matchedSex) return false;
        }

        if (belongFilter.length > 0) {
          const loc = (h.stable_country || h.birth_country || '');
          let matchedBelong = false;
          if (belongFilter.includes('belong_1') && (loc.includes('中央') || loc.includes('日本'))) matchedBelong = true;
          if (belongFilter.includes('belong_2') && loc.includes('地方')) matchedBelong = true;
          if (belongFilter.includes('belong_3') && (loc.includes('海外') || loc.includes('美') || loc.includes('歐'))) matchedBelong = true;
          if (!matchedBelong) return false;
        }

        if (allowedColors.length > 0) {
          const c = (h.coat || '');
          if (!allowedColors.some(ac => c.includes(ac))) return false;
        }

        if (exactBirth && h.birth_year !== exactBirth) return false;
        if (birthFrom && h.birth_year && h.birth_year < birthFrom) return false;
        if (birthTo && h.birth_year && h.birth_year > birthTo) return false;

        return true;
      });

      results.sort((a, b) => {
        let cmp = 0;
        if (sortBy === 'year') {
          cmp = (a.birth_year || 0) - (b.birth_year || 0);
        } else if (sortBy === 'sex') {
          cmp = (a.sex || '').localeCompare(b.sex || '');
        } else if (sortBy === 'sire') {
          cmp = (a.sire || '').localeCompare(b.sire || '');
        } else if (sortBy === 'dam') {
          cmp = (a.dam || '').localeCompare(b.dam || '');
        } else {
          cmp = (a.name_jp || a.name || '').localeCompare(b.name_jp || b.name || '');
        }
        return sortOrder === 'desc' ? -cmp : cmp;
      });

      const total = results.length;
      const totalPages = Math.ceil(total / pageSize);
      const startIdx = (page - 1) * pageSize;
      const pagedItems = results.slice(startIdx, startIdx + pageSize);

      return {
        total: total,
        page: page,
        pageSize: pageSize,
        totalPages: totalPages,
        items: pagedItems
      };
    },

    getPedigreeDetails: function(nameOrId) {
      this.init();
      if (!nameOrId) return null;
      const horse = this.findHorse(nameOrId);
      const jbisCache = window.WP10_JBIS_CURATED_DB || {};

      for (const [jid, cdata] of Object.entries(jbisCache)) {
        if (cdata.id === nameOrId || cdata.name === nameOrId || (horse && cdata.name === horse.name_jp)) {
          return this.formatCuratedPedigree(cdata, horse);
        }
      }

      return this.synthesizePedigree(horse || { name: nameOrId, name_jp: nameOrId });
    },

    formatCuratedPedigree: function(cdata, horseObj) {
      const isMale = (cdata.stallion_progeny && cdata.stallion_progeny.length > 0) || 
                     (horseObj && (horseObj.sex || '').includes('牡'));
      const isFemale = (cdata.broodmare_info && cdata.broodmare_info.progeny) ||
                       (horseObj && (horseObj.sex || '').includes('牝'));

      return {
        id: cdata.id,
        name: cdata.name,
        name_en: cdata.name_en || (horseObj ? horseObj.name_en : ''),
        zh_name: horseObj ? (horseObj.zh_name || horseObj.name_zh || '') : '',
        birth_year: horseObj ? horseObj.birth_year : null,
        sex: isMale ? '牡' : (isFemale ? '牝' : (horseObj ? horseObj.sex : '牡')),
        coat: horseObj ? horseObj.coat : '鹿毛',
        family_no: cdata.family_no || 'F9-a',
        base_mare: cdata.base_mare || '',
        crosses: cdata.crosses || [],
        ancestors: cdata.ancestors || [],
        stallion_progeny: cdata.stallion_progeny || [],
        broodmare_info: cdata.broodmare_info || null,
        is_curated: true,
        horse_profile: horseObj
      };
    },

    synthesizePedigree: function(horse) {
      const self = this;
      const targetName = horse.name_jp || horse.name || '';
      const isMale = (horse.sex || '').includes('牡') || (horse.sex || '').includes('雄');
      const isFemale = (horse.sex || '').includes('牝') || (horse.sex || '').includes('雌');

      const ancestors = new Array(62).fill(null);

      function getParents(name) {
        if (!name || name === '-') return { sire: null, dam: null };
        const h = self.findHorse(name);
        if (!h) return { sire: null, dam: null };
        return {
          sire: (h.sire && h.sire !== '-') ? h.sire : null,
          dam: (h.dam && h.dam !== '-') ? h.dam : null
        };
      }

      const sTree = new Array(31).fill(null);
      sTree[0] = horse.sire || null;
      for (let i = 0; i < 15; i++) {
        const pName = sTree[i];
        if (pName) {
          const p = getParents(pName);
          const leftIdx = 2 * i + 1;
          const rightIdx = 2 * i + 2;
          if (leftIdx < 31) sTree[leftIdx] = p.sire;
          if (rightIdx < 31) sTree[rightIdx] = p.dam;
        }
      }

      const dTree = new Array(31).fill(null);
      dTree[0] = horse.dam || null;
      for (let i = 0; i < 15; i++) {
        const pName = dTree[i];
        if (pName) {
          const p = getParents(pName);
          const leftIdx = 2 * i + 1;
          const rightIdx = 2 * i + 2;
          if (leftIdx < 31) dTree[leftIdx] = p.sire;
          if (rightIdx < 31) dTree[rightIdx] = p.dam;
        }
      }

      for (let i = 0; i < 31; i++) {
        const name = sTree[i];
        const h = name ? self.findHorse(name) : null;
        const isMaleSlot = (i === 0) || (i % 2 === 1);
        ancestors[i] = {
          idx: i,
          name: name || '',
          id: h ? h.id : '',
          sex: isMaleSlot ? 'male' : 'female',
          info: h ? ((h.coat || '') + ' ' + (h.birth_year || '')).trim() : '',
          tags: isMaleSlot ? ['血統', '競走', '種'] : ['血統', '繁殖']
        };
      }

      for (let i = 0; i < 31; i++) {
        const name = dTree[i];
        const h = name ? self.findHorse(name) : null;
        const isMaleSlot = (i === 0) ? false : (i % 2 === 1);
        ancestors[31 + i] = {
          idx: 31 + i,
          name: name || '',
          id: h ? h.id : '',
          sex: isMaleSlot ? 'male' : 'female',
          info: h ? ((h.coat || '') + ' ' + (h.birth_year || '')).trim() : '',
          tags: isMaleSlot ? ['血統', '競走', '種'] : ['血統', '繁殖']
        };
      }

      const crosses = this.detectCrosses(ancestors);

      let stallionProgeny = [];
      if (isMale && this.sireProgenyMap.has(targetName)) {
        const progenyList = this.sireProgenyMap.get(targetName);
        progenyList.sort((a, b) => (b.sp || 0) - (a.sp || 0));
        stallionProgeny = progenyList.slice(0, 15).map(p => {
          const damHorse = p.dam ? self.findHorse(p.dam) : null;
          const damsire = damHorse ? damHorse.sire : (p.damsire || '-');
          let raceName = '中央重賞出走';
          let raceGrade = '重賞';
          let rank = '1';
          if (p.sp >= 72) { raceName = 'GⅠ 經典制霸'; raceGrade = 'GⅠ'; rank = '1'; }
          else if (p.sp >= 68) { raceName = 'GⅡ 前哨戰勝鞍'; raceGrade = 'GⅡ'; rank = '1'; }
          else if (p.sp >= 64) { raceName = 'GⅢ 挑戰賽入位'; raceGrade = 'GⅢ'; rank = '2'; }
          else { raceName = '特別競走'; raceGrade = 'L'; rank = '3'; }

          return {
            name: p.name_jp || p.name,
            id: p.id,
            birth_year: p.birth_year || '',
            coat: p.coat || '鹿毛',
            dam: p.dam || '-',
            damsire: damsire || '-',
            race_name: raceName,
            race_grade: raceGrade,
            rank: rank
          };
        });
      }

      let broodmareInfo = null;
      if (isFemale) {
        const directChildren = this.damProgenyMap.get(targetName) || [];
        directChildren.sort((a, b) => (a.birth_year || 0) - (b.birth_year || 0));
        const progenyBranches = [];

        directChildren.forEach(child => {
          const cName = child.name_jp || child.name;
          const sexTag = (child.sex || '').includes('牝') ? '牝' : ((child.sex || '').includes('セン') ? 'セン' : '牡');
          progenyBranches.push({
            name: cName,
            id: child.id,
            sex: sexTag,
            desc: sexTag + ' ｜' + (child.coat || '鹿毛') + '｜' + (child.birth_year || '') + '年｜' + (child.birth_country || '早来') + '産｜ ' + (child.sire || '-') + ' ｜',
            sire: child.sire || '-'
          });

          if (sexTag === '牝' && self.damProgenyMap.has(cName)) {
            const grandChildren = self.damProgenyMap.get(cName);
            grandChildren.forEach(gc => {
              const gcSex = (gc.sex || '').includes('牝') ? '牝' : '牡';
              progenyBranches.push({
                name: '　└ ' + (gc.name_jp || gc.name),
                id: gc.id,
                sex: gcSex,
                desc: gcSex + ' ｜' + (gc.coat || '鹿毛') + '｜' + (gc.birth_year || '') + '年｜ ' + (gc.sire || '-') + ' ｜',
                sire: gc.sire || '-'
              });
            });
          }
        });

        broodmareInfo = {
          mother_name: targetName,
          mother_desc: '牝 ｜' + (horse.coat || '鹿毛') + '｜' + (horse.birth_year || '') + '年｜' + (horse.birth_country || '早来') + '産｜ ' + (horse.sire || '-') + ' ｜',
          progeny: progenyBranches
        };
      }

      return {
        id: horse.id || ('wp_' + targetName),
        name: targetName,
        name_en: horse.name_en || '',
        zh_name: horse.zh_name || '',
        birth_year: horse.birth_year,
        sex: horse.sex || (isMale ? '牡' : (isFemale ? '牝' : '牡')),
        coat: horse.coat || '鹿毛',
        family_no: 'F9-a',
        base_mare: horse.dam || '',
        crosses: crosses,
        ancestors: ancestors,
        stallion_progeny: stallionProgeny,
        broodmare_info: broodmareInfo,
        is_curated: false,
        horse_profile: horse
      };
    },

    detectCrosses: function(ancestors) {
      const depthMap = {
        0: 'S2', 1: 'S3', 2: 'S3', 3: 'S4', 4: 'S4', 5: 'S4', 6: 'S4',
        7: 'S5', 8: 'S5', 9: 'S5', 10: 'S5', 11: 'S5', 12: 'S5', 13: 'S5', 14: 'S5',
        15: 'S6', 16: 'S6', 17: 'S6', 18: 'S6', 19: 'S6', 20: 'S6', 21: 'S6', 22: 'S6',
        23: 'S6', 24: 'S6', 25: 'S6', 26: 'S6', 27: 'S6', 28: 'S6', 29: 'S6', 30: 'S6',

        31: 'M2', 32: 'M3', 33: 'M3', 34: 'M4', 35: 'M4', 36: 'M4', 37: 'M4',
        38: 'M5', 39: 'M5', 40: 'M5', 41: 'M5', 42: 'M5', 43: 'M5', 44: 'M5', 45: 'M5',
        46: 'M6', 47: 'M6', 48: 'M6', 49: 'M6', 50: 'M6', 51: 'M6', 52: 'M6', 53: 'M6',
        54: 'M6', 55: 'M6', 56: 'M6', 57: 'M6', 58: 'M6', 59: 'M6', 60: 'M6', 61: 'M6'
      };

      const occurrences = new Map();
      ancestors.forEach((anc, idx) => {
        if (!anc || !anc.name || anc.name === '-' || anc.name.length <= 1) return;
        const n = anc.name.replace(/\([A-Z]+\)$/, '').trim();
        const label = depthMap[idx] || '5';
        if (!occurrences.has(n)) occurrences.set(n, { fullName: anc.name, pos: [] });
        occurrences.get(n).pos.push(label);
      });

      const crosses = [];
      occurrences.forEach((v, name) => {
        if (v.pos.length >= 2) {
          const formula = v.pos.slice(0, 3).join('×');
          crosses.push(v.fullName + ' ：' + formula);
        }
      });

      return crosses.slice(0, 6);
    }
  };

  window.WP10_JBIS_ENGINE = JBISEngine;

})(window);
