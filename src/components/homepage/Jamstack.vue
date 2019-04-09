<template>
  <div class="homepage__jamstack">
    <div class="container">
      <h3 class="homepage__jamstack--title">JAMSTACK Ready</h3>
      <p class="homepage__jamstack--intro">Use HeadlessPress as the backend API for your favorite JAMStack setup.</p>
      <ul class="homepage__jamstack--list">
        <li>
          <icon-gatsby />
        </li>
        <li>
          <icon-nuxt />
        </li>
        <li>
          <icon-gridsome />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconGatsby from '~/assets/vectors/jam/gatsby.svg'
import IconNuxt from '~/assets/vectors/jam/nuxt.svg'
import IconGridsome from '~/assets/vectors/jam/gridsome.svg'

export default {
  name: 'homepage-jamstack',
  components: {
    IconGatsby,
    IconNuxt,
    IconGridsome
  }
}
</script>