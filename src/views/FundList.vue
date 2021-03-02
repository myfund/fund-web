<template>
  <div class="fund-list">
    <el-card>
      <el-table :data="fundList">
        <el-table-column prop="fundcode" :label="FundKeyZh.fundcode" width="100"></el-table-column>
        <el-table-column prop="type" :label="FundKeyZh.type" width="100"></el-table-column>
        <el-table-column prop="name" :label="FundKeyZh.name"></el-table-column>
        <el-table-column width="180">
          <template #default="scope">
            <div>
              <el-button>加自选</el-button>
              <el-button>加对比</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        :total="1000"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script lang="ts">
  import { defineComponent, getCurrentInstance, onMounted, ref } from 'vue';
  import { useStore } from 'vuex';
  import { useState } from 'vuex-composition-helpers';
  import { fundStoreKey } from '../store';
  import { FundKeyZh } from '../Emum';
  import { list as getFundList } from '../Model/Fund';

  export default defineComponent({
    setup() {
      const store = useStore(fundStoreKey);
      const $http = getCurrentInstance()?.appContext.config.globalProperties.$http;

      // data
      let fundList = ref([] as Fund[]);

      onMounted(() => {
        getFundList({ page: 0 })?.then((res) => {
          fundList.value = res.data;
        });
      });

      return {
        fundList,
        FundKeyZh,

        ...useState(store, ['comparisonFundList']),
      };
    },
  });
</script>

<style lang="less" scoped>
  .fund-list {
  }

  .el-pagination {
    margin-top: 20px;
  }
</style>
