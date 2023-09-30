<template>
  <section v-if="mobileData && tvData" class="apps">
    <div class="apps__container container">
      <div class="apps__list">
        <a class="apps__item apps__item_android" :href="mobileData.url">
          <div class="apps__text-block">
            <h2 class="apps__title">Приложение для Android</h2>
            <DownloadBtn class="apps__download" />
          </div>
          <div class="apps__img-block">
            <img class="apps__img" src="@/assets/img/apps/android.png" alt="" />
          </div>
        </a>
        <div class="apps__item-block">
          <a class="apps__item apps__item_tv" :href="tvData.url">
            <div class="apps__text-block">
              <h2 class="apps__title">Приложение для TV</h2>
              <DownloadBtn class="apps__download" />
            </div>
            <div class="apps__img-block">
              <img class="apps__img" src="@/assets/img/apps/tv.png" alt="" />
            </div>
          </a>
          <a
            class="apps__item apps__item_web"
            href="https://mlab.vip/"
            target="_blank"
          >
            <div class="apps__text-block">
              <h2 class="apps__title">Movielab WEB</h2>
              <DownloadBtn class="apps__d ownload">
                <template #text>
                  <span>Смотреть</span>
                </template>
                <template #icon>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L12 4M12 4H6.66667M12 4V9.33333"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </template>
              </DownloadBtn>
            </div>
            <div class="apps__img-block">
              <img class="apps__img" src="@/assets/img/apps/web.png" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DownloadBtn from './UI/DownloadBtn.vue';
import { mapState } from 'pinia';
import { useDataStore } from '@/stores/data';

export default {
  components: { DownloadBtn },
  computed: {
    ...mapState(useDataStore, ['mobileData', 'tvData']),
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/styles/utils/mixins' as mix;
@use '@/assets/styles/utils/variables' as vars;
@use '@/assets/styles/utils/functions' as fn;

.apps {
  position: relative;

  &__list {
    display: flex;
    gap: 32px;
    overflow: hidden;

    @media (min-width: vars.$min-xl) {
      max-height: 700px;
    }

    @media (max-width: vars.$xl) {
      flex-direction: column;
      max-width: unset;
    }

    & > * {
      flex: 1;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    padding: 32px;
    overflow: hidden;
    background: var(--main-015, #131314);
    border: 1px solid var(--main-20, #303033);
    border-radius: fn.cmin(16, 32);

    @media (min-width: vars.$min-xl) and (min-width: vars.$min-md) {
      gap: 50px;

      &_android {
        .apps {
          &__img {
            &-block {
              margin: -16px -232px -55px -122px;
            }
          }
        }
      }
    }

    @media (max-width: vars.$xl) and (min-width: vars.$min-md) {
      flex-direction: row;
      gap: 60px;
      max-height: 318px;

      &_android {
        .apps {
          @media (min-width: vars.$min-lg) {
            &__text-block {
              max-width: 300px;
            }
          }

          &__img-block {
            margin: -32px -122px -32px -48px;
            @media (max-width: vars.$lg) {
              margin: -74px -190px -44px -44px;
            }
          }
        }
      }

      &_tv {
        .apps {
          &__img-block {
            margin-right: -12%;
            @media (max-width: vars.$lg) {
              margin-right: -25%;
            }
          }
        }
      }

      &_web {
        .apps {
          &__img-block {
            margin-right: -6%;
            @media (max-width: vars.$lg) {
              margin-right: -38%;
            }
          }
        }
      }
    }

    @media (max-width: vars.$lg) and (min-width: vars.$min-md) {
      gap: 34px;
    }

    @media (max-width: vars.$md) {
      flex-direction: column;
      gap: 15px;
      max-height: fn.cmin(220, 350);
      padding: 24px;

      &_android {
        max-height: 370px;

        .apps {
          &__img-block {
            margin: 0 -84px -55px -113px;
          }
        }
      }

      &_tv {
        .apps {
          &__img-block {
            margin-right: -58px;
          }
        }
      }

      &_web {
        .apps {
          &__img-block {
            margin-right: -126px;
          }
        }
      }
    }

    &-block {
      display: flex;
      flex-direction: column;
      gap: 32px;

      & > * {
        flex: 1;
      }
    }
  }

  &__text-block {
    display: flex;
    gap: 32px;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: vars.$xl) and (min-width: vars.$min-md) {
      flex: none;
      flex-direction: column;
      gap: 16px;
      align-items: flex-start;
      justify-content: unset;
      max-width: 320px;
    }
    @media (max-width: vars.$lg) and (min-width: vars.$min-md) {
      max-width: 225px;
    }

    @media (max-width: vars.$md) {
      gap: 16px;
      align-items: center;
    }
  }

  &__title {
    @include mix.tv-card-title;
    @media (max-width: vars.$md) {
      @include mix.title-large;
    }
  }

  &__img {
    width: 100%;

    &-block {
      @media (max-width: vars.$xl) {
        @media (min-width: vars.$min-md) {
          margin-top: auto;
          margin-left: auto;
        }
      }
    }
  }
}
</style>
