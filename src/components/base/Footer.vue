<template>
  <footer class="footer">
    <div class="container">
      <p class="footer--info">
        Logo by <a target="_blank" href="https://www.swifticons.com/">Swifticons</a>
      </p>
      <p class="footer--info">
        Project by <a target="_blank" href="https://jacks.site/"><icon-jack class="footer--icon" /></a>
      </p>
    </div>
  </footer>
</template>

<script>
import IconJack from '~/assets/vectors/jack.svg'
export default {
  name: 'base-footer',
  components: {
    IconJack
  },
}
</script>