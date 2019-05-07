<template>
    <div>
        <button @click="backLast">back last</button>
        <div>
        <button @click="goTargetPage">go home</button>
        </div>
        <p>page10</p>
    </div>
</template>
<script>
export default {
  methods:{
    backLast(){//返回之前
        this.$router.go(-1);
    },
    goTargetPage(){//去目标页面  这个项目里面是动态的，这里我先写死了给你看效果
        this.$router.push({
            name:"HelloWorld"
        })
    }
  }
}
</script>