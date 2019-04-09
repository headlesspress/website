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
    title: 'HeadlessPress | A dead simple headless boiler theme for Wordpress.',
    meta: [
      { key: 'description', name: 'description', content: 'Turn Wordpress into a powerful Headless CMS for your new Website/App. With HeadlessPress you get all the base essentials + a few extras to get you up and running fast with the Wordpress REST API.' }
    ]
  }
}
</script>
