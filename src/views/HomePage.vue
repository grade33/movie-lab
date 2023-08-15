<template>
  <div class="home">
    <BackgroundPosters />
    <BackgroundPosters :position-top="false" />
    <HeroComp />
    <AppsList />
    <BenefitsComp />
  </div>
</template>

<script>
import BackgroundPosters from '@/components/BackgroundPosters.vue';
import HeroComp from '@/components/HeroComp.vue';
import AppsList from '@/components/AppsList.vue';
import BenefitsComp from '../components/BenefitsComp.vue';
export default {
  components: { BackgroundPosters, HeroComp, AppsList, BenefitsComp },
};
</script>

<style lang="scss" scoped>
@use '@/assets/styles/utils/mixins' as mix;
@use '@/assets/styles/utils/variables' as vars;
@use '@/assets/styles/utils/functions' as fn;

.home {
  min-height: 100vh;
  padding-bottom: fn.cmin(80, 120);
}
</style>
