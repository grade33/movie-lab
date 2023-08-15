<template>
  <section class="hero">
    <div class="hero__container container">
      <h1 class="hero__title">Более 1 000 000 фильмов и сериалов</h1>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use '@/assets/styles/utils/mixins' as mix;
@use '@/assets/styles/utils/variables' as vars;
@use '@/assets/styles/utils/functions' as fn;

.hero {
  position: relative;
  z-index: 1;
  overflow: hidden;

  &__container {
    display: flex;
    flex-direction: column;
  }

  &__title {
    max-width: 586px;
    margin: fn.cmax(120, 220) auto;
    text-align: center;
    @include mix.web-title-large;

    @media (max-width: vars.$lg) {
      font-size: 44px;
    }
    @media (max-width: vars.$md) {
      font-size: 36px;
    }
  }
}
</style>
