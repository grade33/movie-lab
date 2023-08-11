<template>
  <footer class="footer">
    <div class="container footer__container">
      <RouterLink to="#" class="footer__logo">
        <LogoIcon class="footer__logo-icon" />
        <span class="footer__copyright">© 2023</span>
      </RouterLink>
      <InfoContact />
    </div>
  </footer>
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

.footer {
  padding: 16px 0;
  background: rgba(vars.$main-00, 1%);
  border-top: 1px solid var(--main-20, #303033);
  backdrop-filter: blur(0);

  &__container {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  &__logo {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-right: auto;

    &-icon {
      width: 120px;
    }
  }

  &__copyright {
    @include mix.body-large;

    color: var(--main-80, #c5c6ca);
    white-space: nowrap;
  }
}
</style>
