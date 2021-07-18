<template>
  <i :class="'fa fa' + (regular ? 'r' : brand ? 'b' : 's') + ' fa-' + name"></i>
</template>

<script>
export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      default: "",
    },
    regular: Boolean,
    brand: Boolean,
  },
};
</script>

<style lang="scss" scoped>
$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid";
@import "~@fortawesome/fontawesome-free/scss/regular";
@import "~@fortawesome/fontawesome-free/scss/brands";
</style>
