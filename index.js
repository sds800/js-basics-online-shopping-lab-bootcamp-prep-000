var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = (item);
  var itemPrice = Math.floor(Math.random() * Math.floor(101));
  
 item = { [itemName]: itemPrice };
 cart.push(item);
 
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}



function viewCart() {
  var lookCart = [] ;

  //use a for loop to iterate through the cart, and add the item name and price to the arrays
  
  for (var i = 0; i < cart.length; i++) {
    lookCart.push(`${(Object.keys(cart[i])[0])} at $${(Object.values(cart[i])[0])}`)
  }
 
  if (cart.length === 0){
  console.log(`Your shopping cart is empty.`)
  }
   else if (cart.length === 1){
  console.log(`In your cart, you have ${lookCart[0]}.`)
  }
   else if (cart.length === 2){
  console.log(`In your cart, you have ${lookCart[0]} and ${lookCart[1]}.`)
  } 
  
  console.log(`In your cart, you have ${lookCart.slice(0, lookCart.length - 1).join(', ') }, and ${lookCart.slice(-1)}.`)
}


function total() {
  var totalvalue = [];
  var sum = 0;

  for (var i = 0; i < cart.length; i++) {
  totalvalue.push(`${(Object.values(cart[i])[0])}`)
  
  sum += parseInt(totalvalue[i]);
  }
  
  return sum;

}

function removeFromCart(item) {
    for (var i = 0; i < 101; i++) {
       if ([i] === (Object.values(cart[i])[0])) {
      array.splice([i], 1);
         
        }
else{
      console.log('That item is not in your cart.')
  }
    }
}

function placeOrder(cardNumber) {
  // write your code here
}
