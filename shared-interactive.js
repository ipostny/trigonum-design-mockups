/**
 * TrigonumTrade Design Mockups — Shared Interactivity
 * Makes all mockups fully clickable/navigable for stakeholder review.
 *
 * Auto-detects and wires up:
 * - Tab switching (role workspace tabs, sub-tabs, report tabs)
 * - Modal open/close
 * - Expand/collapse (hierarchical tables, tree nodes)
 * - Toggle buttons (view toggles, pill groups)
 * - Sidebar navigation
 * - Dropdowns
 * - Search filtering
 * - Notifications/toasts
 */

(function() {
  'use strict';

  // ============================================================
  // 1. TAB SWITCHING
  // ============================================================
  function initTabs() {
    // Generic tab bars: .tab-bar > .tab-btn, .sub-tabs > .sub-tab, .pill-group > .pill
    const tabGroups = document.querySelectorAll('.tab-bar, .sub-tabs, .pill-group, .report-tabs, .role-tabs, .workspace-tabs');
    tabGroups.forEach(group => {
      const buttons = group.querySelectorAll('.tab-btn, .sub-tab, .pill, .report-tab-btn, .role-tab, .workspace-tab');
      buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          // Deactivate siblings
          buttons.forEach(b => b.classList.remove('active'));
          this.classList.add('active');

          // Find associated content panels
          const targetId = this.getAttribute('data-tab') || this.getAttribute('data-target');
          if (targetId) {
            const parent = group.closest('.tab-container, .workspace-content, section, .demo-section, .page-container, body');
            if (parent) {
              const panels = parent.querySelectorAll('.tab-panel, .tab-content, .sub-tab-content');
              panels.forEach(p => {
                p.style.display = 'none';
                p.classList.remove('active');
              });
              const target = parent.querySelector('#' + targetId) || document.getElementById(targetId);
              if (target) {
                target.style.display = '';
                target.classList.add('active');
              }
            }
          }

          showToast('Switched to: ' + this.textContent.trim());
        });
      });
    });

    // Toggle buttons (List/Tree, etc.)
    document.querySelectorAll('.view-toggle, .toggle-group').forEach(group => {
      const buttons = group.querySelectorAll('.toggle-btn, button');
      buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          buttons.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          showToast('View: ' + this.textContent.trim());
        });
      });
    });
  }

  // ============================================================
  // 2. MODALS / POPUPS
  // ============================================================
  function initModals() {
    // Close buttons
    document.querySelectorAll('.modal-close, [data-dismiss="modal"]').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const modal = this.closest('.modal-overlay, .modal-backdrop, .popup-overlay');
        if (modal) modal.style.display = 'none';
      });
    });

    // Cancel buttons inside modals
    document.querySelectorAll('.modal .btn:not(.btn-primary), .modal-actions .btn:not(.btn-primary)').forEach(btn => {
      if (btn.textContent.trim().toLowerCase() === 'cancel') {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          const modal = this.closest('.modal-overlay, .modal-backdrop, .popup-overlay, .modal');
          if (modal && modal.classList.contains('modal-overlay')) {
            modal.style.display = 'none';
          }
          showToast('Cancelled');
        });
      }
    });

    // Primary action buttons inside modals (Save, Create, Confirm, etc.)
    document.querySelectorAll('.modal .btn-primary, .modal-actions .btn-primary').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const modal = this.closest('.modal-overlay, .modal-backdrop, .popup-overlay, .modal');
        if (modal && modal.classList.contains('modal-overlay')) {
          modal.style.display = 'none';
        }
        showToast('Action: ' + this.textContent.trim() + ' (saved)');
      });
    });

    // Clicking overlay backdrop closes modal
    document.querySelectorAll('.modal-overlay, .popup-overlay').forEach(overlay => {
      overlay.addEventListener('click', function(e) {
        if (e.target === this) {
          this.style.display = 'none';
        }
      });
    });

    // Wire up trigger buttons that open modals
    document.querySelectorAll('[data-modal]').forEach(trigger => {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-modal');
        const modal = document.getElementById(targetId);
        if (modal) modal.style.display = 'flex';
      });
    });
  }

  // ============================================================
  // 3. EXPAND / COLLAPSE
  // ============================================================
  function initExpandCollapse() {
    // Expand toggles (tree nodes, hierarchical table rows)
    document.querySelectorAll('.expand-toggle, .row-toggle, [data-toggle="expand"]').forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const isExpanded = this.classList.toggle('expanded');
        // Toggle arrow direction
        if (this.textContent.includes('\u25B6')) {
          this.textContent = '\u25BC'; // down arrow
        } else if (this.textContent.includes('\u25BC')) {
          this.textContent = '\u25B6'; // right arrow
        }

        // Find and toggle child content
        const parent = this.closest('.pair-group, .expandable-row, .tree-row, .senior-trader-row');
        if (parent) {
          const children = parent.querySelectorAll('.traders-list, .child-rows, .nested-rows, .trader-rows');
          children.forEach(child => {
            child.style.display = isExpanded ? '' : 'none';
          });
        }
      });
    });

    // Expand All / Collapse All buttons
    document.querySelectorAll('.btn, button').forEach(btn => {
      const text = btn.textContent.trim().toLowerCase();
      if (text === 'expand all') {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelectorAll('.traders-list, .child-rows, .nested-rows, .trader-rows').forEach(el => {
            el.style.display = '';
          });
          document.querySelectorAll('.expand-toggle').forEach(t => {
            t.classList.add('expanded');
            if (t.innerHTML.includes('\u25B6')) t.innerHTML = t.innerHTML.replace('\u25B6', '\u25BC');
          });
          showToast('All sections expanded');
        });
      }
      if (text === 'collapse all') {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelectorAll('.traders-list, .child-rows, .nested-rows, .trader-rows').forEach(el => {
            el.style.display = 'none';
          });
          document.querySelectorAll('.expand-toggle').forEach(t => {
            t.classList.remove('expanded');
            if (t.innerHTML.includes('\u25BC')) t.innerHTML = t.innerHTML.replace('\u25BC', '\u25B6');
          });
          showToast('All sections collapsed');
        });
      }
    });
  }

  // ============================================================
  // 4. SIDEBAR NAVIGATION
  // ============================================================
  function initSidebar() {
    document.querySelectorAll('.sidebar .nav-item, .sidebar .nav-link, .sidebar a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        // Deactivate all sidebar items
        const sidebar = this.closest('.sidebar');
        if (sidebar) {
          sidebar.querySelectorAll('.nav-item, .nav-link, a').forEach(l => l.classList.remove('active'));
        }
        this.classList.add('active');

        // Check if this links to another mockup
        const href = this.getAttribute('href');
        if (href && href.endsWith('.html')) {
          window.location.href = href;
          return;
        }

        showToast('Navigate to: ' + this.textContent.trim());
      });
    });
  }

  // ============================================================
  // 5. BUTTONS & ACTIONS
  // ============================================================
  function initButtons() {
    // Generic button click feedback (for buttons not already wired)
    document.querySelectorAll('.btn, button').forEach(btn => {
      // Skip if already has a click handler from other init functions
      if (btn.hasAttribute('data-wired')) return;

      const text = btn.textContent.trim().toLowerCase();

      // Skip structural buttons (tab, toggle, expand/collapse — already wired)
      if (btn.classList.contains('tab-btn') || btn.classList.contains('toggle-btn') ||
          btn.classList.contains('sub-tab') || btn.classList.contains('pill') ||
          btn.classList.contains('expand-toggle') || btn.classList.contains('modal-close')) {
        return;
      }

      btn.setAttribute('data-wired', 'true');
      btn.addEventListener('click', function(e) {
        e.preventDefault();

        // Action-specific behaviors
        if (text.includes('export') || text.includes('csv')) {
          showToast('Exported to CSV');
        } else if (text.includes('invite') || text.includes('add') || text.includes('create') || text.includes('new')) {
          // Try to show a related modal
          const pageModals = document.querySelectorAll('.modal-overlay');
          if (pageModals.length > 0) {
            pageModals[0].style.display = 'flex';
          } else {
            showToast('Opening form: ' + this.textContent.trim());
          }
        } else if (text.includes('save')) {
          showToast('Changes saved successfully');
        } else if (text.includes('delete') || text.includes('remove') || text.includes('reject')) {
          showToast('Item removed');
        } else if (text.includes('approve') || text.includes('confirm')) {
          showToast('Approved');
        } else if (text.includes('assign')) {
          showToast('Assignment saved');
        } else if (text.includes('ban')) {
          showToast('Status updated');
        } else if (text.includes('details') || text.includes('view')) {
          const pageModals = document.querySelectorAll('.modal-overlay');
          if (pageModals.length > 0) {
            // Show the last modal (usually detail modal)
            pageModals[pageModals.length - 1].style.display = 'flex';
          } else {
            showToast('Opening details...');
          }
        } else if (text.includes('filter') || text.includes('search')) {
          showToast('Filters applied');
        } else if (text.includes('refresh')) {
          showToast('Data refreshed');
        } else if (text.includes('download') || text.includes('скачать')) {
          showToast('Download started');
        } else if (text.includes('edit')) {
          showToast('Edit mode enabled');
        } else {
          showToast('Action: ' + this.textContent.trim());
        }
      });
    });

    // Clickable table rows
    document.querySelectorAll('table tbody tr, .table-row').forEach(row => {
      row.style.cursor = 'pointer';
      row.addEventListener('click', function(e) {
        // Don't trigger if clicking a button or link inside the row
        if (e.target.closest('button, a, .btn, select, input')) return;

        // Try to show a detail modal
        const pageModals = document.querySelectorAll('.modal-overlay');
        if (pageModals.length > 0) {
          pageModals[pageModals.length - 1].style.display = 'flex';
        } else {
          showToast('Opening details for this row...');
        }
      });
    });

    // Clickable count badges (warnings, closures)
    document.querySelectorAll('.clickable-count, [data-click="popup"]').forEach(el => {
      el.style.cursor = 'pointer';
      el.addEventListener('click', function(e) {
        e.preventDefault();
        showToast('Showing filtered list: ' + this.textContent.trim() + ' items');
      });
    });
  }

  // ============================================================
  // 6. DROPDOWNS & SELECTS
  // ============================================================
  function initDropdowns() {
    document.querySelectorAll('select, .form-select, .inline-dropdown').forEach(select => {
      select.addEventListener('change', function() {
        showToast('Selected: ' + this.value);
      });
    });
  }

  // ============================================================
  // 7. TOGGLES & SWITCHES
  // ============================================================
  function initToggles() {
    document.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(input => {
      input.addEventListener('change', function() {
        const label = this.closest('label, .checkbox-item, .toggle-item');
        const name = label ? label.textContent.trim() : this.name;
        showToast((this.checked ? 'Enabled' : 'Disabled') + ': ' + name);
      });
    });

    // Period selectors
    document.querySelectorAll('.period-selector .period-btn, .period-pills .pill').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const group = this.closest('.period-selector, .period-pills');
        if (group) {
          group.querySelectorAll('.period-btn, .pill').forEach(b => b.classList.remove('active'));
        }
        this.classList.add('active');
        showToast('Period: ' + this.textContent.trim());
      });
    });
  }

  // ============================================================
  // 8. SEARCH
  // ============================================================
  function initSearch() {
    document.querySelectorAll('.search-bar input, input[type="search"], .search-input').forEach(input => {
      let debounce;
      input.addEventListener('input', function() {
        clearTimeout(debounce);
        debounce = setTimeout(() => {
          if (this.value.length > 0) {
            showToast('Searching: "' + this.value + '"');
          }
        }, 500);
      });
    });
  }

  // ============================================================
  // 9. NAVIGATION BETWEEN MOCKUPS
  // ============================================================
  function initNavigation() {
    // Create a floating navigation menu for jumping between mockups
    const nav = document.createElement('div');
    nav.id = 'mockup-nav';
    nav.innerHTML = `
      <div class="mockup-nav-toggle" title="Browse all mockups">&#9776;</div>
      <div class="mockup-nav-panel">
        <div class="mockup-nav-title">Design Mockups</div>
        <div class="mockup-nav-section">Role Workspaces (NEW)</div>
        <a href="role-workspaces.html" class="mockup-nav-link">Role Workspaces</a>
        <a href="team-analytics.html" class="mockup-nav-link">Team Analytics</a>
        <a href="risk-management.html" class="mockup-nav-link">Risk Management</a>
        <a href="trader-workspace.html" class="mockup-nav-link">Trader Workspace</a>
        <a href="org-structure.html" class="mockup-nav-link">Org Structure</a>
        <div class="mockup-nav-section">Core Pages</div>
        <a href="home.html" class="mockup-nav-link">Home</a>
        <a href="auth.html" class="mockup-nav-link">Auth (Login/Signup)</a>
        <a href="dashboard.html" class="mockup-nav-link">Dashboard</a>
        <a href="trading-terminal.html" class="mockup-nav-link">Trading Terminal</a>
        <a href="reports.html" class="mockup-nav-link">Reports</a>
        <a href="monitoring.html" class="mockup-nav-link">Monitoring</a>
        <div class="mockup-nav-section">Analytics Sub-tabs</div>
        <a href="coinmarketcap.html" class="mockup-nav-link">CoinMarketCap</a>
        <a href="long-short.html" class="mockup-nav-link">Long/Short</a>
        <a href="greed.html" class="mockup-nav-link">Fear & Greed</a>
        <a href="news.html" class="mockup-nav-link">News</a>
        <div class="mockup-nav-section">Management</div>
        <a href="members.html" class="mockup-nav-link">Members</a>
        <a href="policy.html" class="mockup-nav-link">Policy</a>
        <a href="ddp.html" class="mockup-nav-link">DDP</a>
        <a href="audit-log.html" class="mockup-nav-link">Audit Log</a>
        <a href="balance.html" class="mockup-nav-link">Balance</a>
        <a href="settings.html" class="mockup-nav-link">Settings</a>
        <div class="mockup-nav-section">Admin</div>
        <a href="fee-config.html" class="mockup-nav-link">Fee Config</a>
        <a href="admin-reports.html" class="mockup-nav-link">Admin Reports</a>
        <a href="wallet-management.html" class="mockup-nav-link">Wallet Management</a>
        <a href="approve-trades.html" class="mockup-nav-link">Approve Trades</a>
        <div class="mockup-nav-section">Investor</div>
        <a href="invest-program.html" class="mockup-nav-link">Invest Programs</a>
        <a href="investor-form.html" class="mockup-nav-link">Investor Form</a>
        <a href="investor.html" class="mockup-nav-link">Investor Portal</a>
        <div class="mockup-nav-section">Other</div>
        <a href="wiki.html" class="mockup-nav-link">Wiki</a>
        <a href="legal.html" class="mockup-nav-link">Legal</a>
        <a href="_system.html" class="mockup-nav-link">Design System</a>
      </div>
    `;
    document.body.appendChild(nav);

    // Highlight current page
    const currentFile = window.location.pathname.split('/').pop();
    nav.querySelectorAll('.mockup-nav-link').forEach(link => {
      if (link.getAttribute('href') === currentFile) {
        link.classList.add('current');
      }
    });

    // Toggle panel
    const toggle = nav.querySelector('.mockup-nav-toggle');
    const panel = nav.querySelector('.mockup-nav-panel');
    toggle.addEventListener('click', () => {
      panel.classList.toggle('open');
    });
  }

  // ============================================================
  // 10. TOAST NOTIFICATIONS
  // ============================================================
  let toastTimeout;
  function showToast(message) {
    let toast = document.getElementById('mockup-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'mockup-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  }

  // ============================================================
  // 11. DEMO SECTION NAVIGATION (for multi-section mockups)
  // ============================================================
  function initDemoSections() {
    const sections = document.querySelectorAll('.demo-section');
    if (sections.length <= 1) return;

    // Add section anchors and quick-jump
    const jumpNav = document.createElement('div');
    jumpNav.className = 'section-jump-nav';
    let html = '<div class="section-jump-title">Sections</div>';
    sections.forEach((section, i) => {
      const label = section.querySelector('.demo-label');
      const text = label ? label.textContent.trim() : 'Section ' + (i + 1);
      section.id = 'section-' + i;
      html += `<a href="#section-${i}" class="section-jump-link">${text}</a>`;
    });
    jumpNav.innerHTML = html;
    document.body.appendChild(jumpNav);
  }

  // ============================================================
  // INIT ALL
  // ============================================================
  function init() {
    initTabs();
    initModals();
    initExpandCollapse();
    initSidebar();
    initButtons();
    initDropdowns();
    initToggles();
    initSearch();
    initNavigation();
    initDemoSections();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
