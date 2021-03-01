<template>
  <div class="profile">
    <el-button @click="updateAll">Update Funds</el-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { updateAll } from '../../Model/Fund';

  export default defineComponent({
    setup() {
      return {
        updateAll,
      };
    },
  });
</script>

<style lang="less" scoped>
  .profile {
  }
</style>
