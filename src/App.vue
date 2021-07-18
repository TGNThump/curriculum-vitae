<template>
  <metainfo></metainfo>
  <div
    class="sheet padding-10mm"
    style="display: flex; justify-content: center"
  >
    <h1>Benjamin Pilgrim</h1>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  setup() {
    useMeta({
      title: "Benjamin Pilgrim - Curriculum Vitae",
      bodyAttrs: {
        class: "A4",
      },
    });
  },
};
</script>

<style lang="scss">
@import "~paper-css/paper.css";
@page {
  size: A4;
}

body {
  @media print {
    zoom: 122.5%;
    background: white;
  }
  @media screen {
    background: #484349;
  }
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
}
</style>
