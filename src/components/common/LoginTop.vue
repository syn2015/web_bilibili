<template>
  <div class="NavTop">
    <div></div>
    <div>{{Text}}</div>
    <div>
      <!-- 占位 -->
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["Text"]
};
</script>

<style scoped lang="less">
// LoginTop组件，vw为单位
.NavTop {
  height: 12.889vw;
  background-color: white;
  display: flex;

  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.444vw;
  }
}
</style>