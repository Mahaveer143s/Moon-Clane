// Function to scroll to the top
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
      // Function to collapse or expand the navbar
      function toggleNavbarCollapse() {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (navbarToggler && navbarCollapse) {
            if (window.innerWidth <= 1023) {
                // Manually trigger collapse if width is 1023px or smaller
                if (!navbarCollapse.classList.contains('collapse')) {
                    navbarToggler.click(); // Trigger the navbar collapse
                }
            } else {
                // Ensure navbar is expanded when screen is larger than 1023px
                if (navbarCollapse.classList.contains('collapse')) {
                    navbarToggler.click(); // Trigger the navbar expand
                }
            }
        }
    }

    // Run on page load and when window is resized
    window.addEventListener('resize', toggleNavbarCollapse);
    window.addEventListener('load', toggleNavbarCollapse);