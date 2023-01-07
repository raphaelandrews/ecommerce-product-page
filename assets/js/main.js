const totalProducts = document.querySelector("#totalProducts");
const productBtn = document.querySelector(".product-btn");
const count = document.querySelector(".cart-count");
const cardBody = document.querySelector(".card-body");
const cardContainer = document.querySelector(".card-container");
const productTitle = document.querySelector(".product-title");
const carouselPrice = document.querySelector(".carousel-price");
const carouselPriceContent = document.querySelector(".carousel-price").textContent;
const card = document.querySelector(".card");
let count_value = 0;

productBtn.addEventListener('click', onSubmit);

const cartState = {
    'empty': `<div class="p-5"><p class="fw-bold text-center m-0">Your cart is empty.</p></div>`,
    'full': `<div class="d-flex align-items-center justify-content-between mb-4">
                <img src="./assets/img/image-product-1-thumbnail.jpg" class="card-img d-block" alt="...">
                <div class="text-start">
                    <h5 class="card-title">${productTitle.textContent}</h5>
                    <div>
                        <span>${"$" + carouselPrice.textContent.slice(1)}</span>
                        <span>x</span>
                        <span class="product-quantity"></span>
                        <span class="product-total fw-bold"></span>
                    </div>
                </div>
                <img src="./assets/img/icon-delete.svg" class="card-delete" onclick="deleteProducts()">
            </div>
    <a href="#" class="card-btn btn w-100 fw-bold">Checkout</a>`
}

/*=== Product Count ===*/
function totalProduct(click) {
    const sumValue = parseInt(totalProducts.innerText) + click;
    totalProducts.innerText = sumValue;

    if (sumValue < 0) {
        totalProducts.innerText = 0;
    }
}

/*=== Update Product Count ===*/
function onSubmit() {
    count.textContent = parseInt(totalProducts.innerText) + parseInt(count.textContent);
    totalProducts.innerText = 0;
   /* cardContainer.setAttribute('style', 'display:flex !important');*/
   card.setAttribute('style', 'display:flex !important');
    checkCountValue();
    defineCartState(count);
}

function checkCountValue() {
    if (count.textContent === "0") {
        count.style.display = "none";
    } else {
        count.style.display = "block";
    }
}
checkCountValue();

function defineCartState(count) {
    if (count.textContent === '0') {
        cardBody.innerHTML = cartState.empty;
    } else {
        cardBody.innerHTML = cartState.full;
        const product_quantity = document.querySelector(".product-quantity");
        const product_total = document.querySelector(".product-total");
        product_quantity.innerHTML = count.textContent;
        product_total.innerHTML = "$" + parseInt(carouselPriceContent.slice(1)) * parseInt(product_quantity.textContent) + ".00";
    }
}

function deleteProducts() {
    count.textContent = "0";
    defineCartState(count);
    checkCountValue();
}
