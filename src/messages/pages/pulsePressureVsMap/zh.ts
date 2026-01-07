const PulsePressureVsMapZh = {
  meta: {
    title: "脉压差 vs. MAP：哪个生命体征能告诉你更多？(2025 指南)",
    description:
      "MAP 衡量灌注；脉压差衡量硬度与每搏输出量。了解何时追踪哪个指标，宽脉压差的危害，以及如何解读不一致的数值。",
    keywords: [
      "脉压差 vs map",
      "map 和脉压差的区别",
      "宽脉压差原因",
      "窄脉压差意义",
      "平均动脉压 vs 脉压差",
      "临床血流动力学指南",
    ],
    openGraphTitle: "脉压差 vs. MAP：临床对比指南",
    openGraphDescription:
      "别再混淆这两个生命体征。MAP 负责灌注；脉压差负责每搏输出量。这里是两者的使用指南。",
    heroTitle: "脉压差 vs. MAP：哪个生命体征能告诉你更多？",
    heroDescription:
      "它们都源自收缩压和舒张压，却讲述着截然不同的生理学故事。了解何时信任 MAP，何时关注脉压差，以及当二者“打架”时该怎么办。",
    authorLabel: "基于临床指南整理",
    lastUpdated: "2025 年 1 月",
  },
  schema: {
    article: {
      headline: "脉压差 vs. MAP：哪个生命体征能告诉你更多？",
      description:
        "面向临床医生的平均动脉压 (MAP) 与脉压差 (PP) 深度对比：涵盖生理学、计算及临床解读。",
      author: "mapcalculator.org 编辑团队",
      datePublished: "2025-01-08",
    },
    faq: [
      {
        question: "MAP 和脉压差的主要区别是什么？",
        answer:
          "MAP（平均动脉压）代表向器官输送血液的稳定灌注压力。脉压差（收缩压 - 舒张压）反映每次心跳的“力度”，指示每搏输出量和动脉硬度。",
      },
      {
        question: "为什么宽脉压差很危险？",
        answer:
          "宽脉压差（>60 mmHg）通常提示动脉硬化（衰老）或主动脉瓣关闭不全。即使 MAP 正常，它也是心血管死亡率的独立预测因子。",
      },
      {
        question: "MAP 正常但脉压差低，这种情况可能吗？",
        answer:
          "是的。例如血压 100/85，MAP 为 90 mmHg（正常），但脉压差仅 15 mmHg（极窄）。这提示严重的血管收缩、心包填塞或心源性休克，尽管 MAP 看起来是“正常”的。",
      },
    ],
  },
  sections: {
    intro: {
      title: "两种压力的故事",
      content:
        "在高压力的临床环境中，我们常痴迷于平均动脉压 (MAP)，因为它是器官灌注的主要目标。如果 MAP < 65 mmHg，肾脏就会衰竭。但脉压差 (PP)——收缩压与舒张压的简单差值——却常被忽视，尽管它是衡量动脉硬度和每搏输出效率的更优指标。",
    },
    comparison: {
      title: "正面对决：MAP vs. PP",
      mapTitle: "平均动脉压 (MAP)",
      mapFormula: "(收缩压 + 2×舒张压) ÷ 3",
      mapRole: "“灌注”指标",
      mapDescription:
        "把 MAP 想象成推动血液流经毛细血管的持续驱动压。脑和肾脏等器官“感受”到的不是脉搏，而是这种稳定的平均压力。",
      ppTitle: "脉压差 (PP)",
      ppFormula: "收缩压 - 舒张压",
      ppRole: "“搏动”指标",
      ppDescription:
        "把 PP 想象成每次心跳的冲击波。它告诉你管道的状况（硬度）和水泵的容量（每搏输出量）。",
    },
    clinicalScenarios: {
      title: "当它们意见不一时：临床情境",
      intro: "最危险的患者往往是那些 MAP “正常” 但脉压差异常的人。",
      scenario1Title: "1. 窄脉压差（紧缩）",
      scenario1Vitals: "BP 110/95 (MAP 100, PP 15)",
      scenario1Analysis:
        "MAP 100 看起来很棒。但脉压差极小（15 mmHg）。该患者处于强烈的血管收缩状态。他们可能血容量不足或处于早期心源性休克，正通过高体循环血管阻力 (SVR) 进行代偿。如果只看 MAP，你就会错过即将到来的崩溃。",
      scenario2Title: "2. 宽脉压差（硬管）",
      scenario2Vitals: "BP 160/60 (MAP 93, PP 100)",
      scenario2Analysis:
        "MAP 正常。但脉压差巨大（100 mmHg）。这是老年人动脉硬化典型的“单纯收缩期高血压”。即使灌注 (MAP) 充足，这也会给左心室带来巨大负荷并增加中风风险。",
      scenario3Title: "3. 脓毒症漂移",
      scenario3Vitals: "BP 90/40 (MAP 57, PP 50)",
      scenario3Analysis:
        "这里两个指标都令人担忧。相对于低舒张压的较宽脉压差提示血管舒张（暖休克）。“油箱”是满的（每搏输出量尚可），但“管道”太松了（低 SVR）。",
    },
    actionPlan: {
      title: "床旁行动计划",
      step1: "1. 先看 MAP",
      step1Desc: "患者有灌注吗？如果 MAP < 65，立即纠正低血压（补液？升压药？）。",
      step2: "2. 再看脉压差",
      step2Desc: "如果 MAP 安全，看 PP。是否 < 收缩压的 25%？（过窄）。是否 > 60 mmHg？（过宽）。",
      step3: "3. 综合定位",
      step3Desc: "窄 PP？考虑容量不足或泵衰竭。宽 PP？考虑血管硬化或反流（瓣膜返流）。",
    },
  },
  cta: {
    calculator: "计算 MAP & PP",
    back: "返回文章列表",
  },
} as const;

export default PulsePressureVsMapZh;
