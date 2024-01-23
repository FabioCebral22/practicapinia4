import { defineStore } from 'pinia';

export const useProductStore = defineStore('products', {
    state: () => ({
        products: []
    }),
    getters: {
    },
    actions: {
        async fill() {
            this.products = (await import("@/data/products.json")).default
        }
    }
});