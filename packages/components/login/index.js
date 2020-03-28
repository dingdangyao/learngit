// 导入组件，组件必须声明 name
import login from "./login.vue";

// 为组件提供 install 安装方法，供按需引入
login.install = function(vue) {
  vue.component(login.name, login);
};

// 默认导出组件
export default login;
