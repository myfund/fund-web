import Message from 'element-plus/lib/el-message';
import MessageBox from 'element-plus/lib/el-message-box';
import { InjectionKey } from 'vue';
import { ActionTree, createStore, GetterTree, MutationTree, Store, StoreOptions } from 'vuex';

/**
 * Declare
 */
declare interface fundStore {
  comparisonFundList: Array<Fund>;
}

/**
 * Defination
 */
const fundStoreState: fundStore = {
  comparisonFundList: [],
};

/**
 * Getters
 */
const fundGetters: GetterTree<fundStore, any> = {
  comparisonFundList: (state) => state.comparisonFundList,
};

/**
 * Mutions
 */
const fundMutations: MutationTree<fundStore> = {
  // 增加对比基金
  ADD_TO_COMPARISON(state: fundStore, payload: Fund) {
    if (!state.comparisonFundList.find((fund) => fund.fundcode === payload.fundcode)) {
      state.comparisonFundList.push(payload);
      Message.success('所选的基金添加成功!');
    } else {
      Message.error('所选的基金已存在,不用重复添加!');
    }
  },
  // 删除一个对比基金
  REMOVE_FROM_COMPARISON(state: fundStore, payload: Fund | string) {
    const index = state.comparisonFundList.findIndex(
      (fund) => fund.fundcode === (typeof payload === 'string' ? payload : payload.fundcode),
    );
    if (index >= 0) {
      state.comparisonFundList = state.comparisonFundList.splice(index, 1);
      Message.success('所选的基金删除成功!');
    } else {
      Message.error('所选的基金不存在,无法删除!');
    }
  },
  // 清空一个对比基金
  CLEAN_COMPARISON(state: fundStore) {
    MessageBox.confirm('确认清除所有已选对比基金吗?', '清空对比列表')
      .then(() => {
        state.comparisonFundList = [];
        Message.success('清空成功');
      })
      .catch(() => {
        Message.success('取消清空');
      });
  },
};

/**
 * Actions
 */
const fundActions: ActionTree<fundStore, any> = {
  addToComparison({ commit }, payload: Fund) {
    commit('ADD_TO_COMPARISON', payload);
  },
  removeFromComparison({ commit }, payload: Fund | string) {
    commit('REMOVE_FROM_COMPARISON', payload);
  },
  cleanComparison({ commit }) {
    commit('CLEAN_COMPARISON');
  },
};

/**
 * Wrap to option object
 */
const fundStoreOption: StoreOptions<fundStore> = {
  state: fundStoreState,
  getters: fundGetters,
  mutations: fundMutations,
  actions: fundActions,
};

/**
 * Generation a store key with Symbol
 */
export const fundStoreKey: InjectionKey<Store<fundStore>> = Symbol();

/**
 * Export the store Object
 */
export default createStore<fundStore>(fundStoreOption);
