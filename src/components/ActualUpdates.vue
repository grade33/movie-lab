<template>
  <section v-if="mobileData && tvData" class="actual">
    <div class="actual__container container">
      <h2 class="actual__title">Актуальные обновления</h2>
      <ul class="actual__list">
        <li class="actual__item">
          <div class="actual__left">
            <div class="actual__top">
              <h3 class="actual__name">Обновление мобильной версии</h3>
              <span class="actual__text">
                {{ mobileData.whats_new }}
              </span>
            </div>
            <a class="actual__download" :href="mobileData.url" download>
              Скачать мобильную версию
              <DownloadIcon class="actual__download-icon" />
            </a>
          </div>
          <span class="actual__date">
            {{ formattedDate(mobileData.created_at) }}
          </span>
        </li>
        <li class="actual__item">
          <div class="actual__left">
            <div class="actual__top">
              <h3 class="actual__name">Обновление TV версии</h3>
              <span class="actual__text">
                {{ tvData.whats_new }}
              </span>
            </div>
            <a class="actual__download" :href="tvData.url" download>
              Скачать TV версию
              <DownloadIcon class="actual__download-icon" />
            </a>
          </div>
          <span class="actual__date">
            {{ formattedDate(tvData.created_at) }}
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import DownloadIcon from './icons/DownloadIcon.vue';

import { mapState } from 'pinia';
import { useDataStore } from '@/stores/data';

export default {
  components: { DownloadIcon },
  computed: {
    ...mapState(useDataStore, ['mobileData', 'tvData']),
  },
  methods: {
    formattedDate(dateStr) {
      const dateObj = new Date(dateStr);
      const day = dateObj.getDate().toString().padStart(2, '0');
      const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
      const year = dateObj.getFullYear();

      return `${day}.${month}.${year}`;
    },
  },
};
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
    gap: 8px;
  }

  &__top {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__name {
    margin-bottom: 4px;
    color: var(--main-100, #fff);
    @include mix.title-large;

    @media (max-width: vars.$md) {
      @include mix.title-medium;
    }
  }

  &__text {
    margin-bottom: 8px;
    white-space: pre-line;
    @include mix.body-medium;

    @media (max-width: vars.$md) {
      @include mix.body-small;
    }
  }

  &__item-list {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    list-style-type: initial;
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
    }

    &_strong {
      font-weight: 80;
    }

    &-icon {
      width: 16px;
      height: 16px;
    }
  }

  &__date {
    color: var(--main-80, #c5c6ca);
    @include mix.body-small;
  }
}
</style>
