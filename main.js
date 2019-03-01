var app = new Vue({  //creates a new vue instance
  //inside we can store data and actions
  el: '#app', //here we are making reference to the app id, we are linking this instance to html div
  data: {  //The instance can also have a property for data
    product: "Socks",
    image: './assets/vmSocks-green.png',
    link: 'http://www.amazon.com',
    inventory: 9
  }
});