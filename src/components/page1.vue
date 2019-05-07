<template>
    <div>
        <button @click="backLast">back last</button>
        <button @click="goNext">next page2</button>
        <p>page1</p>
    </div>
</template>
<script>
export default {
  methods:{
    goNext(){//跳转方法
      this.$router.push({
        name:"page2"
      })
    },
    backLast(){//返回之前
        this.$router.go(-1);
    }
  }
}
</script>
