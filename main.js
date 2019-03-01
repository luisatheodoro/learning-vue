var app = new Vue({  //creates a new vue instance
  //inside we can store data and actions
  el: '#app', //here we are making reference to the app id, we are linking this instance to html div
  data: {  //The instance can also have a property for data
    brand: 'Vue Mastery',
    product: "Socks",
    selectedVariant: 0,
    link: 'http://www.amazon.com',
    onSale: false,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/vmSocks-green.png',
        variantQuantity: 20
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue.png',
        variantQuantity: 0
      }
    ],
    sizes: ['3', '4', '5', '6', '7', '8', '9'],
    cart: 0
  },
  methods: {
    addToCart: function () {
      this.cart += 1
    },
    removeFromCart: function () {
      if (this.cart > 0) {
        this.cart -= 1
      }
    },
    updateProduct: function (index) {
      this.selectedVariant = index
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    }
  }
});