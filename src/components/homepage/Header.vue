<template>
  <header class="homepage__header">
    <div class="container">
      <logo class="homepage__header--logo" />
      <h1 class="homepage__header--title">HEADLESSPRESS</h1>
      <h4 class="homepage__header--subtitle">A dead simple headless boiler theme for Wordpress.</h4>
      <a 
        href="https://github.com/headlesspress/theme/archive/master.zip" 
        class="homepage__header--download"
      >
        Download Now
      </a>
    </div>
  </header>
</template>

<script>
import Logo from '~/assets/vectors/logo.svg'

export default {
  name: 'homepage-header',
  components: {
    Logo
  },
}
</script>