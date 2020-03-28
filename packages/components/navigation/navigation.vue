<template>
  <div id="main">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" class="first">{{ ChoiceFirst }}</el-menu-item>
      <a href="javascript:void(0);" target="_blank"></a>
      <el-menu-item index="2" class="second">{{ ChoiceSecond }}</el-menu-item>
      <a href="javascript:void(0);" target="_blank"></a>
      <el-menu-item index="3" class="third">{{ ChoiceThird }}</el-menu-item>
      <a href="javascript:void(0);" target="_blank"></a>
      <el-menu-item index="4" class="fourth">{{ ChoiceFourth }}</el-menu-item>
      <a href="javascript:void(0);" target="_blank"></a>
      <el-menu-item index="5" class="fifth">{{ ChoiceFifth }}</el-menu-item>
      <a href="javascript:void(0);" target="_blank"></a>
      <el-menu-item index="6" class="sixth">{{ ChoiceSixth }}</el-menu-item>
      <a href="javascript:void(0);" target="_blank"></a>
      <el-submenu index="7" class="seventh">
        <a href="javascript:void(0);" target="_blank"></a>
        <template slot="title">{{ ChoiceSeventh }}</template>
        <el-menu-item index="7-1">搜图快搜</el-menu-item>
        <el-menu-item index="7-2">反馈留言</el-menu-item>
        <el-menu-item index="7-3">最新收录</el-menu-item>
        <el-menu-item index="7-4">更新日志</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      ChoiceFirst: "首页",
      ChoiceSecond: "配色",
      ChoiceThird: "素材",
      ChoiceFourth: "教程",
      ChoiceFifth: "灵感",
      ChoiceSixth: "工具",
      ChoiceSeventh: "更多",
      region: "",
      activeIndex: "1"
    };
  },
  methods: {
    makeActive: function(item) {
      this.active = item;
    }
  },
  handleSelect(key, keyPath) {
    console.log(key, keyPath);
  }
};
</script>
