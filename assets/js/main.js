const totalProducts = document.querySelector("#totalProducts");
const productBtn = document.querySelector(".product-btn");
const count = document.querySelector(".cart-count");
const cardBody = document.querySelector(".card-body");
const cardContainer = document.querySelector(".card-container");
const productTitle = document.querySelector(".product-title");
const carouselPrice = document.querySelector(".carousel-price");
const carouselPriceContent = document.querySelector(".carousel-price").textContent;
let count_value = 0;

productBtn.addEventListener('click', onSubmit);

const cartState = {
    'empty': `<p class="fw-bold text-center m-0">Your cart is empty.</p>`,
    'full': `<div class="d-flex">
                <img src="./assets/img/image-product-1-thumbnail.jpg" class="d-block w-100 main-img" alt="...">
                <div>
                    <h5 class="card-title">${productTitle.textContent}</h5>
                    <div>
                        <span>${"$" + carouselPrice.textContent.slice(1)}</span>
                        <span>x</span>
                        <span class="product-quantity"></span>
                        <span class="product-total"></span>
                    </div>
                </div>
            </div>
    <a href="#" class="btn btn-primary w-100">Checkout</a>`
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
    cardContainer.setAttribute('style', 'display:flex !important');
    checkCountValue();
    defineCartState(count);
    totalValue();
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
        product_total.innerHTML = parseInt(carouselPriceContent.slice(1)) * parseInt(product_quantity.textContent);
    }
}


