import { mixins } from "./mixins";
export default function(sfc) {
  //参数 sfc :single file components单文件组件 ,支持对象式组件，函数式组件

  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(mixins);
  // 向数组末尾加了一个兼容低版本mixins
  return sfc;
}
