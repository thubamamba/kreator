<template>
  <div id="footer">
    <!-- Footer -->
    <footer class="section is-medium" id="contact">
      <div class="container">
        <div class="columns">
          <div class="column is-three-fifths is-offset-one-fifth has-text-centered">
            <h2 class="title has-text-white">Wanna work together with me?</h2>
            <h3 class="subtitle has-text-light">Let's do this. Drop me a mail.</h3>
          </div>
        </div>
        <!-- Footer Nav -->
        <nav class="level footerNav">
          <!-- Phone -->
          <div class="level-item has-text-centered">
            <h3 class="subtitle is-4"><strong><a href="tel:#" class="has-text-white">+27 000 1234</a></strong></h3>
          </div>
          <!-- Social Media -->
          <div class="level-item has-text-centered">
            <a href="#" target="_blank">
              <span class="icon is-inline-block">
                <i class="fab fa-github icon is-medium"></i>
              </span>
            </a>
            <a href="#" target="_blank">
              <span class="icon is-inline-block">
                <i class="fab fa-linkedin icon is-medium"></i>
              </span>
            </a>
            <a href="#" target="_blank">
              <span class="icon is-inline-block">
                <i class="fab fa-twitter icon is-medium"></i>
              </span>
            </a>
            <a href="#" target="_blank">
              <span class="icon is-inline-block">
                <i class="fab fa-instagram icon is-medium"></i>
              </span>
            </a>
            <a href="#" target="_blank">
              <span class="icon is-inline-block">
                <i class="fab fa-facebook-square icon is-medium"></i>
              </span>
            </a>
          </div>
          <!-- Email -->
          <div class="level-item has-text-centered ">
           <span class="blinking">👉</span> <h3 class="subtitle is-4"><strong><a href="mailto:#" class="has-text-white">emailme@myemail.com</a></strong></h3>
          </div>
        </nav>
        <!-- Copyright -->
        <div class="columns">
          <div class="column is-three-fifths is-offset-one-fifth">
            <hr>
            <div class="has-text-centered">
              <p class="body-text">
                Made with lots of 🍕 &amp; ☕ at  🌃 in Jo'burg. &copy; 2020.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="css" scoped>
  .footer {
    background-color: #17181B;
  }
</style>

<script>
  export default {
    name: 'footer'
  }
</script>
