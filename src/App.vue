<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Modal</router-link> |
      <router-link to="/list">List</router-link> |
      <router-link to="/drawer">Drawer</router-link> |
      <router-link to="/simple">Simple</router-link> |
      <router-link to="/stagger">Stagger</router-link>
    </div>
    <!-- <transition name="slide-fade" mode="out-in"> -->
    <router-view />
    <!-- </transition> -->
  </div>
</template>

<style lang="scss">
@import './transitions/transitions.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  width: 7em;
  height: 2em;
  margin: 0.5em;
  border-radius: 5px;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  font-size: 1em;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
}

input {
  display: inline-block;
  box-sizing: border-box;
  width: 30%;
  height: 2em;
  padding: 0.5em;
  margin: 0.2em;
  font: 0.8em 'Avenir', Helvetica, sans-serif;
}

ul {
  list-style-type: none;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.modal {
  width: 250px;
  height: 200px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 2%;
  background-color: #e0e0e0;
}
::placeholder {
  color: #2c3e50;
}

/****** TRANSITIONS ******/
// /* FADE START */
// .fade-enter {
//   opacity: 0;
// }

// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s ease-out;
// }

// .fade-leave-to {
//   opacity: 0;
// }
// /* FADE END */

// /* SLIDE-FADE START */
// .slide-fade-enter {
//   opacity: 0;
// }

// .slide-fade-enter-active,
// .slide-fade-leave-active {
//   transition: opacity 0.5s ease-out;
// }

// .slide-fade-leave-to {
//   opacity: 0;
// }
// /* SLIDE-FADE END */
</style>
