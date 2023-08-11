<template>
  <section class="apps">
    <div class="apps__container container">
      <div class="apps__list">
        <div class="apps__item apps__item_android">
          <div class="apps__text-block">
            <h2 class="apps__title">Приложение для Android</h2>
            <DownloadBtn class="apps__download" />
          </div>
          <div class="apps__img-block">
            <img class="apps__img" src="@/assets/img/apps/android.png" alt="" />
          </div>
        </div>
        <div class="apps__item-block">
          <div class="apps__item apps__item_tv">
            <div class="apps__text-block">
              <h2 class="apps__title">Приложение для TV</h2>
              <DownloadBtn class="apps__download" />
            </div>
            <div class="apps__img-block">
              <img class="apps__img" src="@/assets/img/apps/tv.png" alt="" />
            </div>
          </div>
          <div class="apps__item apps__item_web">
            <div class="apps__text-block">
              <h2 class="apps__title">Movielab WEB</h2>
              <DownloadBtn class="apps__download">
                <template #text>
                  <span>Смотреть</span>
                </template>
                <template #icon>
                  <span>
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
                  </span>
                </template>
              </DownloadBtn>
            </div>
            <div class="apps__img-block">
              <img class="apps__img" src="@/assets/img/apps/web.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DownloadBtn from './UI/DownloadBtn.vue';
export default {
  components: { DownloadBtn },
};
</script>

<style lang="scss" scoped>
@use '@/assets/styles/utils/mixins' as mix;
@use '@/assets/styles/utils/variables' as vars;
@use '@/assets/styles/utils/functions' as fn;

.apps {
  position: relative;
  margin-bottom: 120px;

  &__list {
    display: flex;
    gap: 32px;
    max-height: 700px;
    overflow: hidden;

    & > * {
      flex: 1;
    }
  }

  &__item {
    flex-direction: column;
    overflow: hidden;
    background: var(--main-015, #131314);
    border: 1px solid var(--main-20, #303033);
    border-radius: 32px;

    &_android {
      .apps {
        &__text-block {
          padding: 32px;
          padding-bottom: 0;
        }

        &__img {
          &-block {
            width: 893px;
            margin-top: 50px;
            margin-bottom: -22px;
            margin-left: -91px;
          }
        }
      }
    }

    &_tv {
      padding: 32px;
      padding-bottom: 0;

      .apps {
        &__img {
          &-block {
            width: 100%;
            margin-top: 50px;
          }
        }
      }
    }

    &_web {
      padding: 32px;
      padding-bottom: 0;

      .apps {
        &__img {
          &-block {
            width: 100%;
            margin-top: 35px;
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
  }

  &__title {
    @include mix.tv-card-title;
  }
}
</style>
