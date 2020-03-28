// 导入组件，组件必须声明 name
import navigation from "./navigation.vue";

// 为组件提供 install 安装方法，供按需引入
navigation.install = function(Vue) {
  Vue.component(navigation.name, navigation);
};

// 默认导出组件
export default navigation;
