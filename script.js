document.addEventListener('DOMContentLoaded', () => {
    // --- Your Existing Top Theme Button Logic ---
    const toggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        let currentTheme = document.documentElement.getAttribute('data-theme');
        if (!currentTheme) {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          currentTheme = prefersDark ? 'dark' : 'light';
        }
        if (currentTheme === 'dark') {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
        } else {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
        }
      });
    }
  
    // --- Your Existing Top Nav Hamburger Button Logic ---
    const toggleButton = document.querySelector(".nav-toggle");
    const navMenu = document.getElementById("navMenu");
    if (toggleButton && navMenu) {
      toggleButton.addEventListener("click", () => {
        toggleButton.classList.toggle("open");
        navMenu.classList.toggle("active");
      });
    }
  
    // --- Safe Side Navbar Drawer Toggle Logic ---
    const sideToggleBtn = document.getElementById('side-nav-toggle');
    const sidebar = document.getElementById('myWorkSidebar');
  
    if (sideToggleBtn && sidebar) {
      sideToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        sidebar.classList.toggle('open');
        sideToggleBtn.classList.toggle('active');
        document.body.classList.toggle('sidebar-is-open');
      });
  
      const sideLinks = sidebar.querySelectorAll('.myWorkNavlinks a');
      sideLinks.forEach(link => {
        link.addEventListener('click', () => {
          sidebar.classList.remove('open');
          sideToggleBtn.classList.remove('active');
          document.body.classList.remove('sidebar-is-open')
        });
      });
  
      document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !sideToggleBtn.contains(e.target)) {
          sidebar.classList.remove('open');
          sideToggleBtn.classList.remove('active');
          document.body.classList.remove('sidebar-is-open');
        }
      });
    }
  });

  const iframe = document.querySelector('iframe'); // Change to your iframe selector if needed

iframe.addEventListener('load', () => {
    // Intercept focus events and prevent scrolling
    iframe.contentWindow.addEventListener('focus', (e) => {
        e.preventDefault();
    }, { passive: false });
});