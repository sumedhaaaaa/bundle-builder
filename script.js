let bundleItems = new Set(); 
let quantities = {};
let bundleAddedToCart = false; 
const products = {
  1: {
    name: 'Tie-Dye Lounge Set',
    price: 150,
    image: 'assets/photo-1432149877166-f75d49000351.jpg',
  },
  2: {
    name: 'Sunburst Tracksuit',
    price: 150,
    image: 'assets/photo-1515886657613-9f3515b0c78f.jpg',
  },
  3: {
    name: 'Retro Red Streetwear',
    price: 150,
    image: 'assets/photo-1529139574466-a303027c1d8b.jpg',
  },
  4: {
    name: 'Urban Sportwear Combo',
    price: 150,
    image: 'assets/photo-1588117260148-b47818741c74.jpg',
  },
  5: {
    name: 'Oversized Knit & Coat',
    price: 150,
    image: 'assets/photo-1608748010899-18f300247112.jpg',
  },
  6: {
    name: 'Chic Monochrome Blazer',
    price: 150,
    image: 'assets/photo-1632149877166-f75d49000351.jpg',
  },
};
function generateProductCards() {
    const gridContainer = document.querySelector('.grid-custom');
    const productIds = Object.keys(products);

    for (let i = 0; i < productIds.length; i += 3) {
        const row = document.createElement('div');
        row.className = 'product-row';
        
        const rowProducts = productIds.slice(i, i + 3);
        
        rowProducts.forEach(productId => {
            const product = products[productId];
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <div class="product-image-container">
                    <div class="product-image" style="background-image: url('${product.image}')"></div>
                </div>
                <div class="product-details">
                    <div class="product-link">
                        <span class="product-name">${product.name}</span>
                    </div>
                    <div class="product-form-bundle">
                        <div class="price-container">
                            <span class="price">$${product.price}.00</span>
                        </div>
                        <button class="add-button" data-product="${productId}">
                            <span>Add to Bundle</span>
                            <svg class="plus-icon" width="16" height="16" viewBox="0 0 16 16">
                                <path d="M8 3V13M3 8H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            `;
            
            row.appendChild(productCard);
        });
        
        gridContainer.appendChild(row);
    }
}
function initializeEventListeners() {
    document.querySelectorAll('.add-button').forEach(button => {
      button.addEventListener('click', function () {
        const productId = this.dataset.product;

        if (bundleItems.has(productId)) {
          bundleItems.delete(productId);
          delete quantities[productId];
          this.classList.remove('added');
          this.innerHTML = `
            <span>Add to Bundle</span>
            <svg class="plus-icon" width="16" height="16" viewBox="0 0 16 16">
              <path d="M8 3V13M3 8H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          `;
        } else {
          bundleItems.add(productId);
          quantities[productId] = 1;
          this.classList.add('added');
          this.innerHTML = `
            <span>Added to Bundle</span>
          `;
        }
        bundleAddedToCart = false;
        updateBundleDisplay();
      });
    });
}
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('quantity-btn')) {
    const bundleItem = e.target.closest('.bundle-item');
    const productId = bundleItem.dataset.productId;
    const input = bundleItem.querySelector('.quantity-input');
    const currentQuantity = parseInt(input.value);

    if (e.target.classList.contains('plus')) {
      quantities[productId] = currentQuantity + 1;
      input.value = quantities[productId];
    } else if (e.target.classList.contains('minus') && currentQuantity > 1) {
      quantities[productId] = currentQuantity - 1;
      input.value = quantities[productId];
    }
    bundleAddedToCart = false;
    updateBundleDisplay();
  }

  if (e.target.closest('.bundle-cart-remove-button')) {
    const bundleItem = e.target.closest('.bundle-item');
    const productId = bundleItem.dataset.productId;

    bundleItems.delete(productId);
    delete quantities[productId];

    const productButton = document.querySelector(
      `[data-product="${productId}"]`
    );
    if (productButton) {
      productButton.classList.remove('added');
      productButton.innerHTML = `
        <span>Add to Bundle</span>
        <svg class="plus-icon" width="16" height="16" viewBox="0 0 16 16">
          <path d="M8 3V13M3 8H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      `;
    }

    bundleAddedToCart = false;
    updateBundleDisplay();
  }
});

function updateBundleDisplay() {
  const bundleItemsContainer = document.querySelector('.bundle-items');
  const subtotalAmount = document.querySelector('.subtotal-amount');
  const addToCartButton = document.querySelector('.add-to-cart-button span');
  const progressBar = document.querySelector('.progress-background');

  bundleItemsContainer.innerHTML = '';

  let totalItems = 0;
  let subtotal = 0;

  bundleItems.forEach(productId => {
    const product = products[productId];
    const quantity = quantities[productId];
    const itemTotal = product.price * quantity;
    subtotal += itemTotal;
    totalItems += quantity;

    const bundleItem = document.createElement('div');
    bundleItem.className = 'bundle-item';
    bundleItem.dataset.productId = productId;

    bundleItem.innerHTML = `
            <div class="item-image" style="background-image: url('${product.image}')"></div>
            <div class="item-details">
                <div class="item-link">
                    <span class="item-name">${product.name}</span>
                </div>
                <div class="item-price-margin">
                    <span class="item-price">$${product.price}.00</span>
                </div>
                <div class="item-controls">
                    <div class="quantity-input-bundle">
                        <button class="quantity-btn minus">−</button>
                        <input type="text" value="${quantity}" class="quantity-input" readonly>
                        <button class="quantity-btn plus">+</button>
                    </div>
                    <button class="bundle-cart-remove-button">
                        <svg width="14" height="14" viewBox="0 0 14 14">
                            <path d="M1 3.5H13M5.5 6.5V10.5M8.5 6.5V10.5M2.5 3.5L3.5 12.5H10.5L11.5 3.5M5.5 3.5V1.5H8.5V3.5" stroke="currentColor" stroke-width="1" fill="none"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;

    bundleItemsContainer.appendChild(bundleItem);
  });

 
  const progress = Math.min((bundleItems.size / 3) * 100, 100);
  progressBar.style.width = `${progress}%`;

  const discount = bundleItems.size >= 3 ? subtotal * 0.3 : 0;
  const finalTotal = subtotal - discount;

 
  const discountRow = document.querySelector('.discount-row');
  const discountAmount = document.querySelector('.discount-amount');
  if (discount > 0) {
    discountAmount.textContent = `-$${discount.toFixed(0)} (30%)`;
    discountRow.style.display = 'flex';
  } else {
    discountRow.style.display = 'none';
  }

  
  subtotalAmount.textContent = `$${finalTotal.toFixed(2)}`;

 
  const ctaButton = document.querySelector('.add-to-cart-button');
  
  if (bundleAddedToCart) {
    addToCartButton.textContent = 'Added to Cart';
    ctaButton.innerHTML = `
      <span>Added to Cart</span>
      <svg width="16" height="16" viewBox="0 0 16 16">
        <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
    ctaButton.disabled = true;
    ctaButton.style.opacity = '0.6';
    ctaButton.style.cursor = 'not-allowed';
  } else if (bundleItems.size >= 3) {
    addToCartButton.textContent = `Add ${totalItems} Item${
      totalItems !== 1 ? 's' : ''
    } to Cart`;
    ctaButton.disabled = false;
    ctaButton.style.opacity = '1';
    ctaButton.style.cursor = 'pointer';
  } else {
    addToCartButton.textContent = 'Add 3 Items to Proceed';
    ctaButton.disabled = true;
    ctaButton.style.opacity = '0.6';
    ctaButton.style.cursor = 'not-allowed';
  }
}


document
  .querySelector('.add-to-cart-button')
  .addEventListener('click', function () {
    if (bundleItems.size >= 3 && !bundleAddedToCart) {
      bundleAddedToCart = true;
      updateBundleDisplay();
      
   
      console.log('Bundle added to cart!');
      console.log('Bundle items:', Array.from(bundleItems));
      console.log('Quantities:', quantities);
    }
  });

document.addEventListener('DOMContentLoaded', function() {
    generateProductCards();
    initializeEventListeners();
    updateBundleDisplay();
});