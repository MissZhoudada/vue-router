<template>
    <div>
        <div class="content">
          page10
        </div>
    </div>
</template>
<script>
export default {
  methods:{
    backLast(){//返回之前
        this.$router.go(-1);
    }
  }
}
</script>