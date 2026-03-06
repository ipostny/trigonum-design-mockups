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
  // 1. PILL / PERIOD TOGGLES
  // ============================================================
  function initPills() {
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
  // 2. SIDEBAR TABS
  // ============================================================
  function initPreviewTabs() {
    document.querySelectorAll('.role-preview-sidebar, .sidebar').forEach(sidebar => {
      const tabs = sidebar.querySelectorAll('.preview-tab, .nav-item, .nav-link, a[href]');
      tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
          e.preventDefault();
          const text = this.textContent.trim();
          if (text.includes('Logout')) { toast('Logging out...'); return; }
          if (text.includes('Settings')) { toast('Opening Settings'); return; }
          tabs.forEach(t => t.classList.remove('active'));
          this.classList.add('active');
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
    document.querySelectorAll('tr.expandable').forEach(row => {
      row.style.cursor = 'pointer';
      row.addEventListener('click', function(e) {
        if (e.target.closest('button, a, select, input')) return;
        const icon = this.querySelector('.expand-icon');
        const isExpanding = icon && icon.textContent.includes('▶');
        let sibling = this.nextElementSibling;
        while (sibling && sibling.classList.contains('nested')) {
          sibling.style.display = isExpanding ? '' : 'none';
          sibling = sibling.nextElementSibling;
        }
        if (icon) icon.textContent = isExpanding ? '▼' : '▶';
        toast(isExpanding ? 'Expanded' : 'Collapsed');
      });
    });
    document.querySelectorAll('button').forEach(btn => {
      const text = btn.textContent.trim().toLowerCase();
      if (text === 'expand all') {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelectorAll('tr.nested').forEach(r => r.style.display = '');
          document.querySelectorAll('.expand-icon').forEach(i => i.textContent = '▼');
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
  // 4. TREE VIEW
  // ============================================================
  function initTree() {
    document.querySelectorAll('.expand-toggle').forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault(); e.stopPropagation();
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
    document.querySelectorAll('.tree-node.trader-node, .tree-node').forEach(node => {
      if (node.classList.contains('trader-node') || node.querySelector('.node-role.trader')) {
        node.addEventListener('click', function(e) {
          e.stopPropagation();
          const name = this.querySelector('.node-name');
          toast('Trader analytics: ' + (name ? name.textContent : 'Unknown'));
          const popup = document.querySelector('.analytics-popup');
          if (popup) {
            popup.style.display = 'block'; popup.style.position = 'fixed';
            popup.style.top = '50%'; popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)'; popup.style.zIndex = '1000';
          }
        });
      }
    });
  }

  // ============================================================
  // 5. MODALS
  // ============================================================
  function initModals() {
    const modals = document.querySelectorAll('.modal-overlay, .popup-overlay');
    modals.forEach(m => {
      m.addEventListener('click', function(e) {
        if (e.target === this) this.style.display = 'none';
      });
    });
    document.querySelectorAll('.modal-close, .modal .btn, .modal-actions .btn, .analytics-popup .btn').forEach(btn => {
      const text = btn.textContent.trim().toLowerCase();
      if (text === 'cancel' || text === 'close' || text === '×') {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          const modal = this.closest('.modal-overlay, .popup-overlay');
          if (modal) modal.style.display = 'none';
          const popup = this.closest('.analytics-popup');
          if (popup) popup.style.display = '';
          toast('Closed');
        });
      }
    });
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
  // 6. ALL BUTTONS
  // ============================================================
  function initAllButtons() {
    document.querySelectorAll('button, .btn, .add-trader-btn, .remove-btn, [role="button"]').forEach(btn => {
      if (btn.dataset.wired) return;
      btn.dataset.wired = '1';
      btn.addEventListener('click', function(e) {
        if (e.defaultPrevented) return;
        e.preventDefault();
        const text = this.textContent.trim().toLowerCase();
        if (text.includes('export') || text.includes('csv')) { toast('CSV exported'); }
        else if (text.includes('create') || text.includes('+ add') || text.includes('invite') || text.includes('new')) {
          const overlay = document.querySelector('.modal-overlay');
          if (overlay) { overlay.style.display = 'flex'; toast('Opening form...'); }
          else { toast('Action: ' + this.textContent.trim()); }
        }
        else if (text.includes('save')) { toast('Saved successfully!'); }
        else if (text.includes('delete') || text.includes('remove')) { toast('Removed'); }
        else if (text.includes('approve') || text.includes('confirm')) { toast('Approved!'); }
        else if (text.includes('reject') || text.includes('ban')) { toast('Status updated'); }
        else if (text.includes('assign')) { toast('Assignment saved'); }
        else if (text.includes('details') || text.includes('view') || text.includes('open')) { toast('Opening details...'); }
        else if (text.includes('download')) { toast('Download started'); }
        else if (text.includes('edit')) { toast('Edit mode'); }
        else if (text.includes('refresh')) { toast('Refreshed'); }
        else if (text.includes('search') || text.includes('filter')) { toast('Filters applied'); }
        else if (text.includes('upload')) { toast('File uploaded'); }
        else if (text.length > 0 && text.length < 50) { toast(this.textContent.trim()); }
      });
    });
  }

  // ============================================================
  // 7. TABLE ROW CLICKS
  // ============================================================
  function initTableRows() {
    document.querySelectorAll('table tbody tr:not(.expandable):not(.nested)').forEach(row => {
      row.style.cursor = 'pointer';
      row.addEventListener('click', function(e) {
        if (e.target.closest('button, a, select, input, .btn')) return;
        if (e.defaultPrevented) return;
        const firstCell = this.querySelector('td');
        const name = firstCell ? firstCell.textContent.trim() : 'Row';
        toast('Details: ' + name);
        const overlays = document.querySelectorAll('.modal-overlay');
        if (overlays.length > 0) overlays[overlays.length - 1].style.display = 'flex';
      });
    });
  }

  // ============================================================
  // 8. FORMS
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
    document.querySelectorAll('input[type="text"], input[type="search"]').forEach(input => {
      let timer;
      input.addEventListener('input', function() {
        clearTimeout(timer);
        timer = setTimeout(() => { if (this.value.length > 0) toast('Searching: "' + this.value + '"'); }, 600);
      });
    });
  }

  // ============================================================
  // 9-16. OTHER INIT FUNCTIONS
  // ============================================================
  function initDemoSections() {
    const sections = document.querySelectorAll('.demo-section');
    if (sections.length <= 1) return;
    sections.forEach((s, i) => { s.id = 'section-' + i; });
    const nav = document.createElement('div'); nav.className = 'section-jump-nav';
    let html = '<div class="section-jump-title">Sections</div>';
    sections.forEach((s, i) => {
      const label = s.querySelector('.demo-label');
      const text = label ? label.textContent.replace(/^Section \d+ — /, '') : 'Section ' + (i+1);
      html += '<a href="#section-' + i + '" class="section-jump-link">' + text + '</a>';
    });
    nav.innerHTML = html; document.body.appendChild(nav);
  }

  function initRolePreviews() {
    document.querySelectorAll('.role-preview').forEach(preview => {
      preview.querySelectorAll('.preview-tab').forEach(tab => { tab.style.cursor = 'pointer'; });
    });
  }

  function initChips() {
    document.querySelectorAll('.member-chip .remove, .member-chip .close').forEach(x => {
      x.style.cursor = 'pointer';
      x.addEventListener('click', function(e) {
        e.stopPropagation();
        const chip = this.closest('.member-chip');
        if (chip) { chip.style.opacity = '0.3'; chip.style.pointerEvents = 'none'; toast('Removed: ' + chip.textContent.replace('×', '').trim()); }
      });
    });
  }

  function initSubTabs() {
    document.querySelectorAll('.sub-tab-bar, .sub-tabs, .tab-bar, .report-tabs').forEach(bar => {
      const btns = bar.querySelectorAll('button, .sub-tab, .tab-btn, .report-tab-btn');
      btns.forEach(btn => {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          btns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
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

  function initFloatingNav() {
    const nav = document.createElement('div'); nav.id = 'mockup-nav';
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    const pages = [
      { section: 'Role Workspaces (NEW)', items: [['index.html','Home — All Mockups'],['role-workspaces.html','Role Workspaces'],['team-analytics.html','Team Analytics'],['risk-management.html','Risk Management'],['trader-workspace.html','Trader Workspace'],['org-structure.html','Org Structure']] },
      { section: 'Core', items: [['dashboard.html','Dashboard'],['trading-terminal.html','Trading Terminal'],['reports.html','Reports'],['monitoring.html','Monitoring']] },
      { section: 'Analytics', items: [['coinmarketcap.html','CoinMarketCap'],['long-short.html','Long/Short'],['greed.html','Fear & Greed'],['news.html','News']] },
      { section: 'Management', items: [['members.html','Members'],['policy.html','Policy'],['ddp.html','DDP'],['audit-log.html','Audit Log'],['balance.html','Balance'],['settings.html','Settings']] },
      { section: 'Admin', items: [['fee-config.html','Fee Config'],['admin-reports.html','Admin Reports'],['wallet-management.html','Wallet Mgmt'],['approve-trades.html','Approve Trades']] },
      { section: 'Investor', items: [['invest-program.html','Invest Programs'],['investor-form.html','Investor Form'],['investor.html','Investor Portal']] },
      { section: 'Other', items: [['home.html','Home Page'],['auth.html','Auth'],['wiki.html','Wiki'],['legal.html','Legal']] },
    ];
    let linksHtml = '';
    pages.forEach(group => {
      linksHtml += '<div class="mockup-nav-section">' + group.section + '</div>';
      group.items.forEach(([href, label]) => {
        const cls = href === currentFile ? ' current' : '';
        linksHtml += '<a href="' + href + '" class="mockup-nav-link' + cls + '">' + label + '</a>';
      });
    });
    nav.innerHTML = '<div class="mockup-nav-toggle" title="Browse all mockups">☰</div><div class="mockup-nav-panel"><div class="mockup-nav-title">TrigonumTrade Mockups</div>' + linksHtml + '</div>';
    document.body.appendChild(nav);
    const toggle = nav.querySelector('.mockup-nav-toggle');
    const panel = nav.querySelector('.mockup-nav-panel');
    toggle.addEventListener('click', () => panel.classList.toggle('open'));
    document.addEventListener('click', (e) => { if (!nav.contains(e.target)) panel.classList.remove('open'); });
  }

  function initClickableCounts() {
    document.querySelectorAll('td').forEach(td => {
      const text = td.textContent.trim();
      if (/^\d+$/.test(text) && parseInt(text) > 0 && parseInt(text) < 100) {
        td.style.cursor = 'pointer';
        td.addEventListener('click', function(e) {
          e.stopPropagation(); toast('Showing ' + text + ' items...');
          const overlays = document.querySelectorAll('.modal-overlay');
          if (overlays.length > 0) overlays[overlays.length - 1].style.display = 'flex';
        });
      }
    });
  }

  function initProgressBars() {
    document.querySelectorAll('.progress-bar, .risk-bar, [class*="progress"]').forEach(bar => {
      bar.style.cursor = 'pointer';
      bar.addEventListener('click', function() {
        const fill = this.querySelector('[class*="fill"], [class*="bar-fill"]');
        toast('Risk budget: ' + (fill ? fill.style.width : 'N/A') + ' remaining');
      });
    });
  }

  function initViewToggles() {
    document.querySelectorAll('.view-toggle').forEach(group => {
      const btns = group.querySelectorAll('.toggle-btn, button');
      btns.forEach(btn => {
        btn.addEventListener('click', function(e) {
          e.preventDefault(); btns.forEach(b => b.classList.remove('active'));
          this.classList.add('active'); toast('View: ' + this.textContent.trim());
        });
      });
    });
  }

  // ============================================================
  // 17. TAB SWITCHING — data-tab-group driven content panels
  // ============================================================
  function initTabSwitching() {
    document.querySelectorAll('[data-tab-group]').forEach(tabBar => {
      const groupName = tabBar.dataset.tabGroup;
      const buttons = tabBar.querySelectorAll('[data-tab-target]');
      buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
          e.preventDefault(); e.stopPropagation();
          const targetId = this.dataset.tabTarget;
          buttons.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          document.querySelectorAll('[data-tab-panel][data-tab-group="' + groupName + '"]').forEach(panel => {
            panel.style.display = 'none';
          });
          const targetPanel = document.getElementById(targetId);
          if (targetPanel) targetPanel.style.display = '';
          toast('Tab: ' + this.textContent.trim());
        });
      });
      if (buttons.length > 0) {
        let activeBtn = tabBar.querySelector('[data-tab-target].active') || buttons[0];
        const activeTarget = activeBtn.dataset.tabTarget;
        document.querySelectorAll('[data-tab-panel][data-tab-group="' + groupName + '"]').forEach(panel => {
          panel.style.display = panel.id === activeTarget ? '' : 'none';
        });
      }
    });
  }

  // ============================================================
  // 18. MODAL TRIGGERS — data-modal-trigger opens matching modal
  // ============================================================
  function initModalTriggers() {
    document.querySelectorAll('[data-modal-trigger]').forEach(trigger => {
      trigger.addEventListener('click', function(e) {
        e.preventDefault(); e.stopPropagation();
        const modalId = this.dataset.modalTrigger;
        const modal = document.getElementById(modalId);
        if (modal) { modal.style.display = 'flex'; toast('Opening: ' + (this.textContent.trim() || modalId)); }
      });
    });
    document.querySelectorAll('.modal-overlay[data-modal]').forEach(overlay => {
      overlay.style.display = 'none';
      overlay.addEventListener('click', function(e) { if (e.target === this) this.style.display = 'none'; });
      overlay.querySelectorAll('.modal-close-btn, [data-modal-close]').forEach(closeBtn => {
        closeBtn.addEventListener('click', function(e) { e.preventDefault(); e.stopPropagation(); overlay.style.display = 'none'; });
      });
      overlay.querySelectorAll('.btn-primary, .btn-confirm').forEach(actionBtn => {
        actionBtn.addEventListener('click', function(e) { e.preventDefault(); toast(this.textContent.trim() + ' — confirmed!'); overlay.style.display = 'none'; });
      });
      overlay.querySelectorAll('.btn-cancel').forEach(cancelBtn => {
        cancelBtn.addEventListener('click', function(e) { e.preventDefault(); overlay.style.display = 'none'; toast('Cancelled'); });
      });
    });
  }

  // ============================================================
  // 19. TABLE ROW MODAL TRIGGERS
  // ============================================================
  function initRowModalTriggers() {
    document.querySelectorAll('tr[data-row-modal]').forEach(row => {
      row.style.cursor = 'pointer';
      row.addEventListener('click', function(e) {
        if (e.target.closest('button, a, select, input, .btn')) return;
        const modalId = this.dataset.rowModal;
        const modal = document.getElementById(modalId);
        if (modal) { modal.style.display = 'flex'; toast('Opening detail...'); }
      });
    });
  }

  // ============================================================
  // INIT
  // ============================================================
  function init() {
    initTabSwitching();
    initModalTriggers();
    initRowModalTriggers();
    initPills();
    initPreviewTabs();
    initExpandableRows();
    initTree();
    initModals();
    initSubTabs();
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
    document.addEventListener('click', function(e) {
      const el = e.target.closest('button, .btn, .preview-tab, .toggle-btn, .period-pill, .tree-node, .expand-toggle, tr.expandable, .member-chip .remove, .add-trader-btn, .remove-btn, select, a.mockup-nav-link, a.section-jump-link, .group-card .btn, .assigned-trader .remove-btn');
      if (el) { el.style.transform = 'scale(0.96)'; setTimeout(() => { el.style.transform = ''; }, 150); }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();