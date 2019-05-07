<template>
  <div>
    <button @click="goNext">go page1</button>
    <p>home</p>
  </div>
</template>
<script>
export default {
  methods:{
    goNext(){//跳转方法
      this.$router.push({
        name:"page1"
      })
    }
  }
}
</script>


