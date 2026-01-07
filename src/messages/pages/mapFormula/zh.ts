import type { MapFormulaContent } from './types';

const rows = [
  {
    bp: '正常心率',
    map: '舒张期 × 0.66',
    notes: '在 60-80 bpm 时，舒张期约占心动周期的 2/3。标准公式完美适用。',
  },
  {
    bp: '心动过速 (120 bpm)',
    map: '舒张期 × 0.50',
    notes: '舒张期显著缩短。标准公式会低估真实的 MAP。',
  },
  {
    bp: '心动过缓 (40 bpm)',
    map: '舒张期 × 0.75',
    notes: '舒张期延长。标准公式可能会高估真实的 MAP。',
  },
] as const;

const mapFormulaZh: MapFormulaContent = {
  metadata: {
    title:
      'MAP 公式的生理学原理：为什么舒张压要乘以 2？',
    description:
      '为什么 MAP = (SBP + 2DBP)/3？深入解析心动周期时相、动脉顺应性以及为何该公式在心动过速时失效。',
    keywords: [
      'map 公式生理学',
      '为什么 map 舒张压乘 2',
      '平均动脉压物理原理',
      '心动周期时间 map',
      '动脉压力曲线积分',
      'map 公式局限性',
    ],
    openGraphTitle:
      'MAP 的物理学：标准公式为何有效（及何时失效）',
    openGraphDescription:
      '深入解析 (SBP + 2DBP)/3 背后的血流动力学。了解曲线下面积、舒张期衰减及心率限制。',
    heroTitle: 'MAP 公式背后的生理学',
    heroDescription:
      '标准 MAP 公式并非随意的算术运算，而是动脉压力脉搏波的简化积分。带您了解数字背后的物理学原理。',
  },
  schema: {
    article: {
      headline:
        '平均动脉压 (MAP) 公式背后的生理学',
      description:
        '基于动脉压力曲线下面积推导，详细解释 MAP 公式的血流动力学由来。',
    },
    faq: [
      {
        question: '为什么 MAP 公式中舒张压的权重是 2 倍？',
        answer:
          '在正常静息心率下（60-80 bpm），心脏约三分之二的时间处于舒张期（充盈与舒张），三分之一的时间处于收缩期（射血）。因此，平均压力在数学上被赋予更接近舒张压数值的权重。',
      },
      {
        question: '标准 MAP 公式在心率过快时准确吗？',
        answer:
          '不准确。随着心率增加（心动过速），舒张期不成比例地缩短。1:2 的收缩/舒张比消失，导致标准公式准确度下降。在这种情况下，需要使用“曲线下面积”法（动脉导管监测所用方法）。',
      },
      {
        question: 'MAP 的“曲线下面积”定义是什么？',
        answer:
          '真正的 MAP 是动脉压的几何平均值，通过对压力曲线随时间的积分并除以心动周期时长计算得出。公式 (SBP + 2DBP)/3 只是这一积分的床旁近似值。',
      },
    ],
    breadcrumbs: {
      home: '首页',
      page: '公式生理学',
    },
  },
  hero: {
    label: '血流动力学理论',
    readingTimeLabel: '阅读时间',
    skillLevelLabel: '难度',
    lastUpdatedLabel: '最后更新',
    readingTime: '6 分钟',
    skillLevel: '进阶 / 医学生',
    lastUpdated: '2025 年 1 月',
  },
  sections: {
    overview: {
      heading: '积分的近似',
      intro:
        '真正的平均动脉压不是简单的算术平均值。它是单个心动周期内动脉压力波的积分——字面意义上的“曲线下面积”(AUC)。',
      formulaLabel: '床旁简算法',
      standardFormula: 'MAP ≈ DBP + 1/3(脉压差)',
      keyPoint:
        '这个公式是“积分的估算值”。它假设压力波具有特定的形状，而这种形状仅在正常心率下存在。',
    },
    physiology: {
      heading: '为什么是“除以 3”？三分法则',
      intro:
        '分母中的神奇数字“3”源于心脏瓣膜的开闭时机。',
      systoleVsDiastoleHeading: '心跳的不对称性',
      systoleVsDiastoleBody:
        '血流是脉动性的，但器官灌注是连续的。主动脉充当“风箱”（弹性储库），在收缩期储存能量，在舒张期回缩以维持血流。由于回缩比射血需要更长时间，动脉排空（舒张）的时间比充盈（收缩）的时间更长。',
      simpleAverageHeading: '几何现实',
      simpleAverageIntro:
        '如果动脉压力波是完美的方波（在 SBP 和 DBP 停留时间相等），简单平均值才有效。但事实并非如此。',
      simpleAverageFormulaWrong:
        '压力波急剧上升（收缩期上升支）并缓慢下降（舒张期衰减）。大部分“时间面积”位于曲线的舒张部分之下。',
      weightedFormulaHeading: '权重的可视化',
      weightedFormulaBody:
        '想象心动周期为 3 个时间单位。收缩期占 1 个单位，舒张期占 2 个单位。因此，平均压力为 (1×SBP + 2×DBP) ÷ 3。',
    },
    examples: {
      heading: '公式何时失效：心率的影响',
      intro:
        '临床实践中最常见的错误是在极快心率患者中盲目信任此公式。',
      tableHeaders: {
        bloodPressure: '条件',
        map: '舒张期权重',
        notes: '生理学影响',
      },
      rows,
      sbpDbpNote:
        '在严重心动过速（>110 bpm）中，收缩期和舒张期持续时间变得几乎相等。公式理应变为 (SBP + DBP) ÷ 2，但监护仪很少对此进行调整，导致计算误差。',
    },
    practice: {
      heading: '临床启示',
      intro:
        '理解公式的局限性将改变您在床旁解读数据的方式。',
      stepsHeading: '给临床医生的关键要点',
      steps: [
        '标准公式是一个估算值，而非测量值。',
        '心动过速时：公式低估真实灌注（因为舒张期比公式假设的要短）。',
        '心动过缓时：公式表现良好，或略微高估。',
        '有创动脉导管 (A-line)：不使用此公式。它们每秒采样 100+ 次压力以计算真实积分。这就是为什么 A-line MAP 常与袖带 MAP 不同。',
        '宽脉压差：在动脉硬化的老年患者中，“风箱”效应丧失。压力下降更快，意味着标准公式可能高估其真实的器官灌注。',
      ],
      tipsHeading: '',
      tips: [],
    },
    verification: {
      heading: '总结',
      intro:
        '对于心率正常的稳定患者，使用公式 (SBP + 2DBP)/3。对于不稳定、心动过速或动脉硬化患者，请更多地信任趋势而非绝对数值，或置入动脉导管进行直接测量。',
      bullets: [],
    },
    faq: {
      heading: '进阶常见问题',
      items: [
        {
          question: '动脉硬化（衰老）是否影响公式？',
          answer:
            '是的。僵硬的动脉回缩更快，导致舒张期压力下降更迅速。这意味着“曲线下面积”比公式预测的要小。标准公式在老年患者中常高估灌注。',
        },
        {
          question: '为什么有创 (A-line) 和无创 (Cuff) MAP 不一致？',
          answer:
            '袖带利用振荡幅度直接估算 MAP（通常是袖带最准确的参数），而公式通过 SBP/DBP 计算。A-line 测量真实积分。二者不一致是预料之中的，尤其在非标准生理状态下。',
        },
      ],
    },
  },
  cta: {
    calculatorLabel: '返回计算器',
    calculatorHref: '/',
    howToLabel: '查看计算步骤',
    howToHref: '/how-to-calculate-map-blood-pressure',
  },
};

export default mapFormulaZh;