<template>
  <div id="app">
    <nav-menu :title="$route.meta.title" :start="$route.query.s"/>
    <router-view/>
  </div>
</template>

<script>
import navMenu from './components/NavMenu'
export default {
  name: 'App',
  components:{
    navMenu
  }
}
</script>

<style>
body,html,#app{
  margin: 0;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin: 60px auto; */
}
#app>div:last-child{
  height: calc(100% - 39px);
}
#app .content{
    height: 100%;
    width: 100%;
    font-size: 3em;
    background-color: #cccccc;
    color: #ffffff;
    border-top: 1px solid #ffffff;
}
.roule{
  position:absolute;
  bottom:0;
  text-align: left;
  line-height: 30px;
  color:red
  }
  button{
    width: 100%;
    padding: 10px;
    border:0;
    background-color: darkcyan;
    color: #ffffff;
    font-size: 20px;
  }
    button:last-child{   
    background-color: rgb(238, 38, 55);
  }
</style>
