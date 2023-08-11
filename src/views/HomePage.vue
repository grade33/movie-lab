<template>
  <div class="home">
    <BackgroundPosters />
    <BackgroundPosters :positionTop="false" />
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
.home {
  min-height: 100vh;
  padding: 76px 0 120px;
}
</style>
