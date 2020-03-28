// 导入组件，组件必须声明 name
import card from "./index.vue";

// 为组件提供 install 安装方法，供按需引入
card.install = function(vue) {
  vue.component(card.name, card);
};

// 默认导出组件
export default card;
