# pt‑BR 语言版本评估（草案）

本节对应 `docs/seo-todo.md` 中 P2 的「评估新增 `pt-BR` 语言版本」。

## 为什么考虑 pt‑BR

- GSC 早期数据已经显示来自拉美的曝光（墨西哥、巴西等），且西语内容表现良好。  
- 巴西本地对医学计算工具和护理教育内容的需求大，竞争度相对英语更低。  
- 现有西语（es）与英语（en）内容可以作为高质量源文本，便于可靠翻译和校对。

## 建议的技术策略

- 使用 `pt` 作为 locale code，通过 `resolveLocale` 兼容浏览器/用户传入的 `pt-BR`。  
- 仅为以下核心页面提供完整葡语文案，优先保证质量而非覆盖面：
  - 主页：`/pt`  
  - 主计算器：`/pt/map-calculator-bp`  
  - How‑to 教程：`/pt/how-to-calculate-map-blood-pressure`  
  - 护理指南：`/pt/map-calculation-nursing`
- 其他长文（如 MAP targets）在首批上线中可以暂缓，等看到 pt 流量后再追加。

## 建议的实现步骤（尚未在代码中执行）

1. 在 `src/lib/i18n.ts` 中的 `localeConfigs` 里新增 `{ code: "pt", currency: "BRL" }`。  
2. 新增 `src/messages/pt.ts`，以 `en.ts` 为蓝本完成站点级 meta、导航和通用文案的葡语翻译。  
3. 为以下页面添加 `pt` 版本 messages，并在对应 `index.ts` 中挂接：
   - `src/messages/pages/mapCalculatorBp/pt.ts`  
   - `src/messages/pages/howToCalculate/pt.ts`  
   - `src/messages/pages/mapCalculationNursing/pt.ts`
4. 运行 `npm run i18n:generate -- --locales=pt`，让脚本为其余 bundle 生成骨架翻译，再逐条做医学与语言双重审核。  
5. 在导航、sitemap 与 `LanguageSwitcher` 中确认已自动包含 `pt` 路由。

## 当前状态

- 仅完成 feasibility 评估和实施方案设计，尚未修改任何与 locale 相关的代码。  
- 推荐在你有可靠葡语医学译者或审稿资源时，再按以上步骤逐步落实。***
