import type { BpCalculatorContent } from './types';

const bpCalculatorZh: BpCalculatorContent = {
  systolicLabel: '收缩压 (mmHg)',
  diastolicLabel: '舒张压 (mmHg)',
  quickSelectHeading: '常见血压快捷选择',
  calculateCta: '计算 MAP',
  resetCta: '重置',
  copyCta: '复制结果',
  copyFeedbackTemplate: '已复制 MAP {value} mmHg 到剪贴板',
  resultLabel: 'MAP 计算结果',
  resultPlaceholder: '输入收缩压与舒张压即可即时获得 MAP。',
  interpretationHeading: '结果解释速览',
  formulaNote: '采用标准平均动脉压公式计算：(收缩压 + 2 × 舒张压) ÷ 3。',
  professionalHeading: '仅供专业人员使用',
  professionalParagraphs: [
    '本工具用于辅助临床判断，不能替代床旁评估、科室流程或上级医师的决策。',
    '当结果与病情表现不一致时，请再次进行手动血压测量以确认读数。',
  ],
  emergencyNotice: '如遇紧急情况，请立即拨打急救电话或启动院内应急流程。',
  disclaimerLinkLabel: '查看完整免责声明',
  statusLegend: {
    criticalLow: 'MAP < 60 mmHg — 立即升级干预以维持灌注',
    borderline: 'MAP 60-64 mmHg — 临界值，需密切监测',
    normal: 'MAP 65-100 mmHg — 大多数成人的最佳灌注范围',
    elevated: 'MAP 101-110 mmHg — 轻度升高，结合临床情境评估',
    high: 'MAP > 110 mmHg — 高血压区间，警惕靶器官损害',
  },
  statusDescriptions: {
    criticalLow:
      'MAP 过低提示器官灌注不足，应快速评估患者状态并按照流程给予补液或升压药物支持。',
    borderline:
      'MAP 较低，需要连续监测生命体征，关注乳酸、尿量等灌注指标，必要时提前准备上级干预。',
    normal:
      'MAP 处于常规目标范围，可维持当前治疗方案，更关注趋势变化而非单次数值。',
    elevated:
      'MAP 中度升高，先结合疼痛、焦虑、术后反应等情况综合判断，必要时再考虑降压处理。',
    high:
      'MAP 明显升高，应排查是否存在靶器官受损体征，并依照高血压急症/亚急症流程处理。',
  },
};

export default bpCalculatorZh;
