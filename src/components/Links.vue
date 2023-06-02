<template>
  <main class="links">
    <a href="mailto:ben@pilgrim.me.uk" target="_blank">ben@pilgrim.me.uk</a>
    <icon name="envelope" />
    <a href="https://goo.gl/maps/1xKU77pvmEt91xkp6" target="_blank"
      >Ipswich, Suffolk</a
    >
    <icon name="map-marked-alt" />
    <a href="tel:07950365848" target="_blank">07950 365848</a>
    <icon name="mobile-alt" />
    <a href="https://github.com/tgnthump?tab=repositories" target="_blank"
      >TGNThump</a
    >
    <icon brand name="github" />
  </main>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  components: { Icon },
};
</script>

<style lang="scss" scoped>
.links {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-auto-rows: 2em;
  padding: 10px 15px;
  text-align: right;
  grid-column-gap: 10px;
  align-items: center;
  justify-content: center;

  > a {
    justify-self: right;
    font-weight: normal;
  }

  > i {
    justify-self: center;
  }

  > * {
    padding: 0;
  }
}
</style>
