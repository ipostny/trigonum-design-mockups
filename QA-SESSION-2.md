# QA Session 2

You are a QA analyst. Your job is to compare HTML mockups against the original technical specifications (screenshots + text requirements) and report what matches and what doesn't.

## How to work

For each section below:

1. Open the **reference page** link — it shows the original Notion ТЗ screenshot on the left and the text requirements on the right
2. Study the screenshot and requirements carefully
3. Open the **mockup** link
4. Click through all interactive elements (tabs, expand buttons, modals, dropdowns)
5. Compare what you see in the mockup against both the screenshot and the text requirements
6. Report results

Reference page for all sections: https://ipostny.github.io/trigonum-design-mockups/reference.html

## Known issues from previous QA (already fixed, verify they stay fixed)

- Tab switching used to hide content on page load (Trading Terminal appeared blank)
- Org Structure page was missing sidebar entirely
- PnL columns had wrong names (Share/PM instead of Trades/MaxDD)
- Modals didn't close on overlay click
- Nested tab groups confused the tab system (data-tab-panel fix)
- Sidebar was unified V3 (same for all), then upgraded to V4 (role-specific)

---

## Section 1: Team Lead — Analytics
Reference: https://ipostny.github.io/trigonum-design-mockups/reference.html#01_tl_analytics
Mockup: https://ipostny.github.io/trigonum-design-mockups/team-analytics.html

Check against ТЗ:
1. Summary cards: "Capital under management", "Change for day", "Change for week"
2. Capital change line chart (last week)
3. Hierarchical table: Senior Trader rows expand to reveal Trader rows
4. ST columns: Name, Capital, Unrealized PnL, Realized PnL day/week, PM
5. Trader columns: Name, Capital, Unrealized PnL, Realized PnL day/week, Trades, Max DrawDown
6. Expand All / Collapse All buttons
7. Sorting by any column
8. Period filter: Day/Week/Month/Quarter/Year
9. PnL gradient coloring (red → green, not flat)
10. Click name → link to profile (new tab indicator)

---

## Section 2: Team Lead — Trading
Reference: https://ipostny.github.io/trigonum-design-mockups/reference.html#02_tl_trading
Mockup: https://ipostny.github.io/trigonum-design-mockups/trading-terminal.html

Check against ТЗ:
1. Two top-level tabs: Analytics | Trading — active one highlighted
2. Inside Trading: Terminal + Analytics sub-tabs
3. Inside Analytics: sub-tabs for CMP, Long/Short, Fear & Greed, News, Liquidation Map
4. Tab switching works instantly, no blank content
5. Active sub-tab visually highlighted
6. Each sub-tab shows distinct content

---

## Section 3: Team Lead — Performance
Reference: https://ipostny.github.io/trigonum-design-mockups/reference.html#03_tl_performance
Mockup: https://ipostny.github.io/trigonum-design-mockups/team-analytics.html (same page, "Trade History" tab)

Check against ТЗ — "Team Analytics" sub-tab:
1. Period selector: Day/Week/Month/Quarter/Year/Custom
2. Metric cards with thousand separators, green/red coloring
3. Line chart with 7 data points (Mon-Sun), tooltip on hover
4. Hierarchical table: ST rows expand, Trader rows nested
5. Click trader → shows open trades below
6. Click trade → trade detail card with chart
7. Sorting, name search, pagination (>50 rows)

Check against ТЗ — "Trade History" sub-tab:
8. Filters: Trader, Senior Trader, Period, Instrument, Direction, Status, Result + Apply/Reset
9. Trade table: Trader, Instrument, Position, Volume, Leverage, Mode, Entry Price, Value, SL, TP, Unrealized PnL, Realized PnL, Entry Date, Update Date, Action
10. "Details" button → modal with chart (entry/exit markers), trade params, journal text, change log

---

## Section 4: Team Lead — Risk Management
Reference: https://ipostny.github.io/trigonum-design-mockups/reference.html#04_tl_risk
Mockup: https://ipostny.github.io/trigonum-design-mockups/risk-management.html

Check against ТЗ:
1. Two tabs: Team and Policies
2. Summary: "Total risk now" ($ and %), "Warnings" counter, "Forced closures" counter (clickable)
3. Status chips: "Testing", "Trading banned", "Coin banned" with counts
4. Filters: Period, Senior Trader, Policy, Coin/Market
5. Team table: Trader, RM Policy (DROPDOWN), Risk now (to SL), Risk budget remaining (PROGRESS BAR), Warnings (click), Forced closures (click), Open positions (click)
6. Progress bar with color thresholds (green/amber/red)
7. Policy dropdown = instant assignment
8. Sorting, pagination, filters
9. Auto-refresh indicator (15-30s)
10. CSV export button
11. RM action log link

---

## Section 5: Team Lead — Org Structure
Reference: https://ipostny.github.io/trigonum-design-mockups/reference.html#05_tl_org
Mockup: https://ipostny.github.io/trigonum-design-mockups/org-structure.html

Check against ТЗ:
1. Toggle: "List" / "Org Structure (tree)"
2. Team Lead = root (top/center)
3. Investors = same level as TL, horizontal dashed lines (association, not subordination)
4. Below: pairs [Senior Trader] — [Risk Manager] horizontally
5. Under each pair: vertical list of Traders
6. "Unpaired" node for unassigned traders
7. Expand/collapse per level: TL → Pairs → Team
8. "Expand All / Collapse All" buttons
9. Search by name/nick/email — auto-expands matching branches
10. Click trader → "Trader Analytics" popup
11. Scroll for large trees
12. Lines: vertical = subordination, horizontal dashed = association
13. Empty states: "No members" for empty pairs, "Nothing found" for search

---

## Section 6: Trader — Overview
Reference: https://ipostny.github.io/trigonum-design-mockups/reference.html#06_trader_overview
Mockup: https://ipostny.github.io/trigonum-design-mockups/trader-workspace.html

Check against ТЗ:
1. Period selector: Day/Week/Month/Quarter/Year
2. Cards: "Capital under management", "Change for period" ($ and %)
3. Capital change line chart for selected period
4. Open Positions table: Instrument, Direction (LONG/SHORT), Volume, Entry Price, Current Price (live), P&L $, P&L %, Leverage/Margin, Duration, SL/TP
5. Summary above table: "Open positions: N", "Total floating P&L: $ / %"
6. Sorting by all columns
7. Filters: instrument, direction, leverage
8. Click row → position details
9. P&L: profit green, loss red

---

## Section 7: Trader — Journal
Reference: https://ipostny.github.io/trigonum-design-mockups/reference.html#07_trader_journal
Mockup: https://ipostny.github.io/trigonum-design-mockups/trader-workspace.html (Journal tab)

Check against ТЗ — "Trading System" sub-tab:
1. Rich text editor (headings, lists, links)
2. File upload card: DOC/DOCX/PDF with "Download" button
3. Text above, file card below
4. "Last updated: DD.MM.YY HH:MM, Author"
5. Trader buttons: Edit, Upload/Replace, Save, Cancel
6. For TL/ST/RM: read-only + Download only

Check against ТЗ — "Trade History" sub-tab:
7. Filters: Period, Instrument, Direction, Status, Leverage
8. Table: Date/Time, Instrument, Direction, Volume, Entry Price, Exit Price, P&L $, P&L %, TP, SL, Entry Reasons
9. Click row → popup with editable fields: Entry Reason, Comment, SL, TP, R:R, Risk per trade
10. P&L coloring: profit green, loss red
11. Empty state: "No trades for selected period"

---

## Section 8: Risk Manager — Analytics
Reference: https://ipostny.github.io/trigonum-design-mockups/reference.html#08_rm_analytics
Mockup: https://ipostny.github.io/trigonum-design-mockups/risk-management.html (RM Analytics section)

Check against ТЗ:
1. Period selector: Day/Week/Month/Quarter/Year
2. Cards: Capital under management, Change day ($ and %), Change week ($ and %)
3. Capital change line chart (last week)
4. Trader table (FLAT, no hierarchy): Trader, Capital, Unrealized PnL, Realized PnL day/week, Trades, Max DrawDown
5. Only traders assigned to THIS RM (not all)
6. Sorting by any column
7. PnL gradient coloring (red/green)
8. Click trader name → profile in new tab
9. Period filter affects all metrics

---

## Section 9: Risk Manager — Risk Management
Reference: https://ipostny.github.io/trigonum-design-mockups/reference.html#09_rm_risk
Mockup: https://ipostny.github.io/trigonum-design-mockups/risk-management.html

Check against ТЗ:
1. Two tabs: Team and Policies
2. Team table: Trader, RM Policy (dropdown), Risk remaining (progress bar 0-100%), Warnings (click), Forced closures (click)
3. Action buttons per trader: "Assign Meeting" (popup: date + note), "Assign Testing" (blocks trading), "Ban Trading" (toggle), "Ban Coins" (multi-select)
4. Click warning/closure counts → popup with filtered trade list
5. Sorting, filter by status (violations, testing, banned)

---

## Section 10: Role Workspaces
Mockup: https://ipostny.github.io/trigonum-design-mockups/role-workspaces.html

Check:
1. Team Lead: 6 tabs — Analytics, Trading, Performance, Risk Management, Org Structure, Investing
2. Senior Trader: 4 tabs — Team, Trading, Performance, Risk Management
3. Trader: 4 tabs — Overview, Trading, Performance, Journal
4. Risk Manager: 4 tabs — Risk Management (FIRST), Analytics, Trading, Performance
5. Each role has distinct color badge
6. Active tab visually highlighted

---

## Report format

For each section write:

```
## Section N: [Name]
Mockup: [URL]

### ТЗ compliance:
- Check 1: PASS / FAIL / PARTIAL — comment
- Check 2: ...

### Visual differences from screenshot:
- ...

### Status: PASS / PARTIAL / FAIL
### Fix list:
- ...
```

After all 10 sections, write a summary table:

| # | Section | Status | Critical issues | Minor issues |
|---|---------|--------|----------------|--------------|
| 1 | TL Analytics | | | |
| 2 | TL Trading | | | |
| 3 | TL Performance | | | |
| 4 | TL Risk Mgmt | | | |
| 5 | TL Org Structure | | | |
| 6 | Trader Overview | | | |
| 7 | Trader Journal | | | |
| 8 | RM Analytics | | | |
| 9 | RM Risk Mgmt | | | |
| 10 | Role Workspaces | | | |

Then a prioritized fix list: CRITICAL / MAJOR / MINOR.
