import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { products } from '../data/products';

const ProductGrid = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  });

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="subtitle-caps">THE COLLECTION</span>
          <h2>Crafted for your <span className="italic cream-text">Daily Ritual.</span></h2>

          <div className="product-search-wrapper">
            <div className="product-search-bar">
              <Search className="product-search-icon" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, brands, or routines..."
                className="product-search-input"
                aria-label="Search products"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="product-search-clear"
                  aria-label="Clear search query"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            {searchQuery && (
              <div className="product-search-count">
                Showing {filteredProducts.length} of {products.length} products
              </div>
            )}
          </div>
        </div>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card reveal active">
                <div className="product-img-wrapper">
                  <img src={product.image} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div style={{ flex: 1 }}></div>
                <div className="product-buttons">
                  <a href={product.links?.whatsapp || 'https://amzn.in/d/0bBfl1ga'} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    BUY ON WHATSAPP
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="product-no-results">
              <h3>No products found</h3>
              <p>We couldn&apos;t find any products matching &ldquo;{searchQuery}&rdquo;. Try another search term.</p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="btn btn-outline btn-sm"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
