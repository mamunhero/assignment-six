const allProducts =()=>{
  const url = "https://fakestoreapi.com/products"
  fetch(url)
  .then((res)=>res.json())
  .then((data)=>{
    // console.log(data);
    displayCards(data)
  })
}

const displayCards =(cards)=>{
  const productsContainer = document.getElementById("product-container");
  productsContainer.innerHTML = "";
  cards.forEach(card => {
    const innerCard = document.createElement("div");
    innerCard.innerHTML = `
      <div class="bg-white rounded-xl shadow-md px-5 space-y-5">
      <div class="w-full h-52 overflow-hidden rounded-lg">
        <img class="w-full h-full object-cover" src="${card.image}" alt="images">
       </div>
       <!-- cards body -->
        <div class="flex justify-between items-center">
          <span><button class="btn btn-sm">${card.category}</button></span>
          <p class="text-sm">${card.rating.rate}</p>
        </div>
        <div class="space-y-1">
          <h2 class="font-semibold text-sm">${card.title.slice(0, 40)}</h2>
          <p class="font-bold">${card.price}</p>
        </div>
        <!-- buttons -->
        <div class="flex justify-between gap-3">
          <button class="btn btn-outline btn-sm mb-5"><i class="fas fa-eye"></i>Details</button>
          <button class="btn btn-primary btn-sm"><i class="fas fa-cart-plus"></i>Add</button>
        </div>

    </div>
    `;
    productsContainer.appendChild(innerCard);
  });
}

allProducts();