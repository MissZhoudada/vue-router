<template>
    <div>
        <button @click="backLast">back last</button>
        <button @click="goNext">next page7</button>
        <p>page6</p>
    </div>
</template>
<script>
export default {
  methods:{
    goNext(){//跳转方法
      this.$router.push({
        name:"page7"
      })
    },
    backLast(){//返回之前
        this.$router.go(-1);
    }
  }
}
</script>