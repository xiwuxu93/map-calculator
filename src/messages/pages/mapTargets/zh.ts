const MapTargetsZh = {
  meta: {
    title: "分病种的 MAP 目标：当 65 并不够（2025）",
    description:
      "基于证据的分病种 MAP 目标（脓毒症、TBI、卒中、心脏骤停后、麻醉/围术期）。了解何时以 ≥65 为起点、何时需要个体化，以及如何在器官灌注与潜在伤害之间取得平衡。",
    keywords: [
      "MAP 目标",
      "脓毒症 MAP 65",
      "TBI MAP 目标",
      "卒中 MAP 目标",
      "心脏骤停后 MAP",
      "如何个体化 MAP",
      "脑灌注压 CPP",
      "平均动脉压 目标",
      "map 血压 计算器",
      "bp 转 map",
    ],
    openGraphTitle: "分病种 MAP 目标 — 证据与实用指南",
    openGraphDescription:
      "脓毒症、TBI、卒中与围术期的 MAP 目标，并提供床旁个体化算法。",
    heroTitle: "分病种的 MAP 目标：证据、要点与床旁算法",
    heroDescription:
      "MAP ≥65 mmHg 是起点而非终点。按病种理解目标，并结合个体情况进行调整。",
    quickAnswerLabel: "快速要点",
    readingTime: "阅读时间",
    skillLevel: "适用人群",
    lastUpdated: "2025年11月",
  },
  schema: {
    article: {
      headline: "分病种的 MAP 目标：当 65 并不够",
      description:
        "按病种给出 MAP 目标及证据背景，提示过度治疗风险，并提供可操作的个体化步骤。",
    },
    faq: [
      {
        question: "MAP ≥65 是否总是正确？",
        answer:
          "未必。65 mmHg 常作初始目标（如脓毒症路径），但应结合灌注指标、合并症与具体病种证据进行个体化。",
      },
      {
        question: "TBI 时的 MAP 目标是什么？",
        answer:
          "以脑灌注压（CPP）= MAP − ICP 为目标。多数路径建议 CPP 60–70 mmHg，所需 MAP 约 80–110，取决于 ICP 与自调节。",
      },
      {
        question: "缺血性卒中应维持怎样的 MAP？",
        answer:
          "早期常采取允许性高血压以维持半暗带灌注。可容忍较高 MAP，遵循卒中指南与神经团队意见。",
      },
      {
        question: "何时应使用动脉置管监测 MAP？",
        answer:
          "使用血管活性药物的休克、血流动力学快速波动、重度低血压或需按 CPP 精准靶向的神经病例。",
      },
    ],
  },
  t0001: "面向临床的实用指南",
  t0002: "核心观点：",
  t0003:
    "对许多成年人而言，MAP ≥65 mmHg 是安全起点，但最终目标需由病种、合并症与灌注指标共同决定。",
  t0004: "用灌注指标做个体化（意识、尿量、乳酸、皮肤灌注）。",
  t0005: "8–10 分钟",
  t0006: "临床医护、急诊/ICU/手术间、培训学员",

  t0010: "为何 65 是起点而不是铁律",
  t0011:
    "健康成人常见 MAP 70–100 mmHg。路径多以 ≥65 开始，但该阈值可能因年龄、慢性高血压、神经状态或微循环障碍而偏低或偏高。",

  t0020: "分病种 MAP 目标（循证导向）",
  t0021: "一般成人（稳定）：70–100 mmHg，避免极端值。",
  t0022: "脓毒症：从 ≥65 开始；如慢性高压或低灌注征象持续，可适度上调。[1]",
  t0023: "TBI：以 CPP 60–70 mmHg 为靶；所需 MAP 约 80–110（取决于 ICP）。[2]",
  t0024: "缺血性卒中（早期）：允许性高血压；避免 MAP 突降。[3]",
  t0025: "心脏骤停后：通常 ≥65–75 mmHg；结合神经预后与器官支持目标。[4]",
  t0026: "围术期/手术间：结合基线血压、手术风险与脏器易损性（肾/脑/心）。[5]",
  t0027: "肾灌注不足风险（CKD/老年）：若有 AKI 迹象或尿量低，可考虑略高的 MAP。[6]",

  t0030: "如何安全地个体化",
  t0031: "双重检查：宏观目标（MAP）+ 微观指标（灌注）。",
  t0032: "微观指标：意识、尿量 ≥0.5 mL/kg/时、乳酸/清除率、皮温/毛细再充盈、斑驳、床旁超声。",
  t0033: "若 MAP 65 时灌注仍不足，每次上调 5–10 mmHg，并观察趋势而非单点。",
  t0034: "避免不必要的高压：更高 MAP 增加心肌耗氧与后负荷；灌注改善后应下调。",

  t0040: "精度何时更重要（袖带 vs 动脉置管）",
  t0041: "使用血管活性药、快速波动、重度低压或神经病例（按 CPP 靶向）优先用 A‑line。",
  t0042: "稳定节律下袖带 MAP 多在 A‑line 值 ±5–10 mmHg；若决策受细小差异影响，请确认。",

  t0050: "床旁 5 步算法",
  t0051: "1) 起始：先设 MAP ≥65（除非明确神经指征）。",
  t0052: "2) 评估：查看灌注指标与基线血压史。",
  t0053: "3) 纠偏：指标差 → 上调 5–10 并处理病因（液体/升压）。",
  t0054: "4) 神经：TBI/神经病例按 CPP = MAP − ICP 设定，与专科协作。",
  t0055: "5) 复评：看趋势，灌注达标后减压以避免伤害。",

  t0060: "常见问题",
  t0061: "更高是否总是更好？",
  t0062: "并非如此。过高的 MAP 可能加重心肌缺血、增加后负荷与出血风险。以能维持器官灌注的最低 MAP 为宜。",
  t0063: "慢性高血压患者是否需要更高的 MAP？",
  t0064: "往往需要，尤其脑与肾灌注；应谨慎上调并重复评估灌注指标。",
  t0065: "若 MAP ≥65 仍乳酸偏高怎么办？",
  t0066: "重评容量状态、感染源控制、心排量与微循环；仅靠 MAP 可能不足以纠正灌注。",

  refsHeading: "参考文献",
  refs: [
    { label: "Surviving Sepsis Campaign 2021", text: "Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: 2021 International Guidelines for Management of Sepsis and Septic Shock. Intensive Care Med. 2021;47:1181–1247. doi:10.1007/s00134-021-06506-y", url: "https://link.springer.com/article/10.1007/s00134-021-06506-y" },
    { label: "重度 TBI 指南（CPP）", text: "Carney N, Totten AM, O’Reilly C, et al. Guidelines for the Management of Severe Traumatic Brain Injury, Fourth Edition. Neurosurgery. 2016;80(1):6–15. doi:10.1227/NEU.0000000000001432", url: "https://doi.org/10.1227/NEU.0000000000001432" },
    { label: "急性缺血性卒中指南", text: "Powers WJ, Rabinstein AA, Ackerson T, et al. 2019 AHA/ASA Guideline for the Early Management of Patients With Acute Ischemic Stroke. Stroke. 2019;50:e344–e418. doi:10.1161/STR.0000000000000211", url: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000211" },
    { label: "心脏骤停后治疗", text: "Panchal AR, Bartos JA, Cabañas JG, et al. 2020 American Heart Association Guidelines for CPR and ECC: Post–Cardiac Arrest Care. Circulation. 2020;142(16_suppl_2):S469–S523. doi:10.1161/CIR.0000000000000916", url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000916" },
    { label: "围术期低血压与结局", text: "Salmasi V, Maheshwari K, Yang D, et al. Relationship between Intraoperative Hypotension, Defined by Either Reduction from Baseline or Absolute Thresholds, and AKI and Myocardial Injury After Noncardiac Surgery. Anesthesiology. 2017;126(1):47–65. doi:10.1097/ALN.0000000000001432", url: "https://doi.org/10.1097/ALN.0000000000001432" },
    { label: "KDIGO AKI 指南", text: "KDIGO Clinical Practice Guideline for Acute Kidney Injury. Kidney Int Suppl. 2012;2(1):1–138.", url: "https://kdigo.org/guidelines/acute-kidney-injury/" },
  ],
} as const;

export default MapTargetsZh;
