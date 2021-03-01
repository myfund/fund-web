<template>
  <div class="main-layout">
    <section class="el-container is-vertical">
      <header class="el-header">
        <h1>{{ appName }}</h1>
      </header>
      <main class="el-main">
        <router-view></router-view>
      </main>
      <footer class="el-footer">{{ cr }} {{ year }}</footer>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import Menu from '../components/Menu.vue';

  export default defineComponent({
    components: {
      Menu,
    },
    setup() {
      return {
        year: new Date().getFullYear(),
        cr: ref(import.meta.env.VITE_APP_COPYRIGHT),
        appName: ref(import.meta.env.VITE_APP_NAME),
      };
    },
  });
</script>

<style lang="less" scoped>
  .main-layout {
    min-height: 100vh;
    & > .el-container {
      min-height: 100vh;
      display: grid;
      grid-template-rows: 80px auto 40px;
    }
    .el-header {
      line-height: 80px;
      height: 80px;
      font-size: 30px;
      font-weight: bolder;
    }

    .el-header {
      background-color: var(--mainThemeColor);
      color: var(--mainTextColor);
    }

    .el-footer {
      height: 40px;
      font-size: 12px;
      color: var(--grayTextColor);
      text-align: right;
    }
  }
</style>
