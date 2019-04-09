<template>
  <Layout>
    <homepage-header />
    <main>
      <homepage-introduction />
      <homepage-features />
      <homepage-jamstack />
    </main>
  </Layout>
</template>


<script>
import HomepageHeader from '~/components/homepage/Header.vue';
import HomepageIntroduction from '~/components/homepage/Introduction.vue';
import HomepageFeatures from '~/components/homepage/Features.vue';
import HomepageJamstack from '~/components/homepage/Jamstack.vue'

export default {
  components: {
    HomepageHeader,
    HomepageIntroduction,
    HomepageFeatures,
    HomepageJamstack
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
