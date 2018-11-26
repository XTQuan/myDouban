<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

 <style lang="less">



#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    max-width: 41.2rem;
    margin: 0 auto;

}
html{font-size: 62.5%;}
a{
  text-decoration: none;
}
li{list-style:none;}
</style>
