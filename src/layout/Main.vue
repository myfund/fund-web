<template>
  <div class="main-layout">
    <section class="el-container is-vertical">
      <header class="el-header">
        <h1>{{ appName }}</h1>
        <Menu></Menu>
        <Profile></Profile>
      </header>
      <main class="el-main">
        <router-view></router-view>
      </main>
      <footer class="el-footer">{{ cr }} {{ year }}</footer>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent, Ref, ref } from 'vue';
  import Menu from '../components/Header/Menu.vue';
  import Profile from '../components//Header/Profile.vue';

  export default defineComponent({
    components: {
      Menu,
      Profile,
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
      font-weight: bolder;
      display: flex;

      h1 {
        font-size: 30px;
      }

      .profile {
        margin-left: auto;
      }
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
