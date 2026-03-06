/**
 * TrigonumTrade Design Mockups — Shared Interactivity v2
 * Aggressively wires up ALL clickable elements using broad selectors.
 * Works with the actual class names used in mockups.
 */
(function() {
  'use strict';

  // ============================================================
  // TOAST
  // ============================================================
  let toastTimer;
  function toast(msg) {
    let el = document.getElementById('mockup-toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'mockup-toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
  }

  // ============================================================
  // 1. PILL / PERIOD TOGGLES — .period-pill, .period-btn, .pill, etc.
  // ============================================================
  function initPills() {
    // Find all pill-like groups
    const groups = document.querySelectorAll('.period-pills, .pill-group, .period-selector, .view-toggle, .toggle-group');
    groups.forEach(g => {
      const pills = g.querySelectorAll('button, .period-pill, .period-btn, .pill, .toggle-btn');
      pills.forEach(p => {
        p.addEventListener('click', function(e) {
          e.preventDefault();
          pills.forEach(x => x.classList.remove('active'));
          this.classList.add('active');
          toast('Period: ' + this.textContent.trim());
        });
      });
    });
  }

  // ============================================================
  // 2. SIDEBAR TABS — .preview-tab in role workspace previews
  // ============================================================
  function initPreviewTabs() {
    // Each role-preview has a sidebar with .preview-tab items
    document.querySelectorAll('.role-preview-sidebar, .sidebar').forEach(sidebar => {
      const tabs = sidebar.querySelectorAll('.preview-tab, .nav-item, .nav-link, a[href]');
      tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
          e.preventDefault();
          // Don't toggle Settings/Logout
          const text = this.textContent.trim();
          if (text.includes('Logout')) { toast('Logging out...'); return; }
          if (text.includes('Settings')) { toast('Opening Settings'); return; }

          // Toggle active state within this sidebar
          tabs.forEach(t => t.classList.remove('active'));
          this.classList.add('active');

          // Check for cross-mockup navigation
          const tabText = text.replace(/[📊📈🏆🛡️🏗️💰👥📋🔍📰⚙️🚪]/g, '').trim();
          const linkMap = {
            'Analytics': 'team-analytics.html',
            'Trading': 'trading-terminal.html',
            'Performance': 'team-analytics.html',
            'Risk Management': 'risk-management.html',
            'Org Structure': 'org-structure.html',
            'Investing': 'invest-program.html',
            'Team': 'team-analytics.html',
            'Overview': 'trader-workspace.html',
            'Journal': 'trader-workspace.html',
          };

          if (linkMap[tabText]) {
            toast('Tab: ' + tabText + ' → Click again to open full mockup');
            // Double-click to navigate
            if (this.dataset.lastClick && Date.now() - this.dataset.lastClick < 800) {
              window.location.href = linkMap[tabText];
            }
            this.dataset.lastClick = Date.now();
          } else {
            toast('Tab: ' + tabText);
          }
        });
      });
    });
  }

  // ============================================================
  // 3. EXPANDABLE TABLE ROWS
  // ============================================================
  function initExpandableRows() {
    // .expandable rows with .expand-icon toggle .nested sibling rows
    document.querySelectorAll('tr.expandable').forEach(row => {
      row.style.cursor = 'pointer';
      row.addEventListener('click', function(e) {
        if (e.target.closest('button, a, select, input')) return;
        const icon = this.querySelector('.expand-icon');
        const isExpanding = icon && icon.textContent.includes('▶');

        // Toggle all following .nested rows until next .expandable
        let sibling = this.nextElementSibling;
        while (sibling && sibling.classList.contains('nested')) {
          sibling.style.display = isExpanding ? '' : 'none';
          sibling = sibling.nextElementSibling;
        }

        if (icon) {
          icon.textContent = isExpanding ? '▼' : '▶';
        }
        toast(isExpanding ? 'Expanded' : 'Collapsed');
      });
    });

    // Expand All / Collapse All buttons (found by text content)
    document.querySelectorAll('button').forEach(btn => {
      const text = btn.textContent.trim().toLowerCase();
      if (text === 'expand all') {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelectorAll('tr.nested').forEach(r => r.style.display = '');
          document.querySelectorAll('.expand-icon').forEach(i => i.textContent = '▼');
          // Also expand tree nodes
          document.querySelectorAll('.traders-list, .child-rows, .nested-rows, .trader-rows').forEach(el => el.style.display = '');
          document.querySelectorAll('.expand-toggle').forEach(t => t.textContent = '▼');
          toast('All expanded');
        });
      }
      if (text === 'collapse all') {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelectorAll('tr.nested').forEach(r => r.style.display = 'none');
          document.querySelectorAll('.expand-icon').forEach(i => i.textContent = '▶');
          document.querySelectorAll('.traders-list, .child-rows, .nested-rows, .trader-rows').forEach(el => el.style.display = 'none');
          document.querySelectorAll('.expand-toggle').forEach(t => t.textContent = '▶');
          toast('All collapsed');
        });
      }
    });
  }

  // ============================================================
  // 4. TREE VIEW EXPAND/COLLAPSE
  // ============================================================
  function initTree() {
    document.querySelectorAll('.expand-toggle').forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const pair = this.closest('.pair-group');
        if (!pair) return;
        const tradersList = pair.querySelector('.traders-list');
        if (!tradersList) return;
        const isHidden = tradersList.style.display === 'none';
        tradersList.style.display = isHidden ? '' : 'none';
        this.textContent = isHidden ? '▼' : '▶';
        toast(isHidden ? 'Team expanded' : 'Team collapsed');
      });
    });

    // Tree node click → analytics popup
    document.querySelectorAll('.tree-node.trader-node, .tree-node').forEach(node => {
      if (node.classList.contains('trader-node') || node.querySelector('.node-role.trader')) {
        node.addEventListener('click', function(e) {
          e.stopPropagation();
          const name = this.querySelector('.node-name');
          toast('Trader analytics: ' + (name ? name.textContent : 'Unknown'));
          // Show analytics popup if exists
          const popup = document.querySelector('.analytics-popup');
          if (popup) {
            popup.style.display = 'block';
            popup.style.position = 'fixed';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            popup.style.zIndex = '1000';
          }
        });
      }
    });
  }

  // ============================================================
  // 5. MODALS — Find all modal-like elements and wire open/close
  // ============================================================
  function initModals() {
    // Find static modals (shown inline in demo mockups) and make them togglable
    const modals = document.querySelectorAll('.modal-overlay, .popup-overlay');
    modals.forEach(m => {
      // Backdrop click closes
      m.addEventListener('click', function(e) {
        if (e.target === this) this.style.display = 'none';
      });
    });

    // Cancel/Close buttons
    document.querySelectorAll('.modal-close, .modal .btn, .modal-actions .btn, .analytics-popup .btn').forEach(btn => {
      const text = btn.textContent.trim().toLowerCase();
      if (text === 'cancel' || text === 'close' || text === '×') {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          const modal = this.closest('.modal-overlay, .popup-overlay');
          if (modal) modal.style.display = 'none';
          // Also hide fixed-position popups
          const popup = this.closest('.analytics-popup');
          if (popup) popup.style.display = '';
          toast('Closed');
        });
      }
    });

    // Primary action buttons in modals
    document.querySelectorAll('.modal-actions .btn-primary, .modal .btn-primary').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const modal = this.closest('.modal-overlay, .popup-overlay');
        if (modal) modal.style.display = 'none';
        toast(this.textContent.trim() + ' — saved!');
      });
    });
  }

  // ============================================================
  // 6. ALL BUTTONS — Generic click handler for any button/btn
  // ============================================================
  function initAllButtons() {
    document.querySelectorAll('button, .btn, .add-trader-btn, .remove-btn, [role="button"]').forEach(btn => {
      // Skip if already handled
      if (btn.dataset.wired) return;
      btn.dataset.wired = '1';

      btn.addEventListener('click', function(e) {
        // Don't double-fire if already handled by specific handlers
        if (e.defaultPrevented) return;
        e.preventDefault();

        const text = this.textContent.trim().toLowerCase();

        // Map button text to actions
        if (text.includes('export') || text.includes('csv')) {
          toast('CSV exported');
        } else if (text.includes('create') || text.includes('+ add') || text.includes('invite') || text.includes('new')) {
          // Find a modal to show
          const overlay = document.querySelector('.modal-overlay');
          if (overlay) {
            overlay.style.display = 'flex';
            toast('Opening form...');
          } else {
            toast('Action: ' + this.textContent.trim());
          }
        } else if (text.includes('save')) {
          toast('Saved successfully!');
        } else if (text.includes('delete') || text.includes('remove')) {
          toast('Removed');
        } else if (text.includes('approve') || text.includes('confirm')) {
          toast('Approved!');
        } else if (text.includes('reject') || text.includes('ban')) {
          toast('Status updated');
        } else if (text.includes('assign')) {
          toast('Assignment saved');
        } else if (text.includes('details') || text.includes('view') || text.includes('open')) {
          toast('Opening details...');
        } else if (text.includes('download') || text.includes('скачать')) {
          toast('Download started');
        } else if (text.includes('edit')) {
          toast('Edit mode');
        } else if (text.includes('refresh')) {
          toast('Refreshed');
        } else if (text.includes('search') || text.includes('filter')) {
          toast('Filters applied');
        } else if (text.includes('upload') || text.includes('загрузить')) {
          toast('File uploaded');
        } else if (text.length > 0 && text.length < 50) {
          toast(this.textContent.trim());
        }
      });
    });
  }

  // ============================================================
  // 7. TABLE ROW CLICKS
  // ============================================================
  function initTableRows() {
    document.querySelectorAll('table tbody tr:not(.expandable):not(.nested):not(.row-parent):not(.row-child)').forEach(row => {
      row.style.cursor = 'pointer';
      row.addEventListener('click', function(e) {
        if (e.target.closest('button, a, select, input, .btn')) return;
        if (e.defaultPrevented) return;
        const firstCell = this.querySelector('td');
        const name = firstCell ? firstCell.textContent.trim() : 'Row';
        // Try to open a specific data-modal-target on the row or a named modal
        const posModal = document.getElementById('modal-position-detail');
        if (posModal && this.closest('.data-table') && !this.closest('[data-tab-panel="trade-history"]') && !this.closest('[data-tab-panel="tw-journal"]')) {
          posModal.style.display = 'flex';
          toast('Position: ' + name);
          return;
        }
        toast('Details: ' + name);
        // Try to show a modal (legacy)
        const overlays = document.querySelectorAll('.modal-overlay:not([data-modal])');
        if (overlays.length > 0) {
          overlays[overlays.length - 1].style.display = 'flex';
        }
      });
    });
  }

  // ============================================================
  // 8. DROPDOWNS & FORM CONTROLS
  // ============================================================
  function initForms() {
    document.querySelectorAll('select').forEach(sel => {
      sel.addEventListener('change', function() {
        const label = this.closest('.form-group, td')?.querySelector('label, .form-label');
        toast((label ? label.textContent.trim() + ': ' : 'Selected: ') + this.value);
      });
    });

    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', function() {
        const label = this.closest('label, .checkbox-item');
        const name = label ? label.textContent.trim() : this.name;
        toast((this.checked ? '✓ ' : '✗ ') + name);
      });
    });

    // Search inputs
    document.querySelectorAll('input[type="text"], input[type="search"]').forEach(input => {
      let timer;
      input.addEventListener('input', function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
          if (this.value.length > 0) toast('Searching: "' + this.value + '"');
        }, 600);
      });
    });
  }

  // ============================================================
  // 9. DEMO SECTION TABS — Click demo-label to jump
  // ============================================================
  function initDemoSections() {
    const sections = document.querySelectorAll('.demo-section');
    if (sections.length <= 1) return;

    // Add IDs for anchor links
    sections.forEach((s, i) => { s.id = 'section-' + i; });

    // Create section jump nav
    const nav = document.createElement('div');
    nav.className = 'section-jump-nav';
    let html = '<div class="section-jump-title">Sections</div>';
    sections.forEach((s, i) => {
      const label = s.querySelector('.demo-label');
      const text = label ? label.textContent.replace(/^Section \d+ — /, '') : 'Section ' + (i+1);
      html += '<a href="#section-' + i + '" class="section-jump-link">' + text + '</a>';
    });
    nav.innerHTML = html;
    document.body.appendChild(nav);
  }

  // ============================================================
  // 10. ROLE PREVIEW SECTIONS — Click preview-tab to highlight
  // ============================================================
  function initRolePreviews() {
    document.querySelectorAll('.role-preview').forEach(preview => {
      const tabs = preview.querySelectorAll('.preview-tab');
      tabs.forEach(tab => {
        tab.style.cursor = 'pointer';
      });
    });
  }

  // ============================================================
  // 11. MEMBER CHIPS — removable
  // ============================================================
  function initChips() {
    document.querySelectorAll('.member-chip .remove, .member-chip .close').forEach(x => {
      x.style.cursor = 'pointer';
      x.addEventListener('click', function(e) {
        e.stopPropagation();
        const chip = this.closest('.member-chip');
        if (chip) {
          const name = chip.textContent.replace('×', '').trim();
          chip.style.opacity = '0.3';
          chip.style.pointerEvents = 'none';
          toast('Removed: ' + name);
        }
      });
    });
  }

  // ============================================================
  // 12. SUB-TAB BARS — data-tab-target driven switching
  // ============================================================
  function initSubTabs() {
    // NEW: data-tab-target driven tab switching (primary mechanism)
    document.querySelectorAll('[data-tab-group]').forEach(bar => {
      const groupName = bar.dataset.tabGroup;
      const btns = bar.querySelectorAll('[data-tab-target]');
      btns.forEach(btn => {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          // Toggle active class
          btns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          // Remove ::after underline from others
          btns.forEach(b => { b.style.position = 'relative'; });
          // Show/hide panels
          const targetId = this.dataset.tabTarget;
          document.querySelectorAll('[data-tab-panel-group="' + groupName + '"]').forEach(panel => {
            panel.style.display = (panel.dataset.tabPanel === targetId) ? '' : 'none';
          });
          toast('Tab: ' + this.textContent.trim());
        });
      });
    });

    // Legacy: .sub-tab-bar, .sub-tabs without data-tab-group
    document.querySelectorAll('.sub-tab-bar, .sub-tabs:not([data-tab-group]), .tab-bar, .report-tabs').forEach(bar => {
      const btns = bar.querySelectorAll('button, .sub-tab, .tab-btn, .report-tab-btn');
      btns.forEach(btn => {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          btns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');

          // Try to show/hide content panels
          const target = this.dataset.tab || this.dataset.target;
          if (target) {
            const container = bar.closest('.tab-container, section, .demo-section, .page-container') || document;
            container.querySelectorAll('.tab-panel, .tab-content, .sub-tab-content').forEach(p => p.style.display = 'none');
            const panel = container.querySelector('#' + target) || document.getElementById(target);
            if (panel) panel.style.display = '';
          }
          toast('Tab: ' + this.textContent.trim());
        });
      });
    });
  }

  // ============================================================
  // 12b. MODAL TRIGGERS — data-modal-trigger opens modals
  // ============================================================
  function initModalTriggers() {
    document.querySelectorAll('[data-modal-trigger]').forEach(trigger => {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const modalId = this.dataset.modalTrigger;
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.style.display = 'flex';
        }
      });
    });
    // Close modals on backdrop click or close button
    document.querySelectorAll('.modal-overlay[data-modal]').forEach(overlay => {
      overlay.addEventListener('click', function(e) {
        if (e.target === this) this.style.display = 'none';
      });
      overlay.querySelectorAll('.modal-close-btn, [data-modal-close]').forEach(btn => {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          overlay.style.display = 'none';
        });
      });
    });
  }

  // ============================================================
  // 13. FLOATING NAVIGATION MENU
  // ============================================================
  function initFloatingNav() {
    const nav = document.createElement('div');
    nav.id = 'mockup-nav';
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';

    const pages = [
      { section: 'Role Workspaces (NEW)', items: [
        ['index.html', 'Home — All Mockups'],
        ['role-workspaces.html', 'Role Workspaces'],
        ['team-analytics.html', 'Team Analytics'],
        ['risk-management.html', 'Risk Management'],
        ['trader-workspace.html', 'Trader Workspace'],
        ['org-structure.html', 'Org Structure'],
      ]},
      { section: 'Core', items: [
        ['dashboard.html', 'Dashboard'],
        ['trading-terminal.html', 'Trading Terminal'],
        ['reports.html', 'Reports'],
        ['monitoring.html', 'Monitoring'],
      ]},
      { section: 'Analytics', items: [
        ['coinmarketcap.html', 'CoinMarketCap'],
        ['long-short.html', 'Long/Short'],
        ['greed.html', 'Fear & Greed'],
        ['news.html', 'News'],
      ]},
      { section: 'Management', items: [
        ['members.html', 'Members'],
        ['policy.html', 'Policy'],
        ['ddp.html', 'DDP'],
        ['audit-log.html', 'Audit Log'],
        ['balance.html', 'Balance'],
        ['settings.html', 'Settings'],
      ]},
      { section: 'Admin', items: [
        ['fee-config.html', 'Fee Config'],
        ['admin-reports.html', 'Admin Reports'],
        ['wallet-management.html', 'Wallet Mgmt'],
        ['approve-trades.html', 'Approve Trades'],
      ]},
      { section: 'Investor', items: [
        ['invest-program.html', 'Invest Programs'],
        ['investor-form.html', 'Investor Form'],
        ['investor.html', 'Investor Portal'],
      ]},
      { section: 'Other', items: [
        ['home.html', 'Home Page'],
        ['auth.html', 'Auth'],
        ['wiki.html', 'Wiki'],
        ['legal.html', 'Legal'],
      ]},
    ];

    let linksHtml = '';
    pages.forEach(group => {
      linksHtml += '<div class="mockup-nav-section">' + group.section + '</div>';
      group.items.forEach(([href, label]) => {
        const cls = href === currentFile ? ' current' : '';
        linksHtml += '<a href="' + href + '" class="mockup-nav-link' + cls + '">' + label + '</a>';
      });
    });

    nav.innerHTML = `
      <div class="mockup-nav-toggle" title="Browse all mockups">☰</div>
      <div class="mockup-nav-panel">
        <div class="mockup-nav-title">TrigonumTrade Mockups</div>
        ${linksHtml}
      </div>
    `;
    document.body.appendChild(nav);

    const toggle = nav.querySelector('.mockup-nav-toggle');
    const panel = nav.querySelector('.mockup-nav-panel');
    toggle.addEventListener('click', () => panel.classList.toggle('open'));

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) panel.classList.remove('open');
    });
  }

  // ============================================================
  // 14. CLICKABLE COUNTS (warnings, forced closures)
  // ============================================================
  function initClickableCounts() {
    // Numbers in table cells that look like counts
    document.querySelectorAll('td').forEach(td => {
      const text = td.textContent.trim();
      if (/^\d+$/.test(text) && parseInt(text) > 0 && parseInt(text) < 100) {
        td.style.cursor = 'pointer';
        td.addEventListener('click', function(e) {
          e.stopPropagation();
          toast('Showing ' + text + ' items...');
          const overlays = document.querySelectorAll('.modal-overlay');
          if (overlays.length > 0) {
            overlays[overlays.length - 1].style.display = 'flex';
          }
        });
      }
    });
  }

  // ============================================================
  // 15. PROGRESS BARS — tooltip on hover
  // ============================================================
  function initProgressBars() {
    document.querySelectorAll('.progress-bar, .risk-bar, [class*="progress"]').forEach(bar => {
      bar.style.cursor = 'pointer';
      bar.addEventListener('click', function() {
        const fill = this.querySelector('[class*="fill"], [class*="bar-fill"]');
        const width = fill ? fill.style.width : 'N/A';
        toast('Risk budget: ' + width + ' remaining');
      });
    });
  }

  // ============================================================
  // 16. VIEW TOGGLE (List / Org Structure)
  // ============================================================
  function initViewToggles() {
    document.querySelectorAll('.view-toggle').forEach(group => {
      const btns = group.querySelectorAll('.toggle-btn, button');
      btns.forEach(btn => {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          btns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          toast('View: ' + this.textContent.trim());
        });
      });
    });
  }

  // ============================================================
  // INIT
  // ============================================================
  function init() {
    initPills();
    initPreviewTabs();
    initExpandableRows();
    initTree();
    initModals();
    initSubTabs();
    initModalTriggers();
    initAllButtons();
    initTableRows();
    initForms();
    initDemoSections();
    initRolePreviews();
    initChips();
    initFloatingNav();
    initClickableCounts();
    initProgressBars();
    initViewToggles();

    // Add click sound/feedback to all interactive elements
    document.addEventListener('click', function(e) {
      const el = e.target.closest('button, .btn, .preview-tab, .toggle-btn, .period-pill, .tree-node, .expand-toggle, tr.expandable, .member-chip .remove, .add-trader-btn, .remove-btn, select, a.mockup-nav-link, a.section-jump-link, .group-card .btn, .assigned-trader .remove-btn');
      if (el) {
        el.style.transform = 'scale(0.96)';
        setTimeout(() => { el.style.transform = ''; }, 150);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
