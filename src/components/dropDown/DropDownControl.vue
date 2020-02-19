<template>
  <button class="dropdown-control" @click.stop="$emit('input', !value)">
    <i :class="className"></i>
  </button>
</template>

<script>
export default {
  name: 'DropDownControl',
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    className() {
      return ['dropdown-control__arrow', { '-collapsed': !this.value }]
    }
  }
}
</script>

<style lang="scss">
$easing: cubic-bezier(0.6, 0.05, 0, 0.95);

.dropdown-control {
  width: 48px;
  height: 46px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &__arrow {
    width: 0.8em;
    height: 0.8em;
    position: relative;
    transform: rotate(45deg);
    backface-visibility: hidden;
    transition: transform 275ms $easing;

    &::before,
    &::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      border-radius: 2px;
      background-color: currentColor;
      backface-visibility: hidden;
      transform: rotate(0);
      transition: transform 275ms $easing;
    }

    &::before {
      width: 2px;
      height: 100%;
      transform-origin: 50% 0;
    }

    &::after {
      width: 100%;
      height: 2px;
      transform-origin: 0 50%;
    }

    &.-collapsed {
      transform: rotate(135deg);

      &::before {
        transform: rotate(90deg);
      }

      &::after {
        transform: rotate(90deg) scale(-1);
      }
    }
  }
}
</style>
