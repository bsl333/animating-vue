<template>
  <div>
    <button @click="isOpen = !isOpen">
      My Profile
    </button>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false"
    >
      <div v-if="isOpen" class="drawer">
        <img src="../assets/avatar.png" alt="avatar" />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Velocity from 'velocity-animate';

export default Vue.extend({
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    beforeEnter(el: HTMLDivElement) {
      el.style.opacity = '0';
      el.style.width = '1em';
    },
    enter(el: HTMLDivElement, done: () => void): void {
      console.log('called in drawer');
      Velocity(
        el,
        {
          opacity: 1,
          width: '12em'
        },
        {
          duration: 1000,
          easing: [10, 5],
          // easing: 'easeOutCubic',
          complete: done
        }
      );
    },
    leave(el: HTMLDivElement, done: () => void): void {
      Velocity(
        el,
        {
          opacity: 0,
          width: '0'
        },
        {
          duration: 500,
          easing: 'easeInCubic',
          complete: done
        }
      );
    }
  }
});
</script>

<style scoped>
img {
  height: 2.5em;
  width: 2.5em;
  border-radius: 50%;
}
.drawer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12em;
  height: 20em;
  border-radius: 1%;
  background-color: #e0e0e0;
  box-shadow: 0.08em 0.03em 0.4em #ababab;
  padding-top: 0.7em;
}
.drawer div {
  height: 3.5em;
  width: 95%;
  margin-top: 0.6em;
  background-color: #f0f0f0;
  border: 0.02em solid #ababab;
  border-radius: 1%;
}
</style>
