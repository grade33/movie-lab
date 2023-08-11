<template>
  <div class="app">
    <TheHeader />
    <main>
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
export default {
  components: { TheHeader, TheFooter },
};
</script>

<style lang="scss" scoped>
.app {
  position: relative;
  z-index: 1;
  overflow: hidden;
  background: var(--main-00, #000);
}
</style>
