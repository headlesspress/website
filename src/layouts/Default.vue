<template>
  <div>
    <base-navigation />
    <slot/>
    <base-footer />
  </div>
</template>

<script>
import BaseNavigation from '~/components/base/Navigation.vue';
import BaseFooter from '~/components/base/Footer.vue';

export default {
  components: {
    BaseNavigation,
    BaseFooter
  },
}
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
