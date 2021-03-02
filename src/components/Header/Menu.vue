<template>
  <el-menu
    :default-active="activePath"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#ee3b05"
    text-color="#ddd"
    active-text-color="#fff"
    @select="navSelect"
    router
  >
    <template v-for="route in routerMap">
      <!-- Has children -->
      <el-submenu v-if="route.children?.length > 0">
        <template #title>{{ route.meta.title }}</template>
        <el-menu-item :index="child.path" v-for="child in route.children">
          {{ child.meta.title }}
        </el-menu-item>
      </el-submenu>
      <!-- Single Root -->
      <el-menu-item :index="route.path" v-else>
        {{ route.meta.title }}
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  import { LocationAsPath, useRoute, useRouter } from 'vue-router';
  import RouterConfig from '../../router/routerConfig';

  export default defineComponent({
    setup() {
      const routerMap = ref(RouterConfig[0].children);
      const activePath = ref('');

      // Whole
      const route = useRoute();
      const router = useRouter();
      activePath.value = route.path;

      const navSelect = (index: string) => {
        router.push({ path: index });
      };

      return {
        routerMap,
        activePath,

        navSelect,
      };
    },
  });
</script>

<style lang="less" scoped>
  .el-menu {
    height: 80px;
    margin-left: 40px;

    > .el-menu-item {
      line-height: 80px;
      height: 80px;
      font-size: 16px;
    }
    border-bottom: none;
  }
</style>
