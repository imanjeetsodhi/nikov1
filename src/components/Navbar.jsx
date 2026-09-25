import { useState, useEffect, useRef } from 'react';
import { Menu, X, Search } from 'lucide-react';
import logo from '../assets/images/logo.png';
import { products } from '../data/products';

const Navbar = ({ searchQuery = '', setSearchQuery }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProduct = (productName) => {
    if (setSearchQuery) {
      setSearchQuery(productName);
    }
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const query = searchQuery ? searchQuery.trim().toLowerCase() : '';
  const matchingSuggestions = query
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      ).slice(0, 5)
    : [];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <a href="#" className="logo-link">
            <img src={logo} alt="NIKOV" />
          </a>
        </div>

        {/* Search Bar in Navbar */}
        <div className="nav-search-wrapper" ref={searchRef}>
          <form className="nav-search-form" onSubmit={handleSearchSubmit}>
            <Search className="search-icon" size={17} />
            <input
              type="text"
              className="nav-search-input"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => {
                if (setSearchQuery) setSearchQuery(e.target.value);
                setIsDropdownOpen(true);
              }}
              onFocus={() => {
                if (searchQuery.trim()) {
                  setIsDropdownOpen(true);
                }
              }}
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => {
                  if (setSearchQuery) setSearchQuery('');
                  setIsDropdownOpen(false);
                }}
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </form>

          {/* Instant Dropdown Preview */}
          {isDropdownOpen && query && (
            <div className="search-dropdown">
              {matchingSuggestions.length > 0 ? (
                <>
                  <div className="search-dropdown-list">
                    {matchingSuggestions.map((item) => (
                      <div
                        key={item.id}
                        className="search-dropdown-item"
                        onClick={() => handleSelectProduct(item.name)}
                      >
                        <img src={item.image} alt={item.name} className="dropdown-item-img" />
                        <div className="dropdown-item-info">
                          <span className="dropdown-item-name">{item.name}</span>
                          <span className="dropdown-item-desc">{item.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="search-dropdown-footer"
                    onClick={handleSearchSubmit}
                  >
                    View all matching products in collection &rarr;
                  </button>
                </>
              ) : (
                <div className="search-dropdown-empty">
                  No products found for "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>

        <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a>
          {/* <a href="#features" onClick={() => setIsMenuOpen(false)}>Why NIKOV</a> */}
          {/* <a href="#story" onClick={() => setIsMenuOpen(false)}>Story</a> */}
          <a href="#reviews" onClick={() => setIsMenuOpen(false)}>Reviews</a>
          <a href="#products" className="shop-now-link" onClick={() => setIsMenuOpen(false)}>Shop Now</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
