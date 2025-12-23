# SEO TODO for mapcalculator.org (prioritized by impact on Google rankings)

> 说明：按「预计对 Google 排名/流量提升影响」从高到低排序。  
> 格式为：**任务 → 目标关键词 → 建议 URL/页面 → 内容与实现要点**。

---

## 1. 强化现有高潜页面（已有曝光/接近首页）

### 1.1 强化 BP → MAP 计算器页

- [ ] 页面：`/map-calculator-bp`（`src/app/[locale]/map-calculator-bp/page.tsx`）
- 目标关键词（Semrush + GSC）  
  - 核心：`BP to MAP calculator`, `map calculator bp`, `bp map calculator`, `map bp calculator`  
  - 变体：`blood pressure MAP calculator`, `map calculator blood pressure`, `map blood pressure calculator`, `map blood pressure`, `map calculator for blood pressure`, `map calculator for bp`, `map for bp calculator`, `bp calculator map`
- 具体 TODO
  - [ ] 在页面 H1/H2、小节标题中自然覆盖上述核心词（目前以 “MAP Calculator from Blood Pressure Readings” 为主，可在副标题/局部小节增加 “BP to MAP calculator” 等表述）。  
  - [ ] 在正文中增加 2–3 个「场景化用语」段落，例如：  
    - “…use this **BP to MAP calculator** when you only have systolic and diastolic blood pressure readings.”  
    - “This **blood pressure MAP calculator** converts SBP and DBP to mean arterial pressure in seconds.”  
  - [ ] 在示例表格/FAQ 中增加一小节，专门回答「How do I convert BP to MAP?」并显式写出公式和 1–2 个数字例子。  
  - [ ] 根据新文案更新多语言版本（`mapCalculatorBp` 下的 `es.ts`、`zh.ts`），保持核心概念一致。

### 1.2 强化 MAP 计算教程页

- [ ] 页面：`/how-to-calculate-map-blood-pressure`（`src/app/[locale]/how-to-calculate-map-blood-pressure/page.tsx`）
- 目标关键词  
  - 核心：`how to calculate MAP`, `how to calculate map blood pressure`, `how to calculate map from blood pressure`, `how to calculate map bp`  
  - 问句变体：`how do you calculate map`, `how do i calculate map`, `how is map calculated`, `how to calculate map for blood pressure`, `how to calculate map in blood pressure`, `how to calculate the map of blood pressure`
- 具体 TODO
  - [ ] 将最核心的问题「How to calculate MAP from blood pressure (BP)」作为 H1（已基本满足），并在首段直接给出公式和一句话答案。  
  - [ ] 使用 H2/H3 将主要问句做成小节标题或 FAQ 问题，例如：  
    - “How do you calculate MAP from blood pressure?”  
    - “How to calculate MAP BP step by step?”  
    - “How is MAP calculated in practice?”  
  - [ ] 增加 2–3 个专门针对「nursing」「ICU/ED」的子小节，承接长尾如 `map calculation nursing`（与现有 nursing 页互链）。  
  - [ ] 确认 `FAQPage` Schema 中的问题文本尽量与高曝光问句一致（便于匹配 PAAs/AI Overview）。

### 1.3 强化首页 / 核心 MAP 计算器

- [ ] 页面：`/` / `/[locale]`（`src/app/[locale]/page.tsx`）
- 目标关键词  
  - 核心：`map calculator`, `calculate map`, `calculating map`, `map calculation`, `map calc`  
  - 扩展：`mean arterial pressure calculator`, `map calculator mean arterial pressure`
- 具体 TODO
  - [ ] 在首页介绍区和几处 H2/H3 中强化这些词的出现频率（不堆砌）。  
  - [ ] 在 FAQ 或「What is MAP?」段落中，自然插入 `mean arterial pressure calculator` 等词，将首页与“工具 + 概念”双重意图绑定。  
  - [ ] 确认 `alternates.languages` 与 `hreflang` 设置正确（目前实现良好，只需随着新内页增加时同步更新）。

---

## 2. 新增内页：MAP 公式专题页（优先级最高的新页面）

### 2.1 MAP 公式 / Mean Arterial Pressure 公式页

- [x] 页面建议：`/map-formula`  
  - 技术实现：`src/app/[locale]/map-formula/page.tsx` + 对应 `messages/pages/mapFormula/{en,es,zh}.ts`
- 目标关键词  
  - 通用：`map formula`, `map equation`, `map calculation formula`, `map formula bp`, `map equation bp`  
  - Mean arterial pressure 相关：`mean arterial pressure formula`, `mean arterial pressure calculation`, `map mean arterial pressure calculation`, `mean arterial pressure map calculation`, `calculate map mean arterial pressure`, `map calculation mean arterial pressure`
- 内容结构建议
  - [x] H1：`MAP Formula for Mean Arterial Pressure`（已实现，语义等价）  
  - [x] 模块 1：公式总览  
    - 展示标准公式：`MAP = (SBP + 2 × DBP) ÷ 3`  
    - 对比错误的简单平均 `(SBP + DBP) ÷ 2`，解释为什么不准确。  
  - [x] 模块 2：推导与生理学解释  
    - 解释“心动周期 1/3 收缩 + 2/3 舒张”的时间权重。  
    - 用 1–2 个简单图示/类比帮助理解。  
  - [x] 模块 3：MAP equation / formula Q&A  
    - 回答 GSC/ Semrush 中常见问句：  
      - “What is the formula for MAP?”  
      - “What is the MAP equation in blood pressure?”  
      - “How is mean arterial pressure (MAP) calculated?”  
  - [x] 模块 4：与其他计算方式对比  
    - 提到 invasive / arterial line 直接测量时的区别，何时需要动脉压监测。  
  - [x] 内链  
    - 明确链接到 `/map-calculator-bp`（计算工具）和 `/how-to-calculate-map-blood-pressure`（步骤教程）。

---

## 3. 新增内页：MAP 血压计算示例 & 解读

### 3.1 MAP BP 示例页

- [ ] 页面建议：`/map-blood-pressure-examples`  
  - 技术实现：`src/app/[locale]/map-blood-pressure-examples/page.tsx` + `messages/pages/mapBpExamples/{en,es,zh}.ts`
- 目标关键词  
  - `calculating map from blood pressure`, `calculate map from blood pressure`, `calculate map blood pressure`, `calculating map blood pressure`, `calculation of map blood pressure`  
  - `blood pressure map calculation`, `calculate map from sbp and dbp`, `map blood pressure calculation`, `calculate blood pressure map`
- 内容结构建议
  - [ ] H1：`MAP Blood Pressure Calculation Examples`  
  - [ ] 模块 1：示例表格  
    - 多行 SBP/DBP → MAP（如 120/80、90/60、160/100 等）  
    - 每行附简短临床解释（normal / borderline / low / high）。  
  - [ ] 模块 2：手算步骤示例  
    - 选 2–3 个例子用完整步骤演示从 SBP/DBP 到 MAP 的运算过程。  
  - [ ] 模块 3：`calculate map from SBP and DBP` 专栏  
    - 说明 SBP/DBP 的采集注意事项 + 常见误差。  
  - [ ] 模块 4：FAQ 区  
    - 针对「How do I calculate MAP from SBP and DBP?」「Why does MAP differ from the simple average?」等问句。  
  - [ ] 内链  
    - 指向主工具页 `/` 及 `/map-calculator-bp`，作为“看完示例后，直接计算”的 CTA。

---

## 4. 新增内页：PAM Calculator / Presión Arterial Media

### 4.1 PAM 计算器页（英文入口 + 西语重点内容）

- [ ] 页面建议：`/pam-calculator`  
  - 技术实现：`src/app/[locale]/pam-calculator/page.tsx` + `messages/pages/pamCalculator/{en,es,zh}.ts`
- 目标关键词  
  - 英文：`pam calculator`, `pam formula`  
  - 西语（GSC 高潜）：`pam`, `calculadora pam`, `pam calculadora`, `calcular pam`, `calculo pam`, `formula pam`, `calculadora de pam`, `pam medicina`, `pam calculador`
- 内容结构建议
  - [ ] H1：`PAM (Presión Arterial Media) Calculator`  
  - [ ] 模块 1：PAM / MAP 概念桥接  
    - 说明 PAM = Presión Arterial Media = Mean Arterial Pressure (MAP)。  
  - [ ] 模块 2：计算器组件  
    - 可以直接复用现有 MAP 计算组件，使用西语/英文标签。  
  - [ ] 模块 3：西语解释段落  
    - 用西语解释公式、正常范围、常见临床场景（ICU、sepsis 等）。  
  - [ ] 模块 4：FAQ（西语为主）  
  - [ ] 内链  
    - 从 `/es` 首页和相关西语页面明显链接到此页；英文内容中说明“for Spanish-speaking clinicians searching for ‘PAM calculadora’…”，加强相关性。

---

## 5. 新增内页：MAP vs Blood Pressure（概念对比）

### 5.1 MAP vs BP 对比页

- [ ] 页面建议：`/map-vs-blood-pressure`  
  - 技术实现：`src/app/[locale]/map-vs-blood-pressure/page.tsx` + `messages/pages/mapVsBp/{en,es,zh}.ts`
- 目标关键词  
  - `map bp`, `map bp calculator`, `map bp formula`, `bp map calculator`, `bp map calculation`, `map bp calculation`, `calculate bp map`  
  - 长尾问句：例如 “why is MAP more important than blood pressure”（可在 Semrush 中继续扩展）
- 内容结构建议
  - [ ] H1：`MAP vs Blood Pressure: What Clinicians Should Focus On`  
  - [ ] 模块 1：概念对比表  
    - 行：`MAP`, `Systolic BP`, `Diastolic BP`  
    - 列：定义、用途、典型目标范围。  
  - [ ] 模块 2：临床协议角度  
    - 举例 sepsis、shock、stroke 中为何用 MAP 而不是单纯 SBP。  
  - [ ] 模块 3：FAQ  
    - 回答：“Is MAP more important than blood pressure?”、“When should I target MAP vs SBP?” 等。  
  - [ ] 内链  
    - 指向 `/`（主计算器）和 `/map-targets-by-condition`（详细目标）。

---

## 6. 新增内页：Mean Arterial Pressure 概念 / 百科页

### 6.1 Mean Arterial Pressure (MAP) 概念页

- [ ] 页面建议：`/mean-arterial-pressure`  
  - 技术实现：`src/app/[locale]/mean-arterial-pressure/page.tsx` + `messages/pages/meanArterialPressure/{en,es,zh}.ts`
- 目标关键词  
  - `mean arterial pressure`, `mean arterial pressure map`, `mean arterial pressure map calculation`（以及相关长尾）  
- 内容结构建议
  - [ ] H1：`Mean Arterial Pressure (MAP): Definition and Normal Range`  
  - [ ] 模块 1：定义 + 简要公式  
  - [ ] 模块 2：正常范围 & 不同人群  
    - 普通成人、老年人、妊娠、儿科等简要范围。  
  - [ ] 模块 3：按疾病分类的目标范围简介  
    - 链接到 `/map-targets-by-condition` 获取更详细表格。  
  - [ ] 模块 4：FAQ  
    - “What is a normal MAP?”, “Why is MAP important in critical care?” 等。  
  - [ ] 内链  
    - 明确引导到主计算器页和 BP→MAP 页。

---

## 7. 跟踪与迭代

- [ ] 建立一个简单的 GSC 监测节奏（每 4 周）：  
  - 组合筛选：  
    - 设备：移动设备  
    - 国家：美国 + 墨西哥 + 西班牙  
    - 页面：上述每个新/旧内页  
  - 记录：展示量、平均排名、CTR 的变化，用来决定哪个内页需要继续扩写 / 增加 FAQ / 提升内部链接。
