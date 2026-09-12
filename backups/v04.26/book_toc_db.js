// ============================================================================
// 📖 Winning Post 10 2026 全書書籍式目錄大百科數據庫 (Book Table of Contents DB)
// 包含 10 大卷冊 (Volumes)、全 51 大章節 (Chapters) 以及 160+ 深度小節/專題模組 (Sub-sections)
// ============================================================================

window.BOOK_TOC_DATA = [
  {
    volId: 'vol-1',
    volNum: '第 1 卷',
    volTitle: '秘傳錦囊・開局破局篇',
    volDesc: '新手入門、8大開局劇本年代攻略、御守守護符取得與歷代版本差異',
    icon: 'fa-book-bookmark',
    color: '#38bdf8',
    pillarId: 'pillar-secrets',
    chapters: [
      {
        chapNum: '第 01 章',
        title: '開局劇本年代選拔・初年度52週圖文通關與全年代初期讓渡馬完全指南',
        secId: 'sec-start-guide',
        icon: 'fa-compass',
        subsections: [
          { subNum: '§1.1', title: '8 大歷史年代劇本難易度與特色橫向比較', action: 'jumpToChapter', params: ['pillar-secrets', 'sec-start-guide'] },
          { subNum: '§1.2', title: '初年度 52 週通關完美營運時間表 (1月~12月SOP)', action: 'jumpToChapter', params: ['pillar-secrets', 'sec-start-guide'] },
          { subNum: '§1.3', title: '全年代初期讓渡現役馬・繁殖母馬・特別幼駒精選名冊', action: 'jumpToChapter', params: ['pillar-secrets', 'sec-start-guide'] }
        ]
      },
      {
        chapNum: '第 02 章',
        title: '1968 年最古開局劇本完全攻略 (元祖三強・日美歐持続牝馬全書)',
        secId: 'sec-1968-scenario',
        icon: 'fa-flag-checkered',
        subsections: [
          { subNum: '§2.1', title: '元祖三強 (海セイコー / タケホープ / トウショウボーイ) 爭霸戰略', action: 'jumpToChapter', params: ['pillar-secrets', 'sec-1968-scenario'] },
          { subNum: '§2.2', title: '1968 日美歐持続牝馬引進與初期血統奠基', action: 'jumpToChapter', params: ['pillar-secrets', 'sec-1968-scenario'] }
        ]
      },
      {
        chapNum: '第 03 章',
        title: '按年代史實攻略與 1967~2023 各年代推薦名馬完全指南',
        secId: 'sec-era-horses-guide',
        icon: 'fa-calendar-days',
        subsections: [
          { subNum: '§3.1', title: '8 大歷史時代格局演變與世界名駒興衰史', action: 'jumpToChapter', params: ['pillar-secrets', 'sec-era-horses-guide'] },
          { subNum: '§3.2', title: '1967~2023 全年代性價比推薦名馬總覽', action: 'jumpToChapter', params: ['pillar-secrets', 'sec-era-horses-guide'] }
        ]
      },
      {
        chapNum: '第 04 章',
        title: '守護符 (御守 / お守り) 獲得全圖鑑・兌換日曆與虹札名馬運用戰略',
        secId: 'sec-amulets',
        icon: 'fa-shield-halved',
        subsections: [
          { subNum: '§4.1', title: '全五色御守 (虹・金・銀・銅・綠) 完整取得條件途徑', action: 'jumpToChapter', params: ['pillar-secrets', 'sec-amulets'] },
          { subNum: '§4.2', title: '御守定期升級兌換日曆 (1月4週~4月4週)', action: 'jumpToChapter', params: ['pillar-secrets', 'sec-amulets'] },
          { subNum: '§4.3', title: '虹札/金札歷史神駒投資回報率 (ROI) 優先度排行', action: 'jumpToChapter', params: ['pillar-secrets', 'sec-amulets'] }
        ]
      },
      {
        chapNum: '第 05 章',
        title: '超級巨星名駒 (スーパースターホース) 機制解析與歷代超級馬 (SH) 完全名單',
        secId: 'sec-super-horses',
        icon: 'fa-star',
        subsections: [
          { subNum: '§5.1', title: '超級巨星名駒 (Superstar Horse) 觸發條件與光環加成', action: 'jumpToChapter', params: ['pillar-secrets', 'sec-super-horses'] },
          { subNum: '§5.2', title: '歷代超級馬 (SH) 全 80+ 匹出生年份、能力評級與血統大表', action: 'jumpToChapter', params: ['pillar-secrets', 'sec-super-horses'] }
        ]
      },
      {
        chapNum: '第 06 章',
        title: '+40 爆發力 (爆発力) 滿貫公式與賽務職業小技',
        secId: 'sec-pro-tricks',
        icon: 'fa-bolt',
        subsections: [
          { subNum: '§6.1', title: '+40 爆發力滿貫四大實戰血統樹沙盤模型', action: 'jumpToChapter', params: ['pillar-secrets', 'sec-pro-tricks'] },
          { subNum: '§6.2', title: '馬主賽務神技：一週放牧、調子鎖定與疲勞管理 SOP', action: 'jumpToChapter', params: ['pillar-secrets', 'sec-pro-tricks'] }
        ]
      },
      {
        chapNum: '第 07 章',
        title: '歷代版本演進差異完全剖析 (2023~2026)',
        secId: 'sec-version-diff',
        icon: 'fa-code-compare',
        subsections: [
          { subNum: '§7.1', title: '2023 ➔ 2024 ➔ 2025 ➔ 2026 四代版本核心系統演進橫向對比', action: 'jumpToChapter', params: ['pillar-secrets', 'sec-version-diff'] },
          { subNum: '§7.2', title: '2026 七大全新系統機能（相関圖、幼駒調教、史實賽事）完全解析', action: 'jumpToChapter', params: ['pillar-secrets', 'sec-version-diff'] }
        ]
      }
    ]
  },
  {
    volId: 'vol-2',
    volNum: '第 2 卷',
    volTitle: '血統配種・極限繁育篇',
    volDesc: '配合理論、因子活性化、系統確立與 Dosute 95/74 終極爆發力配合大百科',
    icon: 'fa-dna',
    color: '#a855f7',
    pillarId: 'pillar-breed',
    chapters: [
      {
        chapNum: '第 08 章',
        title: '配合機制・四大指標與爆發力 (爆発力) 抽樣模擬器',
        secId: 'sec-metrics',
        icon: 'fa-sliders',
        subsections: [
          { subNum: '§8.1', title: '爆發力、危險度、活力補完、環境四大指標底層精算', action: 'jumpToChapter', params: ['pillar-breed', 'sec-metrics'] },
          { subNum: '§8.2', title: '配合沙盤即時爆發力抽樣模擬器', action: 'jumpToChapter', params: ['pillar-breed', 'sec-metrics'] }
        ]
      },
      {
        chapNum: '第 09 章',
        title: '全配合理論速查與加成總覽表 (全 39 條目)',
        secId: 'sec-master-table',
        icon: 'fa-table-list',
        subsections: [
          { subNum: '§9.1', title: '全 39 大配合理論成立條件、爆發力加成與危險度速查大表', action: 'jumpToChapter', params: ['pillar-breed', 'sec-master-table'] }
        ]
      },
      {
        chapNum: '第 10 章',
        title: '專屬 4 代血統矩陣圖譜總覽',
        secId: 'sec-diagrams',
        icon: 'fa-sitemap',
        subsections: [
          { subNum: '§10.1', title: '4 代 16 親血統矩陣圖譜導引與活性化節點解讀', action: 'jumpToChapter', params: ['pillar-breed', 'sec-diagrams'] }
        ]
      },
      {
        chapNum: '第 11 章',
        title: '相性配合 (ニックス / Nicks) 與副屬性爆發',
        secId: 'mod-nicks',
        icon: 'fa-handshake',
        subsections: [
          { subNum: '§11.1', title: '單一相性、二次相性、三次相性、四次相性加成精算', action: 'jumpToChapter', params: ['pillar-breed', 'mod-nicks'] }
        ]
      },
      {
        chapNum: '第 12 章',
        title: '近親交配 (Inbreed)、母系近親、全兄妹與異系',
        secId: 'mod-inbreed',
        icon: 'fa-arrows-split-up-and-left',
        subsections: [
          { subNum: '§12.1', title: '近親交配 (3×4, 2×3) 因子繼承與危險度懲罰機制', action: 'jumpToChapter', params: ['pillar-breed', 'mod-inbreed'] },
          { subNum: '§12.2', title: '母系近親、全兄妹配合與異系 Outbreed 加成', action: 'jumpToChapter', params: ['pillar-breed', 'mod-inbreed'] }
        ]
      },
      {
        chapNum: '第 13 章',
        title: '系統交配 (Linebreed / 3×4 / 流行與零細)',
        secId: 'mod-linebreed',
        icon: 'fa-diagram-project',
        subsections: [
          { subNum: '§13.1', title: '系統交配理論、親系統重疊與流行/零細配合效果', action: 'jumpToChapter', params: ['pillar-breed', 'mod-linebreed'] }
        ]
      },
      {
        chapNum: '第 14 章',
        title: '血脈活性化配合 (8親系 / 完全活性)',
        secId: 'mod-activation',
        icon: 'fa-heart-pulse',
        subsections: [
          { subNum: '§14.1', title: '6親系、7親系、8親系血脈活性化成立條件', action: 'jumpToChapter', params: ['pillar-breed', 'mod-activation'] },
          { subNum: '§14.2', title: '8 親完全活性化配合 (+8 爆發力) 實戰配置', action: 'jumpToChapter', params: ['pillar-breed', 'mod-activation'] }
        ]
      },
      {
        chapNum: '第 15 章',
        title: '活力源化・活力補完與隔世遺傳 (Vitality & Generation Gap)',
        secId: 'mod-vitality',
        icon: 'fa-battery-full',
        subsections: [
          { subNum: '§15.1', title: '名種牡馬因子活力源化、母父因子活性化與隔世遺傳機制', action: 'jumpToChapter', params: ['pillar-breed', 'mod-vitality'] }
        ]
      },
      {
        chapNum: '第 16 章',
        title: '雄系活性化與雌系活性化配合 (Line Activation)',
        secId: 'mod-lines',
        icon: 'fa-venus-mars',
        subsections: [
          { subNum: '§16.1', title: '雄系活性化 (零細種公) 與雌系活性化配合加成', action: 'jumpToChapter', params: ['pillar-breed', 'mod-lines'] }
        ]
      },
      {
        chapNum: '第 17 章',
        title: '特性昇華配合與母系融合 (Sublimation & Female Line Fusion)',
        secId: 'mod-traits',
        icon: 'fa-gem',
        subsections: [
          { subNum: '§17.1', title: 'SP 昇華配合 (Lv1~Lv3)、ST 昇華配合與母系融合成立條件', action: 'jumpToChapter', params: ['pillar-breed', 'mod-traits'] }
        ]
      },
      {
        chapNum: '第 18 章',
        title: '特殊名馬配合與彩蛋配合 (全 12 大特殊配合大表)',
        secId: 'mod-special',
        icon: 'fa-wand-magic-sparkles',
        subsections: [
          { subNum: '§18.1', title: '全 12 大史實名馬特殊配合、三冠配合、同系配合對照表', action: 'jumpToChapter', params: ['pillar-breed', 'mod-special'] }
        ]
      },
      {
        chapNum: '第 19 章',
        title: '2024~2026 最新繁育理論 (歷史因子/世界始祖/Drama融合)',
        secId: 'mod-2026new',
        icon: 'fa-crown',
        subsections: [
          { subNum: '§19.1', title: '世界始祖系統 (World Ancestor)、歷史名馬因子連鎖與最新融合理論', action: 'jumpToChapter', params: ['pillar-breed', 'mod-2026new'] }
        ]
      },
      {
        chapNum: '第 20 章',
        title: 'Drama 因子 (ドラマ因子) 全書・活力增強 4 階段與 2026 繁育新理論',
        secId: 'sec-gene-factors',
        icon: 'fa-film',
        subsections: [
          { subNum: '§20.1', title: 'Drama 因子全 15 種形態、激昂效果與活力增強 4 階段精算', action: 'jumpToChapter', params: ['pillar-breed', 'sec-gene-factors'] }
        ]
      },
      {
        chapNum: '第 21 章',
        title: '系統確立與滅亡年表・血統支配率精算機',
        secId: 'sec-systems',
        icon: 'fa-chart-pie',
        subsections: [
          { subNum: '§21.1', title: '15 大巨頭種馬確立時間表與系統確立 5.0% / 2.0% 門檻精算機', action: 'jumpToChapter', params: ['pillar-breed', 'sec-systems'] },
          { subNum: '§21.2', title: '史實悲劇名駒搶救指南 (Danzig 歐洲零細化 SOP)', action: 'jumpToChapter', params: ['pillar-breed', 'sec-systems'] }
        ]
      },
      {
        chapNum: '第 51 章',
        title: 'Winning Post 10 2026 極限配種大師・名牝系確立與全年代系統確立路線圖大百科',
        secId: 'sec-breeding-master-expansion',
        icon: 'fa-fire-flame-curved',
        subsections: [
          { subNum: '§51.1', title: '⚡ Dosute 95 & 74 爆發力極限配合全流程與 4 代傳承樹', action: 'switchBreedingExpModule', params: ['dosute-extreme'] },
          { subNum: '§51.2', title: '👑 6 大傳奇名牝系 (Familia) 確立與名牝傳承大百科', action: 'switchBreedingExpModule', params: ['female-lines'] },
          { subNum: '§51.3', title: '🐴 現代 51 大活躍名種公馬智慧相性與爆發力推薦庫', action: 'switchBreedingExpModule', params: ['sire-matches'] },
          { subNum: '§51.4', title: '📅 8 大年代劇本 40 年系統確立全流程路線圖與 Private 死線', action: 'switchBreedingExpModule', params: ['system-roadmaps'] },
          { subNum: '§51.5', title: '🔬 受胎率暗箱、雙胞胎 ★10 鎖定術與跨國免種付權配種', action: 'switchBreedingExpModule', params: ['fertility-secrets'] }
        ]
      }
    ]
  },
  {
    volId: 'vol-3',
    volNum: '第 3 卷',
    volTitle: '幼駒相馬・誕生事件篇',
    volDesc: '優質幼駒判別、相馬眼評語對照解碼與流星/春雷頂級誕生事件',
    icon: 'fa-horse-head',
    color: '#10b981',
    pillarId: 'pillar-foals',
    chapters: [
      {
        chapNum: '第 22 章',
        title: '優質幼駒四大判別法・相馬心法與幼駒專用史實調教',
        secId: 'sec-potential',
        icon: 'fa-magnifying-glass-chart',
        subsections: [
          { subNum: '§22.1', title: '優質幼駒四大判別法：印記、外貌骨架、牧場長評語與血統力', action: 'jumpToChapter', params: ['pillar-foals', 'sec-potential'] },
          { subNum: '§22.2', title: '幼駒專用史實調教時程表 (1歲9月~11月黃金成長期)', action: 'jumpToChapter', params: ['pillar-foals', 'sec-potential'] }
        ]
      },
      {
        chapNum: '第 23 章',
        title: '0~3 歲幼駒與賽馬評語完全手冊 (日/中/解讀三欄對照)',
        secId: 'sec-horse-comments',
        icon: 'fa-comment-dots',
        subsections: [
          { subNum: '§23.1', title: '0~1 歲誕生至斷奶期評語解碼（SP潜能、健康、精神）', action: 'jumpToChapter', params: ['pillar-foals', 'sec-horse-comments'] },
          { subNum: '§23.2', title: '2~3 歲入廄前至出道調教評語對照（大物/超大物判定）', action: 'jumpToChapter', params: ['pillar-foals', 'sec-horse-comments'] }
        ]
      },
      {
        chapNum: '第 24 章',
        title: '幼駒頂級出生事件 (流星/春雷/天馬等 9 大事件)',
        secId: 'sec-special-events',
        icon: 'fa-meteor',
        subsections: [
          { subNum: '§24.1', title: '全 9 大幼駒誕生史詩事件（流星、春雷、春嵐、天馬等）觸發條件', action: 'jumpToChapter', params: ['pillar-foals', 'sec-special-events'] },
          { subNum: '§24.2', title: '事件保證能力數值門檻與專屬特性加成', action: 'jumpToChapter', params: ['pillar-foals', 'sec-special-events'] }
        ]
      }
    ]
  },
  {
    volId: 'vol-4',
    volNum: '第 4 卷',
    volTitle: '馬匹能力・調教特性篇',
    volDesc: '五大人物數值、223種特性圖鑑、史實調教合練與馬之個性 (ウマソナ)',
    icon: 'fa-shield-halved',
    color: '#f59e0b',
    pillarId: 'pillar-train',
    chapters: [
      {
        chapNum: '第 25 章',
        title: '五大人物與賽馬數值能力完全百科 (競走馬・騎手・調教師・牧場長・子孫結婚知人)',
        secId: 'sec-status-encyclopedia',
        icon: 'fa-id-card',
        subsections: [
          { subNum: '§25.1', title: '競走馬四大顯性數值 (SP/ST/瞬發/根性) 與隱藏暗箱數值', action: 'jumpToChapter', params: ['pillar-train', 'sec-status-encyclopedia'] },
          { subNum: '§25.2', title: '騎手、調教師、牧場長、知人全能力屬性全圖鑑', action: 'jumpToChapter', params: ['pillar-train', 'sec-status-encyclopedia'] }
        ]
      },
      {
        chapNum: '第 26 章',
        title: '基礎能力・四大比賽展開與適應能力機制全書',
        secId: 'sec-skills-traits',
        icon: 'fa-gauge-high',
        subsections: [
          { subNum: '§26.1', title: '四大比賽展開傾向（逃馬ペース、スローペース等）與作戰相剋', action: 'jumpToChapter', params: ['pillar-train', 'sec-skills-traits'] },
          { subNum: '§26.2', title: '競馬場坡度、直路長度與跑法適應能力深度剖析', action: 'jumpToChapter', params: ['pillar-train', 'sec-skills-traits'] }
        ]
      },
      {
        chapNum: '第 27 章',
        title: '特性全書・全 223 種通常・上位進化・日本固有與海外專屬特性完全圖鑑',
        secId: 'sec-traits-master',
        icon: 'fa-sparkles',
        subsections: [
          { subNum: '§27.1', title: '全 223 種特性分類速查（通常、上位進化、固有、海外專屬）', action: 'jumpToChapter', params: ['pillar-train', 'sec-traits-master'] },
          { subNum: '§27.2', title: '上位特性解鎖條件、進化路徑與實戰發動率加成', action: 'jumpToChapter', params: ['pillar-train', 'sec-traits-master'] }
        ]
      },
      {
        chapNum: '第 28 章',
        title: '史實調教・SP 雙馬合練・大成功量表與全 40+ 種調教效果全圖鑑',
        secId: 'sec-historical-train',
        icon: 'fa-dumbbell',
        subsections: [
          { subNum: '§28.1', title: '史實調教全 40+ 種效果、大成功量表加成與消耗疲勞精算', action: 'jumpToChapter', params: ['pillar-train', 'sec-historical-train'] },
          { subNum: '§28.2', title: 'SP 雙馬合練 (併せ馬) 最佳拍檔搭檔組合推薦', action: 'jumpToChapter', params: ['pillar-train', 'sec-historical-train'] }
        ]
      },
      {
        chapNum: '第 29 章',
        title: '馬之個性 (ウマソナ) 全圖鑑・克服進化秘技與 14 大性格分佈矩陣',
        secId: 'sec-umasona',
        icon: 'fa-masks-theater',
        subsections: [
          { subNum: '§29.1', title: '馬之個性 (ウマソナ) 全 71 種效果（正面 17、進化 18、負面 13）', action: 'jumpToChapter', params: ['pillar-train', 'sec-umasona'] },
          { subNum: '§29.2', title: '負面缺陷克服秘技與 14 大性格分佈矩陣', action: 'jumpToChapter', params: ['pillar-train', 'sec-umasona'] }
        ]
      },
      {
        chapNum: '第 30 章',
        title: '2026 名馬相関圖與 4 大關係性 (親友/犬猿/戀仲/強敵) 深度指南',
        secId: 'sec-relations-2026',
        icon: 'fa-diagram-successor',
        subsections: [
          { subNum: '§30.1', title: '4 大名馬關係性（親友、犬猿、戀仲、強敵）觸發條件', action: 'jumpToChapter', params: ['pillar-train', 'sec-relations-2026'] },
          { subNum: '§30.2', title: '關係性對賽事爆發力與退役配種之隱藏加成', action: 'jumpToChapter', params: ['pillar-train', 'sec-relations-2026'] }
        ]
      }
    ]
  },
  {
    volId: 'vol-5',
    volNum: '第 5 卷',
    volTitle: '賽事日程・名場面篇',
    volDesc: '全重賞日程、全球三冠系列賽、競馬場賽道特性與殿堂馬異名',
    icon: 'fa-trophy',
    color: '#ef4444',
    pillarId: 'pillar-races',
    chapters: [
      {
        chapNum: '第 31 章',
        title: '全重賞日程・全球三冠系列賽・G1 頂級攻略與 64 大競馬場特性大百科',
        secId: 'sec-stakes-master',
        icon: 'fa-calendar-check',
        subsections: [
          { subNum: '§31.1', title: '🏅 1. 重賞大表速查 (全 740 場重賞日程)', action: 'jumpToChapter', params: ['pillar-races', 'sec-stakes-master'] },
          { subNum: '§31.2', title: '👑 2. 全球三冠系列 (36 大三冠路線)', action: 'jumpToChapter', params: ['pillar-races', 'sec-stakes-master'] },
          { subNum: '§31.3', title: '🏆 3. G1 頂級賽事勝鞍攻克指南', action: 'jumpToChapter', params: ['pillar-races', 'sec-stakes-master'] },
          { subNum: '§31.4', title: '🏁 4. 競馬場特性庫 (68 場 / 136 賽道幾何特性)', action: 'jumpToChapter', params: ['pillar-races', 'sec-stakes-master'] },
          { subNum: '§31.5', title: '⚡ 5. 賽事展開與適應能力庫 (64 場賽道匹配)', action: 'jumpToChapter', params: ['pillar-races', 'sec-stakes-master'] }
        ]
      },
      {
        chapNum: '第 32 章',
        title: '全球三冠路線與夏季系列賽完全對照',
        secId: 'sec-triple-crowns',
        icon: 'fa-medal',
        subsections: [
          { subNum: '§32.1', title: '世界 10 大三冠系列賽日程與榮譽殿堂矩陣', action: 'jumpToChapter', params: ['pillar-races', 'sec-triple-crowns'] },
          { subNum: '§32.2', title: '全球海外遠征難度與減益 (Debuff) 試算器', action: 'jumpToChapter', params: ['pillar-races', 'sec-triple-crowns'] }
        ]
      },
      {
        chapNum: '第 33 章',
        title: '偶像馬地圖・賽馬熱潮・傳奇特性與顯彰馬',
        secId: 'sec-keiba-boom',
        icon: 'fa-fire',
        subsections: [
          { subNum: '§33.1', title: '引爆賽馬熱潮 (競馬ブーム) 2 大絕對條件與 4 大支持層', action: 'jumpToChapter', params: ['pillar-races', 'sec-keiba-boom'] },
          { subNum: '§33.2', title: '傳奇特性 (Legend 特性) 自訂命名與顯彰馬晉升', action: 'jumpToChapter', params: ['pillar-races', 'sec-keiba-boom'] }
        ]
      },
      {
        chapNum: '第 34 章',
        title: '殿堂馬稱號 (異名)・人氣加成 (Boost) 與獲得條件全圖鑑',
        secId: 'sec-nicknames',
        icon: 'fa-award',
        subsections: [
          { subNum: '§34.1', title: '經典異名稱號・獲得條件與支持層人氣加成', action: 'jumpToChapter', params: ['pillar-races', 'sec-nicknames'] },
          { subNum: '§34.2', title: '殿堂馬專屬異名圖鑑・S+ 屬性極限突破清單', action: 'jumpToChapter', params: ['pillar-races', 'sec-nicknames'] }
        ]
      },
      {
        chapNum: '第 35 章',
        title: '競馬歷史事件 (Historia) 名場面與觸發條件',
        secId: 'sec-historia',
        icon: 'fa-landmark',
        subsections: [
          { subNum: '§35.1', title: '全 24 大跨世紀競馬歷史名場面前置賽事條件與回顧', action: 'jumpToChapter', params: ['pillar-races', 'sec-historia'] }
        ]
      }
    ]
  },
  {
    volId: 'vol-6',
    volNum: '第 6 卷',
    volTitle: '牧場設施・人物經營篇',
    volDesc: '牧場升級規劃、海外分場、人物技能、知人結婚與俱樂部法人化',
    icon: 'fa-house-chimney-window',
    color: '#ec4899',
    pillarId: 'pillar-ranch',
    chapters: [
      {
        chapNum: '第 36 章',
        title: '牧場設施升級與美歐海外分場規劃',
        secId: 'sec-farm-facilities',
        icon: 'fa-warehouse',
        subsections: [
          { subNum: '§36.1', title: '美歐海外分牧場開設條件與完整流程', action: 'jumpToChapter', params: ['pillar-ranch', 'sec-farm-facilities'] },
          { subNum: '§36.2', title: '全 25 大牧場設施圖鑑、佔地面積與「零故障」防禦神技', action: 'jumpToChapter', params: ['pillar-ranch', 'sec-farm-facilities'] }
        ]
      },
      {
        chapNum: '第 37 章',
        title: '騎手・調教師・牧場長 18 大人物技能全書',
        secId: 'sec-personnel',
        icon: 'fa-user-tie',
        subsections: [
          { subNum: '§37.1', title: '全劇本最高峰推薦（5大王牌騎手 ＆ 6大傳奇名伯樂）', action: 'jumpToChapter', params: ['pillar-ranch', 'sec-personnel'] },
          { subNum: '§37.2', title: '40+ 知人好感度 100 速刷指南 ＆ 隱藏特典解鎖', action: 'jumpToChapter', params: ['pillar-ranch', 'sec-personnel'] }
        ]
      },
      {
        chapNum: '第 38 章',
        title: '知人・結婚相手・秘書・牧場長與子孫培育進路全圖鑑',
        secId: 'sec-marriage-secrets',
        icon: 'fa-ring',
        subsections: [
          { subNum: '§38.1', title: '相親結婚對象、秘書與女性/男性知人結婚 3 階段課題', action: 'jumpToChapter', params: ['pillar-ranch', 'sec-marriage-secrets'] },
          { subNum: '§38.2', title: '17 位牧場長數值能力、得意個性與子孫培育進路', action: 'jumpToChapter', params: ['pillar-ranch', 'sec-marriage-secrets'] }
        ]
      },
      {
        chapNum: '第 39 章',
        title: '賽馬俱樂部 (Club) 經營・法人化牧場與會員招募完全指南',
        secId: 'sec-club-management',
        icon: 'fa-building',
        subsections: [
          { subNum: '§39.1', title: '俱樂部法人設立四大絕對門檻與一口馬主招募公式', action: 'jumpToChapter', params: ['pillar-ranch', 'sec-club-management'] },
          { subNum: '§39.2', title: '俱樂部牧場設立、知人入會門檻與百億利潤模型', action: 'jumpToChapter', params: ['pillar-ranch', 'sec-club-management'] }
        ]
      },
      {
        chapNum: '第 40 章',
        title: '傳奇對決 (The Legend Match)・世界百大名駒殿堂排行榜與顯彰馬決戰',
        secId: 'sec-legend-match',
        icon: 'fa-chess-king',
        subsections: [
          { subNum: '§40.1', title: '傳奇對決邀請函最速獲取法與世界 100 傑馬偉業積分', action: 'jumpToChapter', params: ['pillar-ranch', 'sec-legend-match'] },
          { subNum: '§40.2', title: '傳奇對決各大關卡守門 Boss 與應對戰術', action: 'jumpToChapter', params: ['pillar-ranch', 'sec-legend-match'] }
        ]
      }
    ]
  },
  {
    volId: 'vol-7',
    volNum: '第 7 卷',
    volTitle: '史實馬庫・攻略大數據庫',
    volDesc: '1.5萬匹全史實馬、種馬引退年限、繁殖名牝、Gamerch 48 篇深度攻略庫',
    icon: 'fa-database',
    color: '#06b6d4',
    pillarId: 'pillar-db',
    chapters: [
      {
        chapNum: '第 41 章',
        title: '1.5 萬匹全史實馬與 11 大年度推薦速查庫',
        secId: 'sec-horse-db',
        icon: 'fa-horse',
        subsections: [
          { subNum: '§41.1', title: '🐎 1. 史実馬一覧 (全量 1.5 萬匹史實名駒)', action: 'jumpToChapter', params: ['pillar-db', 'sec-horse-db'] },
          { subNum: '§41.2', title: '🇯🇵 2. 日本おすすめ幼駒 (國內年度推薦幼駒)', action: 'jumpToChapter', params: ['pillar-db', 'sec-horse-db'] },
          { subNum: '§41.3', title: '🇪🇺 3. 海外おすすめ幼駒 (美歐頂級幼駒引進)', action: 'jumpToChapter', params: ['pillar-db', 'sec-horse-db'] },
          { subNum: '§41.4', title: '🐴 4. おすすめ繁殖牝馬 (年度黃金繁殖母馬)', action: 'jumpToChapter', params: ['pillar-db', 'sec-horse-db'] },
          { subNum: '§41.5', title: '💰 5. 幼駒セール馬 (拍賣會免札高性價比神駒)', action: 'jumpToChapter', params: ['pillar-db', 'sec-horse-db'] }
        ]
      },
      {
        chapNum: '第 42 章',
        title: '2,898 匹史實種公馬引退年限完全速查庫 (Private 保護期檢索庫)',
        secId: 'sec-sires-retire-db',
        icon: 'fa-hourglass-half',
        subsections: [
          { subNum: '§42.1', title: '2,898 匹史實種牡馬引退年份、所屬地域與 Private 搶救檢索', action: 'jumpToChapter', params: ['pillar-db', 'sec-sires-retire-db'] }
        ]
      },
      {
        chapNum: '第 43 章',
        title: '4,314 匹繁殖專用史實馬全量數據庫 (名種公馬 / 繁殖名雌完全對照大表)',
        secId: 'sec-breeding-only-horses',
        icon: 'fa-venus',
        subsections: [
          { subNum: '§43.1', title: '4,314 匹繁殖專用史實馬馬札等級、血統親系與登場年代', action: 'jumpToChapter', params: ['pillar-db', 'sec-breeding-only-horses'] }
        ]
      },
      {
        chapNum: '第 44 章',
        title: '16,570 匹全史實競走馬完全數據庫 (日本馬 ＋ 海外馬對照大表)',
        secId: 'sec-racehorses-full-db',
        icon: 'fa-list-check',
        subsections: [
          { subNum: '§44.1', title: '16,570 匹日本 ＋ 海外全史實競走馬數值與生涯賽績大表', action: 'jumpToChapter', params: ['pillar-db', 'sec-racehorses-full-db'] }
        ]
      },
      {
        chapNum: '第 45 章',
        title: '全年代 11 大路線年度推薦史實馬完全數據庫 (SP種馬/名牝 ＋ 1966~2022 全年代復刻)',
        secId: 'sec-yearly-recs-db',
        icon: 'fa-calendar-check',
        subsections: [
          { subNum: '§45.1', title: '1966~2022 全 57 年代 11 大路線年度推薦史實馬完全數據庫', action: 'jumpToChapter', params: ['pillar-db', 'sec-yearly-recs-db'] }
        ]
      },
      {
        chapNum: '第 46 章 (A)',
        title: '全年代推薦繁殖母馬・四大管道引進大百科 (國內/海外/10月拍賣/12月年末輸入 1968~2025)',
        secId: 'sec-broodmare-yearly-db',
        icon: 'fa-baby',
        subsections: [
          { subNum: '§46A.1', title: '1968~2025 全年代四大管道（國內/海外/拍賣/年末）繁殖母馬引進庫', action: 'jumpToChapter', params: ['pillar-db', 'sec-broodmare-yearly-db'] }
        ]
      },
      {
        chapNum: '第 47 章 (A)',
        title: 'Winning Post 10 2026 終極進階攻略與暗箱大數據庫 (Gamerch 48 篇全量深度攻略)',
        secId: 'sec-gamerch-master-db',
        icon: 'fa-book-open-reader',
        subsections: [
          { subNum: '§47A.1', title: '🔬 底層暗箱數據 (仔出衰退/活性化/成長度速度修正/壽命公式)', action: 'switchGamerchModule', params: ['hidden-mechanics'] },
          { subNum: '§47A.2', title: '🌎 海外 G1 限定固有特性 (凱旋門/育馬者盃/杜拜/香港國際賽)', action: 'switchGamerchModule', params: ['overseas-traits'] },
          { subNum: '§47A.3', title: '🐴 幼駒相馬評語月份對照 (4月誕生/8月拍賣/11~12月入廄潛力)', action: 'switchGamerchModule', params: ['foal-assessment'] },
          { subNum: '§47A.4', title: '💡 馬主實戰 20 大神級小技完全大百科 (放牧調子/SL/拍賣測謊/海外配種)', action: 'switchGamerchModule', params: ['pro-tricks'] },
          { subNum: '§47A.5', title: '📋 8 大年代初期讓渡馬完全評級庫 (1968~2020 現役/母馬/幼駒評級)', action: 'switchGamerchModule', params: ['transfer-horses'] },
          { subNum: '§47A.6', title: '📅 8 大劇本 1 年目完美開局指南與 2020 任務 (出賽SOP/任務大表)', action: 'switchGamerchModule', params: ['first-year-guide'] },
          { subNum: '§47A.7', title: '🏡 牧場追加設施與最優建造順序 (精神實驗室/裝蹄所/國際廄舍)', action: 'switchGamerchModule', params: ['ranch-facilities'] },
          { subNum: '§47A.8', title: '⚔️ 線上對戰最強馬培育與道具獲取 (每日大會獎勵/最強馬之路卡牌)', action: 'switchGamerchModule', params: ['online-strongest'] },
          { subNum: '§47A.9', title: '👥 知人/牧場長/秘書/幼駒事件大辭典 (好感度/結婚條件/屬性爆發)', action: 'switchGamerchModule', params: ['personnel-events'] },
          { subNum: '§47A.10', title: '💎 全 DLC 性價比評級指南 (五星實用度評級與推薦購買建議)', action: 'switchGamerchModule', params: ['dlc-guide'] }
        ]
      },
      {
        chapNum: '第 46 章 (B)',
        title: '殿堂馬稱號 (異名 / Nicknames) 全量數據庫與獲得條件完全圖鑑',
        secId: 'sec-nicknames-full-db',
        icon: 'fa-tags',
        subsections: [
          { subNum: '§46B.1', title: '殿堂馬異名稱號全量數據庫 (S/A/B/C 全稀有度與獲得條件)', action: 'jumpToChapter', params: ['pillar-db', 'sec-nicknames-full-db'] }
        ]
      },
      {
        chapNum: '第 47 章 (B)',
        title: '年代別推薦史實名駒完全名冊 (1967~2023 全 56 大史實年代・496 匹名駒評級與戰略全書)',
        secId: 'sec-era-horses-recs-handbook',
        icon: 'fa-scroll',
        subsections: [
          { subNum: '§47B.1', title: '1967~2023 全 56 史實年代 496 匹名駒評級與戰略名冊', action: 'jumpToChapter', params: ['pillar-db', 'sec-era-horses-recs-handbook'] }
        ]
      }
    ]
  },
  {
    volId: 'vol-8',
    volNum: '第 8 卷',
    volTitle: '實戰講堂・線上對決篇',
    volDesc: '吹里谷芽愛育成指南、リオン展開講座、線上最強馬之路與電影級過場',
    icon: 'fa-graduation-cap',
    color: '#8b5cf6',
    pillarId: 'pillar-lectures',
    chapters: [
      {
        chapNum: '第 48 章',
        title: '名師實戰講堂 (吹里谷芽愛育成指南 & リオン展開適應性徹底講座)',
        secId: 'sec-official-lectures',
        icon: 'fa-chalkboard-user',
        subsections: [
          { subNum: '§48.1', title: '🍎 1. 愛馬狀態調度指南 (調子管理/疲勞調配/放牧技巧)', action: 'jumpToChapter', params: ['pillar-lectures', 'sec-official-lectures'] },
          { subNum: '§48.2', title: '🏇 2. 賽事路線挑選指南 (距離/馬場/斤量/海外遠征)', action: 'jumpToChapter', params: ['pillar-lectures', 'sec-official-lectures'] },
          { subNum: '§48.3', title: '🧬 3. 繁育頂級幼駒指南 (母馬挑選/配合理論實操)', action: 'jumpToChapter', params: ['pillar-lectures', 'sec-official-lectures'] },
          { subNum: '§48.4', title: '🏁 4. 賽事展開傾向是什麼？(逃/先/差/追與ペース掌握)', action: 'jumpToChapter', params: ['pillar-lectures', 'sec-official-lectures'] },
          { subNum: '§48.5', title: '🌍 5. 適應能力與地域差 (歐洲重馬場/美國泥地/陡坡)', action: 'jumpToChapter', params: ['pillar-lectures', 'sec-official-lectures'] }
        ]
      },
      {
        chapNum: '第 49 章',
        title: '線上模式・最強馬之路 (最強馬ロード) 育成・前哨戰與全國大會對戰完全手冊',
        secId: 'sec-online-strongest',
        icon: 'fa-earth-asia',
        subsections: [
          { subNum: '§49.1', title: '最強馬之路 (最強馬ロード) 育成核心、對抗賽機制與能力繼承', action: 'jumpToChapter', params: ['pillar-lectures', 'sec-online-strongest'] }
        ]
      },
      {
        chapNum: '第 50 章',
        title: '電影級過場名場面 (Cinema Event) 觸發條件與系統便利機能全書',
        secId: 'sec-system-features',
        icon: 'fa-clapperboard',
        subsections: [
          { subNum: '§50.1', title: '電影級過場名場面 (Cinema Event) 觸發條件與名駒對決', action: 'jumpToChapter', params: ['pillar-lectures', 'sec-system-features'] },
          { subNum: '§50.2', title: '系統便利機能：日程自動推進 (Auto-Run) 與智慧篩選', action: 'jumpToChapter', params: ['pillar-lectures', 'sec-system-features'] }
        ]
      }
    ]
  },
  {
    volId: 'vol-9',
    volNum: '第 9 卷',
    volTitle: '幼駒履歷・動態推估篇',
    volDesc: '幼駒成長履歷紀錄庫、動態能力推估表與單匹快速試算神器',
    icon: 'fa-chart-line',
    color: '#14b8a6',
    pillarId: 'pillar-foal-calc',
    chapters: [
      {
        chapNum: '幼駒神器',
        title: '全幼駒成長履歷與能力動態推估表 暨 快速單匹試算器',
        secId: 'sec-foal-calc-db',
        icon: 'fa-calculator',
        subsections: [
          { subNum: '§9.1', title: '🐴 全幼駒成長履歷與能力動態推估表 (多匹幼駒批次管理)', action: 'jumpToChapter', params: ['pillar-foal-calc', 'sec-foal-calc-db'] },
          { subNum: '§9.2', title: '➕ 新增幼駒成長檔案與快速單匹試算', action: 'jumpToChapter', params: ['pillar-foal-calc', 'sec-foal-calc-db'] }
        ]
      }
    ]
  },
  {
    volId: 'vol-10',
    volNum: '第 10 卷',
    volTitle: '實戰記錄・戰績紀錄儀',
    volDesc: '實戰 13 大跑法比賽戰績紀錄儀、橫向即時批次錄入大表',
    icon: 'fa-clipboard-list',
    color: '#6366f1',
    pillarId: 'pillar-tracker',
    chapters: [
      {
        chapNum: '跑法戰記',
        title: '實戰 13 大跑法比賽戰績紀錄儀 (橫向即時批次錄入大表)',
        secId: 'sec-tactics-tracker',
        icon: 'fa-table',
        subsections: [
          { subNum: '§10.1', title: '📊 13 大跑法戰績即時橫向錄入與各賽道作戰勝率分析', action: 'jumpToChapter', params: ['pillar-tracker', 'sec-tactics-tracker'] }
        ]
      }
    ]
  }
];


// ============================================================================
// 📖 Book Table of Contents UI & Navigation Engine (全書典藏目錄引擎)
// ============================================================================

window.openBookTocModal = function() {
    const modal = document.getElementById("chapterModal");
    if (modal) {
        modal.style.display = "flex";
        if (typeof window.renderBookToc === 'function') {
            window.renderBookToc();
        }
        const inp = document.getElementById("bookTocSearchInput");
        if (inp) {
            inp.value = "";
            if (typeof window.filterBookToc === 'function') window.filterBookToc();
            inp.focus();
        }
    }
};

window.openChapterModal = function() {
    window.openBookTocModal();
};

window.closeBookTocModal = function(event) {
    if (event && event.target && event.target.closest('.book-toc-card') && !event.target.classList.contains('modal-close') && !event.target.closest('.modal-close')) {
        return;
    }
    const modal = document.getElementById("chapterModal");
    if (modal) modal.style.display = "none";
};

window.closeChapterModal = function(event) {
    window.closeBookTocModal(event);
};

window.filterBookToc = function() {
    const inp = document.getElementById("bookTocSearchInput");
    const query = inp ? inp.value.trim().toLowerCase() : '';
    
    const volCards = document.querySelectorAll('.book-volume-card');
    let matchCount = 0;
    
    volCards.forEach(volCard => {
        let volHasMatch = false;
        const chapRows = volCard.querySelectorAll('.book-chapter-row');
        
        chapRows.forEach(chapRow => {
            const chapText = (chapRow.getAttribute('data-search-text') || chapRow.textContent).toLowerCase();
            const subItems = chapRow.querySelectorAll('.book-subsection-chip');
            let chapHasMatch = false;
            
            if (!query || chapText.includes(query)) {
                chapHasMatch = true;
            }
            
            subItems.forEach(subChip => {
                const subText = (subChip.getAttribute('data-search-text') || subChip.textContent).toLowerCase();
                if (!query || subText.includes(query) || chapText.includes(query)) {
                    subChip.style.display = 'inline-flex';
                    chapHasMatch = true;
                } else {
                    subChip.style.display = 'none';
                }
            });
            
            if (chapHasMatch) {
                chapRow.style.display = 'block';
                volHasMatch = true;
                matchCount++;
            } else {
                chapRow.style.display = 'none';
            }
        });
        
        const volBody = volCard.querySelector('.book-vol-body');
        const volArrow = volCard.querySelector('.book-vol-arrow');
        
        if (volHasMatch) {
            volCard.style.display = 'block';
            if (volBody) {
                volBody.style.display = 'flex';
                if (volArrow) volArrow.style.transform = 'rotate(180deg)';
            }
        } else {
            volCard.style.display = 'none';
        }
    });
    
    const counterEl = document.getElementById('bookTocMatchCounter');
    if (counterEl) {
        if (query) {
            counterEl.textContent = `找到 ${matchCount} 個匹配項目`;
            counterEl.style.display = 'inline-block';
        } else {
            counterEl.style.display = 'none';
        }
    }
};

window.renderBookToc = function() {
    const container = document.getElementById("bookTocVolumeContainer");
    if (!container || !window.BOOK_TOC_DATA) return;
    
    let html = '';
    
    window.BOOK_TOC_DATA.forEach((vol, vIdx) => {
        let chapHtml = '';
        let totalSubsInVol = 0;
        
        vol.chapters.forEach((chap, cIdx) => {
            totalSubsInVol += (chap.subsections ? chap.subsections.length : 0);
            let subChipsHtml = '';
            
            if (chap.subsections && chap.subsections.length > 0) {
                subChipsHtml = `
                <div class="book-subsections-container">
                    <div class="book-subsections-rail">
                        ${chap.subsections.map(sub => {
                            const actionStr = sub.action || 'jumpToChapter';
                            const paramsStr = JSON.stringify(sub.params || [vol.pillarId, chap.secId]);
                            const searchContent = `${vol.volNum} ${vol.volTitle} ${chap.chapNum} ${chap.title} ${sub.subNum} ${sub.title}`.toLowerCase();
                            return `
                            <button class="book-subsection-chip" 
                                    data-search-text="${searchContent.replace(/"/g, '&quot;')}"
                                    onclick='jumpToSubSection("${vol.pillarId}", "${chap.secId}", "${actionStr}", ${paramsStr})'
                                    title="點擊直達：${sub.title}">
                                <span class="book-sub-num">${sub.subNum}</span>
                                <span class="book-sub-title">${sub.title}</span>
                                <i class="fa-solid fa-arrow-right-long book-sub-arrow"></i>
                            </button>
                            `;
                        }).join('')}
                    </div>
                </div>
                `;
            }
            
            const chapSearchContent = `${vol.volNum} ${vol.volTitle} ${chap.chapNum} ${chap.title}`.toLowerCase();
            
            chapHtml += `
            <div class="book-chapter-row" data-search-text="${chapSearchContent.replace(/"/g, '&quot;')}">
                <div class="book-chapter-header">
                    <div class="book-chap-left" onclick='jumpToSubSection("${vol.pillarId}", "${chap.secId}", "jumpToChapter", ["${vol.pillarId}", "${chap.secId}"])'>
                        <span class="book-chap-badge"><i class="fa-solid ${chap.icon || 'fa-bookmark'}"></i> ${chap.chapNum}</span>
                        <h4 class="book-chap-title">${chap.title}</h4>
                    </div>
                    <div class="book-chap-right">
                        ${chap.subsections && chap.subsections.length ? `<span class="book-subs-count">${chap.subsections.length} 個小節</span>` : ''}
                        <button class="book-chap-jump-btn" onclick='jumpToSubSection("${vol.pillarId}", "${chap.secId}", "jumpToChapter", ["${vol.pillarId}", "${chap.secId}"])' title="直達本章">
                            <span>進入章節</span> <i class="fa-solid fa-angles-right"></i>
                        </button>
                    </div>
                </div>
                ${subChipsHtml}
            </div>
            `;
        });
        
        html += `
        <div class="book-volume-card" id="book-vol-card-${vol.volId}">
            <div class="book-vol-header" onclick="toggleBookVolume('${vol.volId}')" style="border-left-color: ${vol.color || '#38bdf8'};">
                <div class="book-vol-header-left">
                    <span class="book-vol-num" style="background: ${vol.color || '#38bdf8'};">${vol.volNum}</span>
                    <div class="book-vol-meta">
                        <h3 class="book-vol-title"><i class="fa-solid ${vol.icon || 'fa-book'}"></i> ${vol.volTitle}</h3>
                        <p class="book-vol-desc">${vol.volDesc}</p>
                    </div>
                </div>
                <div class="book-vol-header-right">
                    <span class="book-vol-counts">${vol.chapters.length} 大章 / ${totalSubsInVol} 小節</span>
                    <i class="fa-solid fa-chevron-down book-vol-arrow" id="book-vol-arrow-${vol.volId}" style="transform: rotate(180deg);"></i>
                </div>
            </div>
            <div class="book-vol-body" id="book-vol-body-${vol.volId}" style="display: flex;">
                ${chapHtml}
            </div>
        </div>
        `;
    });
    
    container.innerHTML = html;
};

window.toggleBookVolume = function(volId) {
    const el = document.getElementById('book-vol-body-' + volId);
    const arrow = document.getElementById('book-vol-arrow-' + volId);
    if (!el) return;
    if (el.style.display === 'none') {
        el.style.display = 'flex';
        if (arrow) arrow.style.transform = 'rotate(180deg)';
    } else {
        el.style.display = 'none';
        if (arrow) arrow.style.transform = 'rotate(0deg)';
    }
};

window.expandAllBookToc = function() {
    const bodies = document.querySelectorAll('.book-vol-body');
    const arrows = document.querySelectorAll('.book-vol-arrow');
    bodies.forEach(b => b.style.display = 'flex');
    arrows.forEach(a => a.style.transform = 'rotate(180deg)');
};

window.collapseAllBookToc = function() {
    const bodies = document.querySelectorAll('.book-vol-body');
    const arrows = document.querySelectorAll('.book-vol-arrow');
    bodies.forEach(b => b.style.display = 'none');
    arrows.forEach(a => a.style.transform = 'rotate(0deg)');
};

window.jumpToSubSection = function(pillarId, secId, action, params) {
    // 1. Close modal
    const modal = document.getElementById("chapterModal");
    if (modal) modal.style.display = "none";
    
    // 2. Switch main pillar
    if (typeof switchMainPillar === 'function') {
        switchMainPillar(pillarId);
    }
    
    // 3. Execute custom action if specified (e.g. sub-module switch)
    if (action && typeof window[action] === 'function') {
        try {
            if (Array.isArray(params)) {
                window[action](...params);
            } else if (params) {
                window[action](params);
            } else {
                window[action]();
            }
        } catch(err) {
            console.warn("SubSection action error:", err);
        }
    }
    
    // 4. Scroll smoothly to target section
    setTimeout(() => {
        const targetEl = document.getElementById(secId);
        if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            targetEl.classList.remove('sec-highlight-glow');
            void targetEl.offsetWidth;
            targetEl.classList.add('sec-highlight-glow');
            setTimeout(() => targetEl.classList.remove('sec-highlight-glow'), 2500);
        }
    }, 150);
};

// Auto init when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (typeof window.renderBookToc === 'function') window.renderBookToc();
    });
} else {
    setTimeout(() => {
        if (typeof window.renderBookToc === 'function') window.renderBookToc();
    }, 50);
}
