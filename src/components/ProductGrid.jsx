import { products } from '../data/products';

const ProductGrid = () => {
  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="subtitle-caps">THE COLLECTION</span>
          <h2>Crafted for your <span className="italic cream-text">Daily Ritual.</span></h2>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card reveal">
              <div className="product-img-wrapper">
                <img src={product.image} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-buttons">
                <a href={product.links.amazon} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  BUY ON AMAZON
                </a>
                <a href={product.links.flipkart} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  FLIPKART
                </a>
                <a href={product.links.meesho} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  MEESHO
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
