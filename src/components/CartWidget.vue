<script setup>
import { ref } from "vue";
import CartItem from "./CartItem.vue";
import { useCartStore } from "../stores/CartStore";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();
const { totalSum, totalCount, isEmpty, grouped } = storeToRefs(useCartStore());
const { removeItem, setItemCount, checkout } = useCartStore();
const active = ref(false);
defineEmits(["clearCart"])
</script>
<template>
  <div class="relative">
    <span class="cursor-pointer" @click="active = true">
      <fa icon="shopping-cart" size="lg" class="text-gray-700" />
      <div class="cart-count absolute">{{ totalCount }}</div>
    </span>
    <AppModalOverlay :active="active" @close="active = false">
      <div v-if="!isEmpty">
        <ul class="items-in-cart">
          <CartItem v-for="(item, name) in grouped" :key="name" :product="item[0]" :count="item[0].count"
            @clear="removeItem(name)" @updateCount="setItemCount($event, name)">
          </CartItem>
        </ul>
        <div class="flex justify-end text-2xl mb-5">
          Total: <strong>${{ totalSum }}</strong>
        </div>
        <div class="flex justify-end">
          <AppButton class="secondary mr-2" @click="cartStore.reset()">Clear Cart</AppButton>
          <AppButton class="primary" @click="checkout">Checkout</AppButton>
        </div>
      </div>
      <div v-else><em>Cart is Empty</em></div>
    </AppModalOverlay>
  </div>
</template>
<style lang="pcss" scoped>
.items-in-cart{
  @apply mb-5;
}
.items-in-cart li{
  @apply flex justify-between p-2;
}
.items-in-cart li:nth-of-type(even){
  @apply bg-gray-300;
}
</style>
