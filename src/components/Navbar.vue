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
                <a class="navbar-item has-text-light has-text-weight-medium" href="#about">
                  About
                </a>

                <a class="navbar-item has-text-light has-text-weight-medium" href="#work">
                  Work
                </a>

                <a class="navbar-item has-text-light has-text-weight-medium" href="#getintouch">
                  Contact
                </a>
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

<script src='~assets/js/main.js'></script>
<script>
  export default {
    name: 'navbar',
  }
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



