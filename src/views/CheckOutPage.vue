<template>
  <div id="CheckOutPage">
    <Stepper
      :checkout-steps="checkoutSteps"
      :current-step="currentStep"
      :total-steps="totalSteps"
    />
    <CheckOutForm
      @change-current-step="updateCurrentStep"
      @after-shipping-change="updateShippingFee"
      @after-form-submit="handleAfterFormSubmit"
      :storage-key="StorageKey"
      :initial-form-values="formValues"
      :initial-current-step="currentStep"
      :total-steps="totalSteps"
    />
    <CheckOutShoppingCart
      @shopping-list-change="updateShoppingCart"
      :initial-shopping-cart="shoppingCart"
    />
  </div>
</template>

<script>
import Stepper from './../components/Stepper'
import CheckOutForm from './../components/CheckOutForm.vue'
import CheckOutShoppingCart from './../components/CheckOutShoppingCart.vue'

export default {
  components:{
    Stepper,
    CheckOutForm,
    CheckOutShoppingCart,

  },
  setup() {
    
  },
}
</script>
