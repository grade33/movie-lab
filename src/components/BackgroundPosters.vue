<template>
  <Teleport to=".app">
    <div :class="['preview', { preview_bottom: positionTop }]">
      <div class="preview__list">
        <img
          v-for="i in postersList"
          ref="images"
          :key="i"
          class="preview__poster"
          :src="i"
          alt=""
        />
      </div>
    </div>
  </Teleport>
</template>

<script>
import { mapState } from 'pinia';
import { useDataStore } from '../stores/data';

export default {
  props: {
    positionTop: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      posterHeight: null,
    };
  },
  computed: {
    ...mapState(useDataStore, ['postersList']),
  },
  watch: {
    postersList: {
      immediate: true,
      handler(newValue) {
        if (newValue.length) {
          this.$nextTick(() => {
            this.posterHeight = this.$refs.images[0].offsetHeight;
          });
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/styles/utils/mixins' as mix;
@use '@/assets/styles/utils/variables' as vars;
@use '@/assets/styles/utils/functions' as fn;

.preview {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  height: 768px;
  overflow: hidden;

  &::before {
    position: absolute;
    background: linear-gradient(180deg, rgba(0, 0, 0, 40%) 0%, #000 100%);
    content: '';
    inset: 0;
  }

  &_bottom {
    top: calc(100% - 323px);

    &::before {
      background: linear-gradient(0deg, rgba(0, 0, 0, 40%) 0%, #000 100%);
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(82px, 140px));
    gap: clamp(11px, 2.6vw, 20px);
    justify-content: center;
    margin: -70px;
  }

  &__poster {
    width: 100%;
    border-radius: 16px;
    @include mix.ratio(140, 205);
  }
}
</style>
