# SEO TODO（基于当前 GSC 数据）

> 优先级排序：优先拉“已经有排名/展现、但点击少”的页面和关键词，其次才是长线内容扩展和新语言。

## P0 – 直接提升点击和流量（1–2 周内）

- [x] 优化中文 MAP 计算相关页面的 `<title>` 与 `meta description`
  - 目标页面：`/zh/map-calculator-bp`, `/zh/how-to-calculate-map-blood-pressure`, `/zh`
  - 关注关键词：`MAP 计算器`、`平均动脉压 计算`、`平均动脉压 公式`、`护理`
  - 预计修改位置：`src/messages/zh.ts` 中的 `metadata`，以及 `src/messages/pages/mapCalculatorBp/zh.ts`、`src/messages/pages/howToCalculate/zh.ts` 中对应页面文案和标题

- [x] 强化护理专题页面（EN/ES）的首屏和标题，让已接近首页的页面更“可点击”
  - 目标页面：`/map-calculation-nursing`, `/es/map-calculation-nursing`（若存在 `/zh/map-calculation-nursing` 也一并检查）
  - 动作：
    - 检查 `H1` 与首段是否清晰突出 “Nursing MAP Guide / 护理 MAP 指南 / Guía de MAP para enfermería`
    - 首屏内容明确写出适用人群（ICU/急诊/病房护士）和能解决的问题
  - 预计修改位置：`src/app/[locale]/map-calculation-nursing/page.tsx` 及相关 `messages/pages/mapCalculationNursing/*`

- [x] 优化移动端首屏布局，让 MAP 计算器组件尽量出现在“无需滚动”的区域
  - 目标页面：主页 + 主计算器 + 护理计算器
    - `src/app/[locale]/page.tsx`
    - `src/app/[locale]/map-calculator-bp/page.tsx`
    - `src/app/[locale]/map-calculation-nursing/page.tsx`
  - 动作：
    - 收紧或下移 banner 与长文案，把 `<Calculator />` / `<BpCalculator />` 提前
    - 检查移动端实际首屏（例如使用 DevTools 设备模拟）确保表单与 CTA 清晰可见

- [x] 在导航和首屏区域增加到护理指南与 MAP 教程的内链
  - 目标：从首页和主计算器页给 `/how-to-calculate-map-blood-pressure` 与 `/map-calculation-nursing` 更多权重，让这些已接近首页的页面更快起量
  - 动作：
    - 在 Header / Footer 中强化以下链接（EN/ES/ZH 均有）：Nursing MAP Guide / 护理 MAP 指南 / Guía de MAP para enfermería
    - 在首页资源卡片中确保 How-to 与 Nursing 卡片足够醒目
  - 预计修改位置：`src/components/Header.tsx`, `src/components/Footer.tsx`, 以及 `src/messages/*` 中对应导航文案

- [x] 调整首页和关键计算器页的 meta description，使其更贴近 GSC 查询词
  - 英文：在 `metadata.description` 中自然融入 `map blood pressure`, `how to calculate map`, `mean arterial pressure formula`
    - 预计修改位置：`src/messages/en.ts` 中的 `metadata` 与 `home` 描述
  - 西语：加入 `presión arterial media`, `calculadora PAM`, `calcular PAM`
    - 预计修改位置：`src/messages/es.ts` 与 `src/messages/pages/*/es.ts`
  - 中文：加入 `如何计算平均动脉压`、`平均动脉压公式`、`MAP 护理`
    - 预计修改位置：`src/messages/zh.ts` 与 `src/messages/pages/*/zh.ts`

## P1 – 提升展现与主题权威（2–4 周）

- [x] 完整撰写英文长文：`How to calculate MAP (mean arterial pressure)`
  - 内容要点：公式推导、案例计算、心算技巧、ICU/麻醉/休克场景应用、常见错误
  - 用作 `/how-to-calculate-map-blood-pressure` 的主文案源，确保与当前 GSC 查询“how to calculate map / map formula”等高度匹配
  - 预计修改位置：`src/messages/pages/howToCalculate/en.ts` 与对应的 page 组件

- [x] 基于英文长文制作高质量西语本地化版本
  - 重点自然使用 `presión arterial media`, `PAM`, `calculadora`, `calcular`
  - 预计修改位置：`src/messages/pages/howToCalculate/es.ts` 与对应页面

- [x] 撰写一篇中文专题：`平均动脉压公式与快速计算（含护理场景）`
  - 对应 `/zh/how-to-calculate-map-blood-pressure`，详细讲解公式、记忆方法及在护理工作中的使用
  - 预计修改位置：`src/messages/pages/howToCalculate/zh.ts` 与对应页面

- [x] 在 MAP 目标值 / targets 页面中增加 FAQ 区块
  - 典型问题：`What is a normal MAP?`、`Is MAP 60 too low?` 等（中英西三语版本）
  - 目的：覆盖更多长尾查询并为后续结构化数据准备结构
  - 预计修改位置：`src/messages/pages/mapTargets/*` 与相关页面组件

- [x] 检查并补全 sitemap 中的本地化路由
  - 确认 `sitemap.ts` 已包含 EN/ES/ZH 的 homepage、calculator、how-to、nursing、mapTargets 等核心 URL
  - 如有遗漏，按现有模式补齐

## P2 – 中长期 SEO 优化（4+ 周，视资源执行）

- [x] 评估新增 `pt-BR` 语言版本
  - 评估结论：拉美（含巴西）对 MAP 计算/护理内容有明显需求，竞争度低于英语；适合作为 EN/ES 之后的下一批重点语言。
  - 技术策略：推荐使用 `pt` 作为 locale code，通过 `resolveLocale` 兼容浏览器/用户传入的 `pt-BR`，优先落地主页、主计算器、How-to 教程与护理指南四个页面。
  - 实施方案：详见 `docs/locale-pt-br-plan.md`，当前仅完成方案设计和文档记录，尚未在代码中落地，待有可靠葡语医学译者后再执行。

- [x] 为护理与如何计算 MAP 的页面添加 FAQ 区块（结构上易于转为 Schema）
  - 使用清晰的 `<section>` + `<h2>/<h3>` 结构组织常见问题
  - 确保每个问题有一段简短、直接的回答（便于抽取到 FAQ rich result）

- [x] 设计并实现 FAQPage 结构化数据（JSON-LD）
  - 先从英文主计算器页和 how-to 页开始，选择 3–5 个高意图问题埋点
  - 预计修改位置：相关 `page.tsx` 文件中注入 JSON-LD（可使用 Next.js 推荐方式）

- [x] 建立持续的 GSC 复盘节奏（每 2 周一次）
  - 导出最新查询数据，重点关注：
    - 新进入前 20 名的查询
    - impression > 50 且 CTR < 1% 的查询（考虑调 title/description 或新建专题内容）
    - 表现最好的“页面 × 国家”组合，用于决定下一批重点语言或内容方向
