# QA Session 3 — Full Mockup Verification (Phase 1 + Phase 2)

This file contains **17 independent QA prompts** — one per section. Run them one at a time to get fast per-section reports. Each prompt is self-contained.

**Base URL**: https://ipostny.github.io/trigonum-design-mockups/

---

# How to use

Copy-paste each `PROMPT N` block into a new API call (or chat turn). Each prompt will:
1. Open the mockup link
2. Run all numbered checks
3. Return a compact report with PASS/FAIL per check + fix list

After all 17 are done, use the **FINAL SUMMARY** prompt at the bottom to compile results.

---

# PART A — ORIGINAL MOCKUPS (Phase 1)

---

## PROMPT 1: Team Lead — Analytics

```
You are a QA analyst. Open this mockup and verify every check. Report PASS / FAIL / PARTIAL for each with a brief comment.

Mockup: https://ipostny.github.io/trigonum-design-mockups/team-analytics.html
ТЗ: "01_team_lead_analytics" — TL Analytics tab

Checks:
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

Report format:
## Section 1: TL Analytics — team-analytics.html
- Check 1: PASS/FAIL/PARTIAL — comment
- Check 2: ...
Visual issues: ...
Status: PASS / PARTIAL / FAIL
Fix list (CRITICAL / MAJOR / MINOR): ...
```

---

## PROMPT 2: Team Lead — Trading

```
You are a QA analyst. Open this mockup and verify every check. Report PASS / FAIL / PARTIAL for each with a brief comment.

Mockup: https://ipostny.github.io/trigonum-design-mockups/trading-terminal.html
ТЗ: "02_team_lead_trading" — TL Trading tab

Checks:
11. Two top-level tabs visible: Analytics | Trading — active one highlighted
12. Inside Trading: Terminal content visible (chart area, order form, positions)
13. Inside Analytics: sub-tabs for CMP, Long/Short, Fear & Greed, News, Liquidation Map
14. Tab switching works instantly — no blank/empty content after click
15. Active sub-tab visually highlighted (different from inactive)
16. Each sub-tab shows distinct content (not duplicate)

Report format:
## Section 2: TL Trading — trading-terminal.html
- Check 11: PASS/FAIL/PARTIAL — comment
- Check 12: ...
Visual issues: ...
Status: PASS / PARTIAL / FAIL
Fix list (CRITICAL / MAJOR / MINOR): ...
```

---

## PROMPT 3: Team Lead — Performance

```
You are a QA analyst. Open this mockup and verify every check. Report PASS / FAIL / PARTIAL for each with a brief comment.

Mockup: https://ipostny.github.io/trigonum-design-mockups/team-analytics.html
ТЗ: "03_team_lead_performance" — TL Performance tab. Check BOTH sub-tabs: "Team Analytics" and "Trade History".

Checks — "Team Analytics" sub-tab:
17. Period selector: День / Неделя / Месяц / Квартал / Год / Custom
18. Metric cards with thousand separators, green/red coloring by sign
19. Line chart with 7 data points (Mon–Sun), tooltip on hover
20. Hierarchical table: ST rows expand, Trader rows nested underneath
21. Click trader row → shows open trades below (inline expansion)
22. Click trade → trade detail card/modal with chart
23. Sorting works, name search field present, pagination for >50 rows

Checks — "Trade History" sub-tab:
24. Filters row: Трейдер, Старший трейдер, Период, Инструмент, Направление, Статус, Результат + Применить / Сбросить
25. Trade table columns: Трейдер, Инструмент, Позиция, Объём, Плечо, Режим, Цена входа, Стоимость, SL, TP, Нереализ. PnL, Реализ. PnL, Дата входа, Дата обновления, Действие
26. "Подробнее" button per row → opens modal with chart (entry/exit markers), trade params, journal text, change log

Report format:
## Section 3: TL Performance — team-analytics.html
- Check 17: PASS/FAIL/PARTIAL — comment
- Check 18: ...
Visual issues: ...
Status: PASS / PARTIAL / FAIL
Fix list (CRITICAL / MAJOR / MINOR): ...
```

---

## PROMPT 4: Team Lead — Risk Management

```
You are a QA analyst. Open this mockup and verify every check. Report PASS / FAIL / PARTIAL for each with a brief comment.

Mockup: https://ipostny.github.io/trigonum-design-mockups/risk-management.html
ТЗ: "04_team_lead_risk_mgmt" — TL Risk Management tab

Checks:
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

Report format:
## Section 4: TL Risk Management — risk-management.html
- Check 27: PASS/FAIL/PARTIAL — comment
- Check 28: ...
Visual issues: ...
Status: PASS / PARTIAL / FAIL
Fix list (CRITICAL / MAJOR / MINOR): ...
```

---

## PROMPT 5: Team Lead — Org Structure

```
You are a QA analyst. Open this mockup and verify every check. Report PASS / FAIL / PARTIAL for each with a brief comment.

Mockup: https://ipostny.github.io/trigonum-design-mockups/org-structure.html
ТЗ: "05_team_lead_org_structure" — TL Org Structure tab

Checks:
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

Report format:
## Section 5: TL Org Structure — org-structure.html
- Check 38: PASS/FAIL/PARTIAL — comment
- Check 39: ...
Visual issues: ...
Status: PASS / PARTIAL / FAIL
Fix list (CRITICAL / MAJOR / MINOR): ...
```

---

## PROMPT 6: Trader — Overview

```
You are a QA analyst. Open this mockup and verify every check. Report PASS / FAIL / PARTIAL for each with a brief comment.

Mockup: https://ipostny.github.io/trigonum-design-mockups/trader-workspace.html
ТЗ: "06_trader_overview" — Trader Overview tab

Checks:
51. Period selector: День / Неделя / Месяц / Квартал / Год
52. Summary cards: "Капитал под управлением", "Изменение за период" ($ and %)
53. Capital change line chart for selected period
54. Open Positions table columns: Инструмент, Направление (LONG/SHORT), Объём, Цена входа, Текущая цена, P&L $, P&L %, Плечо/Маржа, Длительность, SL/TP
55. Summary above table: "Открытых позиций: N", "Общий плавающий P&L: $ / %"
56. Sorting by all columns
57. Filters: instrument, direction, leverage
58. Click row → position details (modal or expand)
59. PnL: profit green, loss red

Report format:
## Section 6: Trader Overview — trader-workspace.html
- Check 51: PASS/FAIL/PARTIAL — comment
- Check 52: ...
Visual issues: ...
Status: PASS / PARTIAL / FAIL
Fix list (CRITICAL / MAJOR / MINOR): ...
```

---

## PROMPT 7: Trader — Journal

```
You are a QA analyst. Open this mockup and verify every check. Report PASS / FAIL / PARTIAL for each with a brief comment.

Mockup: https://ipostny.github.io/trigonum-design-mockups/trader-workspace.html
ТЗ: "07_trader_journal" — Trader Journal tab. Click "Дневник" tab first, then check BOTH sub-tabs.

Checks — "Торговая система" (Trading System) sub-tab:
60. Rich text editor area (headings, lists, links) for strategy description
61. File upload card: DOC/DOCX/PDF with "Скачать" (Download) button
62. Text above, file card below
63. "Последнее обновление: DD.MM.YY HH:MM, Author" timestamp
64. Trader buttons: Редактировать (Edit), Загрузить файл (Upload), Сохранить (Save), Отмена (Cancel)
65. Save button disabled/grayed until edit mode active

Checks — "История сделок" (Trade History) sub-tab:
66. Filters: Period, Instrument, Direction, Status, Leverage
67. Table columns: Date/Time, Instrument, Direction, Volume, Entry Price, Exit Price, P&L $, P&L %, TP, SL, Entry Reasons
68. Click row → popup with editable fields: Entry Reason, Comment, SL, TP, R:R, Risk per trade
69. PnL coloring: profit green, loss red
70. Empty state: "Нет сделок за выбранный период"

Report format:
## Section 7: Trader Journal — trader-workspace.html
- Check 60: PASS/FAIL/PARTIAL — comment
- Check 61: ...
Visual issues: ...
Status: PASS / PARTIAL / FAIL
Fix list (CRITICAL / MAJOR / MINOR): ...
```

---

## PROMPT 8: Risk Manager — Analytics

```
You are a QA analyst. Open this mockup and verify every check. Report PASS / FAIL / PARTIAL for each with a brief comment.

Mockup: https://ipostny.github.io/trigonum-design-mockups/risk-management.html
ТЗ: "09_risk_mgr_analytics" — RM Analytics tab. Click the "Аналитика РМ" tab first.

Checks:
71. Period selector: День / Неделя / Месяц / Квартал / Год
72. Cards: Капитал под управлением, Изменение за день ($ and %), Изменение за неделю ($ and %)
73. Capital change line chart (last week)
74. Trader table (FLAT, no hierarchy): Трейдер, Капитал, Unrealized PnL, Realized PnL day/week, Кол-во сделок, Max DrawDown
75. Note/indicator that scope is "Only traders assigned to THIS RM"
76. Sorting by any column
77. PnL gradient coloring (red/green)
78. Click trader name → profile link (new tab)
79. Period filter affects all metrics and table

Report format:
## Section 8: RM Analytics — risk-management.html
- Check 71: PASS/FAIL/PARTIAL — comment
- Check 72: ...
Visual issues: ...
Status: PASS / PARTIAL / FAIL
Fix list (CRITICAL / MAJOR / MINOR): ...
```

---

## PROMPT 9: Risk Manager — Risk Management

```
You are a QA analyst. Open this mockup and verify every check. Report PASS / FAIL / PARTIAL for each with a brief comment.

Mockup: https://ipostny.github.io/trigonum-design-mockups/risk-management.html
ТЗ: "08_risk_mgr_rm" — RM Risk Management tab. Check the "Команда" tab content.

Checks:
80. Two sub-tabs: "Команда" (Team) and "Политики" (Policies)
81. Team table columns: Трейдер, Политика РМ (dropdown), Остаток риска (progress bar 0-100%), Предупреждения (clickable count), Принудительные закрытия (clickable count)
82. Action buttons per trader row: "Назначить встречу" (popup: date + note), "Назначить тестирование" (blocks trading), "Запретить торговлю" (toggle/tumbler), "Запретить монеты" (multi-select coins)
83. Click warning/closure counts → popup with filtered trade list
84. Sorting works, filter by status (violations, testing, banned)

Report format:
## Section 9: RM Risk Management — risk-management.html
- Check 80: PASS/FAIL/PARTIAL — comment
- Check 81: ...
Visual issues: ...
Status: PASS / PARTIAL / FAIL
Fix list (CRITICAL / MAJOR / MINOR): ...
```

---

## PROMPT 10: Role Workspaces

```
You are a QA analyst. Open this mockup and verify every check. Report PASS / FAIL / PARTIAL for each with a brief comment.

Mockup: https://ipostny.github.io/trigonum-design-mockups/role-workspaces.html

Checks:
85. Team Lead: 6 tabs — Аналитика, Торговля, Результативность, Риск-менеджмент, Оргструктура, Инвестирование
86. Senior Trader: 4 tabs — Команда, Торговля, Результативность, Риск-менеджмент
87. Trader: 4 tabs — Обзор, Торговля, Результативность, Дневник
88. Risk Manager: 4 tabs — Риск-менеджмент (FIRST), Аналитика, Торговля, Результативность
89. Each role has distinct color badge or visual identifier
90. Active tab visually highlighted (different background/border)

Report format:
## Section 10: Role Workspaces — role-workspaces.html
- Check 85: PASS/FAIL/PARTIAL — comment
- Check 86: ...
Visual issues: ...
Status: PASS / PARTIAL / FAIL
Fix list (CRITICAL / MAJOR / MINOR): ...
```

---

# PART B — NEW PHASE 2 ADDITIONS

---

## PROMPT 11: Trader Profile Page (NEW)

```
You are a QA analyst. Open this mockup and verify every check. Report PASS / FAIL / PARTIAL for each with a brief comment.

Mockup: https://ipostny.github.io/trigonum-design-mockups/trader-analytics.html
ТЗ: "Попап «Аналитика трейдера»" — full trader profile module. Click through ALL tabs and the trade detail modal.

Checks — Navigation & Header:
91. Page title: "Аналитика трейдера — <Имя>" (e.g. "Елизавета")
92. Breadcrumbs: "Результативность → Аналитика команды → <Имя>"
93. Status badge visible (e.g. "Активен")
94. Senior Trader and PM labels shown

Checks — Trader Card:
95. Table format with rows: Трейдер, Субаккаунт, Баланс, Политика РМ
96. Субаккаунт — has dropdown selector (e.g. "eliza.sub1")
97. Баланс — shows numeric value (e.g. "10,000.00 USDT")
98. "Пополнить" button next to balance
99. Политика РМ — dropdown with options (1% Консервативная, 3% Умеренная, 5% Агрессивная)

Checks — Document Sections:
100. "Профайлинг" section with drag&drop upload zone
101. Format note (PDF/DOCX)
102. "Скачать" (Download) button
103. "Торговая стратегия" section — same pattern
104. Both sections side by side

Checks — Analytics Tab — PnL Chart:
105. Two tabs "Аналитика" / "Сделки" — switching works
106. PnL = cumulative AREA chart (not bar, not line-only)
107. Green fill ABOVE zero, Red fill BELOW zero
108. Zero line visible
109. Y-axis value labels
110. X-axis date labels
111. Chart title "График P&L"

Checks — Winrate Gauge:
112. Semicircular gauge (half-circle)
113. Three zones: Green (0-30%), Yellow (30-60%), Red (60-100%)
114. Needle/pointer at current %
115. Large % in center (e.g. "42%")
116. Trade count below (e.g. "360 сделок")
117. Title: "Процент убыточных сделок" or "Винрейт"

Checks — Calendar:
118. Monthly grid (7 columns Пн–Вс)
119. Day cells with colored bars: green=profit, red=loss
120. Amount on each bar ("+79.60 $")
121. Header: Доход (green), Убыток (red), Чистая прибыль, Средн. прибыль/день
122. Month navigation arrows
123. Days without trades = no bar

Checks — Long/Short Donut:
124. Donut ring (not filled pie)
125. Green = LONG, Blue = SHORT
126. Labels with counts + percentages
127. e.g. "LONG: 189 (52.5%)", "SHORT: 171 (47.5%)"
128. Total trade count visible

Checks — Trades Tab:
129. Click "Сделки" → trade history
130. Filters: Date, Instrument, Direction, Status
131. Apply + Reset buttons
132. Columns: Дата, Инструмент, Направление, Объём, Плечо, Цена входа, Цена выхода, P&L ($), P&L (%), SL, TP
133. PnL green/red coloring
134. "Подробнее" button per row
135. Click → opens trade detail modal

Checks — Trade Detail Modal:
136. Chart area with price chart placeholder
137. Entry/Exit/SL/TP markers
138. Params: Трейдер, Инструмент, Направление, Объём, Плечо, Режим, Цена входа/выхода, SL, TP, PnL
139. "Описание из дневника" section
140. "История изменений" section
141. Close: ✕ button, Escape, outside click

Report format:
## Section 11: Trader Profile — trader-analytics.html
- Check 91: PASS/FAIL/PARTIAL — comment
- Check 92: ...
Visual issues: ...
Status: PASS / PARTIAL / FAIL
Fix list (CRITICAL / MAJOR / MINOR): ...
```

---

## PROMPT 12: RM Результативность Tab (NEW)

```
You are a QA analyst. Open this mockup and verify every check. Report PASS / FAIL / PARTIAL for each with a brief comment.

Mockup: https://ipostny.github.io/trigonum-design-mockups/risk-management.html
ТЗ: "Вкладка Результативность" for Risk Manager. Click the "Результативность" tab, then check both sub-tabs inside.

Checks — Tab Existence:
142. Four top-level tabs: "Команда", "Политики", "Аналитика РМ", "Результативность"
143. Click "Результативность" → Performance content appears
144. Inside: two sub-tabs (pills): "Аналитика команды" and "История сделок"

Checks — Аналитика команды:
145. Period pills: День / Неделя / Месяц / Квартал / Год
146. Card: "Капитал под управлением" (large number, thousands separator)
147. Card: "Изменение за день" — value + %, green/red
148. Capital change line chart (7 points, Mon-Sun)
149. Flat trader table (NO hierarchy — RM scope only)
150. Columns: Трейдер, Капитал, Unrealized PnL, Realized PnL, Кол-во сделок, Max DrawDown
151. PnL green/red coloring
152. Column sorting works
153. Trader names = clickable cyan links

Checks — История сделок:
154. Click "История сделок" pill → trade history
155. Filters: Трейдер, Период, Инструмент, Направление, Статус
156. Apply + Reset buttons
157. Columns: Трейдер, Инструмент, Позиция, Объём, Плечо, Режим, Цена входа, Стоимость, SL, TP, Нереализ. PnL, Реализ. PnL, Дата входа, Дата обновления, Действие
158. "Подробнее" button per row
159. Click → trade detail modal opens
160. PnL green/red coloring

Checks — No Regression:
161. "Команда" tab still works (risk table + action buttons)
162. "Политики" tab still works
163. "Аналитика РМ" tab still works
164. No visual breakage

Report format:
## Section 12: RM Результативность — risk-management.html
- Check 142: PASS/FAIL/PARTIAL — comment
- Check 143: ...
Visual issues: ...
Status: PASS / PARTIAL / FAIL
Fix list (CRITICAL / MAJOR / MINOR): ...
```

---

## PROMPT 13: Subaccount Widgets — По ключам (NEW)

```
You are a QA analyst. Open this mockup and verify every check. Report PASS / FAIL / PARTIAL for each with a brief comment.

Mockup: https://ipostny.github.io/trigonum-design-mockups/team-analytics.html
ТЗ: "Балансы по субаккаунтам", "Прибыль по субаккаунтам", "Счетчик сделок по субаккаунтам". Click the "По ключам" sub-tab.

Checks — Tab Access:
165. Three sub-tabs visible: "Team Analytics", "Trade History", "По ключам"
166. Click "По ключам" → subaccount widgets appear

Checks — Balances by API Key:
167. Title: "Балансы по API-ключам трейдеров"
168. Total balance header (large number, e.g. "200,001.00 $")
169. Horizontal green bars
170. Labels: trader name + key ID (e.g. "Nikita (438081106)")
171. Value on/near each bar (e.g. "81,079.00 $")
172. Sorted by descending balance
173. Horizontal axis with scale

Checks — Profit by API Key:
174. Title: "Прибыль по каждому API-ключу ($)"
175. Bidirectional bars: GREEN right (profit), RED left (loss)
176. Zero line clearly visible
177. Labels: key + ID, value + trade count "(10)"
178. Both positive and negative values present
179. Sorted consistently

Checks — Trade Count by API Key:
180. Title: "Счетчик сделок по API-ключу"
181. All-green horizontal bars
182. Labels: key + ID, count number (e.g. "42")
183. Sorted by descending count
184. Same green color for all

Checks — General:
185. All three widgets stacked vertically
186. Dark theme, consistent card borders
187. Readable white/light text
188. Numbers with thousand separators, 2 decimals for money

Report format:
## Section 13: Subaccount Widgets — team-analytics.html
- Check 165: PASS/FAIL/PARTIAL — comment
- Check 166: ...
Visual issues: ...
Status: PASS / PARTIAL / FAIL
Fix list (CRITICAL / MAJOR / MINOR): ...
```

---

## PROMPT 14: Trader Journal Enhancements (UPDATE)

```
You are a QA analyst. Open this mockup and verify every check. Report PASS / FAIL / PARTIAL for each with a brief comment.

Mockup: https://ipostny.github.io/trigonum-design-mockups/trader-workspace.html
ТЗ: "Дневник трейдера" — enhanced Trading System + Trade History. Click "Дневник" tab first.

Checks — Access:
189. Click "Дневник" tab → journal content
190. Two sub-tabs: "Торговая система" and "История сделок"

Checks — Trading System sub-tab:
191. Rich text editor area (headings, lists, text)
192. "Последнее обновление" timestamp with date + author
193. File card with file name (e.g. "стратегия_скальпинг_v3.docx")
194. Format note: PDF/DOCX
195. "Скачать" (Download) button
196. Buttons: "Редактировать" (Edit), "Загрузить файл" (Upload)
197. "Сохранить" (Save) — disabled/grayed
198. "Отмена" (Cancel)

Checks — Trade History sub-tab:
199. Click "История сделок" → trade table
200. Filters: Period, Instrument, Direction, Status, Leverage
201. Table includes "Причины входа" (Entry Reasons) column
202. Click row → popup with editable fields (Reason, Comment, SL, TP, R:R, Risk)
203. PnL green/red coloring

Report format:
## Section 14: Journal Enhancements — trader-workspace.html
- Check 189: PASS/FAIL/PARTIAL — comment
- Check 190: ...
Visual issues: ...
Status: PASS / PARTIAL / FAIL
Fix list (CRITICAL / MAJOR / MINOR): ...
```

---

## PROMPT 15: Trader Name Links (UPDATE)

```
You are a QA analyst. Open this mockup and verify every check. Report PASS / FAIL / PARTIAL for each with a brief comment.

Mockup: https://ipostny.github.io/trigonum-design-mockups/team-analytics.html
Check the Team Analytics hierarchical table.

Checks:
204. Trader names styled as links (cyan/teal color)
205. Links href → trader-analytics.html
206. Links open in new tab (target="_blank")
207. Senior Trader names clickable too (optional — note if present)

Report format:
## Section 15: Trader Name Links — team-analytics.html
- Check 204: PASS/FAIL/PARTIAL — comment
- Check 205: ...
Visual issues: ...
Status: PASS / PARTIAL / FAIL
Fix list (CRITICAL / MAJOR / MINOR): ...
```

---

## PROMPT 16: Index Page & Cross-Page Regression

```
You are a QA analyst. Open EACH page listed below and verify. Report PASS / FAIL / PARTIAL for each with a brief comment.

Checks — Index Page (https://ipostny.github.io/trigonum-design-mockups/):
208. Index loads — all role sections visible (TL, ST, Trader, RM, Investor, Admin)
209. "Trader Profile / Analytics" card in TL section → links to trader-analytics.html
210. Performance card mentions "By API Keys" or "По ключам"

Checks — No Regression (open each page):
211. role-workspaces.html — 4 role workspace layouts render
212. team-analytics.html — Team Analytics + Trade History tabs work alongside "По ключам"
213. risk-management.html — Команда, Политики, Аналитика РМ work alongside "Результативность"
214. trader-workspace.html — Overview tab works (not broken by Journal changes)
215. org-structure.html — tree, list, search, expand/collapse work

Checks — Shared Interactivity (test on any 2-3 pages):
216. Tab switching — no blank panels, no stuck tabs
217. Modals open AND close (✕, Escape, outside click)
218. Column sorting works
219. Expand/collapse rows in hierarchical tables
220. Dark scrollbar styling (no bright white scrollbars)

Report format:
## Section 16: Cross-Page Regression
- Check 208: PASS/FAIL/PARTIAL — comment
- Check 209: ...
Visual issues: ...
Status: PASS / PARTIAL / FAIL
Fix list (CRITICAL / MAJOR / MINOR): ...
```

---

## PROMPT 17: Visual Comparison with ТЗ Screenshots

```
You are a QA analyst. Compare each mockup widget against its reference description. Report how closely it matches.

Check — PnL Chart (trader-analytics.html → Аналитика tab):
Reference: Area chart, smooth curve, green fill above zero fading to transparent, red below. Tooltip: "Общий P&L" + "Суточный P&L".
221. Smooth gradient fill (not flat solid)
222. Green/red split at exact zero crossing
223. Tooltip or hover present

Check — Winrate Gauge (trader-analytics.html → Аналитика tab):
Reference: Semicircular, thick arc (green→yellow→red). Needle at %. "65%" center, "23 сделки" below.
224. Thick arc segments
225. Three distinct color zones
226. Needle is distinct pointer
227. Large % + trade count subtitle

Check — Calendar (trader-analytics.html → Аналитика tab):
Reference: Full month grid. Header: month + arrows + 4 metrics. Day: number corner + wide colored bar + value.
228. 7 columns (Пн–Вс), 5–6 rows
229. Day number in top-left corner
230. Bar fills most of cell width
231. Header metrics in a row

Check — Long/Short Donut (trader-analytics.html → Аналитика tab):
Reference: Donut ring, cyan/green LONG, blue SHORT. Labels outside. Tooltip: "SHORT: 171 (47.5%)".
232. Visible hole in center
233. Two distinguishable colors
234. Labels outside ring

Check — Balances Chart (team-analytics.html → По ключам):
Reference: Green horizontal bars, names+IDs left, $ values at ends. One dominant bar (81,079).
235. Proportional bar lengths
236. Names include key IDs in ()
237. $ with thousands separator

Check — Profit Chart (team-analytics.html → По ключам):
Reference: Bidirectional. Red left, green right. Labels: "−218,00 $ (10)".
238. Clear zero line separation
239. Trade count in () on labels
240. Both red + green bars present

Check — Trade Count Chart (team-analytics.html → По ключам):
Reference: All green right bars. Integers at ends (38, 41, 42).
241. Same green shade all bars
242. Integer labels (no decimals)
243. Consistent sort order

Check — Trader Profile Layout (trader-analytics.html):
Reference: Title → breadcrumbs → trader card table → docs side-by-side → analytics 2×2 grid.
244. Layout: card → documents → analytics grid
245. Trader card = table-style (label-value pairs)
246. Upload zones with format notes

Report format:
## Section 17: Visual Comparison
- Check 221: PASS/FAIL/PARTIAL — comment
- Check 222: ...
Visual issues: ...
Status: PASS / PARTIAL / FAIL
Fix list (CRITICAL / MAJOR / MINOR): ...
```

---

# FINAL SUMMARY PROMPT

After running all 17 prompts above, use this prompt to compile the final summary:

```
You are a QA analyst. Compile these 17 section reports into a final summary.

Fill in this table from the section reports:

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
| 16 | Cross-Page Regression | all pages | | | | |
| 17 | Visual Comparison | all new widgets | | | | |

Then write the consolidated fix list:

### CRITICAL (blocks acceptance)
### MAJOR (noticeable UX issue)
### MINOR (polish)
### SUGGESTIONS (not in ТЗ but would improve)
```
