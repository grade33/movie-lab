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
@use '@/assets/styles/utils/mixins' as mix;
@use '@/assets/styles/utils/variables' as vars;
@use '@/assets/styles/utils/functions' as fn;

.app {
  position: relative;
  z-index: 1;
  padding-top: 76px;
  overflow: hidden;
  background: var(--main-00, #000);
  @media (max-width: vars.$lg) {
    padding-top: 60px;
  }
}
</style>
