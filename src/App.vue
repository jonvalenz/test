<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/Feed">Feed</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

input[type='button'] {
  margin: 0 0.5em 0 0.5em;
  border: none;
  padding: 0.6em;
  transition: 0.2s;
  border-radius: 5px;
}

button {
  border: none;
  padding: 0.6em;
  transition: 0.2s;
  border-radius: 5px;
}

input[type='text'] {
  display: block;
  width: 90%;
  margin: 0;
  border: none;
  border-radius: 5px;
  background-color: rgb(236, 236, 236);
  transition: 0.2s;
  padding: 1em;
  outline: none;
}

textarea {
  display: flex;
  text-align: start;
  width: 100%;
  height: 10em;
  margin: 0;
  border: none;
  border-radius: 5px;
  background-color: rgb(236, 236, 236);
  transition: 0.2s;
  padding: 1em;
  margin-top: 1em;
  outline: none;
}

input[type='text']:focus {
  background-color: rgb(167, 167, 167);
}

textarea:focus {
  background-color: rgb(167, 167, 167);
}
</style>
