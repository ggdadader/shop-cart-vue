<template>
  <section class="stepper-section">
    <h2 class="checkout-section-title">結帳</h2>
    <div class="stepper-section__steps-wrapper">
      <!-- v-for Start -->
      <div
        v-for="(step, index) in checkoutSteps"
        :key="index"
        class="stepper-section__steps-wrapper__step"
        :class="[{ active: step.isActive }, { checked: step.isChecked }]"
      >
        <div class="stepper-section__steps-wrapper__step__circle">
          {{ index + 1 }}
        </div>
        <span class="stepper-section__steps-wrapper__step__name">{{
          step.name
        }}</span>
      </div>
      <!-- v-for End -->
      <span class="stepper-section__steps-wrapper__step-bar"></span>
      <span
        :style="{width: widthOfProgressLine}"
        class="stepper-section__steps-wrapper__progress-line"
      ></span>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    checkOutSteps: {
      type: Array,
      required: true,
    },
    currentStep: {
      type: Number,
      required: true,
    },
    totalSteps: {
      type: Number,
      required: true
    }
  },
  computed: {
    widthOfProgressLine () {
      const lineWidth = (this.currentStep - 1) / (this.totalSteps - 1) * 100
      return `${lineWidth}%`
    }
  }
};
</script>