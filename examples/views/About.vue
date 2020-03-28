<template>
  <div :style="note">
    <div class="about">
      <login :option="option"></login>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      note: {
        backgroundImage: "url(" + require("../assets/login-bg.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        height: "100%",
        width: "100%",
        position: "fixed"
      },
      option: {
        width: 400,
        codeType: "phone" //phone为手机验证码/img为图片验证码
      },
      option1: {
        width: 400,
        codeType: "phone" //phone为手机验证码/img为图片验证码
      }
    };
  }
};
</script>
<style>
.about {
  border: 1px solid rgb(204, 200, 199);
  width: 350px;
  margin: 50px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  background-color: azure;
  box-shadow: 0 0 25px rgb(165, 165, 165);
}
</style>
