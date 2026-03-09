# QA Session 3 — Single-Pass Full Verification

```
You are a QA analyst for TrigonumTrade, a crypto trading platform. You need to verify 6 HTML mockup pages against their technical specifications.

Base URL: https://ipostny.github.io/trigonum-design-mockups/

INSTRUCTIONS:
- Open each page ONE time
- On each page click through ALL tabs, buttons, modals, expand/collapse
- For each check write ONLY: ✅, ❌, or ⚠️ + short reason (max 10 words)
- After all pages, write ONE summary table + fix list
- Be fast. Skip explanations. Just verdict per check.

====================================================================
PAGE 1: team-analytics.html
====================================================================

Open: https://ipostny.github.io/trigonum-design-mockups/team-analytics.html

REGRESSION (already built — confirm not broken):
R1. 3 sub-tabs work: "Team Analytics", "Trade History", "По ключам"
R2. Hierarchical table renders (ST→Trader expand/collapse)
R3. Summary cards + chart + period pills + sorting all functional
R4. Trade History: filters + table + "Подробнее" modal works
R5. PnL coloring green/red applied

NEW — Trader name links:
N1. Trader names = cyan clickable links
N2. Links go to trader-analytics.html
N3. target="_blank" on links

NEW — "По ключам" tab:
N4. Click tab → 3 widgets appear
N5. Balances widget: title + total header + green horizontal bars + trader name(ID) labels + $ values
N6. Profit widget: bidirectional bars (green right, red left) + zero line + value(count) labels
N7. Trade count widget: all-green bars + integer count labels
N8. All widgets: dark theme, readable, money formatted with thousands + 2 decimals

====================================================================
PAGE 2: risk-management.html
====================================================================

Open: https://ipostny.github.io/trigonum-design-mockups/risk-management.html

REGRESSION:
R6. 4 tabs present: Команда, Политики, Аналитика РМ, Результативность
R7. Команда: summary + status chips + table with progress bars + action buttons
R8. Action buttons: meeting, testing, ban trading (toggle), ban coins (multi-select)
R9. Политики tab content renders
R10. Аналитика РМ: period pills + cards + chart + flat table + PnL coloring

NEW — Результативность tab:
N9. Click tab → content appears (not blank)
N10. Two sub-pills: "Аналитика команды" + "История сделок"
N11. Аналитика: period pills + summary cards (capital, change %) + line chart
N12. Flat trader table (no hierarchy) with columns: Трейдер, Капитал, Unrealized/Realized PnL, Сделки, MaxDD
N13. PnL green/red + sorting + cyan trader links
N14. История сделок: filters + full trade table + "Подробнее" → modal opens/closes

====================================================================
PAGE 3: trader-analytics.html (ENTIRELY NEW — check thoroughly)
====================================================================

Open: https://ipostny.github.io/trigonum-design-mockups/trader-analytics.html

HEADER:
N15. Title "Аналитика трейдера — <Name>"
N16. Breadcrumbs: Результативность → Аналитика команды → Name
N17. Status badge "Активен" + Senior Trader/PM labels

TRADER CARD:
N18. Table: Трейдер, Субаккаунт (dropdown), Баланс (number), Политика РМ (dropdown)
N19. "Пополнить" button near balance
N20. RM policy options: 1%/3%/5%

DOCUMENTS:
N21. "Профайлинг" section: upload zone + PDF/DOCX note + "Скачать"
N22. "Торговая стратегия" section: same pattern
N23. Side by side layout

PnL CHART:
N24. Cumulative AREA chart (not bars/line-only)
N25. Green above zero, red below zero, zero line visible
N26. Y-axis + X-axis labels present

WINRATE GAUGE:
N27. Semicircular half-circle gauge
N28. 3 color zones: green/yellow/red
N29. Needle pointer + large % center + trade count below

CALENDAR:
N30. Monthly 7-column grid (Пн–Вс)
N31. Colored day bars (green=profit, red=loss) with amount labels
N32. Header: Доход, Убыток, Чистая прибыль, Средн. прибыль/день + month arrows

LONG/SHORT DONUT:
N33. Donut ring (hole in center)
N34. Green=LONG, Blue=SHORT + labels with counts/percentages

TRADES TAB:
N35. Click "Сделки" → trade history with filters + Apply/Reset
N36. Table with PnL green/red coloring + "Подробнее" button

TRADE DETAIL MODAL:
N37. Modal: chart placeholder + Entry/Exit/SL/TP markers
N38. Params grid + "Описание из дневника" + "История изменений"
N39. Close: ✕ + Escape + outside click

====================================================================
PAGE 4: trader-workspace.html
====================================================================

Open: https://ipostny.github.io/trigonum-design-mockups/trader-workspace.html

REGRESSION — Overview tab:
R11. Period selector + summary cards + capital chart
R12. Positions table + PnL coloring + sorting

NEW — Journal tab:
N40. Click "Дневник" → content with 2 sub-tabs: "Торговая система" + "История сделок"
N41. Trading System: rich text editor area with strategy content
N42. "Последнее обновление" timestamp (date + author)
N43. File card with filename + PDF/DOCX note + "Скачать" button
N44. Buttons: Редактировать, Загрузить файл, Сохранить (disabled), Отмена
N45. История сделок sub-tab: trade table with filters + PnL coloring

====================================================================
PAGE 5: org-structure.html + role-workspaces.html (regression only)
====================================================================

Open: https://ipostny.github.io/trigonum-design-mockups/org-structure.html
R13. List/Tree toggle works
R14. Tree: TL root → investors (dashed) → ST+RM pairs → traders
R15. Expand/collapse + search + dark scrollbar

Open: https://ipostny.github.io/trigonum-design-mockups/role-workspaces.html
R16. TL: 6 tabs, ST: 4 tabs, Trader: 4 tabs, RM: 4 tabs (RM first)
R17. Color badges + active tab highlighting

====================================================================
PAGE 6: Index page + visual polish
====================================================================

Open: https://ipostny.github.io/trigonum-design-mockups/
R18. All role sections visible
N46. Trader Profile card in TL section → links to trader-analytics.html
N47. Performance card mentions "По ключам"

VISUAL POLISH (go back to trader-analytics.html):
V1. PnL chart: smooth gradient (not flat), green/red split at zero
V2. Winrate: thick arc, visible 3 zones, distinct needle
V3. Calendar: bars fill cell width, day numbers in corners
V4. Donut: visible hole, 2 distinct colors, labels outside
V5. Overall layout: card → docs → analytics grid

VISUAL POLISH (team-analytics.html → По ключам):
V6. Balance bars: proportional, one dominant, names+IDs
V7. Profit bars: clear zero line, red/green sides, count in ()
V8. Count bars: same green, integers, sorted

====================================================================
REPORT FORMAT — use this exact structure:
====================================================================

## Results

| Check | Verdict | Issue (if any) |
|-------|---------|----------------|
| R1 | ✅/❌/⚠️ | |
| R2 | | |
| ... | | |
| N1 | | |
| ... | | |
| V1 | | |
| ... | | |

## Summary

| Page | Status | Critical | Major | Minor |
|------|--------|----------|-------|-------|
| team-analytics.html | ✅/⚠️/❌ | 0 | 0 | 0 |
| risk-management.html | | | | |
| trader-analytics.html | | | | |
| trader-workspace.html | | | | |
| org + role-workspaces | | | | |
| Index + visual | | | | |
| **TOTAL** | | **0** | **0** | **0** |

## Fix List

### CRITICAL (blocks acceptance)
- (none or list)

### MAJOR
- ...

### MINOR
- ...
```
