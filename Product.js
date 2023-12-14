import React from 'react';

function Product({ productData }) {
  const { productName, price, posterUrl } = productData;

  return (
    <div className="product-card">
      <img src={posterUrl} alt={productName} />
      <h3>{productName}</h3>
      <p>Price: {price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;