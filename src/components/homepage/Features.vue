<template>
  <div class="homepage__features">
    <div class="container">
      <section class="features__section">
        <div class="features__section--graphic">
          <icon-wrench />
        </div>
        <div class="features__section--body">
          <h4 class="features__section--title">Batteries Included</h4>
          <p>Building ontop of the core Wordpress REST API; HeadlessPress comes with a few importmant additions. Including:</p>
          <ul class="features__section--list">
            <li>Advanced Custom fields (ACF)</li>
            <li>Wordpress SEO (Yoast)</li>
            <li>Wordpress Menus</li>
            <li>JSON Web Tokens (JWT)</li>
            <li>Contact Form 7 form schema</li>
          </ul>	
        </div>
      </section>

      <section class="features__section">
        <div class="features__section--body">
          <h4 class="features__section--title">Helpful filters</h4>
          <p>HeadlessPress comes with a bunch of helpful filters to help you retrive usable data in your responses with ease.</p>
        </div>
        <div class="features__section--graphic">
          <icon-plugins />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import IconWrench from '~/assets/vectors/wrench.svg';
import IconPlugins from '~/assets/vectors/plugins.svg';

export default {
  name: 'homepage-features',
  components: {
    IconWrench,
    IconPlugins
  },
}
</script>