# Requirements Review: Notion ТЗ vs Existing Mockups

## Date: 2026-03-06

## Executive Summary

The Notion requirements describe a **role-based workspace** paradigm where each role (Team Lead, Trader, Senior Trader, Risk Manager) gets their own set of tabs/pages after login — similar to how the Investor section already has its own InvestorLayout. This is a **new architectural layer** on top of the existing page structure.

**Key finding:** Current mockups are organized by **functional area** (Dashboard, Reports, Members, etc.), but the ТЗ describes organization by **role workspace**. We need to add role-workspace layouts and several new tab-specific pages. Existing mockups for Trading Terminal, Reports, and Policy remain valid but need to be embedded within the role workspace navigation.

---

## Requirements Inventory (from 9 ТЗ documents)

### 1. Team Lead — Analytics Tab (`01_team_lead_analytics`)
**What it needs:**
- Summary cards: Capital under management, Change for day, Change for week
- Line chart: Capital change over last week
- **Hierarchical table: Senior Trader → Traders (expandable rows)**
  - Senior Trader columns: Name, Capital, Unrealized PnL, Realized PnL day/week, PM name
  - Trader columns (nested): Name, Capital, Unrealized PnL, Realized PnL day/week, # Trades, Max DrawDown
- Expand/Collapse all buttons
- Sort by any column, Period filter (Day/Week/Month/Quarter/Year)
- Conditional PnL coloring (red→green gradient)
- Click name → open their profile in new tab

**Existing coverage:** NONE. No mockup has hierarchical team tables.
**Impact:** NEW mockup section needed.

### 2. Team Lead — Trading Tab (`02_team_lead_trading`)
**What it needs:**
- Two top-level tabs: Analytics | Trading
- Trading tab: existing trading functionality (already built)
- Analytics sub-tabs within Analytics page: Basic Info (CMP), Long/Short, Fear/Greed, News, Liquidation Map
- Tabs can be reordered

**Existing coverage:** PARTIAL.
- Trading Terminal mockup (`trading-terminal.html`) covers the Trading tab content
- CoinMarketCap, Long/Short, Greed, News mockups exist as standalone pages
**Impact:** Need to restructure as sub-tabs within the Analytics section, not standalone sidebar pages.

### 3. Team Lead — Performance Tab (`03_team_lead_performance`)
**What it needs:**
- Two sub-tabs: "Team Analytics" + "Trade History"
- **Team Analytics sub-tab:**
  - Same hierarchical table as Analytics tab but with more detail
  - Period selector (Day/Week/Month/Quarter/Year/Custom)
  - Click trader → shows their open trades below
  - Click trade → opens trade detail card
- **Trade History sub-tab:**
  - Filters: Trader, Senior Trader, Period, Instrument, Direction, Status, Result
  - Full trade table: Trader, Instrument, Position, Volume, Leverage, Mode, Entry Price, Value, SL, TP, Unrealized PnL, Realized PnL, Entry Date, Update Date, Action
  - "Details" button → modal/page with chart + entry/exit markers, trade params, journal text, change log

**Existing coverage:** PARTIAL.
- `reports.html` has similar table patterns but not hierarchical
- Trade detail modal is NEW
**Impact:** NEW mockup section needed (hierarchical + trade detail modal).

### 4. Team Lead — Risk Management Tab (`04_team_lead_risk_mgmt`)
**What it needs:**
- Two sub-tabs: "Team" + "Policies"
- Summary panel: Total Risk Now ($, %), Warnings/Forced Closures counters, Status chips
- Filters: Period, Senior Trader, Policy, Coin/Market
- **Team table columns:** Trader, RM Policy (dropdown!), Risk Now (to SL), Risk Budget Remaining (progress bar), Warnings (count), Forced Closures (count), Open Positions (count)
- Clickable counters → filtered trade list
- Auto-refresh (15-30s) for live risk data
- CSV export
- RM action log link

**Existing coverage:** PARTIAL.
- `policy.html` covers the Policies sub-tab
- Risk management table with progress bars, dropdowns, action counters is NEW
**Impact:** NEW mockup section needed.

### 5. Team Lead — Org Structure Tab (`05_team_lead_org_structure`)
**What it needs:**
- Toggle: List view / Tree view
- **Tree visualization:**
  - Team Lead = root (top/center)
  - Investors = same level as Team Lead (horizontal dashed lines)
  - Below: pairs of [Senior Trader] — [Risk Manager]
  - Below each pair: team of Traders (leaf nodes)
- Expand/collapse levels
- Search by name/nick/email (auto-expands matching branches)
- Click trader → opens analytics popup
- Scroll for large trees

**Existing coverage:** NONE.
- `members.html` has member cards but NO tree visualization
**Impact:** NEW mockup needed. This is a completely new UI component (org tree).

### 6. Trader — Overview Tab (`06_trader_overview`)
**What it needs:**
- Period selector: Day/Week/Month/Quarter/Year
- Summary cards: Capital under management, Change for period ($ and %)
- Line chart: Capital change for selected period
- **Open Positions table:** Instrument, Direction, Volume, Entry Price, Current Price (live), P&L $, P&L %, Leverage/Margin, Duration, SL/TP
- Summary above table: "Open positions: N", "Total floating P&L: $ / %"
- Sort, filter by instrument/direction/leverage
- Click row → trade detail

**Existing coverage:** PARTIAL.
- `monitoring.html` has positions table but designed for admin (all users), not for individual trader's view
- Summary cards pattern exists in `dashboard.html`
**Impact:** NEW mockup section needed (trader's personal overview).

### 7. Trader — Journal Tab (`07_trader_journal`)
**What it needs:**
- Two sub-tabs: "Trading System" + "Trade History"
- **Trading System sub-tab:**
  - Rich text editor (headings, lists, links) for trading strategy description
  - File upload (DOC/DOCX/PDF) with download button
  - "Last updated" timestamp
  - Trader: edit. Others: read-only
- **Trade History sub-tab:**
  - Filters: Period, Instrument, Direction, Status, Leverage
  - Trade table with editable "Reasons" column
  - Click row → popup with editable fields: Entry Reason, Comment, SL, TP, R:R, Risk per trade
  - P&L color coding

**Existing coverage:** PARTIAL.
- `reports.html` Journal tab exists but is a different concept (personal notes per trade, not strategy doc + trade history)
**Impact:** NEW mockup section needed (strategy editor + editable trade popups).

### 8. Risk Manager — Risk Management Tab (`08_risk_mgr_rm`)
**What it needs:**
- Two sub-tabs: "Team" + "Policies"
- **Team table columns:** Trader, RM Policy (dropdown), Risk Remaining (progress bar 0-100%), Warnings (clickable count), Forced Closures (clickable count)
- **Action buttons per trader:**
  - "Assign Meeting" (popup with date/note)
  - "Assign Testing" (blocks trading)
  - "Ban Trading" (toggle)
  - "Ban Coins" (multi-select coins)
- Click warnings/closures → filtered trade list popup
- Sort, filter by status (has violations, testing assigned, banned)

**Existing coverage:** NONE for the action buttons and risk-specific columns.
- `policy.html` covers the Policies sub-tab
**Impact:** NEW mockup section needed (RM-specific team management with action buttons).

### 9. Risk Manager — Analytics Tab (`09_risk_mgr_analytics`)
**What it needs:**
- Same structure as Team Lead Analytics but simpler (no hierarchy, just flat list)
- Period selector
- Summary cards: Capital under management, Change day, Change week
- Line chart: Capital change
- Flat trader table: Trader, Capital, Unrealized PnL, Realized PnL day/week, # Trades, Max DrawDown
- Only traders assigned to this RM

**Existing coverage:** PARTIAL. Similar to Team Lead Analytics but simpler.
**Impact:** Can be a variant of the Team Lead Analytics mockup.

---

## Mockup Changes Required

### A. NEW MOCKUP: `role-workspaces.html` (CRITICAL)

The biggest missing piece. Shows the **workspace layout** for each role — a tabbed interface that replaces the traditional sidebar navigation for logged-in users.

**Content:**
1. Team Lead workspace: tabs for Analytics, Trading, Performance, Risk Management, Org Structure, Investing
2. Trader workspace: tabs for Overview, Trading, Performance, Journal
3. Senior Trader workspace: tabs for Team, Trading, Performance, RM
4. Risk Manager workspace: tabs for Risk Management, Analytics, Trading, Performance

Each tab body shows the relevant content section. This is architecturally similar to `investor.html` which already defines InvestorLayout.

### B. NEW MOCKUP: `team-analytics.html`

Team Lead's Analytics + Performance tabs content:
- Hierarchical Senior Trader → Trader expandable table
- Summary cards + capital change chart
- Trade detail modal (chart with entry/exit markers, params, journal text, change log)
- Trade history table with filters

### C. NEW MOCKUP: `risk-management.html`

Combined Risk Management view (used by both Team Lead and Risk Manager):
- Summary panel with risk metrics + status chips
- Team table with: Policy dropdown, Risk progress bar, Warning/Closure counters, Action buttons
- RM-specific actions: Assign Meeting, Assign Testing, Ban Trading, Ban Coins
- Filtered trade popup when clicking counters

### D. NEW MOCKUP: `org-structure.html`

Tree visualization for org structure:
- List/Tree toggle
- Tree nodes: Team Lead → Investors (dashed), Senior Trader + RM pairs → Traders
- Expand/collapse, search, click-to-profile

### E. NEW MOCKUP: `trader-workspace.html`

Trader's personal workspace:
- Overview tab: Summary cards, capital chart, open positions table
- Journal tab: Trading System editor (rich text + file upload) + Trade History with editable popups

### F. EXISTING MOCKUP UPDATES

| Mockup | Change Needed |
|--------|---------------|
| `dashboard.html` | Add note: Dashboard is the generic landing; role-specific users get redirected to their workspace |
| `trading-terminal.html` | No change needed — embedded within Trading tab of each role workspace |
| `reports.html` | No change needed — admin/standalone reports remain as-is |
| `monitoring.html` | No change needed — admin monitoring remains as-is |
| `policy.html` | No change needed — embedded within RM tab's "Policies" sub-tab |
| `members.html` | Add org tree view toggle (or reference `org-structure.html`) |
| `coinmarketcap.html` | Note: Also embedded as "Basic Info" sub-tab within Analytics |
| `long-short.html` | Note: Also embedded as sub-tab within Analytics |
| `greed.html` | Note: Also embedded as sub-tab within Analytics |
| `news.html` | Note: Also embedded as sub-tab within Analytics |

---

## Shared UI Components Needed (new)

1. **ExpandableTable** — Hierarchical rows with expand/collapse (Senior Trader → Traders)
2. **RiskProgressBar** — 0-100% budget bar with color thresholds
3. **TradeDetailModal** — Chart + trade params + journal text + change log
4. **OrgTree** — SVG/CSS tree visualization with node cards and connection lines
5. **RichTextEditor** — Simple text editor for trading strategy (headings, lists, links)
6. **InlineDropdown** — Policy selector within table cell (instant-save behavior)
7. **ActionButtonGroup** — Compact button group for RM actions (meeting, testing, ban)

---

## Items with NO ТЗ Yet (wait before creating)

| Role | Tab | Status |
|------|-----|--------|
| Team Lead | Investing | No ТЗ, no mockup PNG |
| Trader | Trading | No ТЗ (probably = Trading Terminal) |
| Trader | Performance | No ТЗ (probably = subset of TL Performance) |
| Senior Trader | Team | No ТЗ |
| Senior Trader | Trading | No ТЗ |
| Senior Trader | Performance | No ТЗ |
| Senior Trader | RM | No ТЗ, not approved |

---

## Priority Order for Mockup Creation

1. **`role-workspaces.html`** — Foundation: defines how roles navigate (HIGH, blocks everything) — DONE
2. **`team-analytics.html`** — Core business view for Team Lead (HIGH) — DONE
3. **`risk-management.html`** — Used by both Team Lead + Risk Manager (HIGH) — DONE
4. **`trader-workspace.html`** — Trader's daily interface (MEDIUM) — DONE
5. **`org-structure.html`** — Tree view + group management (MEDIUM) — DONE
6. Existing mockup annotations (LOW — can be done during pipeline runs)

---

## Confirmed Decisions (from user Q&A, 2026-03-06)

1. **New role workspaces COMPLETELY REPLACE** the old sidebar navigation. Not additive — old pages stop existing as standalone.
2. **CoinMarketCap, Long/Short, Greed, News** — no longer standalone sidebar pages. They become sub-tabs within the Analytics section of each role workspace.
3. **Team Lead has full RM action capability** — can do everything Risk Manager can (assign meeting, assign testing, ban trading, ban coins).
4. **Team Lead can manage investments** — full functionality same as admin (create programs, change percentages, etc.). Investing tab in TL workspace.
5. **Leaders can edit own journal, view-only others** — Team Lead, Senior Trader, Risk Manager can view trader journals but not edit. Traders edit their own.
6. **Hierarchy**: Team Lead → Senior Traders (each paired with a Risk Manager) → Traders.
7. **Senior Trader analytics** — flat list of own team traders (no hierarchy, same columns as TL but simpler).
8. **Performance tabs share same data** — same underlying performance/trade data, just scoped by role (self/team/assigned/all).
9. **Org tree visualization** — simple list with connecting lines (CSS borders), not complex SVG. Functional, not decorative.
10. **Group management lives in Org Structure** — covers BOTH hierarchy assignment (traders → pairs) AND ad-hoc custom groups for reporting.
11. **Policy changes instant with confirmation popup** — dropdown in table cell, confirm before saving.
12. **Trade detail modal** — combines Trade Lifecycle data + Journal data (chart with entry/exit/SL/TP markers, params grid, journal text, change log).
