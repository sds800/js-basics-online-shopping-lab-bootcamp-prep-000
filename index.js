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

//function removeFromCart(item) {
  //  for (var i = 0; i < 101; i++) {
   //    if ([i] === (Object.values(cart[i])[0])) {
  //    cart.splice(indexOf(Object.values(cart[i])[0]), 1);
         
//        }
//else{
 //     console.log('That item is not in your cart.')
      
//  }
//    }
//}
function removeFromCart(item) {
    // Loop over the items in the cart: i is the index
    for (var i = 0; i < cart.length; i++) {
        // Use the index to retrieve the item object, which looks like: { tomatoes: 55 }
        var currItemObj = cart[i];
        // Check if this object has the key we're looking for
        if (currItemObj.hasOwnProperty(item)) {
            // Found it! Now remove the item object from the cart. We already know the index,
            // and can use splice to remove a number of elements (1) from the cart, starting there.
            cart.splice(i, 1);
            // We found and removed the item. Now just cut the loop short and return the cart.
            return cart;
        }
    }
    // We looped over the entire cart and never found the item :-(
    console.log('That item is not in your cart.');
    return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
