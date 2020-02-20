<template>
  <ul class="link-list">
    <li v-for="[label, link] in linkList" :key="label" class="link-list__item">
      <router-link :to="link">
        <span>{{ label }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
import * as views from './views'

const linkList = Object.values(views).map(({ route }) => [route.label || route.name, { name: route.name }])

export default {
  name: 'Root',
  route: { name: 'root', path: '/' },
  data() {
    return { linkList }
  }
}
</script>

<style lang="scss">
@import '../styles/settings/index.scss';

.link-list {
  text-align: center;

  &__item {
    @include type-title;
    margin-top: 2.4rem;
    color: #0bd17d;
    text-transform: capitalize;

    a {
      text-decoration: underline;

      span {
        color: #444;
        text-decoration: none;
      }
    }
  }
}
</style>
