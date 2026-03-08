# QA Session 3 — Full Mockup Verification (Phase 1 + Phase 2)

You are a QA analyst reviewing HTML mockups for a crypto trading platform (TrigonumTrade). Your job is to open each mockup page, click through all interactive elements, and compare what you see against the technical specification (ТЗ) requirements listed below.

**Base URL**: https://ipostny.github.io/trigonum-design-mockups/

---

## How to Work

For each section:
1. Open the mockup link
2. Click through ALL tabs, buttons, expand/collapse, modals, filters
3. Compare what you see against EVERY numbered check below
4. Report PASS / FAIL / PARTIAL for each check with a brief comment
5. Note any visual issues (alignment, colors, spacing, missing elements)

---

# PART A — ORIGINAL MOCKUPS (Phase 1)

These sections cover the core role-workspace mockups built in Phase 1. All ТЗ requirements come from the original 9 Notion specification documents.

---

## Section 1: Team Lead — Analytics

**Mockup**: https://ipostny.github.io/trigonum-design-mockups/team-analytics.html
**ТЗ**: "01_team_lead_analytics" — TL Analytics tab

### Checks:
1. Summary cards present: "Капитал под управлением", "Изменение за день", "Изменение за неделю"
2. Capital change line chart visible (last week, 7 data points)
3. Hierarchical table: Senior Trader rows expand to reveal nested Trader rows
4. Senior Trader columns: Name, Capital, Unrealized PnL, Realized PnL day/week, PM
5. Trader columns (nested): Name, Capital, Unrealized PnL, Realized PnL day/week, Trades, Max DrawDown
6. "Раскрыть все" / "Свернуть все" (Expand All / Collapse All) buttons work
7. Sorting by any column header (click to sort)
8. Period filter pills: День / Неделя / Месяц / Квартал / Год
9. PnL gradient coloring: positive green, negative red (not flat gray)
10. Click trader name → link to profile (cyan color, new tab or navigation)

---

## Section 2: Team Lead — Trading

**Mockup**: https://ipostny.github.io/trigonum-design-mockups/trading-terminal.html
**ТЗ**: "02_team_lead_trading" — TL Trading tab

### Checks:
11. Two top-level tabs visible: Analytics | Trading — active one highlighted
12. Inside Trading: Terminal content visible (chart area, order form, positions)
13. Inside Analytics: sub-tabs for CMP, Long/Short, Fear & Greed, News, Liquidation Map
14. Tab switching works instantly — no blank/empty content after click
15. Active sub-tab visually highlighted (different from inactive)
16. Each sub-tab shows distinct content (not duplicate)

---

## Section 3: Team Lead — Performance

**Mockup**: https://ipostny.github.io/trigonum-design-mockups/team-analytics.html (same page, "Trade History" tab)
**ТЗ**: "03_team_lead_performance" — TL Performance tab

### "Team Analytics" sub-tab:
17. Period selector: День / Неделя / Месяц / Квартал / Год / Custom
18. Metric cards with thousand separators, green/red coloring by sign
19. Line chart with 7 data points (Mon–Sun), tooltip on hover
20. Hierarchical table: ST rows expand, Trader rows nested underneath
21. Click trader row → shows open trades below (inline expansion)
22. Click trade → trade detail card/modal with chart
23. Sorting works, name search field present, pagination for >50 rows

### "Trade History" sub-tab:
24. Filters row: Трейдер, Старший трейдер, Период, Инструмент, Направление, Статус, Результат + Применить / Сбросить
25. Trade table columns: Трейдер, Инструмент, Позиция, Объём, Плечо, Режим, Цена входа, Стоимость, SL, TP, Нереализ. PnL, Реализ. PnL, Дата входа, Дата обновления, Действие
26. "Подробнее" button per row → opens modal with chart (entry/exit markers), trade params, journal text, change log

---

## Section 4: Team Lead — Risk Management

**Mockup**: https://ipostny.github.io/trigonum-design-mockups/risk-management.html
**ТЗ**: "04_team_lead_risk_mgmt" — TL Risk Management tab

### Checks:
27. Two sub-tabs visible: "Команда" (Team) and "Политики" (Policies)
28. Summary panel: "Total risk now" ($ and %), "Warnings" counter, "Forced closures" counter — counters are clickable
29. Status chips visible: "Testing", "Trading banned", "Coin banned" with counts
30. Filters: Period, Senior Trader, Policy, Coin/Market
31. Team table columns: Trader, RM Policy (DROPDOWN in cell), Risk now (to SL), Risk budget remaining (PROGRESS BAR), Warnings (clickable count), Forced closures (clickable count), Open positions (clickable count)
32. Progress bar with color thresholds: green (<50%), amber (50-80%), red (>80%)
33. Policy dropdown = inline assignment selector
34. RM action buttons per trader: "Назначить встречу" (Assign Meeting), "Назначить тестирование" (Assign Testing), "Запретить торговлю" (Ban Trading — toggle), "Запретить монеты" (Ban Coins — multi-select)
35. Sorting, pagination, CSV export button
36. Auto-refresh indicator (15-30s note)
37. RM action log link

---

## Section 5: Team Lead — Org Structure

**Mockup**: https://ipostny.github.io/trigonum-design-mockups/org-structure.html
**ТЗ**: "05_team_lead_org_structure" — TL Org Structure tab

### Checks:
38. Toggle buttons: "Список" (List) / "Оргструктура (дерево)" (Tree)
39. Tree view: Team Lead = root node (top/center)
40. Investors = same level as TL, connected by horizontal dashed lines (association, not subordination)
41. Below TL: pairs of [Senior Trader] — [Risk Manager] horizontally
42. Under each pair: vertical list of Traders
43. "Непарные" (Unpaired) node for unassigned traders
44. Expand/collapse per level: TL → Pairs → Team members
45. "Раскрыть все / Свернуть все" buttons work
46. Search by name/nick/email — auto-expands matching branches, hides non-matching
47. Click trader → "Trader Analytics" popup or link
48. Scroll works for large trees (dark scrollbar, not white)
49. Vertical lines = subordination, horizontal dashed lines = association
50. Empty states: "Нет участников" for empty pairs, "Ничего не найдено" for search with no results

---

## Section 6: Trader — Overview

**Mockup**: https://ipostny.github.io/trigonum-design-mockups/trader-workspace.html
**ТЗ**: "06_trader_overview" — Trader Overview tab

### Checks:
51. Period selector: День / Неделя / Месяц / Квартал / Год
52. Summary cards: "Капитал под управлением", "Изменение за период" ($ and %)
53. Capital change line chart for selected period
54. Open Positions table columns: Инструмент, Направление (LONG/SHORT), Объём, Цена входа, Текущая цена, P&L $, P&L %, Плечо/Маржа, Длительность, SL/TP
55. Summary above table: "Открытых позиций: N", "Общий плавающий P&L: $ / %"
56. Sorting by all columns
57. Filters: instrument, direction, leverage
58. Click row → position details (modal or expand)
59. PnL: profit green, loss red

---

## Section 7: Trader — Journal (original requirements)

**Mockup**: https://ipostny.github.io/trigonum-design-mockups/trader-workspace.html (Journal tab)
**ТЗ**: "07_trader_journal" — Trader Journal tab

### "Торговая система" (Trading System) sub-tab:
60. Rich text editor area (headings, lists, links) for strategy description
61. File upload card: DOC/DOCX/PDF with "Скачать" (Download) button
62. Text above, file card below
63. "Последнее обновление: DD.MM.YY HH:MM, Author" timestamp
64. Trader buttons: Редактировать (Edit), Загрузить файл (Upload), Сохранить (Save), Отмена (Cancel)
65. Save button disabled/grayed until edit mode active

### "История сделок" (Trade History) sub-tab:
66. Filters: Period, Instrument, Direction, Status, Leverage
67. Table columns: Date/Time, Instrument, Direction, Volume, Entry Price, Exit Price, P&L $, P&L %, TP, SL, Entry Reasons
68. Click row → popup with editable fields: Entry Reason, Comment, SL, TP, R:R, Risk per trade
69. PnL coloring: profit green, loss red
70. Empty state: "Нет сделок за выбранный период"

---

## Section 8: Risk Manager — Analytics

**Mockup**: https://ipostny.github.io/trigonum-design-mockups/risk-management.html (Аналитика РМ tab)
**ТЗ**: "09_risk_mgr_analytics" — RM Analytics tab

### Checks:
71. Period selector: День / Неделя / Месяц / Квартал / Год
72. Cards: Капитал под управлением, Изменение за день ($ and %), Изменение за неделю ($ and %)
73. Capital change line chart (last week)
74. Trader table (FLAT, no hierarchy): Трейдер, Капитал, Unrealized PnL, Realized PnL day/week, Кол-во сделок, Max DrawDown
75. Note/indicator that scope is "Only traders assigned to THIS RM"
76. Sorting by any column
77. PnL gradient coloring (red/green)
78. Click trader name → profile link (new tab)
79. Period filter affects all metrics and table

---

## Section 9: Risk Manager — Risk Management

**Mockup**: https://ipostny.github.io/trigonum-design-mockups/risk-management.html
**ТЗ**: "08_risk_mgr_rm" — RM Risk Management tab

### Checks:
80. Two sub-tabs: "Команда" (Team) and "Политики" (Policies)
81. Team table columns: Трейдер, Политика РМ (dropdown), Остаток риска (progress bar 0-100%), Предупреждения (clickable count), Принудительные закрытия (clickable count)
82. Action buttons per trader row: "Назначить встречу" (popup: date + note), "Назначить тестирование" (blocks trading), "Запретить торговлю" (toggle/tumbler), "Запретить монеты" (multi-select coins)
83. Click warning/closure counts → popup with filtered trade list
84. Sorting works, filter by status (violations, testing, banned)

---

## Section 10: Role Workspaces

**Mockup**: https://ipostny.github.io/trigonum-design-mockups/role-workspaces.html

### Checks:
85. Team Lead: 6 tabs — Аналитика, Торговля, Результативность, Риск-менеджмент, Оргструктура, Инвестирование
86. Senior Trader: 4 tabs — Команда, Торговля, Результативность, Риск-менеджмент
87. Trader: 4 tabs — Обзор, Торговля, Результативность, Дневник
88. Risk Manager: 4 tabs — Риск-менеджмент (FIRST), Аналитика, Торговля, Результативность
89. Each role has distinct color badge or visual identifier
90. Active tab visually highlighted (different background/border)

---

# PART B — NEW PHASE 2 ADDITIONS

These sections cover the new pages and enhancements added in Phase 2 based on additional ТЗ specifications downloaded from Notion.

---

## Section 11: Trader Profile Page (NEW)

**Mockup**: https://ipostny.github.io/trigonum-design-mockups/trader-analytics.html
**ТЗ**: "Попап «Аналитика трейдера»" — full trader profile module

### 11.1 Navigation & Header
91. Page title: "Аналитика трейдера — <Имя>" (e.g. "Елизавета")
92. Breadcrumbs present: "Результативность → Аналитика команды → <Имя>"
93. Status badge visible (e.g. "Активен" / "На паузе")
94. Senior Trader and PM labels shown

### 11.2 Trader Card (table layout)
95. Table format with rows: Трейдер, Субаккаунт, Баланс, Политика РМ
96. Субаккаунт — has dropdown selector (e.g. "eliza.sub1")
97. Баланс — shows numeric value (e.g. "10,000.00 USDT")
98. "Пополнить" button next to balance (top-up / increase balance)
99. Политика риск-менеджмента — dropdown with policy options (e.g. "1% — Консервативная", "3% — Умеренная", "5% — Агрессивная")

### 11.3 Document Sections
100. "Профайлинг" section present with drag&drop upload zone
101. Format note shown (PDF/DOCX)
102. "Скачать" (Download) button visible
103. "Торговая стратегия" section — same upload pattern as Профайлинг
104. Both sections side by side (or stacked on narrow)

### 11.4 Analytics Tab — PnL Chart
105. Two main tabs: "Аналитика" and "Сделки" — tab switching works
106. PnL chart is a cumulative AREA chart (not bar chart, not line-only)
107. Green fill ABOVE zero line, Red fill BELOW zero line
108. Zero line visible as horizontal reference
109. Y-axis has value labels (e.g. -600, -400, ..., 400, 600)
110. X-axis has date labels
111. Chart title: "График P&L" or similar

### 11.5 Analytics Tab — Winrate Gauge
112. Semicircular gauge (half-circle, not full circle)
113. Three colored zones: Green (0-30%), Yellow (30-60%), Red (60-100%)
114. Needle/pointer indicating current percentage
115. Large percentage number in center (e.g. "42%")
116. Trade count below percentage (e.g. "из 360 сделок" or "360 сделок")
117. Title: "Процент убыточных сделок" or "Винрейт"

### 11.6 Analytics Tab — Calendar
118. Monthly calendar grid (7 columns: Пн–Вс)
119. Day cells with colored bars: green for profit days, red for loss days
120. Amount label on each bar (e.g. "+79.60 $" or "−52.19 $")
121. Month header with: Доход (green), Убыток (red), Чистая прибыль, Средн. прибыль/день
122. Month navigation arrows (« Prev / Next »)
123. Days without trades have no colored bar

### 11.7 Analytics Tab — Long/Short Donut
124. Donut chart (ring, not filled pie)
125. Two segments: Green = LONG, Blue = SHORT
126. Labels "LONG" and "SHORT" visible with counts and percentages
127. Example: "LONG: 189 (52.5%)", "SHORT: 171 (47.5%)"
128. Total trade count visible (e.g. "360 сделок")

### 11.8 Trades Tab
129. Click "Сделки" tab — switches to trade history view
130. Filter row: Date range, Instrument, Direction, Status dropdowns
131. Apply + Reset filter buttons
132. Trade table columns: Дата, Инструмент, Направление, Объём, Плечо, Цена входа, Цена выхода, P&L ($), P&L (%), SL, TP
133. PnL coloring: positive values green, negative values red
134. "Подробнее" (Details) button per row
135. Click "Подробнее" → opens trade detail modal

### 11.9 Trade Detail Modal
136. Modal opens with chart area (instrument price chart placeholder)
137. Entry/Exit/SL/TP markers or labels on chart
138. Parameters block: Трейдер, Инструмент, Направление, Объём, Плечо, Режим, Цена входа, Цена выхода, SL, TP, PnL
139. "Описание из дневника" section (journal text)
140. "История изменений" section (change log entries)
141. Close button (✕) works, Escape key closes modal, clicking outside closes modal

---

## Section 12: RM Результативность Tab (NEW)

**Mockup**: https://ipostny.github.io/trigonum-design-mockups/risk-management.html
**ТЗ**: "Вкладка Результативность" for Risk Manager

### 12.1 Tab Existence
142. Four top-level tabs visible: "Команда", "Политики", "Аналитика РМ", "Результативность"
143. Click "Результативность" — switches to Performance content
144. Inside: two sub-tabs (pills): "Аналитика команды" and "История сделок"

### 12.2 Аналитика команды Sub-tab
145. Period selector pills: День / Неделя / Месяц / Квартал / Год
146. Summary cards: "Капитал под управлением" (large number with thousands separator)
147. "Изменение за день" card — absolute value + percentage, colored green/red by sign
148. Capital change line chart (7 data points, Mon-Sun)
149. Flat trader table (NO hierarchy — RM sees only assigned traders, no Senior Trader grouping)
150. Table columns: Трейдер, Капитал, Unrealized PnL, Realized PnL, Кол-во сделок, Max DrawDown
151. PnL values colored green (profit) / red (loss)
152. Sorting works on column headers (click to sort)
153. Trader names are clickable links (cyan color, open trader profile)

### 12.3 История сделок Sub-tab
154. Click "История сделок" pill — switches to trade history
155. Filter row with dropdowns: Трейдер, Период, Инструмент, Направление, Статус
156. Apply + Reset buttons
157. Trade table columns: Трейдер, Инструмент, Позиция, Объём, Плечо, Режим, Цена входа, Стоимость, SL, TP, Нереализ. PnL, Реализ. PnL, Дата входа, Дата обновления, Действие
158. "Подробнее" button per row
159. Click "Подробнее" → trade detail modal opens (same pattern as Section 11.9)
160. PnL coloring: green/red by sign

### 12.4 Existing Tabs Still Work
161. "Команда" tab still shows team table with risk progress bars and action buttons
162. "Политики" tab still shows policy cards/list
163. "Аналитика РМ" tab still shows RM analytics with flat trader table
164. No visual regression — all existing content preserved

---

## Section 13: Subaccount Widgets — По ключам (NEW)

**Mockup**: https://ipostny.github.io/trigonum-design-mockups/team-analytics.html
**ТЗ**: "Балансы по субаккаунтам", "Прибыль по субаккаунтам", "Счетчик сделок по субаккаунтам"

### 13.1 Tab Access
165. Three sub-tabs visible: "Team Analytics", "Trade History", "По ключам"
166. Click "По ключам" — switches to subaccount widgets view

### 13.2 Balances by API Key Widget
167. Title: "Балансы по API-ключам трейдеров" or similar
168. Total balance header (large number, e.g. "200,001.00 $")
169. Horizontal bar chart — green bars
170. Each bar labeled with: trader name + key ID on left (e.g. "Nikita (438081106)")
171. Value label on/near each bar (e.g. "81,079.00 $")
172. Bars sorted by descending balance (longest bar = biggest balance)
173. Horizontal value axis with scale labels

### 13.3 Profit by API Key Widget
174. Title: "Прибыль по каждому API-ключу ($)" or similar
175. Bidirectional horizontal bars: GREEN bars extend RIGHT from zero (profit), RED bars extend LEFT from zero (loss)
176. Zero line (vertical center divider) clearly visible
177. Each bar labeled: key name + ID on left, value + trade count (e.g. "−218.00 $ (10)") on bar
178. Both positive and negative values present in sample data
179. Bars sorted (e.g. by descending profit or ascending loss)

### 13.4 Trade Count by API Key Widget
180. Title: "Счетчик сделок по API-ключу" or similar
181. Horizontal green bars (single direction, all positive)
182. Each bar labeled with: key name + ID on left, trade count number on/near bar (e.g. "42")
183. Bars sorted by descending trade count
184. All bars same green color

### 13.5 General Widget Checks
185. All three widgets stacked vertically (not overlapping)
186. Consistent styling: dark theme, matching card/section borders
187. Readable text: white/light labels on dark background
188. Numbers formatted with thousand separators and 2 decimal places (for monetary values)

---

## Section 14: Trader Journal Enhancements (UPDATE)

**Mockup**: https://ipostny.github.io/trigonum-design-mockups/trader-workspace.html
**ТЗ**: "Дневник трейдера" — enhanced Trading System + Trade History

### 14.1 Access Journal Tab
189. Click "Дневник" tab in trader workspace — shows journal content
190. Two sub-tabs inside: "Торговая система" and "История сделок"

### 14.2 Trading System Sub-tab
191. Rich text editor area with strategy description (headings, lists, text)
192. "Последнее обновление" (Last updated) timestamp with date + author name
193. File upload card showing uploaded file name (e.g. "стратегия_скальпинг_v3.docx")
194. File format note: PDF/DOCX
195. "Скачать" (Download) button on file card
196. Action buttons: "Редактировать" (Edit), "Загрузить файл" (Upload file)
197. "Сохранить" (Save) button present — disabled/grayed until edit mode
198. "Отмена" (Cancel) button present

### 14.3 Trade History Sub-tab
199. Click "История сделок" sub-tab — shows trade history
200. Filter row: Period, Instrument, Direction, Status, Leverage
201. Trade table with columns including editable "Причины входа" (Entry Reasons)
202. Click row → popup with editable fields (Entry Reason, Comment, SL, TP, R:R, Risk per trade)
203. PnL coloring: profit green, loss red

---

## Section 15: Trader Name Links in Team Analytics (UPDATE)

**Mockup**: https://ipostny.github.io/trigonum-design-mockups/team-analytics.html

### Checks:
204. In hierarchical table, trader names styled as links (cyan/teal color)
205. Links point to `trader-analytics.html` (check href)
206. Links open in new tab (target="_blank") or navigate
207. Senior Trader names may also be clickable (optional)

---

## Section 16: Index Page & Cross-Page Verification

### 16.1 Index Page
**URL**: https://ipostny.github.io/trigonum-design-mockups/

208. Index page loads — all role sections visible (Team Lead, Senior Trader, Trader, Risk Manager, Investor, Admin)
209. "Trader Profile / Analytics" card present in Team Lead section → links to `trader-analytics.html`
210. Performance card description mentions "By API Keys" or "По ключам"

### 16.2 Existing Pages — No Regression
211. `role-workspaces.html` — all 4 role workspace layouts render correctly
212. `team-analytics.html` — Team Analytics and Trade History tabs still work alongside new "По ключам"
213. `risk-management.html` — Команда, Политики, Аналитика РМ tabs still work alongside new "Результативность"
214. `trader-workspace.html` — Overview tab still shows positions table + chart (not broken by Journal changes)
215. `org-structure.html` — tree view, list view, search, expand/collapse all still work

### 16.3 Shared Interactivity (ALL pages)
216. Tab switching works on ALL pages — no blank panels, no stuck tabs
217. Modals open AND close (✕ button, Escape key, outside click)
218. Column sorting works where present (click header → reorder rows)
219. Expand/collapse rows work in hierarchical tables
220. Dark scrollbar styling consistent across all pages (no bright white scrollbars)

---

## Section 17: Visual Comparison with ТЗ Example Screenshots

Compare mockups against the original design examples from Notion. Note deviations:

### 17.1 PnL Chart (trader-analytics.html → Аналитика tab)
**Reference**: Area chart with smooth curve, green fill above zero fading to transparent, red fill below zero. Tooltip: "Общий P&L" + "Суточный P&L" with date.
221. Area fill uses smooth gradient (not flat solid color)
222. Green/red split happens exactly at zero crossing point
223. Tooltip or hover interaction present

### 17.2 Winrate Gauge (trader-analytics.html → Аналитика tab)
**Reference**: Semicircular gauge with thick arc segments (green→yellow→red). Needle at current %. "65%" center, "23 сделки" below.
224. Arc thickness is substantial (thick, not thin line)
225. Three distinct color zones clearly visible
226. Needle is a distinct pointer element (not just a line)
227. Center text: large percentage + trade count subtitle

### 17.3 Calendar (trader-analytics.html → Аналитика tab)
**Reference**: Full month grid. Header: month name + arrows + 4 metrics. Day cells: number in corner + colored bar spanning cell width + value on bar.
228. Calendar grid has 7 columns (Пн–Вс) and 5–6 rows
229. Day number positioned in corner (top-left)
230. Colored bar fills most of cell width (not tiny)
231. Header metrics positioned in a row above the grid

### 17.4 Long/Short Donut (trader-analytics.html → Аналитика tab)
**Reference**: Donut ring, cyan/green = LONG (larger), blue = SHORT (smaller). Labels outside ring. Tooltip: "SHORT: 171 (47.5%)".
232. Donut has visible hole in center (not filled pie)
233. Two segments distinguishable by color
234. Labels positioned outside the ring

### 17.5 Balances Bar Chart (team-analytics.html → По ключам)
**Reference**: Horizontal green bars. Trader names + IDs on left. Dollar values at bar ends. One dominant long bar (81,079).
235. Bar lengths proportional to values (one clearly dominant)
236. Trader names include numeric key IDs in parentheses
237. Dollar values formatted with thousands separator + "$"

### 17.6 Profit Bar Chart (team-analytics.html → По ключам)
**Reference**: Bidirectional bars. Red = loss extends LEFT. Green = profit extends RIGHT. Labels: "−218,00 $ (10)".
238. Zero line clearly separates red (left) from green (right)
239. Trade count in parentheses on each bar label
240. Both red and green bars present

### 17.7 Trade Count Bar Chart (team-analytics.html → По ключам)
**Reference**: All green bars right. Numbers at bar ends (38, 41, 42). Tooltip: key name + count.
241. All bars same green shade
242. Integer count labels (no decimals) on/near bars
243. Bars sorted consistently (descending or ascending)

### 17.8 Trader Profile Layout (trader-analytics.html)
**Reference**: Title "Попап — Аналитика трейдера (Елизавета)". Breadcrumbs. Trader card table. Профайлинг + Торговая стратегия side by side. Calendar + Winrate + PnL chart + Profit widget below.
244. Overall layout matches reference structure (card → documents → analytics grid)
245. Trader card is table-style (label-value pairs), not card-style
246. Document sections have clear upload zones with format notes

---

## Report Format

For each section write:

```
## Section N: [Name]
Mockup: [URL]

### Results:
- Check NN: PASS / FAIL / PARTIAL — comment
- Check NN: ...

### Visual issues found:
- ...

### Status: PASS / PARTIAL / FAIL
```

After ALL 17 sections, write a **Summary Table**:

| # | Section | Page | Status | Critical | Major | Minor |
|---|---------|------|--------|----------|-------|-------|
| 1 | TL Analytics | team-analytics.html | | | | |
| 2 | TL Trading | trading-terminal.html | | | | |
| 3 | TL Performance | team-analytics.html | | | | |
| 4 | TL Risk Management | risk-management.html | | | | |
| 5 | TL Org Structure | org-structure.html | | | | |
| 6 | Trader Overview | trader-workspace.html | | | | |
| 7 | Trader Journal | trader-workspace.html | | | | |
| 8 | RM Analytics | risk-management.html | | | | |
| 9 | RM Risk Management | risk-management.html | | | | |
| 10 | Role Workspaces | role-workspaces.html | | | | |
| 11 | **Trader Profile** (NEW) | trader-analytics.html | | | | |
| 12 | **RM Результативность** (NEW) | risk-management.html | | | | |
| 13 | **Subaccount Widgets** (NEW) | team-analytics.html | | | | |
| 14 | **Journal Enhancements** (UPD) | trader-workspace.html | | | | |
| 15 | **Trader Name Links** (UPD) | team-analytics.html | | | | |
| 16 | Cross-Page / Regression | all pages | | | | |
| 17 | Visual Comparison | all new widgets | | | | |

Then a **Prioritized Fix List**:

### CRITICAL (blocks acceptance)
- ...

### MAJOR (noticeable UX issue)
- ...

### MINOR (polish)
- ...

### SUGGESTIONS (not in ТЗ but would improve)
- ...
