# QA Session 3 — Optimized (6 Prompts)

Grouped by PAGE — each prompt opens ONE page and checks everything on it in a single pass.
Phase 1 items already verified in QA Session 2 are reduced to quick regression spots (marked with 🔄).
Phase 2 NEW items get full detailed checks (marked with ⭐).

---

## PROMPT 1 of 6: team-analytics.html

```
You are a QA analyst. Open this ONE page and check everything listed below in a single pass. Click through all tabs. Report PASS/FAIL/PARTIAL per check.

Page: https://ipostny.github.io/trigonum-design-mockups/team-analytics.html

QUICK REGRESSION (Phase 1 — already passed QA2, just confirm no breakage):
R1. Three sub-tabs visible and switching works: "Team Analytics", "Trade History", + new "По ключам"
R2. Team Analytics tab: summary cards + chart + hierarchical table still render
R3. Expand/collapse rows, sorting, period pills still functional
R4. Trade History tab: filters + trade table + "Подробнее" modal still work
R5. PnL coloring green/red still applied

NEW CHECKS (Phase 2):
N1. ⭐ Trader names in table are cyan-colored clickable links
N2. ⭐ Links href contains "trader-analytics.html"
N3. ⭐ Links have target="_blank"
N4. ⭐ Click "По ключам" tab — subaccount widgets appear
N5. ⭐ Widget 1 "Балансы по API-ключам": title + total balance header + horizontal GREEN bars
N6. ⭐ Bars labeled: trader name + key ID on left (e.g. "Nikita (438081106)"), dollar value on bar
N7. ⭐ Bars sorted by descending balance, proportional lengths
N8. ⭐ Widget 2 "Прибыль по API-ключу": BIDIRECTIONAL bars — green RIGHT (profit), red LEFT (loss)
N9. ⭐ Zero line visible separating red/green sides
N10. ⭐ Bar labels include value + trade count in parentheses, e.g. "−218.00 $ (10)"
N11. ⭐ Widget 3 "Счетчик сделок": all-green horizontal bars with integer count labels
N12. ⭐ All three widgets stacked vertically, dark theme, readable text
N13. ⭐ Money values have thousand separators + 2 decimals

Report:
## Page 1: team-analytics.html
Regression: R1-R5 — PASS/FAIL each (one line)
New checks: N1-N13 — PASS/FAIL each with comment
Visual issues: ...
Fix list (CRITICAL/MAJOR/MINOR): ...
```

---

## PROMPT 2 of 6: risk-management.html

```
You are a QA analyst. Open this ONE page and check everything listed below in a single pass. Click through ALL 4 top-level tabs. Report PASS/FAIL/PARTIAL per check.

Page: https://ipostny.github.io/trigonum-design-mockups/risk-management.html

QUICK REGRESSION (Phase 1):
R1. Four top-level tabs present: "Команда", "Политики", "Аналитика РМ", "Результативность"
R2. Команда tab: summary panel + status chips + team table with progress bars + action buttons
R3. Action buttons per row: Assign Meeting, Assign Testing, Ban Trading (toggle), Ban Coins (multi-select)
R4. Policy dropdown in table cells works
R5. Политики tab: policy content renders
R6. Аналитика РМ tab: period pills + cards + chart + flat trader table, PnL coloring

NEW CHECKS — Результативность tab (Phase 2):
N1. ⭐ Click "Результативность" → content appears (not blank)
N2. ⭐ Two sub-tabs (pills): "Аналитика команды" and "История сделок"
N3. ⭐ Аналитика команды: period pills День/Неделя/Месяц/Квартал/Год
N4. ⭐ Summary cards: "Капитал под управлением" (large number, thousands sep) + "Изменение за день" (value + %, green/red)
N5. ⭐ Capital change line chart (7 points)
N6. ⭐ FLAT trader table (no hierarchy — only assigned traders)
N7. ⭐ Columns: Трейдер, Капитал, Unrealized PnL, Realized PnL, Кол-во сделок, Max DrawDown
N8. ⭐ PnL green/red coloring applied
N9. ⭐ Sorting on column headers
N10. ⭐ Trader names = clickable cyan links
N11. ⭐ Click "История сделок" pill → trade history
N12. ⭐ Filters: Трейдер, Период, Инструмент, Направление, Статус + Apply/Reset
N13. ⭐ Trade table with full columns (Трейдер through Действие)
N14. ⭐ "Подробнее" button → trade detail modal opens and closes (✕, Escape, outside)

Report:
## Page 2: risk-management.html
Regression: R1-R6 — PASS/FAIL each
New checks: N1-N14 — PASS/FAIL each with comment
Visual issues: ...
Fix list (CRITICAL/MAJOR/MINOR): ...
```

---

## PROMPT 3 of 6: trader-analytics.html (ENTIRELY NEW)

```
You are a QA analyst. Open this NEW page and check everything. This is the most important page — check thoroughly. Click both tabs + open the trade detail modal.

Page: https://ipostny.github.io/trigonum-design-mockups/trader-analytics.html

HEADER & NAVIGATION:
1. Page title: "Аналитика трейдера — Елизавета" (or similar name)
2. Breadcrumbs: "Результативность → Аналитика команды → <Имя>"
3. Status badge "Активен" visible
4. Senior Trader + PM labels shown

TRADER CARD:
5. Table layout: Трейдер, Субаккаунт (dropdown), Баланс (number + USDT), Политика РМ (dropdown)
6. "Пополнить" button next to balance
7. RM policy dropdown has options (1% Conservative, 3% Moderate, 5% Aggressive)

DOCUMENT SECTIONS:
8. "Профайлинг" section: drag&drop zone + format note (PDF/DOCX) + "Скачать" button
9. "Торговая стратегия" section: same pattern
10. Side by side layout

ANALYTICS TAB — PnL CHART:
11. Two tabs "Аналитика" / "Сделки" — switching works
12. Cumulative AREA chart (not bars, not line-only)
13. Green fill above zero, red fill below zero
14. Zero line visible, Y-axis labels, X-axis dates
15. Title "График P&L"

ANALYTICS TAB — WINRATE GAUGE:
16. Semicircular gauge (half-circle, not full)
17. Three color zones: green (0-30%), yellow (30-60%), red (60-100%)
18. Needle/pointer at current %
19. Large % number center + trade count below
20. Title "Процент убыточных сделок" or "Винрейт"

ANALYTICS TAB — CALENDAR:
21. Monthly grid 7 columns (Пн–Вс), 5-6 rows
22. Day cells: colored bars (green=profit, red=loss) with amount labels
23. Header: Доход (green), Убыток (red), Чистая прибыль, Средн. прибыль/день
24. Month navigation arrows (« »)

ANALYTICS TAB — LONG/SHORT DONUT:
25. Donut ring (hole in center, not filled pie)
26. Green=LONG, Blue=SHORT segments
27. Labels with counts + percentages outside ring
28. Total trade count visible

TRADES TAB:
29. Click "Сделки" — trade history with filters (Date, Instrument, Direction, Status)
30. Apply + Reset buttons
31. Table: Дата, Инструмент, Направление, Объём, Плечо, Цена входа/выхода, P&L, SL, TP
32. PnL green/red coloring
33. "Подробнее" button per row → opens modal

TRADE DETAIL MODAL:
34. Chart placeholder with Entry/Exit/SL/TP markers
35. Params grid: all trade parameters listed
36. "Описание из дневника" section
37. "История изменений" section
38. Close: ✕ button + Escape + outside click all work

Report:
## Page 3: trader-analytics.html (NEW)
- Check 1-38: PASS/FAIL/PARTIAL each with comment
Visual issues: ...
Fix list (CRITICAL/MAJOR/MINOR): ...
```

---

## PROMPT 4 of 6: trader-workspace.html

```
You are a QA analyst. Open this page and check everything. Click through Overview tab, then Дневник tab with both sub-tabs.

Page: https://ipostny.github.io/trigonum-design-mockups/trader-workspace.html

QUICK REGRESSION — Overview tab (Phase 1):
R1. Period selector + summary cards + capital chart render
R2. Open positions table with correct columns, PnL coloring
R3. Sorting and filters functional

NEW CHECKS — Journal tab (Phase 2 enhancements):
N1. ⭐ Click "Дневник" tab → journal content appears
N2. ⭐ Two sub-tabs: "Торговая система" and "История сделок"
N3. ⭐ Trading System: rich text editor area with strategy content
N4. ⭐ "Последнее обновление" timestamp with date + author name
N5. ⭐ File card showing file name (e.g. "стратегия_скальпинг_v3.docx")
N6. ⭐ Format note PDF/DOCX visible
N7. ⭐ "Скачать" (Download) button on file card
N8. ⭐ Buttons: "Редактировать" (Edit), "Загрузить файл" (Upload)
N9. ⭐ "Сохранить" (Save) button — appears disabled/grayed
N10. ⭐ "Отмена" (Cancel) button present
N11. ⭐ Click "История сделок" sub-tab → trade table with filters
N12. ⭐ PnL green/red coloring in trade table

Report:
## Page 4: trader-workspace.html
Regression: R1-R3 — PASS/FAIL each
New checks: N1-N12 — PASS/FAIL each with comment
Visual issues: ...
Fix list (CRITICAL/MAJOR/MINOR): ...
```

---

## PROMPT 5 of 6: org-structure.html + role-workspaces.html

```
You are a QA analyst. Open BOTH pages below and check. These are regression-only — no Phase 2 changes were made to these pages.

Page 1: https://ipostny.github.io/trigonum-design-mockups/org-structure.html
R1. List/Tree toggle works
R2. Tree renders: TL root → Investor dashed lines → ST+RM pairs → Traders
R3. Expand/collapse + "Раскрыть все/Свернуть все" work
R4. Search filters and shows "Ничего не найдено" for no results
R5. Dark scrollbar (not white)

Page 2: https://ipostny.github.io/trigonum-design-mockups/role-workspaces.html
R6. Team Lead: 6 tabs (Аналитика, Торговля, Результативность, РМ, Оргструктура, Инвестирование)
R7. Senior Trader: 4 tabs (Команда, Торговля, Результативность, РМ)
R8. Trader: 4 tabs (Обзор, Торговля, Результативность, Дневник)
R9. Risk Manager: 4 tabs (РМ first, Аналитика, Торговля, Результативность)
R10. Each role has color badge, active tab highlighted

Report:
## Page 5: org-structure + role-workspaces (regression)
R1-R10: PASS/FAIL each
Visual issues: ...
Fix list (CRITICAL/MAJOR/MINOR): ...
```

---

## PROMPT 6 of 6: Index + Visual Comparison

```
You are a QA analyst. Check the index page, then do a visual quality pass on the new widgets.

INDEX PAGE: https://ipostny.github.io/trigonum-design-mockups/
I1. All role sections visible (TL, ST, Trader, RM, Investor, Admin)
I2. Trader Profile card in TL section → links to trader-analytics.html
I3. Performance card mentions "По ключам" / "By API Keys"

VISUAL QUALITY — open trader-analytics.html, check widget polish:
V1. PnL area chart: smooth gradient fill (not flat solid), green/red split at zero
V2. Winrate gauge: thick arc, 3 visible color zones, distinct needle pointer
V3. Calendar: bars fill most of cell width, day numbers in corners, header metrics row
V4. Donut: visible center hole, two distinct colors, labels outside ring
V5. Overall layout: card → documents → analytics grid matches ТЗ structure

VISUAL QUALITY — open team-analytics.html → По ключам tab:
V6. Balance bars: proportional lengths, one dominant bar, trader names + IDs
V7. Profit bars: clear zero line, red left / green right, trade count in ()
V8. Trade count bars: all same green, integer labels, sorted

Report:
## Page 6: Index + Visual Quality
Index: I1-I3 — PASS/FAIL each
Visual: V1-V8 — PASS/FAIL each with comment
Visual issues: ...
Fix list (CRITICAL/MAJOR/MINOR): ...
```

---

# FINAL SUMMARY

After all 6 prompts, compile:

```
Compile results from the 6 page reports into this table:

| # | Page | Status | Critical | Major | Minor |
|---|------|--------|----------|-------|-------|
| 1 | team-analytics.html | | | | |
| 2 | risk-management.html | | | | |
| 3 | trader-analytics.html (NEW) | | | | |
| 4 | trader-workspace.html | | | | |
| 5 | org-structure + role-workspaces | | | | |
| 6 | Index + Visual Quality | | | | |

Consolidated fix list:
### CRITICAL (blocks acceptance)
### MAJOR (noticeable UX issue)
### MINOR (polish)
```
