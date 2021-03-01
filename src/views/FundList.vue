<template>
  <div class="fund-list">
    {{ comparisonFundList }}
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';
  import { useState } from 'vuex-composition-helpers';
  import { fundStoreKey } from '../store';

  export default defineComponent({
    setup() {
      const store = useStore(fundStoreKey);

      return {
        ...useState(store, ['comparisonFundList']),
      };
    },
  });
</script>

<style lang="less" scoped>
  .fund-list {
  }
</style>
