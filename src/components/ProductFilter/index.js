import './index.css'
const ProductFilter = ({filteredProducts,addToCart}) => {
   return (
    <div className="product-list">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-item">
              {product.id === 0 ? (
                <h2>Product not available</h2>
              ) : (
                <>
                  <img src={product.thumbnail} alt={product.title} className="product-image" />
                  <p>{product.id}</p>
                  <h2>{product.title}</h2>
                  <p>{product.category}</p>
                  <p>₹{product.price}</p>
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                </>
              )}
            </div>
          ))}
        </div>
   );
}

export default ProductFilter