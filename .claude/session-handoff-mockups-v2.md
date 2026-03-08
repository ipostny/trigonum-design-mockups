# Session Handoff: TrigonumTrade Design Mockups — Phase 2

## Date: 2026-03-08
## Status: PLANNING — ТЗ downloaded, analysis complete, execution pending

---

## What Was Done (Phase 1 — Sessions 1-3)

### Mockups Built (5 pages, all live on GitHub Pages)
| Page | URL | Covers |
|------|-----|--------|
| `role-workspaces.html` | [link](https://ipostny.github.io/trigonum-design-mockups/role-workspaces.html) | All 4 role workspace layouts |
| `team-analytics.html` | [link](https://ipostny.github.io/trigonum-design-mockups/team-analytics.html) | TL Analytics + Performance tabs |
| `risk-management.html` | [link](https://ipostny.github.io/trigonum-design-mockups/risk-management.html) | TL/RM Risk Management + RM Analytics |
| `trader-workspace.html` | [link](https://ipostny.github.io/trigonum-design-mockups/trader-workspace.html) | Trader Overview + Journal |
| `org-structure.html` | [link](https://ipostny.github.io/trigonum-design-mockups/org-structure.html) | Org tree + list view |
| `shared-interactive.js` | — | Tab switching, modals, row expand, sorting, search |

### QA Session 2 Fixes Applied (13/13 CRITICAL+MAJOR)
- Charts: replaced flat polygon-mask with interactive bar charts
- Modal triggers: added `data-modal-trigger` to all Details buttons
- PnL colors: `!important` overrides for `.data-table td` specificity
- Analytics sub-tab: fixed pill-type detection in JS
- Org search: rewrote to actually hide nodes + "Nothing found"
- View toggle conflict: skip on org pages
- Trade History: added Mode, Value, Unrealized/Realized PnL columns
- RM Analytics: added Unrealized PnL column, clickable trader names
- Filters: added instrument/direction/leverage dropdowns
- Pagination: added to Trade History
- Column sorting: new JS function
- Popup close handlers: Escape + outside click
- Button styles: added missing `.btn-outline` and `.period-pill` CSS to risk-management.html
- Scrollbar: dark-themed scrollbar on org-structure.html

### Git Repo
- **Repo**: `ipostny/trigonum-design-mockups` (public, GitHub Pages enabled)
- **Local**: `/workspace/design-mockups/` (git initialized, remote set with auth token)
- **Pages URL**: https://ipostny.github.io/trigonum-design-mockups/
- **Auth remote**: Uses token from trigonum-frontend repo (ghp_***REDACTED***)
- **Git config**: Must pass `-c user.name="TrigonumTrade" -c user.email="dev@trigonum.ae"` with each commit

---

## What Needs to Be Done (Phase 2)

### Source: Notion Database "Список доработок и изменений"
- **Database ID**: `264a0b0ab5328077b5aefbce91e64e78`
- **82 items total**, hierarchical (parent → sub-items)
- **ТЗ .docx files downloaded** to `/workspace/design-mockups/tz-files/`
- **Text extracted** to `/workspace/design-mockups/tz-extracted/`
- **Example PNGs** in subfolders of `tz-files/`

### Priority 1: Trader Profile Popup ("Страничка трейдера")
**ТЗ**: `tz-files/Модуль_-_Страничка_трейдера/tz_страничка_трейдера.docx`
**Example**: `tz-files/Модуль_-_Страничка_трейдера/example_123.png`

A full-page popup/module opened from Performance → Team Analytics → click trader row.
Contents:
- Breadcrumbs: Результативность / Аналитика команды / <Имя>
- **Trader card**: Name, subaccount, balance + "Пополнить" button, RM policy dropdown
- **Profiling section**: file upload (drag&drop, PDF/DOCX), version history, download
- **Trading Strategy section**: same file upload pattern
- **Analytics tab**: contains PnL chart, Calendar, Winrate, Long/Short donut, Profit widget
- **Trades tab**: trade history with detail popup

This is the **central integration point** — it embeds all the analytics widgets listed below.

### Priority 2: Analytics Widgets (embed in Trader Profile + standalone use)
Each widget has ТЗ + example PNG. All share: period selector, filters by account/instrument/strategy.

| Widget | ТЗ File | Visual | Key Feature |
|--------|---------|--------|-------------|
| **PnL Chart** | `График_ПнЛ/tz_График_пнл.txt` | Cumulative line, green fill above zero, red below | Area chart with zero-line crossing |
| **Calendar** | `Календарь/tz_Календарь.txt` | Monthly grid, colored bars per day | Header: income/loss/net/avg. Day cells: colored bar + amount |
| **Winrate** | `Винрейт/tz_Процент_минусовыъх_сделок_винрейт.txt` | Semicircular gauge | Green/yellow/red zones, needle, center percentage |
| **Long/Short** | `Соотношение_шортов_лонгов/tz_Лонг_шорт_соотношение.txt` | Donut chart | Green=long, blue=short, labels with counts |

### Priority 3: Subaccount Widgets ("Для команды" — P1 in Notion)
Team-level analytics showing data per API key/subaccount.

| Widget | ТЗ File | Visual |
|--------|---------|--------|
| **Balances by key** | `балансы_по_ключам/tz_Балансы_по_субаккаунтам.txt` | Horizontal bar chart, green bars, total balance header |
| **Profit by key** | `Прибыль_по_ключам/tz_Прибыль_по_субаккаунтам.txt` | Horizontal bars, green=profit right, red=loss left of zero |
| **Trades by key** | `Количество_сделок_по_ключам/tz_Счетчик_сделок_по_субюаккаунтам.txt` | Horizontal green bars with count labels |

### Priority 4: RM Результативность Tab
**ТЗ**: `Вкладка_результативность/tz_ТЗ_вкладка_результативность.txt`
Same structure as TL Performance but scoped to RM's assigned traders. Two sub-tabs:
- Аналитика команды (hierarchical table)
- История сделок (trade history with filters + detail modal)
Currently RM has no Результативность tab mocked.

### Priority 5: Investor Mobile Screens
Three ТЗ files for mobile-first investor UI:

| Screen | ТЗ File | Example |
|--------|---------|---------|
| **Главная** | `Вкладка_Главная/tz_Вкладка_Главная.txt` | Profile, balance cards, P&L chart, strategy list |
| **Инвестирование** | `Вкладка_Инвестирование/tz_Вкладка_Инвестирование.txt` | Expert strategies, algo portfolios, invest modal |
| **Отчётность** | `Вкладка_результативность/tz_Вкладка_Результативность.txt` | Period filter, P&L cards, bar charts, distribution tabs |

### Priority 6: Update Existing Mockups
- `team-analytics.html`: Add trader click → opens Trader Profile popup
- `trader-workspace.html`: Verify Journal tab matches ТЗ (edit/save/cancel buttons, file upload card)
- `risk-management.html`: RM table action buttons match ТЗ (tumblers for ban trading, multi-select for coins)

---

## Questions / Decisions Needed

1. **Trader Profile**: Should this be a new standalone page (`trader-analytics.html`) or a modal overlay within `team-analytics.html`? The ТЗ says "opens in same window or full-screen layer". **Recommendation**: New page, link from team-analytics trader rows.

2. **Analytics Widgets placement**: The ТЗ for "Страничка трейдера" shows widgets inside the trader profile. Should we ALSO show them standalone on the Trader Overview tab? Currently `trader-workspace.html` has a simple bar chart — should it get the full PnL chart + calendar + winrate treatment?

3. **Investor screens**: The ТЗ is clearly mobile-first (bottom tab bar, single-column). Should we build them as mobile mockups (narrow viewport) or adapt to desktop width like other mockups?

4. **Subaccount widgets ("Для команды")**: Where do these live? They're team-level (not per-trader). Options: (a) new tab in TL workspace, (b) section within TL Analytics, (c) standalone page. The Notion item says "Для команды" with P1 priority but no specific placement.

5. **RM Результативность**: Should this reuse `team-analytics.html` content (it's the same structure) or be a separate section in `risk-management.html`? Currently risk-management.html has Team + Policies + RM Analytics tabs.

---

## File Locations

```
/workspace/design-mockups/
├── tz-files/                          # Downloaded from Notion
│   ├── Модуль_-_Страничка_трейдера/   # Trader profile ТЗ + example
│   ├── График_ПнЛ/                    # PnL chart ТЗ + example
│   ├── Календарь/                     # Calendar ТЗ + example
│   ├── Винрейт/                       # Winrate gauge ТЗ + example
│   ├── Соотношение_шортов_лонгов/     # Long/Short donut ТЗ + example
│   ├── балансы_по_ключам/             # Balances by key ТЗ + example
│   ├── Прибыль_по_ключам/             # Profit by key ТЗ + example
│   ├── Количество_сделок_по_ключам/   # Trade count by key ТЗ + example
│   ├── Вкладка_Аналитика/             # RM Analytics ТЗ (already built)
│   ├── Вкладка_Торговля/              # Trading tab ТЗ (already built)
│   ├── Вкладка_Риск_менеджмент/       # RM Risk tab ТЗ (already built)
│   ├── Вкладка_результативность/      # Performance tab ТЗ (2 files!)
│   ├── Вкладка_Обзор/                 # Trader Overview ТЗ (already built)
│   ├── Вкладка_Дневник_трейдера/      # Trader Journal ТЗ (already built)
│   ├── Вкладка_Инвестирование/        # Investor Investing screen
│   ├── Вкладка_Главная/               # Investor Home screen
│   └── Вкладка_Результативность/      # Investor Performance screen
├── tz-extracted/                       # Plain text from .docx files
│   ├── Винрейт__tz_*.txt
│   ├── График_ПнЛ__tz_*.txt
│   ├── Календарь__tz_*.txt
│   └── ... (17 files total)
├── *.html                              # Live mockup pages
├── shared-interactive.js               # Shared JS interactivity
├── shared-interactive.css              # Shared CSS
└── .git/                               # Connected to ipostny/trigonum-design-mockups
```

## Technical Notes

- All mockups are static HTML with inline `<style>` + shared CSS/JS
- CSS vars defined in `:root` (navy palette, cyan/purple/green/red accents)
- Interactive patterns: `data-tab-group`/`data-tab-panel` for tabs, `data-modal-trigger`/`data-modal` for modals
- Charts: CSS-based `.chart-point` divs (no JS charting library)
- For SVG charts (PnL area chart, gauge, donut): will need inline SVG or CSS shapes
- Git commit requires: `git -c user.name="TrigonumTrade" -c user.email="dev@trigonum.ae" commit`
- Push: `git push origin main` (token already in remote URL)
