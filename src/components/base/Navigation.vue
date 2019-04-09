<template>
  <nav class="navigation">
    <div class="container">
      <ul class="navigation__menu">
        <li>
          <a 
            class="navigation__menu--item"
            href="https://github.com/headlesspress/theme" 
            target="_blank"
          >
            <github-icon class="navigation--github"/>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import GithubIcon from '~/assets/vectors/github.svg'

export default {
  name: 'base-navigation',
  components: {
    GithubIcon
  },
}
</script>