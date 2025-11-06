import type { MapCalculatorBpContent } from "./types";

const faq = [
  {
    question: "最快的 MAP 估算方法是什么？",
    answer:
      "使用心算技巧：MAP ≈ 舒张压 +（脉压 ÷ 3）。以 120/80 为例，脉压为 40，除以 3（≈13）后加到舒张压（80 + 13 = 93 mmHg）。",
  },
  {
    question: "MAP 比血压更重要吗？",
    answer:
      "两者回答的临床问题不同。MAP 反映器官灌注压，而收缩压 / 舒张压用于高血压诊断与心脏负荷评估。在重症场景中，MAP 往往是优先指标。",
  },
  {
    question: "自动血压计的读数能直接用于 MAP 计算吗？",
    answer:
      "可以。大多数示波式血压计精度可靠，有些设备会直接显示 MAP。若设备没有显示，可将收缩压与舒张压输入此计算器获取 MAP 与解读。",
  },
  {
    question: "脓毒症管理时该看 MAP 还是收缩压？",
    answer:
      "以 MAP 为准。《生存脓毒症运动》指南建议维持 MAP ≥65 mmHg，因为它比单看收缩压更能反映器官灌注。",
  },
  {
    question: "如果换算出的 MAP 与临床表现不符怎么办？",
    answer:
      "先确认血压测量是否准确，再核对输入数值。如结果与病情不符，可重新手动测量；若仍存在差异，考虑置入动脉导管。",
  },
  {
    question: "不同人群的 MAP 目标是否不同？",
    answer:
      "是的。长期高血压的老年人通常需要 MAP 70-85 mmHg；年轻成年患者多能耐受 60-65 mmHg；创伤性脑损伤常要求 80-110 mmHg；卒中流程可能采用宽容性高血压。",
  },
] as const;

const mapInterpretationTable = [
  {
    bp: "120/80 mmHg",
    formula: "(120 + 160) ÷ 3",
    map: "93 mmHg",
    interpretation: "✅ 正常 — 灌注理想",
    tone: "positive",
  },
  {
    bp: "110/70 mmHg",
    formula: "(110 + 140) ÷ 3",
    map: "83 mmHg",
    interpretation: "✅ 充足灌注",
    tone: "positive",
  },
  {
    bp: "100/60 mmHg",
    formula: "(100 + 120) ÷ 3",
    map: "73 mmHg",
    interpretation: "⚠️ 偏低正常 — 密切监测",
    tone: "warning",
  },
  {
    bp: "90/60 mmHg",
    formula: "(90 + 120) ÷ 3",
    map: "70 mmHg",
    interpretation: "⚠️ 临界值 — 评估灌注",
    tone: "warning",
  },
  {
    bp: "90/50 mmHg",
    formula: "(90 + 100) ÷ 3",
    map: "63 mmHg",
    interpretation: "🔴 低于脓毒症目标 — 立即处理",
    tone: "critical",
  },
  {
    bp: "80/50 mmHg",
    formula: "(80 + 100) ÷ 3",
    map: "60 mmHg",
    interpretation: "🔴 危急阈值 — 立即升级治疗",
    tone: "critical",
  },
  {
    bp: "130/80 mmHg",
    formula: "(130 + 160) ÷ 3",
    map: "97 mmHg",
    interpretation: "✅ 正常偏高 — 可接受",
    tone: "positive",
  },
  {
    bp: "140/90 mmHg",
    formula: "(140 + 180) ÷ 3",
    map: "107 mmHg",
    interpretation: "🟠 升高 — 2 级高血压",
    tone: "warning",
  },
  {
    bp: "150/95 mmHg",
    formula: "(150 + 190) ÷ 3",
    map: "113 mmHg",
    interpretation: "🟠 偏高 — 心血管风险",
    tone: "warning",
  },
  {
    bp: "160/100 mmHg",
    formula: "(160 + 200) ÷ 3",
    map: "120 mmHg",
    interpretation: "🔴 极高 — 需紧急评估",
    tone: "critical",
  },
  {
    bp: "180/110 mmHg",
    formula: "(180 + 220) ÷ 3",
    map: "133 mmHg",
    interpretation: "🔴 高血压急症风险",
    tone: "critical",
  },
] as const;

const contextCards = [
  {
    heading: "重症监护（ICU / CCU）",
    items: [
      { label: "MAP <65 mmHg：", body: "通常需要干预（补液 / 升压药）" },
      { label: "MAP 65-80 mmHg：", body: "多数 ICU 患者的目标范围" },
      { label: "MAP >100 mmHg：", body: "评估是否存在高血压或升压药剂量过高" },
    ],
  },
  {
    heading: "急诊科",
    items: [
      { label: "MAP <60 mmHg：", body: "启动休克评估流程" },
      { label: "MAP 60-70 mmHg：", body: "监测趋势与灌注指标" },
      { label: "MAP >130 mmHg：", body: "考虑高血压急症评估" },
    ],
  },
  {
    heading: "手术间",
    items: [
      { label: "MAP <65 mmHg：", body: "评估麻醉深度或血容量不足" },
      { label: "MAP 65-100 mmHg：", body: "常见术中目标范围" },
      { label: "MAP >100 mmHg：", body: "评估麻醉深度不足或疼痛控制不够" },
    ],
  },
  {
    heading: "术后护理",
    items: [
      { label: "MAP 呈下降趋势：", body: "警惕出血或第三间隙潴留" },
      { label: "MAP 持续升高：", body: "疼痛控制可能不足" },
      { label: "MAP 稳定在 70-90 mmHg：", body: "常见恢复目标" },
    ],
  },
] as const;

const pulsePressureTable = [
  {
    bp: "120/80",
    map: "93 mmHg",
    pulsePressure: "40 mmHg",
    note: "✅ 正常 — 心功能良好",
    tone: "positive",
  },
  {
    bp: "130/90",
    map: "103 mmHg",
    pulsePressure: "40 mmHg",
    note: "🟠 MAP 升高，脉压正常",
    tone: "warning",
  },
  {
    bp: "150/70",
    map: "97 mmHg",
    pulsePressure: "80 mmHg",
    note: "🔴 脉压增宽 — 考虑主动脉瓣返流",
    tone: "critical",
  },
  {
    bp: "100/90",
    map: "93 mmHg",
    pulsePressure: "10 mmHg",
    note: "🔴 脉压过窄 — 警惕心包填塞或重度心衰",
    tone: "critical",
  },
] as const;

const pulsePressureNotes = [
  {
    label: "脉压增宽（>60 mmHg）：",
    body: "考虑主动脉瓣返流、甲状腺功能亢进或动脉硬化。",
  },
  {
    label: "脉压变窄（<25 mmHg）：",
    body: "评估是否出现心包填塞、重度心衰或低血容量。",
  },
] as const;

const measurementErrors = [
  { error: "袖带过小", bpEffect: "读数偏高", mapEffect: "MAP 偏高" },
  { error: "手臂低于心脏水平", bpEffect: "读数偏高", mapEffect: "MAP 偏高" },
  { error: "手臂高于心脏水平", bpEffect: "读数偏低", mapEffect: "MAP 偏低" },
  {
    error: "背部无支撑",
    bpEffect: "舒张压偏高",
    mapEffect: "MAP 升高 2-5 mmHg",
  },
  {
    error: "测量时说话",
    bpEffect: "读数偏高",
    mapEffect: "MAP 升高 5-10 mmHg",
  },
  {
    error: "膀胱充盈",
    bpEffect: "+10-15 mmHg",
    mapEffect: "MAP 升高 5-7 mmHg",
  },
  {
    error: "刚摄入咖啡因 / 烟草",
    bpEffect: "读数偏高",
    mapEffect: "MAP 升高 5-8 mmHg",
  },
] as const;

const scenarios = [
  {
    heading: "脓毒症管理",
    scenario: "68 岁肺炎患者，血压 85/55 mmHg → MAP 65 mmHg。",
    points: [
      "达到《生存脓毒症运动》最低目标。",
      "回顾乳酸、尿量、意识状态。",
      "若灌注指标受损，将目标 MAP 提至 70-75 mmHg。",
    ],
  },
  {
    heading: "升压药滴定",
    scenario: "ICU 患者使用去甲肾上腺素，血压 92/58 mmHg → MAP 69 mmHg。",
    points: [
      "MAP 高于最低目标 65 mmHg。",
      "每 15-30 分钟记录趋势。",
      "若稳定或上升，可考虑缓慢减量；若出现下降趋势则维持剂量。",
    ],
  },
  {
    heading: "术后监测",
    scenario:
      "冠脉搭桥术后患者，基线 MAP 85 mmHg；当前血压 95/60 mmHg → MAP 72 mmHg。",
    points: [
      "MAP 较基线下降约 15%。",
      "排查出血、低血容量或镇痛不足。",
      "在升级处理前评估胸管引流与实验室指标。",
    ],
  },
] as const;

const trendingExamples = [
  {
    title: "趋势改善",
    timeline: [
      "第 0 小时：80/50 → MAP 60 mmHg",
      "第 2 小时：90/55 → MAP 67 mmHg",
      "第 4 小时：100/60 → MAP 73 mmHg",
    ],
    summary: "对治疗反应良好。",
  },
  {
    title: "趋势恶化",
    timeline: [
      "第 0 小时：110/70 → MAP 83 mmHg",
      "第 2 小时：100/65 → MAP 77 mmHg",
      "第 4 小时：90/55 → MAP 67 mmHg",
    ],
    summary: "立即查找潜在原因。",
  },
] as const;

const calculatorResources = [
  {
    label: "MAP 主计算器",
    description: "—— 提供完整的 MAP 教学与核心计算功能。",
    href: "/",
  },
  {
    label: "血压与 MAP 教学",
    description: "—— 提供完整的 MAP 教学指南",
    href: "/how-to-calculate-map-blood-pressure",
  },
  {
    label: "护理人员版 MAP 指南",
    description: "—— 针对护士的参考内容",
    href: "/map-calculation-nursing",
  },
] as const;

const guidelineLinks = [
  {
    label: "2021 年《生存脓毒症运动》指南",
    href: "https://www.sccm.org/SurvivingSepsisCampaign/Guidelines",
  },
  {
    label: "2017 年 ACC/AHA 高血压指南",
    href: "https://www.ahajournals.org",
  },
] as const;

const futureAssets = [
  "信息图：血压测量检查表（可下载 PDF）",
  "对比图：MAP 与脉压的解读",
  "临床速查：不同病种的 MAP 目标值",
] as const;

const mapCalculatorBpZh: MapCalculatorBpContent = {
  metadata: {
    title: "MAP 计算器（血压版）：由血压快速换算平均动脉压 | mapcalculator.org",
    description:
      "输入收缩压与舒张压，立即换算平均动脉压（MAP）。免费在线工具，附带临床意义解析，专为医疗专业人士设计。",
    keywords: ["MAP 计算器", "血压换算 MAP", "平均动脉压计算", "BP 转 MAP"],
    openGraphTitle: "MAP 计算器（BP）—— 血压快速换算平均动脉压",
    openGraphDescription: "面向临床使用的快速 MAP 计算工具",
    heroTitle: "基于血压读数的 MAP 计算器",
    heroDescription:
      "输入常规血压值即可即时获取平均动脉压，并附带临床意义提示，适合在 ICU、急诊及围术期护理中迅速评估灌注状况。",
  },
  schema: {
    medicalWebPage: {
      name: "基于血压读数的 MAP 计算器",
      description:
        "输入收缩压与舒张压即可计算平均动脉压，并获得临床解读与常见情境示例。",
      aboutDescription: "根据收缩压与舒张压推算平均动脉压的临床计算方法。",
      audienceLabel: "供医生、护士及急救人员在床旁快速使用。",
      audienceTypes: ["医生", "护士", "急救人员"],
    },
    faq,
    breadcrumbs: {
      home: "首页",
      page: "MAP 计算器（血压）",
    },
  },
  hero: {
    title: "基于血压读数的 MAP 计算器",
    description:
      "输入常规血压值即可即时获取平均动脉压，并附带临床意义提示，适合在 ICU、急诊及围术期护理中迅速评估灌注状况。",
    snapshotHeading: "临床速览",
    snapshotItems: [
      { label: "主要用途", value: "快速将血压换算为 MAP，并提供可执行的解读" },
      { label: "适用场景", value: "ICU 查房、脓毒症流程、围术期监测" },
      { label: "得出结果所需时间", value: "数秒——快速选择常见血压组合" },
    ],
  },
  sections: {
    whyCalculate: {
      heading: "为什么要用血压计算 MAP？",
      intro:
        "血压是医疗机构记录最频繁的生命体征。诊室与床旁监护仪会自动呈现收缩压与舒张压，但这些数值只代表每个心动周期的高峰与低谷。平均动脉压（MAP）则把这些读数转化为真正推动器官灌注的平均灌注压力。",
      clinicalReality: {
        heading: "临床现实",
        intro:
          "大多数自动监护仪不会默认显示 MAP，但几乎所有重症路径都依赖它。在医院的各类场景中，MAP 用于：",
        items: [
          {
            label: "脓毒症流程：",
            body: "维持 MAP ≥65 mmHg 以达到《生存脓毒症运动》目标。",
          },
          {
            label: "ICU 监护：",
            body: "在休克、术后及依赖血管加压药的患者中监测器官灌注趋势。",
          },
          {
            label: "血管加压药滴定：",
            body: "根据 MAP 目标调节去甲肾上腺素、加压素或去氧肾上腺素。",
          },
          { label: "术后恢复：", body: "在症状出现前捕捉灌注下降的早期信号。" },
        ],
      },
      usage: {
        heading: "何时需要这个工具",
        intro:
          "MAP 计算把记录的生命体征与流程指标连接起来。需要在第一时间搞清楚：",
        questions: [
          "当前灌注压是否满足患者状况？",
          "是否需要补液、使用升压药或降压药？",
          "过去数小时的 MAP 趋势如何？",
          "是否需要调整输注速度或升级治疗层级？",
        ],
        outro:
          "由于无创设备无法直接测量 MAP，掌握该计算是所有照护危重患者的临床人员必须具备的能力。",
      },
    },
    bpToMap: {
      heading: "血压如何换算成 MAP",
      formulaBadge: "公式解析",
      formula: "MAP =（收缩压 + 2 × 舒张压）÷ 3",
      formulaExplanation:
        "心脏在每个心动周期中约有三分之一的时间处于收缩期，三分之二处于舒张期。由于舒张期持续时间更长，舒张压在平均动脉压计算中占比更大，公式正是对这一生理比例的体现。",
      simpleAverageIntro:
        "简单平均会忽略心动周期固有的时间权重。例如血压 120/80 mmHg 时：",
      simpleAveragePoints: [
        "简单平均： (120 + 80) ÷ 2 = 100 mmHg",
        "加权 MAP 公式： (120 + 160) ÷ 3 = 93 mmHg",
      ],
      simpleAverageConclusion:
        "相差 7 mmHg 在临床上具有重要意义，尤其在低血压患者中，差异可能决定灌注是否足够或需要升级治疗。",
      alternative: {
        heading: "有创监测下的替代公式",
        intro: "动脉置管会直接显示 MAP，但临床人员常用心算进行验证：",
        formula: "MAP = 舒张压 +（收缩压 − 舒张压）÷ 3",
        explanation:
          "该变式使用脉压进行换算，做床旁心算时更快捷。两个公式在代数上等价，结果完全一致。",
      },
      accuracy: {
        heading: "准确性注意事项",
        intro:
          "无创血压推算的 MAP 对多数成人患者可靠，但在收缩期与舒张期时程被改变的情境下需谨慎：",
        items: [
          "重度主动脉瓣返流导致脉压过宽",
          "极度心动过速缩短舒张期",
          "伴快速心室反应的房颤",
          "晚期外周血管疾病或血管不可压",
        ],
        note: "若出现上述情况，应尽可能优先选择动脉有创监测。",
      },
    },
    referenceGuide: {
      heading: "血压换算 MAP 参考指南",
      intro:
        "使用下列速查表即可在床旁快速解读结果。数据与常见医院流程保持一致，并提示何时需要升级处理。",
      mapTableHeaders: {
        bp: "血压读数",
        formula: "MAP 计算式",
        map: "MAP 结果",
        interpretation: "临床解读",
      },
      mapTable: mapInterpretationTable,
      contextHeading: "按临床情境解读 MAP",
      contextCards,
      pulsePressureHeading: "脉压与 MAP 的联动考量",
      pulsePressureIntro:
        "MAP 趋势需要结合脉压（收缩压 − 舒张压）一同分析。即使 MAP 相同，脉压宽度不同也可能代表截然不同的血流动力学状况。",
      pulsePressureHeaders: {
        bp: "血压读数",
        map: "MAP",
        pulsePressure: "脉压",
        note: "临床提示",
      },
      pulsePressureTable,
      pulsePressureNotes,
    },
    measurement: {
      heading: "准确测量血压，确保 MAP 精准",
      intro:
        "MAP 的准确性取决于血压测量质量。使用这份检查清单，避免可以预防的测量误差。",
      preparation: {
        heading: "患者准备（5 分钟）",
        steps: [
          "让患者坐姿端正，背部有支撑，双脚不交叉。",
          "将上肢置于心脏同一水平，可借助桌面或枕垫。",
          "如膀胱胀满，先让患者排空。",
          "测量前 30 分钟内避免咖啡因、运动或吸烟。",
          "测量前静坐休息 5 分钟。",
          "测量过程中保持安静，不交谈、不玩手机。",
        ],
      },
      cuff: {
        heading: "袖带选择与放置",
        bullets: [
          "选择袖带囊宽约为臂围 40% 的型号。",
          "袖带下缘距肘窝 2-3 厘米。",
          "使气管与肱动脉走向一致。",
          "松紧适度，可容纳两指但不感疼痛。",
        ],
        processHeading: "测量步骤",
        steps: [
          "加压同时触诊桡动脉估算收缩压。",
          "在脉搏消失点基础上再加压 20-30 mmHg。",
          "以每秒 2-3 mmHg 的速度缓慢放气。",
          "听到第一相柯氏音时记录收缩压。",
          "声音完全消失时记录舒张压。",
          "间隔 1-2 分钟重复测量，取平均值。",
        ],
      },
      errorsHeading: "常见错误及其对 MAP 的影响",
      errorTableHeaders: {
        error: "常见错误",
        bpEffect: "对血压的影响",
        mapEffect: "对 MAP 的影响",
      },
      errorsTable: measurementErrors,
      whenInaccurate: {
        heading: "何时需警惕血压换算的 MAP 不准",
        bullets: [
          "MAP <50 mmHg 或重度依赖升压药的休克",
          "重度肥胖且无法获得合适袖带",
          "严重心律失常（如房颤合并快速心室率）",
          "需逐搏监测的高风险术中病例",
          "重度外周血管疾病或血管不可压",
        ],
        note: "在这些情况下，如需确保精确，请升级为动脉有创监测。",
      },
    },
    decisionMaking: {
      heading: "将 MAP 换算结果用于临床决策",
      intro:
        "只有结合临床背景，MAP 数值才具有实际意义。以下场景可帮助你把数字转化为行动。",
      scenarioLabel: "情境：",
      scenarios,
      trending: {
        heading: "趋势比单次读数更重要",
        intro:
          "记录 MAP 趋势而非单一读数。数小时内的改善或恶化比孤立数据更能反映灌注状况。",
        examples: trendingExamples,
        reminders: [],
      },
    },
    faq: {
      heading: "常见问题：血压换算 MAP",
      items: faq,
    },
    resources: {
      heading: "相关工具与资源",
      calculatorHeading: "相关计算工具",
      calculatorItems: calculatorResources,
      guidelinesHeading: "临床指南速查",
      guidelineLinks,
      futureAssetsHeading: "视觉素材制作中",
      futureAssets,
      actions: {
        backToTop: "返回顶部",
        print: "打印本页（Cmd/Ctrl + P）",
        share: "邮件分享",
      },
    },
  },
};

export default mapCalculatorBpZh;
