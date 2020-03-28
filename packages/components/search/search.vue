<template>
  <div>
    <el-row>
      <el-dropdown class="dropdown-border">
        <i class="el-dropdown-link">
          色板
          <i class="el-icon-arrow-down el-icon--right"></i>
        </i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>色板</el-dropdown-item>
          <el-dropdown-item>渐变</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-input
        suffix-icon="el-icon-camera"
        class="search"
        v-model="input"
        placeholder="拖拽图片上传或输入关键字，支持多词搜索"
      ></el-input>
      <el-button
        class="search-btn"
        type="primary"
        icon="el-icon-search"
      ></el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "search"
};
</script>
<style>
.el-dropdown-link {
  cursor: pointer;
  color: #464646;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.search {
  width: 600px;
}
.dropdown-border {
  border: 1px solid rgb(211, 211, 211);
  width: 80px;
  height: 38px;
  border-radius: 5px;
  text-align: center;
  line-height: 38px;
}
</style>
