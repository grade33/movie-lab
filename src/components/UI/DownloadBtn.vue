<template>
  <button class="btn" type="button">
    <slot class="btn__text" name="text">Скачать</slot>
    <slot class="btn__icon" name="icon">
      <svg
        class="btn__icon"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 10V10.8C14 11.9201 14 12.4802 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.4802 14 11.9201 14 10.8 14H5.2C4.07989 14 3.51984 14 3.09202 13.782C2.71569 13.5903 2.40973 13.2843 2.21799 12.908C2 12.4802 2 11.9201 2 10.8V10M11.3333 6.66667L8 10M8 10L4.66667 6.66667M8 10V2"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use '@/assets/styles/utils/mixins' as mix;
@use '@/assets/styles/utils/variables' as vars;
@use '@/assets/styles/utils/functions' as fn;

.btn {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 10px 20px 10px 24px;
  color: var(--main-00, #000);
  background: var(--main-titanium-yellow, #f6c516);
  border-radius: 12px;
  @media (max-width: vars.$md) {
    padding: 10px;
  }

  &__text {
    @media (max-width: vars.$md) {
      display: none;
    }
  }

  &__icon {
    width: 16px;
  }
}
</style>
