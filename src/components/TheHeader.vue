<template>
  <header :class="['header', { header_open: isMenuOpen }]">
    <div class="header__container">
      <div class="header__content">
        <RouterLink to="#" class="header__logo">
          <LogoIcon class="header__logo-icon" />
        </RouterLink>
        <InfoContact class="header__info" />
        <button
          :class="['header__burger', { header__burger_active: isMenuOpen }]"
          type="button"
          @click="toggleMenu"
        >
          <div class="header__burger-content">
            <span class="header__burger-item"></span>
            <span class="header__burger-item"></span>
            <span class="header__burger-item"></span>
          </div>
        </button>
      </div>
      <Transition name="transition">
        <div v-if="isMenuOpen" class="header__menu">
          <InfoContact />
        </div>
      </Transition>
    </div>
  </header>
</template>

<script>
import LogoIcon from '@/components/icons/LogoIcon.vue';
import InfoContact from '@/components/InfoContact.vue';

export default {
  components: { LogoIcon, InfoContact },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.style.overflow = document.body.style.overflow
        ? null
        : 'hidden';
    },
  },
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
  padding: 0 fn.cmin(16, 60);
  border-bottom: 1px solid #494949;

  &::before {
    position: absolute;
    z-index: -1;
    background: rgba(vars.$main-00, 1%);
    backdrop-filter: blur(8px);
    content: '';
    inset: 0;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
  }

  &__content {
    position: relative;
    z-index: 10;
    display: flex;
    gap: 16px;
    align-items: center;
    height: 76px;
    @media (max-width: vars.$lg) {
      height: 60px;
    }
  }

  &__logo {
    margin-right: auto;

    &-icon {
      width: 208px;
      @media (max-width: vars.$lg) {
        width: 146px;
      }
    }
  }

  &__info {
    @media (max-width: vars.$lg) {
      display: none;
    }
  }

  &__burger {
    box-sizing: content-box;
    margin: 0 -10px;
    padding: 13px 10px;

    &-content {
      position: relative;
      width: 20px;
      height: 14px;
    }

    &_active {
      .header__burger-item {
        &:nth-child(1) {
          top: 50%;
          transform: translateX(-50%) rotate(45deg);
        }

        &:nth-child(2) {
          transform: translateX(-50%) translateY(-50%) scale(0);
        }

        &:nth-child(3) {
          top: 50%;
          transform: translateX(-50%) rotate(-45deg);
        }
      }
    }

    @media (min-width: vars.$min-lg) {
      display: none;
    }

    &-item {
      position: absolute;
      right: 0;
      left: 50%;
      width: 100%;
      height: 2px;
      background: var(--main-100, #fff);
      border-radius: 2px;
      transition:
        transform 0.3s ease-in-out,
        top 0.3s ease-in-out;

      &:nth-child(1) {
        top: 0;
        transform: translateX(-50%);
      }

      &:nth-child(2) {
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      }

      &:nth-child(3) {
        top: 100%;
        transform: translateX(-50%) translateY(-100%);
      }
    }
  }

  &__menu {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: calc(100vh);
    padding-top: 60px;
    overflow: auto;
    background: rgba(vars.$main-00, 50%);
    backdrop-filter: blur(8px);
  }
}

.transition {
  &-enter-active,
  &-leave-active {
    transition:
      transform 0.5s ease,
      opacity 0.5s ease;
  }

  &-enter-from,
  &-leave-to {
    transform: translateY(-100%);
    opacity: 0;
  }
}
</style>
