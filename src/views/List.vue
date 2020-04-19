<template>
  <div>
    <input
      type="text"
      v-model="newContact"
      placeholder="Name"
      @keyup.enter="addContact"
    />
    <button @click="addContact">Add Contact</button>
    <button @click="sortContacts">Sort Contact</button>

    <transition-group tag="ul" name="slide-up" appear>
      <li v-for="contact in contacts" :key="contact">
        {{ contact }}
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'List',
  data() {
    return {
      contacts: ['Branden', 'Denise', 'Christine'],
      newContact: ''
    };
  },
  methods: {
    addContact(): void {
      this.contacts.push(this.newContact);
      this.newContact = '';
    },
    sortContacts(): void {
      this.contacts.sort((a, b) => a.localeCompare(b));
    }
  }
});
</script>
