<template>
  <div class="home">
    <button @click="toggleModal">Open</button>
    <transition name="fade">
      <div v-if="isOpen" class="modal">
        <button @click="toggleModal">Close</button>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleModal(): void {
      this.isOpen = !this.isOpen;
    }
  }
});
</script>

<style lang="scss" scoped></style>
