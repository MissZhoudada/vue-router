<template>
  <div class="nav-warp">
    <div class="nav-left" v-show="title!='home'" @click="onClickLeft">&lt;</div>
    <div class="nav-center">{{title}}</div>
    <div class="nav-right" v-show="title!='home'" @click="onClickRight">X</div>
  </div>
</template>
<script>
export default {
    props:['title','start'],
    methods:{
        onClickLeft(){
            this.$router.go(-1);
        },
        onClickRight(){
           this.$router.go(-this.start);
        }
    }
}
</script>

<style scoped>
.nav-warp{
   background-color: #cccccc;
   padding: 10px;
   color: #ffffff;
}
.nav-warp div{
    display: inline-block;
}
.nav-left{
    float: left;
    cursor: pointer;
}
.nav-right{
    float: right;
    cursor: pointer;
}
</style>


