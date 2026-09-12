// ============================================================================
// 📖 Winning Post 10 2026 全書書籍式目錄大百科數據庫 (Book Table of Contents DB)
// 包含 11 大卷冊 (Volumes)、全 55 大章節 (Chapters) 以及 180+ 深度小節/專題模組 (Sub-sections)
// ============================================================================

window.BOOK_TOC_DATA = [
  {
    "volId": "vol-1",
    "volNum": "第 1 卷",
    "volTitle": "秘傳錦囊・開局破局篇",
    "volDesc": "新手入門、8大開局劇本年代攻略、御守守護符取得與歷代版本差異",
    "icon": "fa-book-bookmark",
    "color": "#38bdf8",
    "pillarId": "pillar-secrets",
    "chapters": [
      {
        "chapNum": "第 01 章",
        "title": "開局劇本年代選拔・初年度52週圖文通關與全年代初期讓渡馬完全指南",
        "secId": "sec-start-guide",
        "icon": "fa-compass",
        "subsections": [
          {
            "subNum": "§1.1",
            "title": "8 大歷史年代劇本難易度與特色橫向比較",
            "action": "jumpToChapter",
            "params": [
              "pillar-secrets",
              "sec-start-guide"
            ]
          },
          {
            "subNum": "§1.2",
            "title": "初年度 52 週通關完美營運時間表 (1月~12月SOP)",
            "action": "jumpToChapter",
            "params": [
              "pillar-secrets",
              "sec-start-guide"
            ]
          },
          {
            "subNum": "§1.3",
            "title": "全年代初期讓渡現役馬・繁殖母馬・特別幼駒精選名冊",
            "action": "jumpToChapter",
            "params": [
              "pillar-secrets",
              "sec-start-guide"
            ]
          }
        ]
      },
      {
        "chapNum": "第 02 章",
        "title": "1968 年最古開局劇本完全攻略 (元祖三強・日美歐持続牝馬全書)",
        "secId": "sec-1968-scenario",
        "icon": "fa-flag-checkered",
        "subsections": [
          {
            "subNum": "§2.1",
            "title": "元祖三強 (海セイコー / タケホープ / トウショウボーイ) 爭霸戰略",
            "action": "jumpToChapter",
            "params": [
              "pillar-secrets",
              "sec-1968-scenario"
            ]
          },
          {
            "subNum": "§2.2",
            "title": "1968 日美歐持続牝馬引進與初期血統奠基",
            "action": "jumpToChapter",
            "params": [
              "pillar-secrets",
              "sec-1968-scenario"
            ]
          }
        ]
      },
      {
        "chapNum": "第 03 章",
        "title": "按年代史實攻略與 1967~2023 各年代推薦名馬完全指南",
        "secId": "sec-era-horses-guide",
        "icon": "fa-calendar-days",
        "subsections": [
          {
            "subNum": "§3.1",
            "title": "8 大歷史時代格局演變與世界名駒興衰史",
            "action": "jumpToChapter",
            "params": [
              "pillar-secrets",
              "sec-era-horses-guide"
            ]
          },
          {
            "subNum": "§3.2",
            "title": "1967~2023 全年代性價比推薦名馬總覽",
            "action": "jumpToChapter",
            "params": [
              "pillar-secrets",
              "sec-era-horses-guide"
            ]
          }
        ]
      },
      {
        "chapNum": "第 04 章",
        "title": "守護符 (御守 / お守り) 獲得全圖鑑・兌換日曆與虹札名馬運用戰略",
        "secId": "sec-amulets",
        "icon": "fa-shield-halved",
        "subsections": [
          {
            "subNum": "§4.1",
            "title": "虹・金・銀・銅・綠 5 階守護符獲取條件大百科",
            "action": "jumpToChapter",
            "params": [
              "pillar-secrets",
              "sec-amulets"
            ]
          },
          {
            "subNum": "§4.2",
            "title": "御守定期升級兌換日曆表 (1月4週~4月4週 暫停SOP)",
            "action": "jumpToChapter",
            "params": [
              "pillar-secrets",
              "sec-amulets"
            ]
          },
          {
            "subNum": "§4.3",
            "title": "全年代虹札頂級名馬購買優先級與繁育價值",
            "action": "jumpToChapter",
            "params": [
              "pillar-secrets",
              "sec-amulets"
            ]
          }
        ]
      },
      {
        "chapNum": "第 05 章",
        "title": "超級巨星名駒 (スーパースターホース) 機制解析與歷代超級馬 (SH) 完全名單",
        "secId": "sec-super-horses",
        "icon": "fa-star",
        "subsections": [
          {
            "subNum": "§5.1",
            "title": "巨星名駒 (スーパースターホース) 觸發機制與能力評級",
            "action": "jumpToChapter",
            "params": [
              "pillar-secrets",
              "sec-super-horses"
            ]
          },
          {
            "subNum": "§5.2",
            "title": "歷代超級馬 (SH) 全收錄名單 (1980~2026 架空名駒)",
            "action": "jumpToChapter",
            "params": [
              "pillar-secrets",
              "sec-super-horses"
            ]
          }
        ]
      },
      {
        "chapNum": "第 06 章",
        "title": "+40 爆發力 (爆発力)滿貫公式與賽務職業小技",
        "secId": "sec-pro-tricks",
        "icon": "fa-wand-magic-sparkles",
        "subsections": [
          {
            "subNum": "§6.1",
            "title": "+40 爆發力極限配合 10 大公式滿貫配置",
            "action": "jumpToChapter",
            "params": [
              "pillar-secrets",
              "sec-pro-tricks"
            ]
          },
          {
            "subNum": "§6.2",
            "title": "馬主賽務實戰 10 大職業級暗箱與避坑小技",
            "action": "jumpToChapter",
            "params": [
              "pillar-secrets",
              "sec-pro-tricks"
            ]
          }
        ]
      },
      {
        "chapNum": "第 07 章",
        "title": "歷代版本演進差異完全剖析 (2023~2026)",
        "secId": "sec-version-diff",
        "icon": "fa-code-compare",
        "subsections": [
          {
            "subNum": "§7.1",
            "title": "WP10 系列 (無印 / 2024 / 2025 / 2026) 核心系統差異對照",
            "action": "jumpToChapter",
            "params": [
              "pillar-secrets",
              "sec-version-diff"
            ]
          }
        ]
      }
    ]
  },
  {
    "volId": "vol-2",
    "volNum": "第 2 卷",
    "volTitle": "血統配種・極限繁育篇",
    "volDesc": "配合理論全39條、爆發力精算、系統確立與名牝系傳承大百科",
    "icon": "fa-dna",
    "color": "#f59e0b",
    "pillarId": "pillar-breed",
    "chapters": [
      {
        "chapNum": "第 08 章",
        "title": "配合機制・四大指標與爆發力 (爆発力)抽樣模擬器",
        "secId": "sec-metrics",
        "icon": "fa-sliders",
        "subsections": [
          {
            "subNum": "§8.1",
            "title": "綜合評價・爆發力・危險度・受胎率四大指標精解",
            "action": "jumpToChapter",
            "params": [
              "pillar-breed",
              "sec-metrics"
            ]
          }
        ]
      },
      {
        "chapNum": "第 09 章",
        "title": "全配合理論速查與加成總覽表 (全 39 條目)",
        "secId": "sec-master-table",
        "icon": "fa-table-list",
        "subsections": [
          {
            "subNum": "§9.1",
            "title": "39 大配合理論加成、成立條件與爆發力一覽大表",
            "action": "jumpToChapter",
            "params": [
              "pillar-breed",
              "sec-master-table"
            ]
          }
        ]
      },
      {
        "chapNum": "第 10 章",
        "title": "專屬 4 代血統矩陣圖譜總覽",
        "secId": "sec-diagrams",
        "icon": "fa-sitemap",
        "subsections": [
          {
            "subNum": "§10.1",
            "title": "4 代 16 親系血統矩陣位置與影響權重解析",
            "action": "jumpToChapter",
            "params": [
              "pillar-breed",
              "sec-diagrams"
            ]
          }
        ]
      },
      {
        "chapNum": "第 11 章",
        "title": "相性配合 (ニックス / Nicks) 與副屬性爆發",
        "secId": "mod-nicks",
        "icon": "fa-arrows-split-up-and-left",
        "subsections": [
          {
            "subNum": "§11.1",
            "title": "單相性・雙相性・三重相性・四重相性成立與爆發力精算",
            "action": "jumpToChapter",
            "params": [
              "pillar-breed",
              "mod-nicks"
            ]
          }
        ]
      },
      {
        "chapNum": "第 12 章",
        "title": "近親交配 (Inbreed)、母系近親、全兄妹與異系",
        "secId": "mod-inbreed",
        "icon": "fa-code-branch",
        "subsections": [
          {
            "subNum": "§12.1",
            "title": "血量比例計算 (3×4 18.75% 奇蹟血量) 與危險度消除法",
            "action": "jumpToChapter",
            "params": [
              "pillar-breed",
              "mod-inbreed"
            ]
          }
        ]
      },
      {
        "chapNum": "第 13 章",
        "title": "系統交配 (Linebreed / 3×4 / 流行與零細)",
        "secId": "mod-linebreed",
        "icon": "fa-diagram-project",
        "subsections": [
          {
            "subNum": "§13.1",
            "title": "流行系統與零細系統判定、系統交配爆發力加成",
            "action": "jumpToChapter",
            "params": [
              "pillar-breed",
              "mod-linebreed"
            ]
          }
        ]
      },
      {
        "chapNum": "第 14 章",
        "title": "血脈活性化配合 (8親系 / 完全活性)",
        "secId": "mod-activation",
        "icon": "fa-bolt-lightning",
        "subsections": [
          {
            "subNum": "§14.1",
            "title": "6/7/8 親系血脈活性化與 8 親完全活性化配合",
            "action": "jumpToChapter",
            "params": [
              "pillar-breed",
              "mod-activation"
            ]
          }
        ]
      },
      {
        "chapNum": "第 15 章",
        "title": "活力源化・活力補完與隔世遺傳 (Vitality & Generation Gap)",
        "secId": "mod-vitality",
        "icon": "fa-battery-full",
        "subsections": [
          {
            "subNum": "§15.1",
            "title": "名馬因子・名牝活性化・世代間隔與隔世遺傳機制",
            "action": "jumpToChapter",
            "params": [
              "pillar-breed",
              "mod-vitality"
            ]
          }
        ]
      },
      {
        "chapNum": "第 16 章",
        "title": "雄系活性化與雌系活性化配合 (Line Activation)",
        "secId": "mod-lines",
        "icon": "fa-mars-and-venus",
        "subsections": [
          {
            "subNum": "§16.1",
            "title": "雄系活性化 1~3 階與雌系活性化爆發力加成",
            "action": "jumpToChapter",
            "params": [
              "pillar-breed",
              "mod-lines"
            ]
          }
        ]
      },
      {
        "chapNum": "第 17 章",
        "title": "特性昇華配合與母系融合 (Sublimation & Female Line Fusion)",
        "secId": "mod-traits",
        "icon": "fa-fire-flame-curved",
        "subsections": [
          {
            "subNum": "§17.1",
            "title": "SP/ST 特性昇華配合 1~3 階與母系融合配合",
            "action": "jumpToChapter",
            "params": [
              "pillar-breed",
              "mod-traits"
            ]
          }
        ]
      },
      {
        "chapNum": "第 18 章",
        "title": "特殊名馬配合與彩蛋配合",
        "secId": "mod-special",
        "icon": "fa-gem",
        "subsections": [
          {
            "subNum": "§18.1",
            "title": "三冠配合・同調配合・雷鳴・末腳同系配合全書",
            "action": "jumpToChapter",
            "params": [
              "pillar-breed",
              "mod-special"
            ]
          }
        ]
      },
      {
        "chapNum": "第 19 章",
        "title": "2024~2026 最新繁育理論 (歷史因子/世界始祖/Drama融合)",
        "secId": "mod-2026new",
        "icon": "fa-sparkles",
        "subsections": [
          {
            "subNum": "§19.1",
            "title": "世界始祖確立・歷史因子融合與 2026 最新配合",
            "action": "jumpToChapter",
            "params": [
              "pillar-breed",
              "mod-2026new"
            ]
          }
        ]
      },
      {
        "chapNum": "第 20 章",
        "title": "Drama 因子 (ドラマ因子) 全書・活力增強 4 階段與 2026 繁育新理論",
        "secId": "sec-gene-factors",
        "icon": "fa-film",
        "subsections": [
          {
            "subNum": "§20.1",
            "title": "Drama 因子觸發條件、繼承規律與 4 階段活力加成",
            "action": "jumpToChapter",
            "params": [
              "pillar-breed",
              "sec-gene-factors"
            ]
          }
        ]
      },
      {
        "chapNum": "第 21 章",
        "title": "系統確立與滅亡年表・血統支配率精算機",
        "secId": "sec-systems",
        "icon": "fa-chart-pie",
        "subsections": [
          {
            "subNum": "§21.1",
            "title": "子系統 (日本5% / 世界2%) 與世界系統 (12%) 確立條件",
            "action": "jumpToChapter",
            "params": [
              "pillar-breed",
              "sec-systems"
            ]
          },
          {
            "subNum": "§21.2",
            "title": "系統確立血統支配率即時試算機",
            "action": "jumpToChapter",
            "params": [
              "pillar-breed",
              "sec-systems"
            ]
          }
        ]
      },
      {
        "chapNum": "第 51 章",
        "title": "Winning Post 10 2026 極限配種大師・名牝系確立與全年代系統確立路線圖大百科 (Dosute 爆發力 95 & 74 配合 ＋ 6大傳奇名牝系 ＋ 現代51名種馬智慧相性 ＋ 8大年代確立路線圖)",
        "secId": "sec-breeding-master-expansion",
        "icon": "fa-crown",
        "subsections": [
          {
            "subNum": "§51.1",
            "title": "⚡ Dosute 3周目 爆發力 95 & 74 神級配合全流程 (10大加成/4代傳承/避坑SOP)",
            "action": "jumpToBreedingExp",
            "params": [
              "dosute-extreme"
            ]
          },
          {
            "subNum": "§51.2",
            "title": "👑 6 大傳奇名牝系 (Familia) 確立與名牝傳承大百科 (緋紅/風之星/西沙里奧等)",
            "action": "jumpToBreedingExp",
            "params": [
              "mare-families-6"
            ]
          },
          {
            "subNum": "§51.3",
            "title": "🌟 現代 51 大活躍名種公馬「智慧相性與最高爆發力 (25~45+) 配種推薦庫」",
            "action": "jumpToBreedingExp",
            "params": [
              "modern-sires-51"
            ]
          },
          {
            "subNum": "§51.4",
            "title": "🗺️ 8 大歷史年代劇本 40 年系統確立全流程路線圖 (照抄級 SOP)",
            "action": "jumpToBreedingExp",
            "params": [
              "system-routes-40y"
            ]
          },
          {
            "subNum": "§51.5",
            "title": "🎲 繁殖牝馬受胎率暗箱公式、雙胞胎仔出 ★10 鎖定與跨國零成本配種術",
            "action": "jumpToBreedingExp",
            "params": [
              "hidden-mechanics"
            ]
          }
        ]
      }
    ]
  },
  {
    "volId": "vol-3",
    "volNum": "第 3 卷",
    "volTitle": "幼駒相馬・相馬眼篇",
    "volDesc": "優質幼駒四大判別法、0~3歲評語完全手冊與頂級出生事件",
    "icon": "fa-horse-head",
    "color": "#10b981",
    "pillarId": "pillar-foals",
    "chapters": [
      {
        "chapNum": "第 22 章",
        "title": "優質幼駒四大判別法・相馬心法與幼駒專用史實調教",
        "secId": "sec-potential",
        "icon": "fa-eye",
        "subsections": [
          {
            "subNum": "§22.1",
            "title": "馬體・河童木・美香・秘書四大評語相馬心法",
            "action": "jumpToChapter",
            "params": [
              "pillar-foals",
              "sec-potential"
            ]
          },
          {
            "subNum": "§22.2",
            "title": "幼駒專用史實調教 (離乳後・育成期・入廄前) 加成效果",
            "action": "jumpToChapter",
            "params": [
              "pillar-foals",
              "sec-potential"
            ]
          }
        ]
      },
      {
        "chapNum": "第 23 章",
        "title": "0~3 歲幼駒與賽馬評語完全手冊 (日/中/解讀三欄對照)",
        "secId": "sec-horse-comments",
        "icon": "fa-comments",
        "subsections": [
          {
            "subNum": "§23.1",
            "title": "0 歲當歲馬・1 歲幼駒牧場長評語完全解析",
            "action": "jumpToChapter",
            "params": [
              "pillar-foals",
              "sec-horse-comments"
            ]
          },
          {
            "subNum": "§23.2",
            "title": "2 歲入廄前後調教師評語與潛在能力判定",
            "action": "jumpToChapter",
            "params": [
              "pillar-foals",
              "sec-horse-comments"
            ]
          }
        ]
      },
      {
        "chapNum": "第 24 章",
        "title": "幼駒頂級出生事件 (流星/春雷/天馬等 9 大事件)",
        "secId": "sec-special-events",
        "icon": "fa-meteor",
        "subsections": [
          {
            "subNum": "§24.1",
            "title": "流星・春雷・天馬・一之瀨等 9 大頂級出生事件觸發條件與能力鎖定",
            "action": "jumpToChapter",
            "params": [
              "pillar-foals",
              "sec-special-events"
            ]
          }
        ]
      }
    ]
  },
  {
    "volId": "vol-4",
    "volNum": "第 4 卷",
    "volTitle": "能力個性・調教特性篇",
    "volDesc": "五圍能力、四大展開適應、史實調教全圖鑑、馬之個性與名馬相関圖",
    "icon": "fa-dumbbell",
    "color": "#ec4899",
    "pillarId": "pillar-train",
    "chapters": [
      {
        "chapNum": "第 25 章",
        "title": "五大人物與賽馬數值能力完全百科 (競走馬・騎手・調教師・牧場長・子孫結婚知人)",
        "secId": "sec-status-encyclopedia",
        "icon": "fa-users-gear",
        "subsections": [
          {
            "subNum": "§25.1",
            "title": "競走馬 16 大基礎屬性與隱藏能力機制",
            "action": "jumpToChapter",
            "params": [
              "pillar-train",
              "sec-status-encyclopedia"
            ]
          },
          {
            "subNum": "§25.2",
            "title": "騎手・調教師・牧場長能力評級與育成方針影響",
            "action": "jumpToChapter",
            "params": [
              "pillar-train",
              "sec-status-encyclopedia"
            ]
          },
          {
            "subNum": "§25.3",
            "title": "子孫・結婚對象・知人三大能力與遺傳機制",
            "action": "jumpToChapter",
            "params": [
              "pillar-train",
              "sec-status-encyclopedia"
            ]
          }
        ]
      },
      {
        "chapNum": "第 26 章",
        "title": "基礎能力・四大比賽展開與適應能力機制全書",
        "secId": "sec-skills-traits",
        "icon": "fa-bullseye",
        "subsections": [
          {
            "subNum": "§26.1",
            "title": "瞬發戰・持久戰・消耗戰・綜合戰四大展開適應力解析",
            "action": "jumpToChapter",
            "params": [
              "pillar-train",
              "sec-skills-traits"
            ]
          },
          {
            "subNum": "§26.2",
            "title": "適應能力限界突破 (★10+) 升級與實戰加成",
            "action": "jumpToChapter",
            "params": [
              "pillar-train",
              "sec-skills-traits"
            ]
          }
        ]
      },
      {
        "chapNum": "第 27 章",
        "title": "特性全書・全 223 種通常・上位進化・日本固有與海外專屬特性完全圖鑑",
        "secId": "sec-traits-master",
        "icon": "fa-award",
        "subsections": [
          {
            "subNum": "§27.1",
            "title": "223 種通常・上位進化・海外專屬特性全收錄大表",
            "action": "jumpToChapter",
            "params": [
              "pillar-train",
              "sec-traits-master"
            ]
          }
        ]
      },
      {
        "chapNum": "第 28 章",
        "title": "史實調教・SP 雙馬合練・大成功量表與全 40+ 種調教效果全圖鑑",
        "secId": "sec-historical-train",
        "icon": "fa-stopwatch-20",
        "subsections": [
          {
            "subNum": "§28.1",
            "title": "全 40+ 種史實調教效果、習得特性與冷卻期一覽表",
            "action": "jumpToChapter",
            "params": [
              "pillar-train",
              "sec-historical-train"
            ]
          },
          {
            "subNum": "§28.2",
            "title": "SP 雙馬合練・大成功率加減算公式與實戰 SOP",
            "action": "jumpToChapter",
            "params": [
              "pillar-train",
              "sec-historical-train"
            ]
          }
        ]
      },
      {
        "chapNum": "第 29 章",
        "title": "馬之個性 (ウマソナ) 全圖鑑・克服進化秘技與 14 大性格分佈矩陣",
        "secId": "sec-umasona",
        "icon": "fa-brain",
        "subsections": [
          {
            "subNum": "§29.1",
            "title": "後天個性 (ウマソナ) 獲得條件、正面效果與負面缺陷",
            "action": "jumpToChapter",
            "params": [
              "pillar-train",
              "sec-umasona"
            ]
          },
          {
            "subNum": "§29.2",
            "title": "負面缺陷個性克服秘技與上位進化矩陣",
            "action": "jumpToChapter",
            "params": [
              "pillar-train",
              "sec-umasona"
            ]
          }
        ]
      },
      {
        "chapNum": "第 30 章",
        "title": "2026 名馬相関圖與 4 大關係性 (親友/犬猿/戀仲/強敵) 深度指南",
        "secId": "sec-relations-2026",
        "icon": "fa-heart-circle-bolt",
        "subsections": [
          {
            "subNum": "§30.1",
            "title": "4 大名馬關係性 (親友・犬猿・戀仲・強敵) 觸發條件與加成",
            "action": "jumpToChapter",
            "params": [
              "pillar-train",
              "sec-relations-2026"
            ]
          }
        ]
      }
    ]
  },
  {
    "volId": "vol-5",
    "volNum": "第 5 卷",
    "volTitle": "賽事日程・名揚天下篇",
    "volDesc": "全重賞日程、全球三冠系列賽、64大競馬場特徵與歷史名場面",
    "icon": "fa-trophy",
    "color": "#eab308",
    "pillarId": "pillar-races",
    "chapters": [
      {
        "chapNum": "第 31 章",
        "title": "全重賞日程・全球三冠系列賽・G1 頂級攻略與 64 大競馬場特性大百科",
        "secId": "sec-stakes-master",
        "icon": "fa-flag",
        "subsections": [
          {
            "subNum": "§31.1",
            "title": "日本中央・地方及海外 64 大競馬場直線長度與坡度特徵",
            "action": "jumpToChapter",
            "params": [
              "pillar-races",
              "sec-stakes-master"
            ]
          },
          {
            "subNum": "§31.2",
            "title": "海外遠征 G1 賽程安排與避戰策略",
            "action": "jumpToChapter",
            "params": [
              "pillar-races",
              "sec-stakes-master"
            ]
          }
        ]
      },
      {
        "chapNum": "第 32 章",
        "title": "全球三冠路線與夏季系列賽完全對照",
        "secId": "sec-triple-crowns",
        "icon": "fa-crown",
        "subsections": [
          {
            "subNum": "§32.1",
            "title": "日本經典三冠・雌馬三冠・春古馬三冠・秋古馬三冠路線",
            "action": "jumpToChapter",
            "params": [
              "pillar-races",
              "sec-triple-crowns"
            ]
          },
          {
            "subNum": "§32.2",
            "title": "美歐經典三冠・歐洲三冠路線與獎勵",
            "action": "jumpToChapter",
            "params": [
              "pillar-races",
              "sec-triple-crowns"
            ]
          }
        ]
      },
      {
        "chapNum": "第 33 章",
        "title": "偶像馬地圖・賽馬熱潮・傳奇特性與顯彰馬",
        "secId": "sec-keiba-boom",
        "icon": "fa-fire",
        "subsections": [
          {
            "subNum": "§33.1",
            "title": "偶像馬 (Idol Horse) 地圖與賽馬熱潮 (Keiba Boom) 爆發條件",
            "action": "jumpToChapter",
            "params": [
              "pillar-races",
              "sec-keiba-boom"
            ]
          }
        ]
      },
      {
        "chapNum": "第 34 章",
        "title": "殿堂馬稱號 (異名)・人氣加成 (Boost) 與獲得條件全圖鑑",
        "secId": "sec-nicknames",
        "icon": "fa-medal",
        "subsections": [
          {
            "subNum": "§34.1",
            "title": "80+ 種殿堂馬稱號 (異名) 獲得條件與能力加成",
            "action": "jumpToChapter",
            "params": [
              "pillar-races",
              "sec-nicknames"
            ]
          }
        ]
      },
      {
        "chapNum": "第 35 章",
        "title": "競馬歷史事件 (Historia) 名場面與觸發條件",
        "secId": "sec-historia",
        "icon": "fa-scroll",
        "subsections": [
          {
            "subNum": "§35.1",
            "title": "歷代名場面 Historia 觸發年代與前置要求",
            "action": "jumpToChapter",
            "params": [
              "pillar-races",
              "sec-historia"
            ]
          }
        ]
      }
    ]
  },
  {
    "volId": "vol-6",
    "volNum": "第 6 卷",
    "volTitle": "牧場設施・組織經營篇",
    "volDesc": "牧場設施升級路線、海外分場規劃、知人結婚、俱樂部與傳奇對決",
    "icon": "fa-warehouse",
    "color": "#8b5cf6",
    "pillarId": "pillar-ranch",
    "chapters": [
      {
        "chapNum": "第 36 章",
        "title": "牧場設施升級與美歐海外分場規劃",
        "secId": "sec-farm-facilities",
        "icon": "fa-tents",
        "subsections": [
          {
            "subNum": "§36.1",
            "title": "本場與分場 25 大設施建造優先級與效果大表",
            "action": "jumpToChapter",
            "params": [
              "pillar-ranch",
              "sec-farm-facilities"
            ]
          },
          {
            "subNum": "§36.2",
            "title": "美歐海外分場開設條件與全球佈局 SOP",
            "action": "jumpToChapter",
            "params": [
              "pillar-ranch",
              "sec-farm-facilities"
            ]
          }
        ]
      },
      {
        "chapNum": "第 37 章",
        "title": "騎手・調教師・牧場長 18 大人物技能全書",
        "secId": "sec-personnel",
        "icon": "fa-user-tie",
        "subsections": [
          {
            "subNum": "§37.1",
            "title": "騎手 20 大特性、調教師 20 大特性與牧場長 5 大能力",
            "action": "jumpToChapter",
            "params": [
              "pillar-ranch",
              "sec-personnel"
            ]
          }
        ]
      },
      {
        "chapNum": "第 38 章",
        "title": "知人・結婚相手・秘書・牧場長與子孫培育進路全圖鑑",
        "secId": "sec-marriage-secrets",
        "icon": "fa-ring",
        "subsections": [
          {
            "subNum": "§38.1",
            "title": "全知人友好度提升條件、求婚死線與結婚能力大表",
            "action": "jumpToChapter",
            "params": [
              "pillar-ranch",
              "sec-marriage-secrets"
            ]
          },
          {
            "subNum": "§38.2",
            "title": "子孫培育路線 (騎手・調教師・牧場長・偶像) SOP",
            "action": "jumpToChapter",
            "params": [
              "pillar-ranch",
              "sec-marriage-secrets"
            ]
          }
        ]
      },
      {
        "chapNum": "第 39 章",
        "title": "賽馬俱樂部 (Club) 經營・法人化牧場與會員招募完全指南",
        "secId": "sec-club-management",
        "icon": "fa-handshake",
        "subsections": [
          {
            "subNum": "§39.1",
            "title": "俱樂部設立條件、法人牧場營運與會員數最大化",
            "action": "jumpToChapter",
            "params": [
              "pillar-ranch",
              "sec-club-management"
            ]
          }
        ]
      },
      {
        "chapNum": "第 40 章",
        "title": "傳奇對決 (The Legend Match)・世界百大名駒殿堂排行榜與顯彰馬決戰",
        "secId": "sec-legend-match",
        "icon": "fa-trophy",
        "subsections": [
          {
            "subNum": "§40.1",
            "title": "傳奇對決觸發條件與世界百大名駒排行榜爭霸",
            "action": "jumpToChapter",
            "params": [
              "pillar-ranch",
              "sec-legend-match"
            ]
          }
        ]
      }
    ]
  },
  {
    "volId": "vol-7",
    "volNum": "第 7 卷",
    "volTitle": "史實馬庫・攻略大數據庫",
    "volDesc": "1.5萬匹全史實馬庫、種公馬引退死線、全年代推薦大表與Gamerch深度大百科",
    "icon": "fa-database",
    "color": "#06b6d4",
    "pillarId": "pillar-db",
    "chapters": [
      {
        "chapNum": "第 41 章",
        "title": "1.5 萬匹全史實馬與 11 大年度推薦速查庫",
        "secId": "sec-horse-db",
        "icon": "fa-magnifying-glass",
        "subsections": [
          {
            "subNum": "§41.1",
            "title": "1.5 萬匹史實馬即時檢索主表 (年代/札色/適性/因子)",
            "action": "jumpToChapter",
            "params": [
              "pillar-db",
              "sec-horse-db"
            ]
          }
        ]
      },
      {
        "chapNum": "第 42 章",
        "title": "2,898 匹史實種公馬引退年限完全速查庫 (Private 保護期檢索庫)",
        "secId": "sec-sires-retire-db",
        "icon": "fa-clock",
        "subsections": [
          {
            "subNum": "§42.1",
            "title": "全史實種公馬引退年限與 Private 搶救死線大表",
            "action": "jumpToChapter",
            "params": [
              "pillar-db",
              "sec-sires-retire-db"
            ]
          }
        ]
      },
      {
        "chapNum": "第 43 章",
        "title": "4,314 匹繁殖專用史實馬全量數據庫 (名種公馬 / 繁殖名雌完全對照大表)",
        "secId": "sec-breeding-only-horses",
        "icon": "fa-venus-mars",
        "subsections": [
          {
            "subNum": "§43.1",
            "title": "繁殖專用史實種牡馬與名牝完全對照大表",
            "action": "jumpToChapter",
            "params": [
              "pillar-db",
              "sec-breeding-only-horses"
            ]
          }
        ]
      },
      {
        "chapNum": "第 44 章",
        "title": "16,570 匹全史實競走馬完全數據庫 (日本馬 ＋ 海外馬對照大表)",
        "secId": "sec-racehorses-full-db",
        "icon": "fa-horse",
        "subsections": [
          {
            "subNum": "§44.1",
            "title": "日本國內與美歐海外現役競走馬全量數據庫",
            "action": "jumpToChapter",
            "params": [
              "pillar-db",
              "sec-racehorses-full-db"
            ]
          }
        ]
      },
      {
        "chapNum": "第 45 章",
        "title": "全年代 11 大路線年度推薦史實馬完全數據庫 (SP種馬/名牝 ＋ 1966~2022 全年代復刻)",
        "secId": "sec-yearly-recs-db",
        "icon": "fa-calendar-check",
        "subsections": [
          {
            "subNum": "§45.1",
            "title": "1968~2026 全年代推薦名馬 15 欄大表 (年代晶片速選)",
            "action": "jumpToChapter",
            "params": [
              "pillar-db",
              "sec-yearly-recs-db"
            ]
          }
        ]
      },
      {
        "chapNum": "第 46 章",
        "title": "全年代推薦繁殖母馬・四大管道引進大百科 (國內/海外/10月拍賣/12月年末輸入 1968~2025)",
        "secId": "sec-broodmare-yearly-db",
        "icon": "fa-shield-heart",
        "subsections": [
          {
            "subNum": "§46.1",
            "title": "全年代推薦繁殖母馬庫與引進管道篩選",
            "action": "jumpToChapter",
            "params": [
              "pillar-db",
              "sec-broodmare-yearly-db"
            ]
          }
        ]
      },
      {
        "chapNum": "第 47 章",
        "title": "Winning Post 10 2026 終極進階攻略與暗箱大數據庫 (Gamerch 48 篇全量深度攻略・暗箱判定・初期讓渡馬・神級小技大百科)",
        "secId": "sec-gamerch-master-db",
        "icon": "fa-book-atlas",
        "subsections": [
          {
            "subNum": "§47.1",
            "title": "🎭 遊戲暗箱與隱藏判定機制大百科 (受胎率/史實保護/DLC)",
            "action": "jumpToGamerchModule",
            "params": [
              "mask-data"
            ]
          },
          {
            "subNum": "§47.2",
            "title": "🐎 8 大歷史劇本「初期讓渡馬」完全評估與推薦名冊",
            "action": "jumpToGamerchModule",
            "params": [
              "initial-transfers"
            ]
          },
          {
            "subNum": "§47.3",
            "title": "💡 馬主實戰必備 16 大神級小技與避坑指南 (放牧/調子重置)",
            "action": "jumpToGamerchModule",
            "params": [
              "tips-16"
            ]
          },
          {
            "subNum": "§47.4",
            "title": "🎮 Gamerch 48 篇深度攻略主題直達與索引",
            "action": "jumpToGamerchModule",
            "params": [
              "gamerch-48-index"
            ]
          }
        ]
      },
      {
        "chapNum": "第 48 章",
        "title": "殿堂馬稱號 (異名 / Nicknames) 全量數據庫與獲得條件完全圖鑑",
        "secId": "sec-nicknames-full-db",
        "icon": "fa-award",
        "subsections": [
          {
            "subNum": "§48.1",
            "title": "80+ 種殿堂馬異名即時篩選大表與加成效果",
            "action": "jumpToChapter",
            "params": [
              "pillar-db",
              "sec-nicknames-full-db"
            ]
          }
        ]
      },
      {
        "chapNum": "第 49 章",
        "title": "年代別推薦史實名駒完全名冊 (1967~2023 全 56 大史實年代・496 匹名駒評級與戰略全書)",
        "secId": "sec-era-horses-recs-handbook",
        "icon": "fa-list-check",
        "subsections": [
          {
            "subNum": "§49.1",
            "title": "1967~2023 全 56 大年代史實名駒戰略評級名冊",
            "action": "jumpToChapter",
            "params": [
              "pillar-db",
              "sec-era-horses-recs-handbook"
            ]
          }
        ]
      }
    ]
  },
  {
    "volId": "vol-8",
    "volNum": "第 8 卷",
    "volTitle": "名師講堂・線上對決篇",
    "volDesc": "吹里谷芽愛育成指南、リオン展開適應性講座、線上最強馬與名場面觸發",
    "icon": "fa-chalkboard-user",
    "color": "#a855f7",
    "pillarId": "pillar-lectures",
    "chapters": [
      {
        "chapNum": "第 50 章",
        "title": "名師實戰講堂 (吹里谷芽愛育成指南 & リオン展開適應性徹底講座)",
        "secId": "sec-official-lectures",
        "icon": "fa-graduation-cap",
        "subsections": [
          {
            "subNum": "§50.1",
            "title": "吹里谷芽愛 7 大育成方針與實戰指南",
            "action": "jumpToChapter",
            "params": [
              "pillar-lectures",
              "sec-official-lectures"
            ]
          },
          {
            "subNum": "§50.2",
            "title": "リオン展開適應性講座與大賽佈陣心法",
            "action": "jumpToChapter",
            "params": [
              "pillar-lectures",
              "sec-official-lectures"
            ]
          }
        ]
      },
      {
        "chapNum": "第 51 章",
        "title": "線上模式・最強馬之路 (最強馬ロード) 育成・前哨戰與全國大會對戰完全手冊",
        "secId": "sec-online-strongest",
        "icon": "fa-globe",
        "subsections": [
          {
            "subNum": "§51.1",
            "title": "線上對戰最強馬培育 SOP 與全國大賽制勝策略",
            "action": "jumpToChapter",
            "params": [
              "pillar-lectures",
              "sec-online-strongest"
            ]
          }
        ]
      },
      {
        "chapNum": "第 52 章",
        "title": "電影級過場名場面 (Cinema Event) 觸發條件與系統便利機能全書",
        "secId": "sec-system-features",
        "icon": "fa-clapperboard",
        "subsections": [
          {
            "subNum": "§52.1",
            "title": "電影級名場面 Cinema Event 觸發條件與便利機能清單",
            "action": "jumpToChapter",
            "params": [
              "pillar-lectures",
              "sec-system-features"
            ]
          }
        ]
      }
    ]
  },
  {
    "volId": "vol-9",
    "volNum": "第 9 卷",
    "volTitle": "幼駒履歷・動態成長推估篇",
    "volDesc": "全幼駒成長履歷、SP/Sub五圍成長曲線與成長型即時動態推估",
    "icon": "fa-calculator",
    "color": "#14b8a6",
    "pillarId": "pillar-foal-calc",
    "chapters": [
      {
        "chapNum": "第 53 章",
        "title": "幼駒能力數值成長推估計算器 (SP/Sub/成長型動態預測)",
        "secId": "sec-foal-calc-db",
        "icon": "fa-chart-line",
        "subsections": [
          {
            "subNum": "§53.1",
            "title": "幼駒 SP 數值、八大副能力與成長型即時推估儀",
            "action": "jumpToChapter",
            "params": [
              "pillar-foal-calc",
              "sec-foal-calc-db"
            ]
          }
        ]
      }
    ]
  },
  {
    "volId": "vol-10",
    "volNum": "第 10 卷",
    "volTitle": "實戰跑法・賽事戰績紀錄篇",
    "volDesc": "13大跑法比賽戰績紀錄大表、跑法勝率分析與出賽覆盤",
    "icon": "fa-chart-simple",
    "color": "#f97316",
    "pillarId": "pillar-tracker",
    "chapters": [
      {
        "chapNum": "第 54 章",
        "title": "實戰 13 大跑法比賽戰績紀錄儀 (橫向即時批次錄入大表)",
        "secId": "pillar-tracker",
        "icon": "fa-list-check",
        "subsections": [
          {
            "subNum": "§54.1",
            "title": "比賽戰績橫向即時錄入大表 (跑法/著順/人氣/賽道適性)",
            "action": "jumpToChapter",
            "params": [
              "pillar-tracker",
              "pillar-tracker"
            ]
          }
        ]
      }
    ]
  },
  {
    "volId": "vol-appendix",
    "volNum": "附錄卷",
    "volTitle": "實戰工具・互動計算・全域篩選典藏庫 (Appendix & Interactive Utilities)",
    "volDesc": "集結全站 6 大互動計算器、賽事戰績表、10 大篩選主表與 7 大必備秘籍直達控制台",
    "icon": "fa-toolbox",
    "color": "#f59e0b",
    "pillarId": "pillar-db",
    "chapters": [
      {
        "chapNum": "附錄 A",
        "title": "🧮 核心互動計算器與血統相性試算儀 (6 大工具)",
        "secId": "sec-foal-calc-db",
        "icon": "fa-calculator",
        "subsections": [
          {
            "subNum": "§A.1",
            "title": "🐴 幼駒能力數值成長推估計算器 (SP/Sub/成長型動態預測)",
            "action": "jumpToChapter",
            "params": [
              "pillar-foal-calc",
              "sec-foal-calc-db"
            ]
          },
          {
            "subNum": "§A.2",
            "title": "🧬 配合機制・四大指標與爆發力抽樣模擬器",
            "action": "jumpToChapter",
            "params": [
              "pillar-breed",
              "sec-metrics"
            ]
          },
          {
            "subNum": "§A.3",
            "title": "📊 全配合理論速查與加成精算大表 (39 大理論精算)",
            "action": "jumpToChapter",
            "params": [
              "pillar-breed",
              "sec-master-table"
            ]
          },
          {
            "subNum": "§A.4",
            "title": "⚡ Dosute 95/74 爆發力極限配合試算 (3周目 10 大要素精算)",
            "action": "jumpToBreedingExp",
            "params": [
              "dosute-extreme"
            ]
          },
          {
            "subNum": "§A.5",
            "title": "📈 系統確立血統支配率精算機 (日本5% / 世界12% 實時計算)",
            "action": "jumpToChapter",
            "params": [
              "pillar-breed",
              "sec-systems"
            ]
          },
          {
            "subNum": "§A.6",
            "title": "🌐 JBIS 日本官方原站 5 代血統產駒實時檢索器 (外部資料庫直達)",
            "action": "openJbisWindow",
            "params": []
          }
        ]
      },
      {
        "chapNum": "附錄 B",
        "title": "🏆 賽事戰績紀錄儀與跑法勝率分析表 (3 大工具)",
        "secId": "pillar-tracker",
        "icon": "fa-trophy",
        "subsections": [
          {
            "subNum": "§B.1",
            "title": "📊 實戰 13 大跑法比賽戰績紀錄儀 (橫向即時批次錄入大表)",
            "action": "jumpToChapter",
            "params": [
              "pillar-tracker",
              "pillar-tracker"
            ]
          },
          {
            "subNum": "§B.2",
            "title": "🐎 64 大賽馬場賽道特徵與 13 大跑法適性勝率對照矩陣",
            "action": "jumpToChapter",
            "params": [
              "pillar-races",
              "sec-stakes-master"
            ]
          },
          {
            "subNum": "§B.3",
            "title": "🌍 全球三冠路線與夏季系列賽日程安排表",
            "action": "jumpToChapter",
            "params": [
              "pillar-races",
              "sec-triple-crowns"
            ]
          }
        ]
      },
      {
        "chapNum": "附錄 C",
        "title": "🔍 全域多維度資料篩選控制台 (10 大篩選主表)",
        "secId": "sec-horse-db",
        "icon": "fa-filter",
        "subsections": [
          {
            "subNum": "§C.1",
            "title": "🔎 1.5 萬匹全史實馬庫多維即時檢索主表 (年代/馬札/因子/適性)",
            "action": "jumpToChapter",
            "params": [
              "pillar-db",
              "sec-horse-db"
            ]
          },
          {
            "subNum": "§C.2",
            "title": "📅 1968~2026 全年代史實推薦名馬 15 欄大表 (年代晶片速選)",
            "action": "jumpToChapter",
            "params": [
              "pillar-db",
              "sec-yearly-recs-db"
            ]
          },
          {
            "subNum": "§C.3",
            "title": "🌟 現代 51 大活躍名種公馬配種相性庫 (最高爆發力 25~45+ 篩選)",
            "action": "jumpToBreedingExp",
            "params": [
              "modern-sires-51"
            ]
          },
          {
            "subNum": "§C.4",
            "title": "🎯 史實調教全名錄與馬匹適性即時篩選器 (大成功率與冷卻期)",
            "action": "jumpToChapter",
            "params": [
              "pillar-train",
              "sec-historical-train"
            ]
          },
          {
            "subNum": "§C.5",
            "title": "👑 殿堂馬異名 (稱號) 與能力加成即時篩選表 (80+ 歷史稱號)",
            "action": "jumpToChapter",
            "params": [
              "pillar-db",
              "sec-nicknames-full-db"
            ]
          },
          {
            "subNum": "§C.6",
            "title": "🧠 後天個性 (ウマソナ) 獲得條件與克服除外條件表",
            "action": "jumpToChapter",
            "params": [
              "pillar-train",
              "sec-umasona"
            ]
          },
          {
            "subNum": "§C.7",
            "title": "👥 知人・牧場長・調教師・騎手全圖鑑與結婚對象篩選表",
            "action": "jumpToChapter",
            "params": [
              "pillar-ranch",
              "sec-personnel"
            ]
          },
          {
            "subNum": "§C.8",
            "title": "⏳ 種牡馬引退年限與 Private 搶救死線年表 (1976~2026)",
            "action": "jumpToChapter",
            "params": [
              "pillar-db",
              "sec-sires-retire-db"
            ]
          },
          {
            "subNum": "§C.9",
            "title": "🌸 繁殖牝馬全年代引進推薦庫與可購買年份篩選",
            "action": "jumpToChapter",
            "params": [
              "pillar-db",
              "sec-broodmare-yearly-db"
            ]
          },
          {
            "subNum": "§C.10",
            "title": "⚡ 超級巨星名駒 (SH) 歷代全名單即時速查表",
            "action": "jumpToChapter",
            "params": [
              "pillar-secrets",
              "sec-super-horses"
            ]
          }
        ]
      },
      {
        "chapNum": "附錄 D",
        "title": "🧭 實戰必備神級秘籍與照抄 SOP 速查表 (7 大必備指南)",
        "secId": "sec-pro-tricks",
        "icon": "fa-compass",
        "subsections": [
          {
            "subNum": "§D.1",
            "title": "💡 馬主實戰必備 16 大神級小技完全大百科 (一週放牧/調子重置/避坑)",
            "action": "jumpToGamerchModule",
            "params": [
              "tips-16"
            ]
          },
          {
            "subNum": "§D.2",
            "title": "🗺️ 8 大歷史年代劇本 40 年系統確立全流程路線圖 (照抄級 SOP)",
            "action": "jumpToBreedingExp",
            "params": [
              "system-routes-40y"
            ]
          },
          {
            "subNum": "§D.3",
            "title": "👑 6 大傳奇名牝系 (Familia) 確立與名牝傳承路線圖",
            "action": "jumpToBreedingExp",
            "params": [
              "mare-families-6"
            ]
          },
          {
            "subNum": "§D.4",
            "title": "🎲 受胎率暗箱公式、雙胞胎仔出 ★10 鎖定與跨國零成本配種術",
            "action": "jumpToBreedingExp",
            "params": [
              "hidden-mechanics"
            ]
          },
          {
            "subNum": "§D.5",
            "title": "🛡️ 守護符 (御守 / お守り) 獲得與升級兌換日曆表",
            "action": "jumpToChapter",
            "params": [
              "pillar-secrets",
              "sec-amulets"
            ]
          },
          {
            "subNum": "§D.6",
            "title": "🗓️ 開局初年度 52 週通關完美營運時間表 (1月~12月SOP)",
            "action": "jumpToChapter",
            "params": [
              "pillar-secrets",
              "sec-start-guide"
            ]
          },
          {
            "subNum": "§D.7",
            "title": "🎮 Gamerch 48 篇深度攻略大百科 (四大模組速查)",
            "action": "jumpToChapter",
            "params": [
              "pillar-db",
              "sec-gamerch-master-db"
            ]
          }
        ]
      }
    ]
  }
];

// ============================================================================
// 📖 書本書籍式大目錄 UI 渲染引擎 (Book-Style Table of Contents Engine)
// ============================================================================

window.openBookTocModal = function() {
    const modal = document.getElementById("chapterModal");
    if (modal) {
        modal.style.display = "flex";
        if (typeof window.renderBookToc === 'function') {
            window.renderBookToc();
        }
        const input = document.getElementById("bookTocSearchInput");
        if (input) {
            input.value = "";
            if (typeof window.filterBookToc === 'function') {
                window.filterBookToc();
            }
            if (document.activeElement === input) {
                input.blur();
            }
        }
    }
};

window.openChapterModal = function() {
    window.openBookTocModal();
};

window.closeBookTocModal = function(e) {
    if (!e || e.target.id === "chapterModal" || e.target.classList.contains("modal-close") || e.target.closest(".modal-close")) {
        const modal = document.getElementById("chapterModal");
        if (modal) modal.style.display = "none";
    }
};

window.closeChapterModal = function(e) {
    window.closeBookTocModal(e);
};

window.renderBookToc = function() {
    const container = document.getElementById("bookTocVolumeContainer");
    if (!container || !window.BOOK_TOC_DATA) return;
    
    const searchInput = document.getElementById("bookTocSearchInput");
    const query = (searchInput ? searchInput.value : "").trim().toLowerCase();
    
    let html = "";
    
    window.BOOK_TOC_DATA.forEach((vol, vIdx) => {
        let chapHtml = "";
        let totalSubsInVol = 0;
        
        vol.chapters.forEach((chap, cIdx) => {
            totalSubsInVol += (chap.subsections ? chap.subsections.length : 0);
            let subChipsHtml = "";
            
            if (chap.subsections && chap.subsections.length > 0) {
                subChipsHtml = `
                <div class="book-subsections-container">
                    <div class="book-subsections-rail">
                        ${chap.subsections.map(sub => {
                            const actionStr = sub.action || 'jumpToChapter';
                            const paramsJson = JSON.stringify(sub.params || [vol.pillarId, chap.secId]);
                            const searchContent = `${vol.volNum} ${vol.volTitle} ${chap.chapNum} ${chap.title} ${sub.subNum} ${sub.title}`.toLowerCase();
                            return `
                            <button class="book-subsection-chip" 
                                    data-search-text="${searchContent.replace(/"/g, '&quot;')}"
                                    onclick='jumpToSubSection("${vol.pillarId}", "${chap.secId}", "${actionStr}", ${paramsJson})'
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

window.filterBookToc = function() {
    const input = document.getElementById("bookTocSearchInput");
    const query = input ? input.value.toLowerCase().trim() : "";
    const counter = document.getElementById("bookTocMatchCounter");
    
    const volCards = document.querySelectorAll(".book-volume-card");
    let totalMatches = 0;
    
    if (!query) {
        if (counter) counter.style.display = "none";
        volCards.forEach(vol => {
            vol.style.display = "";
            vol.querySelectorAll(".book-chapter-row").forEach(ch => ch.style.display = "");
            vol.querySelectorAll(".book-subsection-chip").forEach(ch => ch.style.display = "");
        });
        return;
    }
    
    volCards.forEach(vol => {
        let volMatch = false;
        const chapRows = vol.querySelectorAll(".book-chapter-row");
        
        chapRows.forEach(ch => {
            const chText = ch.getAttribute("data-search-text") || "";
            let chHasMatch = chText.includes(query);
            
            const subChips = ch.querySelectorAll(".book-subsection-chip");
            let subHasMatch = false;
            
            subChips.forEach(sub => {
                const subText = sub.getAttribute("data-search-text") || "";
                if (subText.includes(query)) {
                    sub.style.display = "inline-flex";
                    subHasMatch = true;
                    totalMatches++;
                } else {
                    sub.style.display = "none";
                }
            });
            
            if (chHasMatch || subHasMatch) {
                ch.style.display = "";
                volMatch = true;
                if (chHasMatch && !subHasMatch) totalMatches++;
            } else {
                ch.style.display = "none";
            }
        });
        
        if (volMatch) {
            vol.style.display = "";
            const body = vol.querySelector(".book-vol-body");
            const arrow = vol.querySelector(".book-vol-arrow");
            if (body) body.style.display = "flex";
            if (arrow) arrow.style.transform = "rotate(180deg)";
        } else {
            vol.style.display = "none";
        }
    });
    
    if (counter) {
        counter.style.display = "inline-block";
        counter.textContent = `找到 ${totalMatches} 個項目`;
    }
};

window.jumpToSubSection = function(pillarId, secId, action, params) {
    // 1. Close modal
    const modal = document.getElementById("chapterModal");
    if (modal) modal.style.display = "none";
    
    // Determine effective action
    const act = action || 'jumpToChapter';
    
    // Custom action: open JBIS external popup
    if (act === 'openJbisWindow') {
        if (typeof window.openJbisWindow === 'function') {
            window.openJbisWindow();
        } else {
            window.open('jbis_horse.html', '_blank');
        }
        return;
    }
    
    // Custom action: switch Breeding Expansion sub-module
    if (act === 'jumpToBreedingExp') {
        const mod = Array.isArray(params) ? params[0] : (params || 'dosute-extreme');
        if (typeof window.jumpToBreedingExp === 'function') {
            window.jumpToBreedingExp(mod);
        } else {
            if (typeof switchMainPillar === 'function') switchMainPillar('pillar-breed');
            if (typeof switchBreedingExpModule === 'function') switchBreedingExpModule(mod);
        }
        return;
    }
    
    // Custom action: switch Gamerch sub-module
    if (act === 'jumpToGamerchModule') {
        const mod = Array.isArray(params) ? params[0] : (params || 'tips-16');
        if (typeof window.jumpToGamerchModule === 'function') {
            window.jumpToGamerchModule(mod);
        } else {
            if (typeof switchMainPillar === 'function') switchMainPillar('pillar-db');
            if (typeof switchGamerchModule === 'function') switchGamerchModule(mod);
        }
        return;
    }
    
    // Standard target pillar and secId resolution
    let targetPillar = pillarId;
    let targetSec = secId;
    if (Array.isArray(params) && params.length >= 2) {
        targetPillar = params[0];
        targetSec = params[1];
    } else if (Array.isArray(params) && params.length === 1) {
        targetSec = params[0];
    }
    
    // 2. Switch main pillar
    if (targetPillar && typeof switchMainPillar === 'function') {
        switchMainPillar(targetPillar);
    }
    
    // 3. Scroll smoothly to target section with golden glow animation
    setTimeout(() => {
        let targetEl = null;
        if (targetSec) targetEl = document.getElementById(targetSec);
        if (!targetEl && targetPillar) targetEl = document.getElementById(targetPillar);
        if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            targetEl.classList.remove('sec-highlight-glow');
            void targetEl.offsetWidth;
            targetEl.classList.add('sec-highlight-glow');
            setTimeout(() => targetEl.classList.remove('sec-highlight-glow'), 2500);
        }
    }, 200);
};

window.jumpToChapter = function(pillarId, secId) {
    window.jumpToSubSection(pillarId, secId, 'jumpToChapter', [pillarId, secId]);
};

window.openJbisWindow = function() {
    window.open('jbis_horse.html', '_blank');
};

window.jumpToBreedingExp = function(moduleId) {
    if (typeof switchMainPillar === 'function') switchMainPillar('pillar-breed');
    if (typeof switchBreedingExpModule === 'function') switchBreedingExpModule(moduleId);
    const el = document.getElementById('sec-breeding-master-expansion');
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        el.classList.remove('sec-highlight-glow');
        void el.offsetWidth;
        el.classList.add('sec-highlight-glow');
        setTimeout(() => el.classList.remove('sec-highlight-glow'), 2500);
    }
};

window.jumpToGamerchModule = function(moduleId) {
    if (typeof switchMainPillar === 'function') switchMainPillar('pillar-db');
    if (typeof switchGamerchModule === 'function') switchGamerchModule(moduleId);
    const el = document.getElementById('sec-gamerch-master-db');
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        el.classList.remove('sec-highlight-glow');
        void el.offsetWidth;
        el.classList.add('sec-highlight-glow');
        setTimeout(() => el.classList.remove('sec-highlight-glow'), 2500);
    }
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
