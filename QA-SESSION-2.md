# QA Session 2 — Browser Extension Prompt

Navigate to each page below, visually inspect it, and report PASS / FAIL / PARTIAL for every check. After all 6 pages, output a summary table.

Requirements spec: https://raw.githubusercontent.com/ipostny/trigonum-design-mockups/main/REQUIREMENTS-REVIEW.md

---

## Page 1 — Team Analytics

URL: https://ipostny.github.io/trigonum-design-mockups/team-analytics.html

1. Sidebar shows "Team Lead" badge with 6 nav items (Analytics active)
2. 3 summary cards visible: Capital, PnL Day, PnL Week — green/red coloring
3. Capital line chart present and fills width
4. Period filter pills (Day/Week/Month/Quarter/Year/Custom) — clicking changes selection
5. "Team Analytics" / "Trade History" sub-tabs switch content
6. Hierarchical table: Senior Trader rows expand to show nested Trader rows
7. Expand All / Collapse All buttons work
8. PnL values use gradient coloring (red-to-green), not flat
9. Click trader name — cursor pointer or link indicator
10. Click "Details" on a trade — modal opens with chart, params, journal, event log
11. Modal closes via X and overlay click
12. Trade History tab: filters (Trader, Instrument, Direction, Status) + pagination

---

## Page 2 — Trading Terminal

URL: https://ipostny.github.io/trigonum-design-mockups/trading-terminal.html

1. Sidebar: Team Lead, 6 tabs, "Trading" active
2. Page loads with visible content (not blank)
3. Two top tabs: "Terminal" and "Analytics" — both switch content
4. Terminal: chart area, symbol selector, ticker bar (price, 24h change, volume)
5. Order form: Market/Limit/Stop tabs, Buy/Sell, quantity with % buttons, leverage slider
6. TP/SL section, order summary, submit button
7. Bottom panel: Open Orders / Order History / Trades tabs
8. Analytics tab: 5 sub-tabs (CMP, Long/Short, Fear & Greed, News, Liquidation Map)
9. Each analytics sub-tab shows distinct content (not identical placeholders)

---

## Page 3 — Risk Management

URL: https://ipostny.github.io/trigonum-design-mockups/risk-management.html

1. Sidebar: role badge present, "Risk Management" active
2. Sub-tabs: "Team" (default) and "Policies" switch content
3. Summary panel: Total Risk Now ($+%), Warnings count, Forced Closures, status chips
4. Filters: Period, Policy, Status + CSV export button + auto-refresh indicator
5. Team table columns: Trader, RM Policy (DROPDOWN), Risk Now, Risk Budget (PROGRESS BAR), Warnings, Closures, Open Positions, Actions
6. Progress bars use color thresholds (green/amber/red)
7. Action buttons per trader: Meeting, Test, Ban, Coins — each opens a modal
8. Modals close via X and overlay click
9. Policies tab: 3 policy cards (Conservative, Moderate, Aggressive) with parameters
10. RM Analytics section: capital card, PnL card, chart, trader table

---

## Page 4 — Org Structure

URL: https://ipostny.github.io/trigonum-design-mockups/org-structure.html

1. Sidebar: Team Lead, "Org Structure" active
2. List/Tree toggle present — clicking switches layout
3. Tree: Team Lead as root, Investors on dashed lines, ST+RM pairs below, Traders as leaves
4. Connecting lines are CSS borders (not SVG)
5. Nodes show name, role, email — color-coded badges (cyan/amber/purple/red/green)
6. Expand/collapse controls work on tree levels
7. Search bar filters and auto-expands matching branches
8. Group management section: pair assignments + ad-hoc groups with create popups

---

## Page 5 — Trader Workspace

URL: https://ipostny.github.io/trigonum-design-mockups/trader-workspace.html

1. Sidebar: Trader badge (green), 4 tabs (Overview, Trading, Performance, Journal)
2. Overview: period selector, "My Capital" + "Realized PnL" cards, capital area chart
3. Open Positions table: Instrument, Direction, Volume, Entry/Current Price, P&L ($/%), Leverage, Duration, SL/TP
4. P&L colored green/red, rows clickable (position detail popup)
5. Journal > Trading System: rich text editor with toolbar, file upload card, "Last updated"
6. Journal > Trade History: filters, table with "Reasons" column, click row opens editable popup (Entry Reason, Comment, SL, TP, R:R, Risk)
7. Popups close via X / overlay click

---

## Page 6 — Role Workspaces

URL: https://ipostny.github.io/trigonum-design-mockups/role-workspaces.html

1. 4 role sections visible: Team Lead (purple), Senior Trader (cyan), Trader (green), Risk Manager (amber)
2. Team Lead: 6 tabs — Analytics, Trading, Performance, Risk Management, Org Structure, Investing
3. Senior Trader: 4 tabs — Team, Trading, Performance, Risk Management
4. Trader: 4 tabs — Overview, Trading, Performance, Journal
5. Risk Manager: 4 tabs — Risk Management (FIRST), Analytics, Trading, Performance
6. Layout consistent across all 4, no horizontal overflow
7. Page does NOT use unified sidebar (uses role-preview-sidebar)

---

## Output Format

After checking all 6 pages, produce this summary:

| # | Page | Pass | Fail | Partial | Issues |
|---|------|------|------|---------|--------|
| 1 | Team Analytics | | | | |
| 2 | Trading Terminal | | | | |
| 3 | Risk Management | | | | |
| 4 | Org Structure | | | | |
| 5 | Trader Workspace | | | | |
| 6 | Role Workspaces | | | | |

For each FAIL or PARTIAL, describe what's wrong in one line.
