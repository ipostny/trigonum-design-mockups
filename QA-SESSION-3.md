# QA Session 3 — Phase 2 Verification

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

## Section 1: Trader Profile Page (NEW — Priority 1)

**Mockup**: https://ipostny.github.io/trigonum-design-mockups/trader-analytics.html
**ТЗ**: "Попап «Аналитика трейдера»" — full trader profile module

### 1.1 Navigation & Header
1. Page title: "Аналитика трейдера — <Имя>" (e.g. "Елизавета")
2. Breadcrumbs present: "Результативность → Аналитика команды → <Имя>"
3. Status badge visible (e.g. "Активен" / "На паузе")
4. Senior Trader and PM labels shown

### 1.2 Trader Card (table layout)
5. Table format with rows: Трейдер, Субаккаунт, Баланс, Политика РМ
6. Субаккаунт — has dropdown selector (e.g. "eliza.sub1")
7. Баланс — shows numeric value (e.g. "10,000.00 USDT")
8. "Пополнить" button next to balance (top-up / increase balance)
9. Политика риск-менеджмента — dropdown with policy options (e.g. "1% — Консервативная", "3% — Умеренная", "5% — Агрессивная")

### 1.3 Document Sections
10. "Профайлинг" section present with drag&drop upload zone
11. Format note shown (PDF/DOCX)
12. "Скачать" (Download) button visible
13. "Торговая стратегия" section — same upload pattern as Профайлинг
14. Both sections side by side (or stacked on narrow)

### 1.4 Analytics Tab — PnL Chart
15. Two main tabs: "Аналитика" and "Сделки" — tab switching works
16. PnL chart is a cumulative AREA chart (not bar chart, not line-only)
17. Green fill ABOVE zero line, Red fill BELOW zero line
18. Zero line visible as horizontal reference
19. Y-axis has value labels (e.g. -600, -400, ..., 400, 600)
20. X-axis has date labels
21. Chart title: "График P&L" or similar

### 1.5 Analytics Tab — Winrate Gauge
22. Semicircular gauge (half-circle, not full circle)
23. Three colored zones: Green (0-30%), Yellow (30-60%), Red (60-100%)
24. Needle/pointer indicating current percentage
25. Large percentage number in center (e.g. "42%")
26. Trade count below percentage (e.g. "из 360 сделок" or "360 сделок")
27. Title: "Процент убыточных сделок" or "Винрейт"

### 1.6 Analytics Tab — Calendar
28. Monthly calendar grid (7 columns: Пн-Вс)
29. Day cells with colored bars: green for profit days, red for loss days
30. Amount label on each bar (e.g. "+79.60 $" or "−52.19 $")
31. Month header with: Доход (green), Убыток (red), Чистая прибыль, Средн. прибыль/день
32. Month navigation arrows (« Prev / Next »)
33. Days without trades have no colored bar

### 1.7 Analytics Tab — Long/Short Donut
34. Donut chart (ring, not filled pie)
35. Two segments: Green = LONG, Blue = SHORT
36. Labels "LONG" and "SHORT" visible with counts and percentages
37. Example: "LONG: 189 (52.5%)", "SHORT: 171 (47.5%)"
38. Total trade count visible (e.g. "360 сделок")

### 1.8 Trades Tab
39. Click "Сделки" tab — switches to trade history view
40. Filter row: Date range, Instrument, Direction, Status dropdowns
41. Apply + Reset filter buttons
42. Trade table columns: Дата, Инструмент, Направление, Объём, Плечо, Цена входа, Цена выхода, P&L ($), P&L (%), SL, TP
43. PnL coloring: positive values green, negative values red
44. "Подробнее" (Details) button per row
45. Click "Подробнее" → opens trade detail modal

### 1.9 Trade Detail Modal
46. Modal opens with chart area (instrument price chart placeholder)
47. Entry/Exit/SL/TP markers or labels on chart
48. Parameters block: Трейдер, Инструмент, Направление, Объём, Плечо, Режим, Цена входа, Цена выхода, SL, TP, PnL
49. "Описание из дневника" section (journal text)
50. "История изменений" section (change log entries)
51. Close button (✕) works, Escape key closes modal, clicking outside closes modal

---

## Section 2: RM Результативность Tab (NEW — Priority 2)

**Mockup**: https://ipostny.github.io/trigonum-design-mockups/risk-management.html
**ТЗ**: "Вкладка Результативность" for Risk Manager

### 2.1 Tab Existence
52. Four top-level tabs visible: "Команда", "Политики", "Аналитика РМ", "Результативность"
53. Click "Результативность" — switches to Performance content
54. Inside: two sub-tabs (pills): "Аналитика команды" and "История сделок"

### 2.2 Аналитика команды Sub-tab
55. Period selector pills: День / Неделя / Месяц / Квартал / Год
56. Summary cards: "Капитал под управлением" (large number with thousands separator)
57. "Изменение за день" card — absolute value + percentage, colored green/red by sign
58. Capital change line chart (7 data points, Mon-Sun)
59. Flat trader table (NO hierarchy — RM sees only assigned traders, no Senior Trader grouping)
60. Table columns: Трейдер, Капитал, Unrealized PnL, Realized PnL, Кол-во сделок, Max DrawDown
61. PnL values colored green (profit) / red (loss)
62. Sorting works on column headers (click to sort)
63. Trader names are clickable links (cyan color, open trader profile)

### 2.3 История сделок Sub-tab
64. Click "История сделок" pill — switches to trade history
65. Filter row with dropdowns: Трейдер, Период, Инструмент, Направление, Статус
66. Apply + Reset buttons
67. Trade table with columns: Трейдер, Инструмент, Позиция, Объём, Плечо, Режим, Цена входа, Стоимость, SL, TP, Нереализ. PnL, Реализ. PnL, Дата входа, Дата обновления, Действие
68. "Подробнее" button per row
69. Click "Подробнее" → trade detail modal opens (same pattern as Section 1.9)
70. PnL coloring: green/red by sign

### 2.4 Existing Tabs Still Work
71. "Команда" tab still shows team table with risk progress bars and action buttons
72. "Политики" tab still shows policy cards/list
73. "Аналитика РМ" tab still shows RM analytics with flat trader table
74. No visual regression — all existing content preserved

---

## Section 3: Subaccount Widgets — По ключам (NEW — Priority 3)

**Mockup**: https://ipostny.github.io/trigonum-design-mockups/team-analytics.html
**ТЗ**: "Балансы по субаккаунтам", "Прибыль по субаккаунтам", "Счетчик сделок по субаккаунтам"

### 3.1 Tab Access
75. Three sub-tabs visible: "Team Analytics", "Trade History", "По ключам"
76. Click "По ключам" — switches to subaccount widgets view

### 3.2 Balances by API Key Widget
77. Title: "Балансы по API-ключам трейдеров" or similar
78. Total balance header (large number, e.g. "200,001.00 $")
79. Horizontal bar chart — green bars
80. Each bar labeled with: trader name + key ID on left (e.g. "Nikita (438081106)")
81. Value label on/near each bar (e.g. "81,079.00 $")
82. Bars sorted by descending balance (longest on top or bottom)
83. Horizontal value axis with scale labels

### 3.3 Profit by API Key Widget
84. Title: "Прибыль по каждому API-ключу ($)" or similar
85. Bidirectional horizontal bars: GREEN bars extend RIGHT from zero (profit), RED bars extend LEFT from zero (loss)
86. Zero line (vertical center divider) clearly visible
87. Each bar labeled: key name + ID on left, value + trade count (e.g. "−218.00 $ (10)") on bar
88. Both positive and negative values present in sample data
89. Bars sorted (e.g. by descending profit or ascending loss)

### 3.4 Trade Count by API Key Widget
90. Title: "Счетчик сделок по API-ключу" or similar
91. Horizontal green bars (single direction, all positive)
92. Each bar labeled with: key name + ID on left, trade count number on/near bar (e.g. "42")
93. Bars sorted by descending trade count
94. All bars same green color

### 3.5 General Widget Checks
95. All three widgets stacked vertically (not overlapping)
96. Consistent styling: dark theme, matching card/section borders
97. Readable text: white/light labels on dark background
98. Numbers formatted with thousand separators and 2 decimal places (for monetary values)

---

## Section 4: Trader Journal Enhancements (UPDATE — Priority 4)

**Mockup**: https://ipostny.github.io/trigonum-design-mockups/trader-workspace.html
**ТЗ**: "Дневник трейдера" — Trading System + Trade History sub-tabs

### 4.1 Access Journal Tab
99. Click "Дневник" tab in trader workspace — shows journal content
100. Two sub-tabs inside: "Торговая система" and "История сделок"

### 4.2 Trading System Sub-tab
101. Rich text editor area with strategy description (headings, lists, text)
102. "Последнее обновление" (Last updated) timestamp line with date + author name
103. File upload card showing uploaded file name (e.g. "стратегия_скальпинг_v3.docx")
104. File format note: PDF/DOCX
105. "Скачать" (Download) button on file card
106. Action buttons: "Редактировать" (Edit), "Загрузить файл" (Upload file)
107. "Сохранить" (Save) button present — should appear disabled/grayed until edit mode
108. "Отмена" (Cancel) button present

### 4.3 Trade History Sub-tab
109. Click "История сделок" sub-tab — shows trade history
110. Filter row: Period, Instrument, Direction, Status, Leverage
111. Trade table with columns including editable "Причины входа" (Entry Reasons)
112. Click row → popup with editable fields (Entry Reason, Comment, SL, TP, R:R, Risk per trade)
113. PnL coloring: profit green, loss red

---

## Section 5: Trader Name Links in Team Analytics (UPDATE)

**Mockup**: https://ipostny.github.io/trigonum-design-mockups/team-analytics.html

### 5.1 Clickable Trader Names
114. In the Team Analytics hierarchical table, trader names are styled as links (cyan/teal color)
115. Trader name links point to `trader-analytics.html` (check href or onclick)
116. Links open in new tab (target="_blank") or same-window navigation
117. Senior Trader names may also be clickable (optional)

---

## Section 6: Cross-Page Verification

### 6.1 Index Page
118. Open https://ipostny.github.io/trigonum-design-mockups/ — index loads
119. "Trader Profile / Analytics" card present in Team Lead section
120. Card links to `trader-analytics.html`
121. Performance card description mentions "By API Keys" or "По ключам"

### 6.2 Existing Pages — No Regression
122. `role-workspaces.html` — all 4 role workspace layouts still render correctly
123. `team-analytics.html` — Team Analytics and Trade History tabs still work (not broken by "По ключам" addition)
124. `risk-management.html` — Команда, Политики, Аналитика РМ tabs still work (not broken by Результативность addition)
125. `trader-workspace.html` — Overview tab still shows positions table and chart (not broken by Journal changes)
126. `org-structure.html` — tree view, list view, search, expand/collapse still work

### 6.3 Shared Interactivity
127. Tab switching works on ALL pages (no blank panels, no stuck tabs)
128. Modals open AND close (✕ button, Escape key, outside click)
129. Column sorting works where present (click header → reorder)
130. Expand/collapse rows work in hierarchical tables
131. Dark scrollbar styling consistent (no bright white scrollbars)

---

## Section 7: Visual Comparison with Example Screenshots

Compare the mockups against the original design examples. Note differences:

### 7.1 PnL Chart (trader-analytics.html → Аналитика tab)
**Reference**: Area chart with smooth curve, green fill above zero fading to transparent, red fill below zero fading to transparent. Tooltip shows "Общий P&L" and "Суточный P&L" with date.
132. Area fill is smooth gradient (not flat solid color)
133. Green/red split happens exactly at the zero crossing point
134. Tooltip or hover interaction present

### 7.2 Winrate Gauge (trader-analytics.html → Аналитика tab)
**Reference**: Semicircular gauge with thick colored arc segments (green→yellow→red from left to right). Needle pointing to current %. Large "65%" in center, "23 сделки" below.
135. Arc thickness matches reference (thick, not thin line)
136. Three distinct color zones clearly visible
137. Needle is a distinct pointer element (not just a line)
138. Center text: large percentage + trade count subtitle

### 7.3 Calendar (trader-analytics.html → Аналитика tab)
**Reference**: Full month grid. Header row: month name + navigation arrows + 4 metrics (Доход green, Убыток red, Чистая прибыль, Средн. прибыль/день). Day cells: number in corner, colored horizontal bar spanning cell width, value on bar.
139. Calendar grid has 7 columns (Mon-Sun) and 5-6 rows
140. Day number positioned in corner (top-left)
141. Colored bar fills most of cell width (not tiny)
142. Header metrics positioned in a row above the grid

### 7.4 Long/Short Donut (trader-analytics.html → Аналитика tab)
**Reference**: Donut ring with two colors (larger cyan/green segment for LONG, smaller blue segment for SHORT). Labels outside ring. Tooltip: "SHORT: 171 (47.5%)".
143. Donut ring has visible hole in center (not filled pie)
144. Two segments clearly distinguishable by color
145. Labels positioned outside the ring (not overlapping chart)

### 7.5 Balances Bar Chart (team-analytics.html → По ключам)
**Reference**: Horizontal green bars, trader names with IDs on Y-axis left, dollar values at end of bars. Scale on X-axis bottom. One very long bar (81,079) dominates.
146. Bar lengths proportional to values (one clearly dominant bar)
147. Trader names include numeric key IDs in parentheses
148. Dollar values formatted with thousands separator and "$"

### 7.6 Profit Bar Chart (team-analytics.html → По ключам)
**Reference**: Bidirectional bars. Red bars (losses) extend LEFT from center. Green bars (profits) extend RIGHT. Value + trade count labels: "−218,00 $ (10)".
149. Zero line clearly separates red (left) from green (right)
150. Trade count in parentheses shown on each bar label
151. Both red and green bars present in the data

### 7.7 Trade Count Bar Chart (team-analytics.html → По ключам)
**Reference**: All green bars extending right. Numbers shown at end of bars (e.g. "38", "41", "42"). Tooltip on hover shows key name + count.
152. All bars same green shade
153. Integer count labels (no decimals) on or near bars
154. Bars sorted by count (descending or ascending consistently)

---

## Report Format

For each section, write:

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

After all 7 sections, write a **Summary Table**:

| # | Section | Status | Critical | Major | Minor |
|---|---------|--------|----------|-------|-------|
| 1 | Trader Profile | | | | |
| 2 | RM Результативность | | | | |
| 3 | Subaccount Widgets | | | | |
| 4 | Journal Enhancements | | | | |
| 5 | Trader Name Links | | | | |
| 6 | Cross-Page / Regression | | | | |
| 7 | Visual Comparison | | | | |

Then a **Prioritized Fix List**:

### CRITICAL (blocks acceptance)
- ...

### MAJOR (noticeable UX issue)
- ...

### MINOR (polish)
- ...

### SUGGESTIONS (not in ТЗ but would improve)
- ...
