import React, { useState } from "react";
import { Coffee, MapPin, Phone, Mail, Clock, Menu } from "lucide-react";
import "./App.css"

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const coffeeItems = [
    {
      name: "Espresso", price: "$2.00", description: `Strong, bold coffee extracted to perfection. Rich crema and intense
flavor.`, image: "/api/placeholder/200/200"
    },
    {
      name: "Latte", price: "$2.50", description: `Smooth espresso with steamed milk and a light layer of foam. Our most
popular drink.`, image: "/api/placeholder/200/200"
    },
    {
      name: "Cappuccino", price: "$2.70", description: `Equal parts espresso, steamed milk, and milk foam. Perfectly
balanced.`, image: "/api/placeholder/200/200"
    },
    {
      name: "Cold Brew", price: "$3.00", description: `Steeped for 12 hours for a smooth, less acidic coffee experience.`,
      image: "/api/placeholder/200/200"
    }
  ];

  const foodItems = [
    {
      name: "Avocado Toast", price: "$4.50", description: "Fresh avocado on sourdough bread with cherry tomatoes and a sprinkle of sea salt.", image: "/api/placeholder/200/200"
    },
    {
      name: "Khmer Pancake", price: "$3.50", description: "Traditional Cambodian pancake filled with bean sprouts and minced pork.", image: "/api/placeholder/200/200"
    },
    {
      name: "Croissant", price: "$2.20", description: "Buttery, flaky pastry baked fresh every morning.", image: "/api/placeholder/200/200"
    }
  ];

  const testimonials = [
    { name: "Sarah L.", text: "The best coffee I've had in Phnom Penh! Such a cozy atmosphere too." },
    { name: "David T.", text: "Love their avocado toast and cappuccino. Perfect spot for remote work." },
    { name: "Lina M.", text: "A hidden gem with authentic Cambodian flavors and excellent service." }
  ];

  return (
    <div>
      <header>
        <div className="container header-content">
          <div className="brand">
            <Coffee className="brand-icon" size={32} />
            <div>
              <h1 className="brand-title">Norphealey</h1>
              <p className="brand-subtitle">Coffee & Eatery</p>
            </div>
          </div>

          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <Menu size={24} />
          </button>

          <nav>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="mobile-nav">
            <a href="#about" onClick={toggleMobileMenu}>About</a>
            <a href="#menu" onClick={toggleMobileMenu}>Menu</a>
            <a href="#testimonials" onClick={toggleMobileMenu}>Testimonials</a>
            <a href="#contact" onClick={toggleMobileMenu}>Contact</a>
          </nav>
        )}
      </header>

      <section
        className="hero"
        style={{ backgroundImage: 'url("./norph-front.jpg")' }}>
        <div className="hero-content">
          <h2 className="hero-title">Welcome to Norphealey</h2>
          <p className="hero-subtitle">Cozy Vibes • Great Coffee • Local Flavors</p>
          <div className="hero-buttons">
            <a href="#menu" className="btn btn-primary">View Menu</a>
            <a href="#contact" className="btn btn-secondary">Find Us</a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="about-content">
            <div className="about-image-container">
              <img src="./lime-on-hand.jpg" alt="Coffee shop interior" className="about-image" />
            </div>
            <div className="about-text">
              <p>
                Established in 2023, Norphealey Coffee & Eatery brings together modern coffee culture with
                traditional Cambodian flavors. Our name comes from the Khmer word "Norphealey" meaning
                "happiness" - something we aim to bring to every customer.
              </p>
              <p>
                We source our coffee beans from local farmers in Mondulkiri and Ratanakiri provinces, supporting
                sustainable farming practices while delivering exceptional flavor in every cup.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="menu-section">
        <div className="container">
          <h2 className="section-title">Our Menu</h2>

          <div className="menu-category coffee">
            <h3 className="menu-category-title">Coffee</h3>
            <div className="menu-grid">
              {coffeeItems.map((item, index) => (
                <div key={index} className="menu-item" onClick={() => handleItemClick(item)}>
                  <img src={item.image} alt={item.name} className="menu-item-image" />
                  <div className="menu-item-content">
                    <h4 className="menu-item-title">{item.name}</h4>
                    <p className="menu-item-price">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="menu-category food">
            <h3 className="menu-category-title">Food</h3>
            <div className="menu-grid">
              {foodItems.map((item, index) => (
                <div key={index} className="menu-item" onClick={() => handleItemClick(item)}>
                  <img src={item.image} alt={item.name} className="menu-item-image" />
                  <div className="menu-item-content">
                    <h4 className="menu-item-title">{item.name}</h4>
                    <p className="menu-item-price">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2 className="section-title">Visit Us</h2>
          <div className="contact-content">
            <div className="contact-info-container">
              <div className="contact-card">
                <h3 className="contact-title">Contact Information</h3>
                <div className="contact-info">
                  <div className="contact-info-item">
                    <MapPin className="contact-icon" />
                    <p>434 Chamkar Doung Street (217), Phnom Penh, Cambodia</p>
                  </div>
                  <div className="contact-info-item">
                    <Phone className="contact-icon" />
                    <p>+855 86 373 151</p>
                  </div>
                  <div className="contact-info-item">
                    <Mail className="contact-icon" />
                    <p>Soteuy_Loeng@yahoo.com</p>
                  </div>
                  <div className="contact-info-item">
                    <Clock className="contact-icon" />
                    <div>
                      <p>Mon-Fri: 7:00 AM - 8:00 PM</p>
                      <p>Sat-Sun: 8:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="map-container">
              <p className="map-address-small">434 Chamkar Doung Street (217), Phnom Penh</p>
              <iframe
                title="Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1402.995385151323!2d104.8943046054088!3d11.50261243649689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109510d18780973%3A0xcc02fe741737b165!2z4Z6T4Z6X4Z624Z6b4Z-Q4Z6ZLU5vcnBoZWFsZXkgQ29mZmVlIGFuZCBFYXRlcnk!5e1!3m2!1sen!2skh!4v1746115818126!5m2!1sen!2skh"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Coffee />
              <span className="footer-brand-name">Norphealey</span>
            </div>
            <div className="footer-links">
              <a href="https://www.facebook.com/NorphealeyCoffee/" target="blank">Facebook</a>
            </div>
            <p className="footer-copyright">&copy; 2025 Norphealey Coffee & Eatery</p>
          </div>
        </div>
      </footer>

      {isModalOpen && activeItem && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-image-container">
              <img src={activeItem.image} alt={activeItem.name} className="modal-image" />
              <button onClick={handleCloseModal} className="modal-close-button">
                &times;
              </button>
            </div>
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">{activeItem.name}</h3>
                <span className="modal-price">{activeItem.price}</span>
              </div>
              <p className="modal-description">{activeItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;