let HTML = "";
let cart={}
products.forEach((value, index) => {
  HTML += `<div class="item" >
        <img src="${value.image}" class="product-image">
        <div class="product-name">
         ${value.name}
        </div>
        <div style="display: flex;">
        <img src="images/ratings/rating-${value.rating.stars*10}.png" class="ratings-stars">
        <div class="reviews">${value.rating.count}</div>
        </div>
        <div class="price">${value.priceCents/100}</div>
        <select class="cart-quantity" id="${value.id}">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>

        </select>
        <button class="add-to-cart-button" onclick="addtocart('${value.id}')" >Add to Cart</button>
        <div class="added-to-cart-invis" id="${value.id}addedtocart">
          <img src="images/icons/checkmark.png">
          <div class="added-to-cart-text">
            Added To Cart
          </div>
        </div>
        
       </div>`;
});
document.querySelector(".items-container").innerHTML = HTML;
function addtocart(id){
  quantity=Number(document.getElementById(`${id}`).value)
  let cartKeys=Object.keys(cart)
  let cartQuantity=cartKeys.length
  let inCart=false
  for(let i=0;i<cartQuantity;i++){
    if(cartKeys[i]===id){
      cart[id]+=quantity
      inCart=true
      break
    }
  }
  if(!inCart){
    cart[id]=quantity
    cartQuantity+=1
  }
  console.log(cart)
  displayAddedToCart(id)
  updateCartQuantity(cartQuantity)
}
function displayAddedToCart(id){
  let addedToCart=document.getElementById(`${id}addedtocart`)
  addedToCart.classList.remove("added-to-cart-invis")
  addedToCart.classList.add("added-to-cart")
  console.log(addedToCart)
  setTimeout(()=>{
    addedToCart.classList.remove("added-to-cart")
  addedToCart.classList.add("added-to-cart-invis")
  },3000)
}
function updateCartQuantity(cartQuantity){
    document.querySelector(".cart-quantity-display").innerHTML=cartQuantity
}


