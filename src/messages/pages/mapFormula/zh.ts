import type { MapFormulaContent } from './types';

const mapFormulaZh: MapFormulaContent = {
  "metadata": {
    "title": "平均动脉压（MAP）公式：如何一步一步计算 MAP",
    "description": "学习平均动脉压（MAP）的计算公式，查看 MAP 血压计算示例，并了解在何种情况下优先参考 MAP 而不是单纯收缩压。",
    "keywords": [
      "MAP 公式",
      "MAP 方程",
      "MAP 计算公式",
      "平均动脉压公式",
      "平均动脉压计算",
      "MAP 血压公式",
      "MAP 公式 BP",
      "MAP 如何计算",
      "平均动脉压 MAP 计算"
    ],
    "openGraphTitle": "平均动脉压（MAP）公式：如何计算 MAP",
    "openGraphDescription": "了解 MAP 公式、它为何对舒张压进行加权，以及如何通过实例根据血压计算平均动脉压。",
    "heroTitle": "平均动脉压（MAP）公式",
    "heroDescription": "复习标准 MAP 公式，理解其背后的原理，并练习根据常见血压读数计算平均动脉压。"
  },
  "schema": {
    "article": {
      "headline": "平均动脉压公式：如何根据血压计算平均动脉压",
      "description": "一份重点介绍平均动脉压 (MAP) 公式的指南，包括生理学、示例和临床医生实用的计算技巧。"
    },
    "faq": [
      {
        "question": "MAP 的计算公式是什么？",
        "answer": "平均动脉压（MAP）的标准公式为：MAP =（SBP + 2 × DBP）÷ 3，其中 SBP 为收缩压，DBP 为舒张压。"
      },
      {
        "question": "为什么平均动脉压（MAP）公式要把舒张压加倍？",
        "answer": "心脏在舒张期所花的时间大约是收缩期的两倍。将舒张压乘以 2 再参与平均，更能体现一个完整心动周期中真实的平均驱动压力。"
      },
      {
        "question": "平均动脉压（MAP）是不是收缩压和舒张压的简单平均值？",
        "answer": "不是。像（SBP + DBP）÷ 2 这样的简单平均忽略了更长的舒张期，往往会高估灌注压，尤其是在低血压患者中。"
      },
      {
        "question": "什么时候需要根据血压读数来计算平均动脉压（MAP）？",
        "answer": "当诊疗路径以 MAP 作为目标（例如脓毒症、休克、神经重症监护），或需要一个统一的灌注压指标在团队间沟通时，就应该计算 MAP。"
      }
    ],
    "breadcrumbs": {
      "home": "首页",
      "page": "MAP 公式"
    }
  },
  "hero": {
    "label": "MAP 公式指南",
    "readingTimeLabel": "阅读时间",
    "skillLevelLabel": "适用人群",
    "lastUpdatedLabel": "最后更新",
    "readingTime": "7分钟",
    "skillLevel": "适合所有医疗专业人员",
    "lastUpdated": "2025年1月"
  },
  "sections": {
    "overview": {
      "heading": "标准 MAP 公式",
      "intro": "平均动脉压（MAP）是指在一个心动周期内，血液流经动脉系统时的平均压力。临床上，它往往是脓毒症、休克和麻醉等方案中的核心灌注目标。",
      "formulaLabel": "标准方程式",
      "standardFormula": "MAP =（收缩压 + 2 × 舒张压）÷ 3",
      "keyPoint": "将 MAP 视为时间加权平均值：舒张期的数值大约是收缩期的两倍，因为它在每个心动周期中所占的时间更长。"
    },
    "physiology": {
      "heading": "为什么MAP公式有效",
      "intro": "MAP 公式不只是一个需要死记硬背的等式，它反映了每次心跳中动脉系统在收缩压和舒张压下所停留的时间比例。",
      "systoleVsDiastoleHeading": "心动周期中的收缩期与舒张期",
      "systoleVsDiastoleBody": "在正常心率范围内，心脏每个心动周期约有三分之一的时间处于收缩期（射血），三分之二的时间处于舒张期（舒张和充盈）。由于器官承受舒张压的时间更长，因此舒张压对真实平均动脉压的贡献更大。",
      "simpleAverageHeading": "为什么简单平均值会产生误导",
      "simpleAverageIntro": "如果只是简单地取收缩压和舒张压的平均值，就相当于假设心脏在两种压力下所处的时间相等。",
      "simpleAverageFormulaWrong": "对于 120/80 mmHg 的血压，简单平均值为 (120 + 80) ÷ 2 = 100 mmHg — 高于真正的平均动脉压。",
      "weightedFormulaHeading": "加权公式反映了实际时间",
      "weightedFormulaBody": "使用加权平均动脉压公式 120/80 mmHg — (120 + 2 × 80) ÷ 3 — 得出 93 mmHg，这与有创测量和生理舒张期时间更加吻合。"
    },
    "examples": {
      "heading": "MAP 公式示例",
      "intro": "这些示例使用标准 MAP 公式将常见的血压读数转换为您可以在床旁使用的平均动脉压值。",
      "tableHeaders": {
        "bloodPressure": "血压（收缩压/舒张压）",
        "map": "MAP（计算值）",
        "notes": "临床解读"
      },
      "rows": [
        {
          "bp": "120/80 mmHg",
          "map": "93 mmHg",
          "notes": "健康成年人示例——正常平均动脉压的经典教学价值。"
        },
        {
          "bp": "100/60 mmHg",
          "map": "73 mmHg",
          "notes": "许多成年人的灌注量处于正常偏低水平；背景和趋势很重要。"
        },
        {
          "bp": "90/60 mmHg",
          "map": "70 mmHg",
          "notes": "临界平均动脉压——密切监测，尤其是在休克或败血症的情况下。"
        },
        {
          "bp": "80/50 mmHg",
          "map": "60 mmHg",
          "notes": "关键阈值，许多指南建议在此阈值处采取紧急行动。"
        },
        {
          "bp": "160/100 mmHg",
          "map": "120 mmHg",
          "notes": "平均动脉压显著升高，高血压损伤风险增加。"
        }
      ],
      "sbpDbpNote": "在应用 MAP 公式之前，务必确保收缩压和舒张压读数来自同一测量，并以 mmHg 为单位记录。"
    },
    "practice": {
      "heading": "如何在实践中使用MAP公式",
      "intro": "一旦掌握了公式，关键是能快速、稳定地算出 MAP，让你在真实的临床流程中落实各类以 MAP 为核心的目标值。",
      "stepsHeading": "逐步计算",
      "steps": [
        "使用可靠的袖带或动脉导管记录收缩压 (SBP) 和舒张压 (DBP)。",
        "舒张压值的两倍：2 × DBP。",
        "加上收缩压值：SBP + (2 × DBP)。",
        "将总数除以 3 即可得到 MAP。",
        "将 MAP 与您的方案目标（例如脓毒症中 ≥65 mmHg）和患者的基线进行比较。"
      ],
      "tipsHeading": "心算技巧",
      "tips": [
        "记住脉压公式：MAP ≈ DBP + (脉压 ÷ 3)，其中脉压 = SBP − DBP。",
        "对中间数值进行四舍五入，以保持心算速度快，同时与精确结果的误差在几毫米汞柱以内。",
        "先在病情稳定的病人身上练习，这样在紧急情况下就能自动完成操作。"
      ]
    },
    "verification": {
      "heading": "公式何时可能不可靠",
      "intro": "标准平均动脉压 (MAP) 计算公式假设收缩期到舒张期的时间是典型的。在某些情况下，有创监测或专家评估比仅依赖袖带测量的 MAP 更安全。",
      "bullets": [
        "极度心动过速或心动过缓，导致舒张期充盈时间发生显著变化。",
        "严重的瓣膜疾病，例如主动脉瓣反流，会导致舒张压迅速下降。",
        "极低灌注状态下，无创袖带难以得出准确读数。",
        "任何时候计算出的平均动脉压与患者的临床表现或其他灌注指标明显不一致。"
      ]
    },
    "faq": {
      "heading": "MAP 公式常见问题",
      "items": [
        {
          "question": "MAP 公式对所有成年人都一样吗？",
          "answer": "计算公式本身是一样的，但平均动脉压（MAP）的目标范围会随病情而变化。例如，脓毒症方案通常从 MAP ≥65 mmHg 起步，而部分神经重症路径可能追求更高的 MAP。"
        },
        {
          "question": "可以仅依赖袖带测得的平均动脉压（MAP），而不用动脉导管吗？",
          "answer": "对病情相对平稳的患者，无创 MAP 多数情况下足以支持决策。对于病情不稳定或危重患者，当精确度非常关键时，应考虑使用有创动脉监测。"
        },
        {
          "question": "如果心率变化了，需要重新计算平均动脉压（MAP）吗？",
          "answer": "轻微的心率波动不会影响公式本身。若出现明显改变（如严重心动过速或心动过缓），收缩期与舒张期的时间比例可能发生变化，此时更适合考虑有创监测。"
        }
      ]
    }
  },
  "cta": {
    "calculatorLabel": "打开 MAP 计算器",
    "calculatorHref": "/",
    "howToLabel": "阅读分步 MAP 指南",
    "howToHref": "/how-to-calculate-map-blood-pressure"
  }
} as const;

export default mapFormulaZh;
