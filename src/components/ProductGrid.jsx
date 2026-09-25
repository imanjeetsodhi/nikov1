import { products } from '../data/products';

const ProductGrid = ({ searchQuery = '', setSearchQuery }) => {
  const query = searchQuery ? searchQuery.trim().toLowerCase() : '';
  const filteredProducts = products.filter((product) => {
    if (!query) return true;
    const nameMatch = product.name?.toLowerCase().includes(query);
    const descMatch = product.description?.toLowerCase().includes(query);
    return nameMatch || descMatch;
  });

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header reveal active">
          <span className="subtitle-caps">THE COLLECTION</span>
          <h2>Crafted for your <span className="italic cream-text">Daily Ritual.</span></h2>
          
          {query && (
            <div className="search-filter-status">
              <span>
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} for "<strong>{searchQuery}</strong>"
              </span>
              <button
                type="button"
                onClick={() => setSearchQuery && setSearchQuery('')}
                className="clear-search-link"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="no-products-state">
            <p>No products found matching "<strong>{searchQuery}</strong>"</p>
            <p className="no-products-subtext">Try searching for shampoo, conditioner, serum, oil, or cream.</p>
            <button
              type="button"
              onClick={() => setSearchQuery && setSearchQuery('')}
              className="btn btn-primary btn-sm"
              style={{ marginTop: '1.5rem' }}
            >
              View All Products
            </button>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card reveal active">
                <div className="product-img-wrapper">
                  <img src={product.image} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div style={{ flex: 1 }}></div>
                <div className="product-buttons">
                  <a href={product.links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    BUY ON WHATSAPP
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
