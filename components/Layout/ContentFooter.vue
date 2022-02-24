<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <a
            href="https://ingeniot.com.ar"
            target="_blank"
            rel="noopener"
            class="nav-link"
          >
            ingenIoT
          </a>
        </li>
        <li class="nav-item">
          <a
            href="https://ingniot.con.ar"
            target="_blank"
            rel="noopener"
            class="nav-link"
          >
            About Us
          </a>
        </li>
        <li class="nav-item">
          <a
            href="hhttps://ingeniot.com.ar"
            target="_blank"
            rel="noopener"
            class="nav-link"
          >
            Contact
          </a>
        </li>
      </ul>
      <div class="copyright">
        &copy; {{ year }}, made by
        
        <a
          href="https://ingeniot.com.ar"
          target="_blank"
          rel="noopener"
          >IngenIoT</a
        >
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
