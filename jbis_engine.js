// ============================================================================
// JBIS Horse Search & 5-Generation Pedigree Universal Engine (v03.79)
// Dual-Engine: JBIS Authoritative Data Prioritized + Original DB Supplementary Fallback
// Covers all 16,757+ racehorses, 4,314 breeding horses, and historical lineage
// ============================================================================

(function(window) {
  'use strict';

  const JBISEngine = {
    isReady: false,
    horseMap: new Map(),         // variant/name/id -> horse profile
    curatedParentMap: new Map(), // name -> { sire, dam, damsire, source: 'jbis' }
    sireProgenyMap: new Map(),   // sireName -> [horse profiles]
    damProgenyMap: new Map(),    // damName -> [horse profiles]
    allHorsesList: [],

    init: function() {
      if (this.isReady) return;
      console.log('[JBISEngine] Initializing universal horse index (JBIS Priority + Original DB Fallback)...');
      // Curated parents mapping for foreign ancestors (Brilliant Speed family)
      this.curatedParentMap.set('Speed Succeeds', { sire: 'Gone West(USA)', dam: 'Daijin(USA)', source: 'jbis_curated' });
      this.curatedParentMap.set('Speed Succeeds(USA)', { sire: 'Gone West(USA)', dam: 'Daijin(USA)', source: 'jbis_curated' });
      this.curatedParentMap.set('Gone West', { sire: 'Mr. Prospector(USA)', dam: 'Secrettame(USA)', source: 'jbis_curated' });
      this.curatedParentMap.set('Gone West(USA)', { sire: 'Mr. Prospector(USA)', dam: 'Secrettame(USA)', source: 'jbis_curated' });
      this.curatedParentMap.set('Daijin', { sire: 'Deputy Minister(CAN)', dam: 'Passing Mood(CAN)', source: 'jbis_curated' });
      this.curatedParentMap.set('Daijin(USA)', { sire: 'Deputy Minister(CAN)', dam: 'Passing Mood(CAN)', source: 'jbis_curated' });
      this.curatedParentMap.set('Dynaformer', { sire: 'Roberto(USA)', dam: 'Andover Way(USA)', source: 'jbis_curated' });
      this.curatedParentMap.set('Dynaformer(USA)', { sire: 'Roberto(USA)', dam: 'Andover Way(USA)', source: 'jbis_curated' });


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

      // 3. Index Master Lookup Database (cat1: 15,389 horses with deep ancestral ties)
      if (window.MASTER_DB_DATA && Array.isArray(window.MASTER_DB_DATA.cat1)) {
        window.MASTER_DB_DATA.cat1.forEach(m => {
          this.registerHorse(m, 'master_cat1');
        });
      }

      // 4. Index Sires Retire Database (2,898 sires - historical stallions)
      if (window.WP10_SIRES_RETIRE_DATA && Array.isArray(window.WP10_SIRES_RETIRE_DATA.sires)) {
        window.WP10_SIRES_RETIRE_DATA.sires.forEach(s => {
          this.registerHorse(s, 'sires_retire');
        });
      }

      // 5. Index Authoritative Curated JBIS Records (Priority 1)
      if (window.WP10_JBIS_CURATED_DB) {
        for (const [jid, cdata] of Object.entries(window.WP10_JBIS_CURATED_DB)) {
          if (cdata && cdata.name) {
            this.registerHorse({
              id: jid,
              name: cdata.name,
              name_jp: cdata.name_jp || cdata.name,
              name_en: cdata.name_en || '',
              zh_name: cdata.zh_name || cdata.name_zh || '',
              birth_year: cdata.birth_year || null,
              sex: cdata.sex || '牡',
              coat: cdata.coat || '鹿毛',
              sire: cdata.sire || null,
              dam: cdata.dam || null,
              damsire: cdata.damsire || null,
              stable_country: cdata.stable_country || '中央'
            }, 'jbis_curated');
          }
        }
      }
      this.buildCuratedAncestryIndex();

      // 6. Build unique allHorsesList for search
      this.allHorsesList = Array.from(new Set(this.horseMap.values()));
      console.log('[JBISEngine] Universal index ready with ' + this.allHorsesList.length + ' unique horses & ' + this.curatedParentMap.size + ' curated parent links.');
      this.isReady = true;
    },

    toFullWidthKatakana: function(str) {
      if (!str) return '';
      const kanaMap = {
        'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
        'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
        'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
        'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
        'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
        'ｳﾞ': 'ヴ', 'ﾜﾞ': 'ヷ', 'ｦﾞ': 'ヺ',
        'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
        'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹﾞ': 'ケ', 'ｺﾞ': 'コ',
        'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
        'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
        'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
        'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
        'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
        'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ヨ': 'ヨ',
        'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
        'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン',
        'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
        'ｯ': 'ッ', 'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ',
        'ｰ': 'ー', '･': '・'
      };
      const reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
      return str.replace(reg, m => kanaMap[m]);
    },

    getNameVariants: function(name) {
      if (!name || typeof name !== 'string') return [];
      const raw = this.toFullWidthKatakana(name.trim());
      const list = [raw, raw.toLowerCase()];
      // Strip country suffixes: e.g. "Alzao(USA)" -> "Alzao", "トニービン(IRE)" -> "トニービン"
      const clean = raw.replace(/[\(\（][A-Za-z]+[\)\）]$/, '').trim();
      if (clean && clean !== raw) {
        list.push(clean);
        list.push(clean.toLowerCase());
      }
      // Remove spaces, middle dots, and hyphens
      const noSpace = clean.toLowerCase().replace(/[\s\・\-\/]/g, '');
      if (noSpace) list.push(noSpace);

      // Normalize katakana prolonged sound mark (ー)
      const noVowel = clean.replace(/ー+/g, '');
      if (noVowel && noVowel !== clean) {
        list.push(noVowel);
        list.push(noVowel.toLowerCase());
      }
      const noVowelNoSpace = noSpace.replace(/ー+/g, '');
      if (noVowelNoSpace && noVowelNoSpace !== noSpace) {
        list.push(noVowelNoSpace);
      }

      return Array.from(new Set(list));
    },

    buildCuratedAncestryIndex: function() {
      const jbisCache = window.WP10_JBIS_CURATED_DB || {};
      for (const [jid, cdata] of Object.entries(jbisCache)) {
        const ancs = cdata.ancestors || [];
        const byIdx = {};
        ancs.forEach(a => { if (a && a.name) byIdx[a.idx] = a.name; });

        // Horse itself
        if (cdata.name) {
          this.registerCuratedParentPair(cdata.name, byIdx[0], byIdx[31], byIdx[32]);
        }

        // Slot 0..14 (Sire side)
        for (let i = 0; i < 15; i++) {
          const child = byIdx[i];
          const s = byIdx[2 * i + 1];
          const d = byIdx[2 * i + 2];
          if (child && (s || d)) {
            this.registerCuratedParentPair(child, s, d, null);
          }
        }

        // Slot 31..45 (Dam side)
        for (let i = 0; i < 15; i++) {
          const child = byIdx[31 + i];
          const s = byIdx[31 + 2 * i + 1];
          const d = byIdx[31 + 2 * i + 2];
          if (child && (s || d)) {
            this.registerCuratedParentPair(child, s, d, null);
          }
        }
      }
    },

    registerCuratedParentPair: function(childName, sire, dam, damsire) {
      if (!childName) return;
      const cleanS = (sire && sire !== '-' && !sire.includes('主力祖先')) ? sire : null;
      const cleanD = (dam && dam !== '-' && !dam.includes('主力祖先')) ? dam : null;
      const cleanDS = (damsire && damsire !== '-' && !damsire.includes('血統因子')) ? damsire : null;
      if (!cleanS && !cleanD && !cleanDS) return;

      const variants = this.getNameVariants(childName);
      variants.forEach(v => {
        let existing = this.curatedParentMap.get(v);
        if (!existing) {
          this.curatedParentMap.set(v, {
            sire: cleanS,
            dam: cleanD,
            damsire: cleanDS,
            source: 'jbis_curated'
          });
        } else {
          if (!existing.sire && cleanS) existing.sire = cleanS;
          if (!existing.dam && cleanD) existing.dam = cleanD;
          if (!existing.damsire && cleanDS) existing.damsire = cleanDS;
        }
      });
    },

    registerHorse: function(h, source) {
      if (!h) return;
      const names = [h.name, h.name_jp, h.name_en, h.en_name, h.zh_name, h.name_zh].filter(Boolean);
      if (names.length === 0) return;

      const mainName = h.name_jp || h.name || h.name_en;
      let existing = this.findHorse(mainName);
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
          sire: (h.sire && h.sire !== '-' && !h.sire.includes('主力祖先')) ? h.sire : null,
          dam: (h.dam && h.dam !== '-' && !h.dam.includes('主力祖先')) ? h.dam : null,
          damsire: (h.damsire && h.damsire !== '-' && !h.damsire.includes('血統因子')) ? h.damsire : null,
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
        // Supplement missing parent/info fields from supplementary databases
        if (!existing.sire && h.sire && h.sire !== '-' && !h.sire.includes('主力祖先')) existing.sire = h.sire;
        if (!existing.dam && h.dam && h.dam !== '-' && !h.dam.includes('主力祖先')) existing.dam = h.dam;
        if (!existing.damsire && h.damsire && h.damsire !== '-' && !h.damsire.includes('血統因子')) existing.damsire = h.damsire;
        if (!existing.name_en && (h.name_en || h.en_name)) existing.name_en = h.name_en || h.en_name;
        if (!existing.zh_name && (h.zh_name || h.name_zh)) existing.zh_name = h.zh_name || h.name_zh;
      }

      const CURATED_EN_MAP = {
        'ブリリアントベリー': 'Brilliant Very',
        'カンパニー': 'Company',
        'ヒストリカル': 'Historical',
        'レニングラード': 'Leningrad',
        'ディープインパクト': 'Deep Impact',
        'トニービン': 'Tony Bin',
        'サンデーサイレンス': 'Sunday Silence',
        'ノーザンテースト': 'Northern Taste',
        'クラフティワイフ': 'Crafty Wife',
        'キングカメハメハ': 'King Kamehameha',
        'キタサンブラック': 'Kitasan Black',
        'オルフェーヴル': 'Orfevre',
        'ロードカナロア': 'Lord Kanaloa',
        'ジェンティルドンナ': 'Gentildonna',
        'ウオッカ': 'Vodka',
        'ダイワスカーレット': 'Daiwa Scarlet',
        'シンボリルドルフ': 'Symboli Rudolf',
        'オグリキャップ': 'Oguri Cap',
        'メジロマックイーン': 'Mejiro McQueen',
        'トウカイテイオー': 'Tokai Teio',
        'ナリタブライアン': 'Narita Brian',
        'スペシャルウィーク': 'Special Week',
        'グラスワンダー': 'Grass Wonder',
        'エルコンドルパサー': 'El Condor Pasa',
        'テイエムオペラオー': 'T.M. Opera O',
        'アグネスタキオン': 'Agnes Tachyon',
        'ステイゴールド': 'Stay Gold',
        'ハーツクライ': 'Heart\'s Cry',
        'アドマイヤベガ': 'Admire Vega',
        'メイショウサムソン': 'Meisho Samson'
      };
      if (CURATED_EN_MAP[mainName]) {
        existing.name_en = CURATED_EN_MAP[mainName];
        if (!names.includes(existing.name_en)) names.push(existing.name_en);
      }

      // Index across all variants
      const self = this;
      names.forEach(n => {
        const variants = self.getNameVariants(n);
        variants.forEach(v => {
          if (!self.horseMap.has(v)) {
            self.horseMap.set(v, existing);
          }
        });
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
      if (!query) return null;
      const q = String(query).trim();
      const variants = this.getNameVariants(q);
      for (let i = 0; i < variants.length; i++) {
        if (this.horseMap.has(variants[i])) return this.horseMap.get(variants[i]);
      }
      // Fuzzy fallback
      const qLower = q.toLowerCase();
      const qNoVowel = qLower.replace(/ー+/g, '');
      for (let i = 0; i < this.allHorsesList.length; i++) {
        const h = this.allHorsesList[i];
        const hName = (h.name_jp || h.name || '').toLowerCase();
        const hNameNoVowel = hName.replace(/ー+/g, '');
        if (hName === qLower || (qNoVowel && hNameNoVowel === qNoVowel)) return h;
        if (h.name_en && h.name_en.toLowerCase() === qLower) return h;
        if (h.zh_name && (h.zh_name === q || h.zh_name.includes(q))) return h;
      }
      return null;
    },

    // 核心親代解析方法：以 JBIS 為優先，舊有資料庫為輔
    getParents: function(name) {
      if (!name || name === '-' || name === '未詳' || name.includes('主力祖先')) {
        return { sire: null, dam: null, damsire: null, source: null };
      }

      const variants = this.getNameVariants(name);

      // 1. 第一優先 (Priority 1)：檢索 JBIS 官方校訂親代資料庫
      for (let i = 0; i < variants.length; i++) {
        const cp = this.curatedParentMap.get(variants[i]);
        if (cp && (cp.sire || cp.dam)) {
          return {
            sire: cp.sire || null,
            dam: cp.dam || null,
            damsire: cp.damsire || null,
            source: 'jbis_curated'
          };
        }
      }

      // 2. 第二優先 (Priority 2)：檢索大一統馬庫索引
      let h = this.findHorse(name);
      let s = (h && h.sire && h.sire !== '-' && !h.sire.includes('主力祖先')) ? h.sire : null;
      let d = (h && h.dam && h.dam !== '-' && !h.dam.includes('主力祖先')) ? h.dam : null;
      let ds = (h && h.damsire && h.damsire !== '-' && !h.damsire.includes('血統因子')) ? h.damsire : null;

      // 3. 第三優先 (Priority 3 - 舊有資料庫為輔補全)：若仍有缺失，檢索全站全量歷史庫
      if (!s || !d || !ds) {
        // A. 檢索 findPedigreeParents
        if (typeof window.findPedigreeParents === 'function') {
          const fp = window.findPedigreeParents(name);
          if (fp) {
            if (!s && fp.sire && fp.sire !== '-' && !fp.sire.includes('主力祖先')) s = fp.sire;
            if (!d && fp.dam && fp.dam !== '-' && !fp.dam.includes('主力祖先')) d = fp.dam;
            if (!ds && fp.damsire && fp.damsire !== '-' && !fp.damsire.includes('血統因子')) ds = fp.damsire;
          }
        }

        // B. 檢索 getPedigreeLookupMap
        if ((!s || !d || !ds) && typeof window.getPedigreeLookupMap === 'function') {
          const map = window.getPedigreeLookupMap();
          for (let i = 0; i < variants.length; i++) {
            const entry = map[variants[i]];
            if (entry) {
              if (!s && entry.sire && entry.sire !== '-' && !entry.sire.includes('主力祖先')) s = entry.sire;
              if (!d && entry.dam && entry.dam !== '-' && !entry.dam.includes('主力祖先')) d = entry.dam;
              if (!ds && entry.damsire && entry.damsire !== '-' && !entry.damsire.includes('血統因子')) ds = entry.damsire;
              break;
            }
          }
        }
      }

      return {
        sire: s,
        dam: d,
        damsire: ds,
        source: (s || d) ? 'original_db' : null
      };
    },

    search: function(params) {
      this.init();
      params = params || {};
      const kw = (params.keyword || params.kw || '').trim().toLowerCase();
      const match = params.match || params.matchMode || 'prefix';
      const sid = params.sid || params.field || 'horse';
      const sexFilter = params.sex || params.sexes || [];
      const belongFilter = params.belong || params.belongs || [];
      const entryFilter = params.entry || [];
      const colorFilter = params.color || params.colors || [];
      const birthFrom = params.birth_f != null ? parseInt(params.birth_f, 10) : (params.birthFrom != null ? parseInt(params.birthFrom, 10) : null);
      const birthTo = params.birth_t != null ? parseInt(params.birth_t, 10) : (params.birthTo != null ? parseInt(params.birthTo, 10) : null);
      const exactBirth = params.birth ? parseInt(params.birth, 10) : null;
      const page = Math.max(1, parseInt(params.page || 1, 10));
      const pageSize = Math.min(100, Math.max(10, parseInt(params.pageSize || 20, 10)));
      const sortBy = params.sortBy || 'name';
      const sortOrder = params.sortOrder || 'asc';

      const colorMap = {
        'color_01': '栗毛', 'color_02': '栃栗毛', 'color_03': '鹿毛', 'color_04': '黒鹿毛',
        'color_05': '青鹿毛', 'color_06': '青毛', 'color_07': '芦毛', 'color_08': '白毛'
      };
      const allowedColors = colorFilter.map(c => colorMap[c] || c).filter(Boolean);

      const kwNoVowel = kw.replace(/ー+/g, '');
      let results = this.allHorsesList.filter(h => {
        if (kw) {
          let targetField = '';
          if (sid === 'horse' || sid === 'name') {
            targetField = ((h.name_jp || '') + ' ' + (h.name || '') + ' ' + (h.name_en || '') + ' ' + (h.zh_name || '')).toLowerCase();
          } else if (sid === 'sire') {
            targetField = (h.sire || '').toLowerCase();
            if ((h.sex || '').includes('牡') || (h.sex || '').includes('雄')) {
              targetField += ' ' + ((h.name_jp || '') + ' ' + (h.name || '') + ' ' + (h.name_en || '') + ' ' + (h.zh_name || '')).toLowerCase();
            }
          } else if (sid === 'mare' || sid === 'dam') {
            targetField = ((h.dam || '') + ' ' + (h.damsire || '')).toLowerCase();
            if ((h.sex || '').includes('牝') || (h.sex || '').includes('雌')) {
              targetField += ' ' + ((h.name_jp || '') + ' ' + (h.name || '') + ' ' + (h.name_en || '') + ' ' + (h.zh_name || '')).toLowerCase();
            }
          } else if (sid === 'brother') {
            targetField = (h.dam || '').toLowerCase();
          } else if (sid === 'trainer' || sid === 'jockey' || sid === 'breeder' || sid === 'owner') {
            targetField = ((h.stable_country || '') + ' ' + (h.birth_country || '')).toLowerCase();
          } else {
            targetField = ((h.name_jp || '') + ' ' + (h.sire || '') + ' ' + (h.dam || '') + ' ' + (h.name_en || '') + ' ' + (h.zh_name || '')).toLowerCase();
          }

          const targetNoVowel = targetField.replace(/ー+/g, '');

          if (match === 'exact') {
            const words = targetField.split(/\s+/);
            const wordsNoVowel = targetNoVowel.split(/\s+/);
            const isMatch = words.some(w => w === kw) || targetField === kw ||
                            (kwNoVowel && (wordsNoVowel.some(w => w === kwNoVowel) || targetNoVowel === kwNoVowel));
            if (!isMatch) return false;
          } else if (match === 'prefix') {
            const words = targetField.split(/\s+/);
            const wordsNoVowel = targetNoVowel.split(/\s+/);
            const isMatch = words.some(w => w.startsWith(kw)) || targetField.startsWith(kw) || targetField.includes(kw) ||
                            (kwNoVowel && (wordsNoVowel.some(w => w.startsWith(kwNoVowel)) || targetNoVowel.includes(kwNoVowel)));
            if (!isMatch) return false;
          } else {
            if (!targetField.includes(kw) && !(kwNoVowel && targetNoVowel.includes(kwNoVowel))) return false;
          }
        }

        if (sexFilter.length > 0) {
          const s = (h.sex || '');
          let matchedSex = false;
          if ((sexFilter.includes('sex_1') || sexFilter.includes('牡')) && (s.includes('牡') || s.includes('雄'))) matchedSex = true;
          if ((sexFilter.includes('sex_2') || sexFilter.includes('牝')) && (s.includes('牝') || s.includes('雌'))) matchedSex = true;
          if ((sexFilter.includes('sex_3') || sexFilter.includes('セン')) && s.includes('セン')) matchedSex = true;
          if (!matchedSex) return false;
        }

        if (belongFilter.length > 0) {
          const loc = (h.stable_country || h.birth_country || '');
          let matchedBelong = false;
          if ((belongFilter.includes('belong_1') || belongFilter.includes('中央')) && (loc.includes('中央') || loc.includes('日本'))) matchedBelong = true;
          if ((belongFilter.includes('belong_2') || belongFilter.includes('地方')) && loc.includes('地方')) matchedBelong = true;
          if ((belongFilter.includes('belong_3') || belongFilter.includes('海外')) && (loc.includes('海外') || loc.includes('美') || loc.includes('歐') || loc.includes('愛') || loc.includes('英') || loc.includes('法'))) matchedBelong = true;
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
        // Priority 1: Exact target horse match
        if (kw) {
          const aName = (a.name_jp || a.name || '').toLowerCase();
          const bName = (b.name_jp || b.name || '').toLowerCase();
          const aMatch = (aName === kw || (kwNoVowel && aName.replace(/ー+/g, '') === kwNoVowel) || (a.name_en && a.name_en.toLowerCase() === kw));
          const bMatch = (bName === kw || (kwNoVowel && bName.replace(/ー+/g, '') === kwNoVowel) || (b.name_en && b.name_en.toLowerCase() === kw));
          if (aMatch && !bMatch) return -1;
          if (!aMatch && bMatch) return 1;
        }

        let cmp = 0;
        if (sortBy === 'year') {
          cmp = (b.birth_year || 0) - (a.birth_year || 0); // Newest first
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

      const cleanQ = String(nameOrId).replace(/\(.*?\)/g, '').trim().toLowerCase();
      for (const [jid, cdata] of Object.entries(jbisCache)) {
        const cNameClean = (cdata.name || '').replace(/\(.*?\)/g, '').trim().toLowerCase();
        const cJpClean = (cdata.name_jp || '').replace(/\(.*?\)/g, '').trim();
        const cZhClean = (cdata.name_zh || '').trim();
        const cEnClean = (cdata.name_en || '').replace(/\(.*?\)/g, '').trim().toLowerCase();

        if (
          cdata.id === nameOrId ||
          cdata.name === nameOrId ||
          cNameClean === cleanQ ||
          cEnClean === cleanQ ||
          (cJpClean && (cJpClean === nameOrId || cJpClean === cleanQ)) ||
          (cZhClean && (cZhClean === nameOrId || cZhClean === cleanQ)) ||
          (horse && (
            cdata.name === horse.name_jp ||
            cJpClean === (horse.name_jp || '') ||
            cNameClean === (horse.name_en || '').toLowerCase() ||
            cEnClean === (horse.name_en || '').toLowerCase() ||
            cdata.id === horse.id
          ))
        ) {
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

      const rawAncestors = cdata.ancestors || [];
      const ancestors = new Array(62).fill(null);

      rawAncestors.forEach(a => {
        if (a && typeof a.idx === 'number' && a.idx < 62) {
          ancestors[a.idx] = {
            idx: a.idx,
            name: a.name || '',
            id: a.id || '',
            sex: a.sex || ((a.idx === 0 || a.idx % 2 === 1) ? 'male' : 'female'),
            info: a.info || '',
            tags: a.tags || ['血統'],
            source: 'jbis'
          };
        }
      });

      // 舊有資料庫輔助補全：若官方校訂資料中有空缺節點，自動由舊庫遞迴補齊
      const self = this;
      for (let i = 0; i < 15; i++) {
        const child = ancestors[i];
        if (child && child.name && child.name !== '-') {
          const sIdx = 2 * i + 1;
          const dIdx = 2 * i + 2;
          if (!ancestors[sIdx] || !ancestors[sIdx].name || ancestors[sIdx].name === '-') {
            const p = self.getParents(child.name);
            if (p.sire) {
              const h = self.findHorse(p.sire);
              ancestors[sIdx] = {
                idx: sIdx,
                name: p.sire,
                id: h ? h.id : '',
                sex: 'male',
                info: h ? ((h.coat || '') + ' ' + (h.birth_year || '')).trim() : '',
                tags: ['血統', '舊庫補全'],
                source: 'original_db'
              };
            }
          }
          if (!ancestors[dIdx] || !ancestors[dIdx].name || ancestors[dIdx].name === '-') {
            const p = self.getParents(child.name);
            if (p.dam) {
              const h = self.findHorse(p.dam);
              ancestors[dIdx] = {
                idx: dIdx,
                name: p.dam,
                id: h ? h.id : '',
                sex: 'female',
                info: h ? ((h.coat || '') + ' ' + (h.birth_year || '')).trim() : '',
                tags: ['血統', '舊庫補全'],
                source: 'original_db'
              };
            }
          }
        }
      }

      for (let i = 0; i < 15; i++) {
        const child = ancestors[31 + i];
        if (child && child.name && child.name !== '-') {
          const sIdx = 31 + 2 * i + 1;
          const dIdx = 31 + 2 * i + 2;
          if (!ancestors[sIdx] || !ancestors[sIdx].name || ancestors[sIdx].name === '-') {
            const p = self.getParents(child.name);
            if (p.sire) {
              const h = self.findHorse(p.sire);
              ancestors[sIdx] = {
                idx: sIdx,
                name: p.sire,
                id: h ? h.id : '',
                sex: 'male',
                info: h ? ((h.coat || '') + ' ' + (h.birth_year || '')).trim() : '',
                tags: ['血統', '舊庫補全'],
                source: 'original_db'
              };
            }
          }
          if (!ancestors[dIdx] || !ancestors[dIdx].name || ancestors[dIdx].name === '-') {
            const p = self.getParents(child.name);
            if (p.dam) {
              const h = self.findHorse(p.dam);
              ancestors[dIdx] = {
                idx: dIdx,
                name: p.dam,
                id: h ? h.id : '',
                sex: 'female',
                info: h ? ((h.coat || '') + ' ' + (h.birth_year || '')).trim() : '',
                tags: ['血統', '舊庫補全'],
                source: 'original_db'
              };
            }
          }
        }
      }

      return Object.assign({
        id: cdata.id,
        name: cdata.name,
        name_en: cdata.name_en || (horseObj ? horseObj.name_en : ''),
        zh_name: cdata.name_zh || (horseObj ? (horseObj.zh_name || horseObj.name_zh || '') : ''),
        birth_year: cdata.birth_year || (horseObj ? horseObj.birth_year : null),
        birth_date: cdata.birth_date || '',
        death_date: cdata.death_date || '',
        sex: cdata.sex || (isMale ? '牡' : (isFemale ? '牝' : (horseObj ? horseObj.sex : '牡'))),
        coat: cdata.coat || (horseObj ? horseObj.coat : '鹿毛'),
        birth_country: cdata.birth_country || (horseObj ? horseObj.birth_country : ''),
        stable_country: cdata.stable_country || (horseObj ? horseObj.stable_country : ''),
        country_code: cdata.country_code || '',
        prof_reg: cdata.prof_reg || (isMale ? '種牡馬' : '繁殖'),
        prof_breed: cdata.prof_breed || 'サラ',
        prof_owner: cdata.prof_owner || (horseObj ? horseObj.owner : ''),
        prof_breeder: cdata.prof_breeder || (horseObj ? horseObj.breeder : ''),
        prof_trainer: cdata.prof_trainer || (horseObj ? horseObj.trainer : ''),
        prof_record: cdata.prof_record || '',
        prof_prize: cdata.prof_prize || '',
        annual_type: cdata.annual_type || '',
        annual_records: cdata.annual_records || null,
        major_races: cdata.major_races || null,
        overseas_races: cdata.overseas_races || null,
        major_footer: cdata.major_footer || '',
        races: cdata.races || null,
        family_no: cdata.family_no || 'F9-a',
        base_mare: cdata.base_mare || '',
        crosses: (cdata.crosses && cdata.crosses.length > 0) ? cdata.crosses : this.detectCrosses(ancestors),
        ancestors: ancestors,
        stallion_progeny: cdata.stallion_progeny || [],
        broodmare_info: cdata.broodmare_info || null,
        is_curated: true,
        horse_profile: horseObj
      }, cdata, { ancestors: ancestors });
    },

    synthesizePedigree: function(horse) {
      const self = this;
      const targetName = horse.name_jp || horse.name || '';
      const isMale = (horse.sex || '').includes('牡') || (horse.sex || '').includes('雄');
      const isFemale = (horse.sex || '').includes('牝') || (horse.sex || '').includes('雌');

      const ancestors = new Array(62).fill(null);

      const sTree = new Array(31).fill(null);
      sTree[0] = horse.sire || null;

      // 若本馬父系為空，嘗試由解析器取得父馬
      if (!sTree[0]) {
        const p0 = self.getParents(targetName);
        if (p0.sire) sTree[0] = p0.sire;
      }

      for (let i = 0; i < 15; i++) {
        const pName = sTree[i];
        if (pName) {
          const p = self.getParents(pName);
          const leftIdx = 2 * i + 1;
          const rightIdx = 2 * i + 2;
          if (leftIdx < 31 && !sTree[leftIdx] && p.sire) sTree[leftIdx] = p.sire;
          if (rightIdx < 31 && !sTree[rightIdx] && p.dam) sTree[rightIdx] = p.dam;
        }
      }

      const dTree = new Array(31).fill(null);
      dTree[0] = horse.dam || null;

      // 若本馬母系為空，嘗試由解析器取得母馬
      if (!dTree[0]) {
        const p0 = self.getParents(targetName);
        if (p0.dam) dTree[0] = p0.dam;
      }

      // 母父 (damsire) 優先注入 Slot 1 (31+1 = 32)
      if (horse.damsire && horse.damsire !== '-' && !horse.damsire.includes('血統因子')) {
        dTree[1] = horse.damsire;
      } else {
        const p0 = self.getParents(targetName);
        if (p0.damsire) dTree[1] = p0.damsire;
      }

      for (let i = 0; i < 15; i++) {
        const pName = dTree[i];
        if (pName) {
          const p = self.getParents(pName);
          const leftIdx = 2 * i + 1;
          const rightIdx = 2 * i + 2;
          if (leftIdx < 31 && !dTree[leftIdx] && p.sire) dTree[leftIdx] = p.sire;
          if (rightIdx < 31 && !dTree[rightIdx] && p.dam) dTree[rightIdx] = p.dam;
        }
      }

      // 組合 62 祖先陣列
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
          tags: isMaleSlot ? ['血統', '競走', '種'] : ['血統', '繁殖'],
          source: (h && h.source === 'jbis_curated') ? 'jbis' : 'original_db'
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
          tags: isMaleSlot ? ['血統', '競走', '種'] : ['血統', '繁殖'],
          source: (h && h.source === 'jbis_curated') ? 'jbis' : 'original_db'
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

      // 檢索 Family No（舊有資料庫或父系/母系標註）
      let familyNo = horse.family_no || (horse.dam_line ? horse.dam_line.replace('系', '族') : 'F9-a');
      if (!familyNo || familyNo === '-') familyNo = 'F9-a';

      return {
        id: horse.id || ('wp_' + targetName),
        name: targetName,
        name_en: horse.name_en || horse.en_name || '',
        zh_name: horse.zh_name || horse.name_zh || '',
        birth_year: horse.birth_year || horse.year || null,
        birth_date: horse.birth_date || (horse.birth_year ? (horse.birth_year + '年') : ''),
        death_date: horse.death_date || '',
        sex: isMale ? '牡' : (isFemale ? '牝' : (horse.sex || '牡')),
        coat: horse.coat || '鹿毛',
        birth_country: horse.birth_country || (horse.region === '海外' ? '海外' : '日本'),
        stable_country: horse.stable_country || (horse.region === '海外' ? '海外' : '中央'),
        country_code: horse.country_code || (horse.region === '海外' ? 'USA' : 'JPN'),
        prof_reg: isMale ? (horse.region === '海外' ? '繁殖' : '種牡馬') : '繁殖',
        prof_breed: 'サラ',
        prof_owner: horse.owner || '',
        prof_breeder: horse.breeder || '',
        prof_trainer: horse.trainer || (horse.region === '海外' ? '[海外]' : ''),
        prof_record: horse.prof_record || '',
        prof_prize: horse.prof_prize || '',
        annual_type: horse.annual_type || (horse.region === '海外' ? 'overseas' : 'domestic'),
        annual_records: horse.annual_records || null,
        major_races: horse.major_races || null,
        overseas_races: horse.overseas_races || null,
        major_footer: horse.major_footer || '',
        races: horse.races || null,
        family_no: familyNo,
        base_mare: horse.base_mare || (horse.dam_line || ''),
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
        const label = depthMap[idx];
        if (!label) return;

        if (!occurrences.has(n)) {
          occurrences.set(n, { fullName: anc.name, pos: [], depths: [] });
        }
        const item = occurrences.get(n);
        item.pos.push(label);
        const depthNum = parseInt(label.slice(1), 10);
        item.depths.push(depthNum);
      });

      const crosses = [];
      const rateMap = {
        '2x2': '25.00%', '2x3': '18.75%', '3x2': '18.75%', '3x3': '12.50%',
        '3x4': '9.38%', '4x3': '9.38%', '4x4': '6.25%', '4x5': '4.69%',
        '5x4': '4.69%', '5x5': '3.13%'
      };

      occurrences.forEach((v, name) => {
        if (v.pos.length >= 2) {
          const sSide = v.pos.filter(p => p.startsWith('S')).map(p => p.slice(1));
          const mSide = v.pos.filter(p => p.startsWith('M')).map(p => p.slice(1));
          if (sSide.length > 0 && mSide.length > 0) {
            const minS = Math.min(...sSide.map(Number));
            const minM = Math.min(...mSide.map(Number));
            const crossKey = `${minS}x${minM}`;
            const crossFormula = `${minS} x ${minM}`;
            const rate = rateMap[crossKey] || `${(1 / Math.pow(2, minS) + 1 / Math.pow(2, minM)) * 100}%`;
            crosses.push({
              name: v.fullName,
              cross: crossFormula,
              rate: rate
            });
          }
        }
      });

      return crosses.slice(0, 8);
    }
  };

  window.WP10_JBIS_ENGINE = JBISEngine;

})(window);
