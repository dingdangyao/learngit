<template>
  <div class="content">
    <el-card>
      <div class="card">
        <div class="card-icon">
          <div class="card-icon-love">
            <i class="el-icon-star-off" @click="likeNum++"></i>
            <span>{{ likeNum }}</span>
          </div>
          <div class="card-icon-love">
            <i class="el-icon-view"></i>
            <span>{{ viewNum }}</span>
          </div>
        </div>
        <a href="https://www.91sotu.com/">
          <div class="card-img">
            <img src="./login-bg.jpg" object-fit="fill" alt="图像获取失败！" />
            <span class="card-tag">
              <el-tag type="info" size="mini">{{ pirce }}</el-tag>
              <el-tag type="info" size="mini">{{ nation }}</el-tag>
            </span>
            <span class="right">
              <i class="el-icon-right"></i>
            </span>
            <div class="card-text">
              <div class="card-text-title">{{ title }}</div>
              <div class="card-text-detail">{{ detail }}</div>
            </div>
          </div>
        </a>
      </div>
    </el-card>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "card",
  data() {
    return {
      pirce: "免费",
      nation: "CN",
      likeNum: "20",
      viewNum: "1000",
      title: "包图网",
      detail: "各种流行趋势，视觉冲击力强的版权广告图片设计，电商模板，企业办公模板"
    };
  },
  components: {},
  methods: {
  }
};
</script>

<style>
.card-img img {
  width: 50px;
  height: 50px;
  margin-left: -30px;
  border-radius: 50%;
  position: fixed;
}
.card-img img:hover {
  width: 54px;
  height: 54px;
}
.content {
  position: relative;
  width: 280px;
  border: 80px;
  height: 100px;
  background-color: rgb(255, 255, 255, 0.5);
}
.content:hover {
  bottom: -3px;
}

.card-icon {
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
}
.card-icon-love {
  margin-left: 5px;
  display: -moz-box;
  display: flex;
  color: rgb(182, 179, 179);
  margin-top: -15px;
}
.card-icon-view {
  display: flex;
  margin-left: 180px;
  margin-top: -20px;
  color: rgb(182, 179, 179);
}
a {
  text-decoration: none;
}
.card-icon-love:active {
  color: fuchsia;
}
.card-tag {
  margin-left: 100px;
  color: rgb(78, 76, 76);
}
.card-text-title {
  margin-left: -60px;
  margin-top: -20px;
  color: rgb(5, 5, 5);
}
.card-text-detail {
  margin-left: 60px;
  margin-top: 10px;
  font-size: 10px;
  color: rgb(182, 179, 179);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
