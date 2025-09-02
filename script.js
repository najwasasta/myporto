// Init AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    mirror: true
  });
  
  // Handle tab active link highlight and content show
  document.querySelectorAll('.navbar-nav .nav-link').forEach(navLink => {
    navLink.addEventListener('click', function(e) {
      e.preventDefault();
      // Remove active class from all nav links
      document.querySelectorAll('.navbar-nav .nav-link').forEach(link => link.classList.remove('active'));
      // Add active class to clicked link
      this.classList.add('active');
  
      // Show the corresponding tab content
      const target = this.getAttribute('href');
      document.querySelectorAll('.tab-pane').forEach(tab => tab.classList.remove('show', 'active'));
      document.querySelector(target).classList.add('show', 'active');
  
      // Refresh AOS animations
      AOS.refresh();
    });
  });
  