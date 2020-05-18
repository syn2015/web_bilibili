<template>
  <div>
      <!-- van-cell-group组件 -->
    <van-cell-group>
      <van-field v-model="content" :placeholder="placeholder" :label="label" :type="type" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ""
    };
  },
  props: ["label", "placeholder", "type", "rule"],
//   watch()监听input的值
  watch: {
    content() {
      const rug = new RegExp(this.rule);
    //   正则校验
      if (rug.test(this.content)) {
        this.$emit("contentWatch", this.content);
      }
    }
  }
};
</script>

<style>
</style>