const totalProducts = document.querySelector("#totalProducts");
const product_btn = document.querySelector(".product-btn");
const count = document.querySelector(".cart-count");
let count_value = 0;

product_btn.addEventListener('click', onSubmit);

/*=== Product Count ===*/
function totalProduct(click) {
    const sumValue = parseInt(totalProducts.innerText) + click;
    totalProducts.innerText = sumValue;

    if (sumValue < 0) {
        totalProducts.innerText = 0;
    }
}

/*=== Update Procudc Count ===*/
function onSubmit() {
    count.textContent = parseInt(totalProducts.innerText) + parseInt(count.textContent);
}


