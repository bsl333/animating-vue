<template>
  <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
    <div class="card"></div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import gsap from 'gsap';
export default Vue.extend({
  name: 'Simple',
  methods: {
    beforeEnter(el: HTMLDivElement): void {
      el.style.opacity = '0';
      el.style.transform = 'scale(0,0)';
    },
    enter(el: HTMLDivElement, done: () => void): void {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: 'bounce.out',
        onComplete: done
      });
    }
  }
});
</script>

<style lang="scss" scoped>
.card {
  display: block;
  margin: 0 auto 0 auto;
  height: 6.5em;
  width: 6.5em;
  border-radius: 1%;
  background-color: #16c0b0;
  box-shadow: 0.08em 0.03em 0.4em #ababab;
}
</style>
