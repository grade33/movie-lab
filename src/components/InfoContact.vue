<template>
  <ul :class="['info', { info_footer: isFooter }]">
    <li class="info__item">
      <a class="info__link" href="https://t.me/Movie_Lab" target="_blank">
        <TelegramIcon class="info__icon" />
        <span>Telegram</span>
      </a>
    </li>
    <li class="info__item">
      <a class="info__link" href="https://t.me/movielabtv_bot" target="_blank">
        <TelegramIcon class="info__icon" />
        <span>Бот</span>
      </a>
    </li>
    <li class="info__item">
      <a class="info__link" href="https://www.instagram.com/movielab.official/" target="_blank">
        <InstagramIcon class="info__icon" />
        <span>Instagram</span>
      </a>
    </li>
    <li class="info__item">
      <a class="info__link" href="https://help.movielab.media/hc/3371735671" target="_blank">
        <FaqIcon class="info__icon" />
        <span>FAQ</span>
      </a>
    </li>
    <li class="info__item">
      <a class="info__link" href="mailto:info@movielab.app" target="_blank">
        <SupportIcon class="info__icon" />
        <span>Поддержка</span>
      </a>
    </li>
  </ul>
</template>

<script>
import TelegramIcon from '@/components/icons/TelegramIcon.vue';
import InstagramIcon from '@/components/icons/InstagramIcon.vue';
import FaqIcon from '@/components/icons/FaqIcon.vue';
import SupportIcon from '@/components/icons/SupportIcon.vue';

export default {
  components: { TelegramIcon, InstagramIcon, FaqIcon, SupportIcon },
  props: {
    isFooter: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/styles/utils/mixins' as mix;
@use '@/assets/styles/utils/variables' as vars;
@use '@/assets/styles/utils/functions' as fn;

.info {
  @include mix.body-large;

  display: flex;
  align-items: center;
  color: var(--main-100, #fff);

  &:not(&_footer) {
    @media (max-width: vars.$lg) {
      flex-direction: column;
      align-items: flex-start;

      .info {
        &__item {
          width: 100%;
        }
      }
    }
  }

  &_footer {
    flex-wrap: wrap;
    justify-content: flex-end;
    @media (max-width: vars.$md) {
      justify-content: center;
    }
  }

  &__link {
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 12px 15px;
    transition: color 0.3s ease-in-out;

    &:hover,
    &:focus-visible,
    &:active {
      color: darken(#fff, 40%);
    }
  }

  &__icon {
    width: 20px;
  }
}
</style>
