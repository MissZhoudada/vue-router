<template>
    <div>
        <div class="content">
          page5
          <button @click="goNext">next page6</button>
        </div>
    </div>
</template>
<script>
export default {
  props:['start'],
  methods:{    
    goNext(){//跳转方法
      this.$router.push({
        path:"page6?s="+1
      })
    }
  }
}
</script>