<template>
  <DynamicTag :is="wrapperTag" class="dropdown" :style="style" @transitionend="$emit('transition-end')">
    <DynamicTag :is="contentTag" ref="content" :class="className">
      <slot />
    </DynamicTag>
  </DynamicTag>
</template>

<script>
export default {
  name: 'DropDown',
  props: {
    isOpen: { type: Boolean, required: true },
    contentClass: { type: [String, Array, Object], default: Array },
    wrapperTag: { type: String, default: 'div' },
    contentTag: { type: String, default: 'div' }
  },
  data() {
    return { height: this.isOpen ? 'auto' : 0 }
  },
  computed: {
    className() {
      const contentClass = Array.isArray(this.contentClass) ? this.contentClass : [this.contentClass]
      return ['dropdown__content', { '-open': this.isOpen }, ...contentClass]
    },
    style() {
      return {
        height: !Number(this.height) ? this.height : `${this.height}px`
      }
    }
  },
  watch: {
    isOpen(isOpen, wasOpen) {
      if (isOpen === wasOpen) return
      if (wasOpen) this.height = this.$refs.content.clientHeight
      else this.resetAfterTransition()

      this.$nextTick(() => {
        setTimeout(() => {
          this.height = this.isOpen ? this.$refs.content.clientHeight : 0
        }, 10)
      })
    }
  },
  methods: {
    resetAfterTransition() {
      this.$once('transition-end', () => {
        if (this.isOpen) this.height = 'auto'
      })
    },
    onTransitionEnd() {
      this.$emit('transition-end')
    }
  }
}
</script>

<style scoped lang="scss">
$easing: cubic-bezier(0.6, 0.05, 0, 0.95);

.dropdown {
  overflow: hidden;
  backface-visibility: hidden;
  transition: height 325ms $easing;

  &__content {
    margin-top: 0;
    margin-bottom: 0;
    opacity: 0;
    transform: translate3d(0, -1.25rem, 0);
    pointer-events: none;
    transition: transform 300ms $easing, opacity 150ms linear;

    &.-open {
      opacity: 1;
      transform: translateZ(0);
      pointer-events: auto;
      z-index: 0;
      transition: transform 325ms $easing, opacity 150ms linear 100ms;
    }
  }
}
</style>
