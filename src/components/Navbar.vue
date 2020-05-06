<template>
    <div id="navbar">
      <header class="section">
        <div class="container">
          <nav class="navbar">
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <img src="../assets/images/logo_sample.jpg" alt="Logo" width="100" height="40">
              </a>

              <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navMenu" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item has-text-light">
                  Home
                </a>

                <a class="navbar-item has-text-light">
                  Documentation
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    More
                  </a>

                  <div class="navbar-dropdown">
                    <a class="navbar-item">
                      About
                    </a>
                    <a class="navbar-item">
                      Jobs
                    </a>
                    <a class="navbar-item">
                      Contact
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item">
                      Report an issue
                    </a>
                  </div>
                </div>
              </div>
              <!-- Socials --->
              <div class="navbar-end">
                <div class="navbar-end">
                  <div class="navbar-item">
                      <a href="#" class="navbar-item is-size-4">
                        <span class="icon is-hidden-touch">
                          <i class="fab fa-github"></i>
                        </span>
                        <span class="is-hidden-desktop">&nbsp;GitHub</span>
                      </a>
                      <a href="#" class="navbar-item is-size-4">
                        <span class="icon is-hidden-touch">
                          <i class="fab fa-twitter"></i>
                        </span>
                        <span class="is-hidden-desktop">&nbsp;Twitter</span>
                      </a>
                      <a href="#" class="navbar-item is-size-4">
                        <span class="icon is-hidden-touch cc_pointer">
                          <i class="fab fa-linkedin"></i>
                        </span>
                        <span class="is-hidden-desktop">&nbsp;LinkedIn</span>
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
</template>

<script>
  export default {
    name: 'navbar',
  }
</script>

<script>
 document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
</script>

<style lang="css" scoped>
  .navbar > .container .navbar-menu, .container >
  .navbar .navbar-menu {
    background-color: #17181B;
  }

  /**Social Media Icons**/
  .fa-twitter:hover {
      color: #1DA1F2 !important;
  }
  .fa-instagram:hover {
      color: #fb3958 !important;
  }
  /**Navbar hover**/
  .navbar-item:hover {
      text-decoration: none;
  }
</style>
