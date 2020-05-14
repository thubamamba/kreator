<template>
  <div id="navbar">
    <header class="section">
      <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img src="../assets/images/placeholder_logo.png" alt="Logo" width="100" height="40">
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="mainLinks">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="mainLinks" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item has-text-light has-text-weight-bold" href="#about">
                About
              </a>

              <a class="navbar-item has-text-light has-text-weight-bold" href="#work">
                Work
              </a>

              <a class="navbar-item has-text-light has-text-weight-bold" href="#getintouch">
                Contact
              </a>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a href="#" class="navbar-item is-size-4 hvr-pulse">
                  <span class="icon">
                    <a href="#" target="_blank">
                      <i class="fab fa-github"></i>
                    </a>
                  </span>
                </a>
                <a href="#" class="navbar-item is-size-4 hvr-pulse">
                  <span class="icon">
                    <a href="#" target="_blank">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </span>
                </a>
                <a href="#" class="navbar-item is-size-4 hvr-pulse">
                  <span class="icon">
                    <a href="#" target="_blank">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </span>
                </a>
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
          //el.classList.toggle('is-active');
          //$target.classList.toggle('is-active');

        });
      });
    }
  });
</script>

<style src="@/assets/css/main.css"></style>
<style lang="css" scoped>
  .navbar > .container .navbar-menu, .container >
  .navbar .navbar-menu {
    background-color: #17181B;
  }

  a.navbar-item:hover {
    color: var(--mainColor) !important
  }
</style>



