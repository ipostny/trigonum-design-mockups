# QA Prompts — One Per Page

Run each prompt separately in the browser extension. Do NOT run them all at once.

The full requirements spec is at:
https://raw.githubusercontent.com/ipostny/trigonum-design-mockups/main/REQUIREMENTS-REVIEW.md

---

## Prompt 1 — Team Analytics

Navigate to: `https://ipostny.github.io/trigonum-design-mockups/team-analytics.html`

First read the requirements spec at https://raw.githubusercontent.com/ipostny/trigonum-design-mockups/main/REQUIREMENTS-REVIEW.md — sections "1. Team Lead — Analytics Tab" and "3. Team Lead — Performance Tab".

This is the Team Lead's Analytics page. Verify each requirement against the actual mockup:

**Summary Cards (from ТЗ 01_team_lead_analytics):**
- [ ] "Capital under management" card present with dollar value
- [ ] "Change for day" card present with dollar and percent values
- [ ] "Change for week" card present with dollar and percent values

**Capital Chart:**
- [ ] Line chart showing "Capital change over last week" is present
- [ ] Chart has labeled axes and readable data points

**Hierarchical Team Table:**
- [ ] Senior Trader rows are visible as top-level rows
- [ ] Senior Trader columns include: Name, Capital, Unrealized PnL, Realized PnL day/week, PM name
- [ ] Click expand arrow on Senior Trader row — nested Trader rows appear
- [ ] Trader columns include: Name, Capital, Unrealized PnL, Realized PnL day/week, # Trades, Max DrawDown
- [ ] "Expand All" button works — all nested rows open
- [ ] "Collapse All" button works — all nested rows close

**Sorting & Filtering:**
- [ ] Period filter present with options: Day, Week, Month, Quarter, Year
- [ ] Clicking a period filter changes the displayed data/selection
- [ ] Column headers are clickable for sorting (or sort controls visible)

**PnL Coloring:**
- [ ] Positive PnL values colored green
- [ ] Negative PnL values colored red
- [ ] Gradient coloring applied (red-to-green), not just two flat colors

**Navigation:**
- [ ] Click trader/senior trader name — should indicate "opens profile" behavior (link, cursor pointer, or new-tab icon)

**Sidebar:**
- [ ] Left sidebar present with unified navigation
- [ ] Sidebar shows 6 tabs: Analytics, Trading, Risk Management, My Workspace, Org Structure, Investing
- [ ] "Analytics" tab is highlighted as active

List every item above as PASS, FAIL, or PARTIAL with a note explaining what you see.

---

## Prompt 2 — Trading Terminal

Navigate to: `https://ipostny.github.io/trigonum-design-mockups/trading-terminal.html`

First read the requirements spec at https://raw.githubusercontent.com/ipostny/trigonum-design-mockups/main/REQUIREMENTS-REVIEW.md — section "2. Team Lead — Trading Tab".

This is the Trading page with embedded analytics. Verify each requirement:

**Top-Level Tabs (from ТЗ 02_team_lead_trading):**
- [ ] Two top tabs visible: "Terminal" and "Analytics" (or equivalent like "Trading" / "Analytics")
- [ ] Click "Terminal" tab — chart area and order form appear
- [ ] Click "Analytics" tab — analytics content appears (not blank)

**Analytics Sub-Tabs:**
- [ ] Within Analytics view, sub-tabs visible: Basic Info (CMP), Long/Short, Fear & Greed, News, Liquidation Map
- [ ] Click "Basic Info" / "CMP" sub-tab — CoinMarketCap-style content appears
- [ ] Click "Long/Short" sub-tab — long/short ratio content appears
- [ ] Click "Fear & Greed" sub-tab — fear/greed index content appears
- [ ] Click "News" sub-tab — crypto news content appears
- [ ] Click "Liquidation Map" sub-tab — liquidation data content appears
- [ ] Each sub-tab shows distinct content (not all the same placeholder)

**Page Load:**
- [ ] Page loads with content visible (not blank/white screen)
- [ ] Default tab (Terminal) shows content immediately on load

**Trading Terminal Content (when Terminal tab active):**
- [ ] Chart area / TradingView placeholder present
- [ ] Order form or order entry section present

**Sidebar:**
- [ ] Left sidebar present with unified navigation
- [ ] Sidebar shows 6 tabs
- [ ] "Trading" tab is highlighted as active

List every item above as PASS, FAIL, or PARTIAL with a note.

---

## Prompt 3 — Risk Management

Navigate to: `https://ipostny.github.io/trigonum-design-mockups/risk-management.html`

First read the requirements spec at https://raw.githubusercontent.com/ipostny/trigonum-design-mockups/main/REQUIREMENTS-REVIEW.md — sections "4. Team Lead — Risk Management Tab" and "8. Risk Manager — Risk Management Tab".

This page serves both Team Lead and Risk Manager roles. Verify each requirement:

**Sub-Tabs (from ТЗ 04_team_lead_risk_mgmt):**
- [ ] "Team" sub-tab present and clickable
- [ ] "Policies" sub-tab present and clickable
- [ ] "RM Analytics" sub-tab present (if implemented) or noted as not in ТЗ
- [ ] Clicking each tab switches displayed content

**Summary Panel (Team tab):**
- [ ] Total Risk Now shown ($ and/or %)
- [ ] Warnings counter visible
- [ ] Forced Closures counter visible
- [ ] Status chips or indicators present

**Team Table (from ТЗ 04 + 08):**
- [ ] Column: Trader name
- [ ] Column: RM Policy — shown as dropdown selector (not plain text)
- [ ] Column: Risk Now (to SL) or Risk Budget Remaining — shown as progress bar (0-100%)
- [ ] Column: Warnings — shown as clickable count
- [ ] Column: Forced Closures — shown as clickable count
- [ ] Column: Open Positions count
- [ ] Clicking a counter opens filtered trade list (popup or inline)

**Filters:**
- [ ] Period filter present
- [ ] Senior Trader filter present
- [ ] Policy filter present
- [ ] Coin/Market filter present

**Action Buttons per Trader (from ТЗ 08_risk_mgr_rm):**
- [ ] "Assign Meeting" button — click opens popup with date picker and note field
- [ ] "Ban Trading" button — click opens confirmation or toggle
- [ ] "Ban Coins" button — click opens multi-select coin picker
- [ ] "Assign Testing" button present (blocks trading)
- [ ] Modals/popups can be closed with X button
- [ ] Modals/popups can be closed by clicking outside (overlay click)

**Export & Links:**
- [ ] CSV export button visible
- [ ] RM action log link present

**Sidebar:**
- [ ] Left sidebar present with unified navigation
- [ ] "Risk Management" tab is highlighted as active

List every item above as PASS, FAIL, or PARTIAL with a note.

---

## Prompt 4 — Org Structure

Navigate to: `https://ipostny.github.io/trigonum-design-mockups/org-structure.html`

First read the requirements spec at https://raw.githubusercontent.com/ipostny/trigonum-design-mockups/main/REQUIREMENTS-REVIEW.md — section "5. Team Lead — Org Structure Tab".

This is the organizational hierarchy tree page. Verify each requirement:

**View Toggle (from ТЗ 05_team_lead_org_structure):**
- [ ] Toggle present at top: "List view" / "Org Structure" (or "Tree view")
- [ ] Clicking toggle switches between list and tree layouts

**Tree Visualization:**
- [ ] Team Lead shown as root node (top/center of tree)
- [ ] Investors connected to Team Lead with dashed lines (horizontal, same level)
- [ ] Senior Trader + Risk Manager shown as pairs below Team Lead
- [ ] Traders shown as leaf nodes under each Senior Trader + RM pair
- [ ] Tree uses connecting lines (CSS borders) between levels — not complex SVG (per Decision #9)
- [ ] Hierarchy is clear: Team Lead → ST+RM pairs → Traders

**Expand/Collapse:**
- [ ] Tree levels can be expanded (show children)
- [ ] Tree levels can be collapsed (hide children)
- [ ] Expand/collapse controls visible (arrows, +/- icons, or buttons)

**Search:**
- [ ] Search bar present
- [ ] Search filters/highlights matching nodes by name/nick/email
- [ ] Search auto-expands branches containing matches (per ТЗ requirement)

**Interactions:**
- [ ] Click on a trader node — opens analytics popup or navigates to profile
- [ ] Scroll works for large trees (content doesn't overflow/clip)

**Node Cards:**
- [ ] Each node shows at minimum: name and role
- [ ] Nodes are visually distinct by role (color, icon, or badge)

**Sidebar:**
- [ ] Left sidebar present with unified navigation
- [ ] "Org Structure" tab is highlighted as active

List every item above as PASS, FAIL, or PARTIAL with a note.

---

## Prompt 5 — Trader Workspace

Navigate to: `https://ipostny.github.io/trigonum-design-mockups/trader-workspace.html`

First read the requirements spec at https://raw.githubusercontent.com/ipostny/trigonum-design-mockups/main/REQUIREMENTS-REVIEW.md — sections "6. Trader — Overview Tab" and "7. Trader — Journal Tab".

This is the Trader's personal workspace. Verify each requirement:

**Overview Tab (from ТЗ 06_trader_overview):**
- [ ] "Overview" tab present and active by default
- [ ] Period selector visible: Day, Week, Month, Quarter, Year
- [ ] Summary card: "Capital under management" (or "My Capital") with dollar value
- [ ] Summary card: "Change for period" showing both $ and %
- [ ] Line chart: Capital change for selected period

**Open Positions Table (Overview tab):**
- [ ] Summary line above table: "Open positions: N" count
- [ ] Summary line: "Total floating P&L" in $ and %
- [ ] Column: Instrument (symbol/pair name)
- [ ] Column: Direction (Long/Short or Buy/Sell)
- [ ] Column: Volume
- [ ] Column: Entry Price
- [ ] Column: Current Price
- [ ] Column: P&L $ and P&L %
- [ ] Column: Leverage/Margin
- [ ] Column: Duration
- [ ] Column: SL/TP (Stop Loss / Take Profit)
- [ ] P&L values colored green for profit, red for loss
- [ ] Click row — trade detail popup or navigation

**Journal Tab (from ТЗ 07_trader_journal):**
- [ ] "Journal" tab present and clickable
- [ ] Click Journal — content switches (Overview hides, Journal appears)

**Journal — Trading System Sub-Tab:**
- [ ] "Trading System" sub-tab visible within Journal
- [ ] Rich text editor area (supports headings, lists, links)
- [ ] File upload section (DOC/DOCX/PDF)
- [ ] Download button for uploaded files
- [ ] "Last updated" timestamp shown
- [ ] Editor appears editable (not read-only) since this is the Trader's own workspace

**Journal — Trade History Sub-Tab:**
- [ ] "Trade History" sub-tab visible within Journal
- [ ] Click Trade History — trade table appears
- [ ] Filters present: Period, Instrument, Direction, Status, Leverage
- [ ] Trade table has an editable "Reasons" column
- [ ] Click row — popup with editable fields: Entry Reason, Comment, SL, TP, R:R, Risk per trade
- [ ] P&L values colored green/red

**Sidebar:**
- [ ] Left sidebar present
- [ ] Sidebar shows Trader-appropriate tabs: Overview, Trading, Performance, Journal (4 tabs per ТЗ)
- [ ] OR unified 6-tab sidebar (if V3 unified navigation applies to all roles)
- [ ] Active tab highlighted

List every item above as PASS, FAIL, or PARTIAL with a note.

---

## Prompt 6 — Role Workspaces

Navigate to: `https://ipostny.github.io/trigonum-design-mockups/role-workspaces.html`

First read the requirements spec at https://raw.githubusercontent.com/ipostny/trigonum-design-mockups/main/REQUIREMENTS-REVIEW.md — section "Mockup Changes Required > A. NEW MOCKUP: role-workspaces.html" and "Confirmed Decisions".

This reference page shows all 4 role workspace layouts side by side. Verify each role matches the ТЗ:

**Team Lead Workspace:**
- [ ] Section clearly labeled "Team Lead"
- [ ] Sidebar/tabs show exactly 6 items: Analytics, Trading, Performance, Risk Management, Org Structure, Investing
- [ ] Tab order matches the list above
- [ ] Sample content area shown for the active tab
- [ ] Color badge or role indicator present

**Senior Trader Workspace:**
- [ ] Section clearly labeled "Senior Trader"
- [ ] Sidebar/tabs show exactly 4 items: Team, Trading, Performance, Risk Management
- [ ] Tab order matches the list above
- [ ] Sample content area shown
- [ ] Different color badge from Team Lead

**Trader Workspace:**
- [ ] Section clearly labeled "Trader"
- [ ] Sidebar/tabs show exactly 4 items: Overview, Trading, Performance, Journal
- [ ] Tab order matches the list above
- [ ] Sample content area shown
- [ ] Different color badge from other roles

**Risk Manager Workspace:**
- [ ] Section clearly labeled "Risk Manager"
- [ ] Sidebar/tabs show exactly 4 items: Risk Management, Analytics, Trading, Performance
- [ ] Tab order matches the list above (Risk Management FIRST, not last)
- [ ] Sample content area shown
- [ ] Different color badge from other roles

**Cross-Role Consistency:**
- [ ] All 4 role sections visible on the page without horizontal overflow
- [ ] Each role section has visually distinct styling (badge color, header, or border)
- [ ] Layout pattern is consistent across all 4 (same card/section structure)
- [ ] This page does NOT have the unified sidebar (it uses `.role-preview-sidebar` per Decision in handoff)

**Architecture Decisions Verified:**
- [ ] New role workspaces replace old sidebar navigation (Decision #1)
- [ ] Hierarchy visible: Team Lead > Senior Traders (paired with RM) > Traders (Decision #6)
- [ ] Team Lead has full RM capability reflected in having Risk Management tab (Decision #3)
- [ ] Team Lead has Investing tab for investment management (Decision #4)

List every item above as PASS, FAIL, or PARTIAL with a note.
