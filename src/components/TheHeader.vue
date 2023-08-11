<template>
  <header class="header">
    <div class="container header__container">
      <RouterLink to="#" class="header__logo">
        <LogoIcon class="header__logo-icon" />
      </RouterLink>
      <InfoContact />
    </div>
  </header>
</template>

<script>
import LogoIcon from '@/components/icons/LogoIcon.vue';
import InfoContact from '@/components/InfoContact.vue';

export default {
  components: { LogoIcon, InfoContact },
};
</script>

<style lang="scss" scoped>
@use '@/assets/styles/utils/mixins' as mix;
@use '@/assets/styles/utils/variables' as vars;
@use '@/assets/styles/utils/functions' as fn;

.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  padding: 16px 0;
  background: rgba(vars.$main-00, 1%);
  border-bottom: 1px solid #494949;
  backdrop-filter: blur(8px);

  &__container {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  &__logo {
    margin-right: auto;

    &-icon {
      width: 208px;
    }
  }
}
</style>
