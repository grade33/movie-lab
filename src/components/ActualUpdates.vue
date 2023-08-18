<template>
  <section class="actual">
    <div class="actual__container container">
      <h2 class="actual__title">Актуальные обновления</h2>
      <ul class="actual__list">
        <li v-for="n in 6" :key="n" class="actual__item">
          <div class="actual__left">
            <h3 class="actual__name">ОБНОВЛЕНИЕ ТВ</h3>
            <p class="actual__desc">
              - технические работы;
              <br />
              - исправление ошибок в работе приложения.
            </p>
            <div class="actual__bottom">
              <div class="actual__info">
                <span class="actual__info-item actual__info-item_update">
                  Обновление
                </span>
                <span class="actual__info-item">TV</span>
              </div>
              <span class="actual__date">07.06.2023</span>
              <a class="actual__download actual__download_2" href="#" download>
                Скачать
                <span class="actual__download_strong">TV</span>
                <DownloadIcon class="actual__download-icon" />
              </a>
            </div>
          </div>
          <div class="actual__right">
            <a class="actual__download actual__download_1" href="" download>
              Скачать
              <span class="actual__download_strong">TV</span>
              <DownloadIcon class="actual__download-icon" />
            </a>
            <div class="actual__poster">
              <LogoIcon class="actual__poster-icon" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import DownloadIcon from './icons/DownloadIcon.vue';
import LogoIcon from './icons/LogoIcon.vue';

export default { components: { DownloadIcon, LogoIcon } };
</script>

<style lang="scss" scoped>
@use '@/assets/styles/utils/mixins' as mix;
@use '@/assets/styles/utils/variables' as vars;
@use '@/assets/styles/utils/functions' as fn;

.actual {
  &__container {
    display: flex;
    flex-direction: column;
    gap: fn.cmin(48, 80);
    align-items: center;
  }

  &__title {
    @include mix.tv-card-title;

    text-align: center;
  }

  &__list {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    width: 100%;

    @media (max-width: vars.$md) {
      grid-template-columns: 1fr;
    }

    @media (min-width: vars.$min-lg) {
      &::before {
        position: absolute;
        top: -40px;
        right: 0;
        left: 0;
        height: 1px;
        margin: 0 fn.overhang();
        background: #303033;
        content: '';
      }
    }
  }

  &__item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    justify-content: space-between;
    color: var(--main-80, #c5c6ca);
  }

  &__left {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  &__name {
    margin-bottom: 4px;
    color: var(--main-100, #fff);
    @include mix.title-large;

    @media (max-width: vars.$md) {
      @include mix.title-medium;
    }
  }

  &__desc {
    margin-bottom: 8px;
    @include mix.body-medium;

    @media (max-width: vars.$md) {
      @include mix.body-small;
    }
  }

  &__bottom {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    @include mix.body-small;
  }

  &__info {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    align-items: center;

    &-item {
      @include mix.body-small;

      padding: 2px 6px;
      color: var(--main-100, #fff);
      background: var(--opacity-20, rgba(48, 48, 51, 60%));
      border-radius: 12px;
      backdrop-filter: blur(1px);

      &_update {
        color: var(--main-00, #000);
        background: var(--main-titanium-yellow, #f6c516);
      }
    }
  }

  &__right {
    display: flex;
    flex: none;
    gap: 12px;
    align-items: center;
    height: 100%;

    @media (max-width: vars.$lg) {
      flex-direction: column;
    }
  }

  &__download {
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 10px 12px;
    color: var(--main-titanium-yellow, #f6c516);
    @include mix.body-large;

    @media (max-width: vars.$xl) {
      order: 3;
      padding: 4px 8px;
      @include mix.body-small;

      @media (min-width: vars.$min-lg) {
        &_1 {
          display: none;
        }
      }
    }

    &_2 {
      margin-left: auto;
      @media (min-width: vars.$min-xl) {
        display: none;
      }

      @media (max-width: vars.$lg) {
        display: none;
      }
    }

    &_strong {
      font-weight: 80;
    }

    &-icon {
      width: 16px;
      height: 16px;
    }
  }

  &__poster {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 126px;
    padding: 0 10px;
    background: var(--main-10, #1b1b1f);
    border-radius: 12px;
    @include mix.ratio(86, 126);

    @media (max-width: vars.$md) {
      height: 116px;
    }

    &-icon {
      position: relative;
      z-index: -1;
      width: 100%;
    }

    &-img {
      position: relative;
      z-index: 2;
      border-radius: 12px;
    }
  }
}
</style>
