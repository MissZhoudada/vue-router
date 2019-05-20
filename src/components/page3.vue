<template>
    <div>
        <div class="content">
          page3
          <button @click="goNext">next page4</button>
        </div>
    </div>
</template>
<script>
export default {
  props:['start'],
  methods:{
    goNext(){//跳转方法
      let start = Number(this.start)+1;
      this.$router.push({
        path:"page4?s="+start
      })
    }
  }
}
</script>