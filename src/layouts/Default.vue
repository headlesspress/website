<template>
  <div>
    <base-navigation />
    <slot/>
  </div>
</template>

<script>
import BaseNavigation from '~/components/base/Navigation.vue';

export default {
  components: {
    BaseNavigation,
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
