import React, { useState } from "react";
import { Coffee, MapPin, Phone, Mail, Clock, Menu } from "lucide-react";
import "./App.css";

// Component for section headers
const SectionTitle = ({ children }) => (
  <h2 className="section-title">{children}</h2>
);

// Component for menu items
const MenuItem = ({ item, onClick }) => (
  <div
    className="menu-item"
    onClick={() => onClick(item)}
    role="button"
    tabIndex={0}
  >
    <img
      src={item.image}
      alt={item.name}
      className="menu-item-image"
      loading="lazy"
    />
    <div className="menu-item-content">
      <h4>{item.name}</h4>
      <p className="price">{item.price}</p>
    </div>
  </div>
);

// Component for testimonial cards
const TestimonialCard = ({ text, author }) => (
  <div className="testimonial-card">
    <p>"{text}"</p>
    <p className="author">— {author}</p>
  </div>
);

// Component for contact info items
const ContactItem = ({ icon, children }) => (
  <div className="contact-info-item">
    {icon}
    <div>{children}</div>
  </div>
);

// Main App component
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsModalOpen(true);
    if (window.gtag) {
      window.gtag("event", "view_item", {
        item_name: item.name,
        item_category: item.category
      });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Menu items
  const menuItems = {
    coffee: [
      {
        name: "Bubble Winter Lemon Tea",
        price: "$2.00",
        description: "A refreshing blend of lemon tea with a hint of winter spices and chewy tapioca pearls.",
        image: "./bubble-winter.jpg",
        category: "drinks"
      },
      {
        name: "Peach Soda",
        price: "$2.00",
        description: "A fizzy and fruity soda infused with the sweet flavor of ripe peaches.",
        image: "./peach-soda.jpg",
        category: "drinks"
      },
      {
        name: "Bubble Tea",
        price: "$1.75",
        description: "Classic milk tea with chewy tapioca pearls for a delightful experience.",
        image: "./milk-tea.jpg",
        category: "drinks"
      },
      {
        name: "Passion Cream",
        price: "$2.00",
        description: "A creamy and tropical drink with the tangy flavor of passion fruit.",
        image: "./passion-cream.jpg",
        category: "drinks"
      }
    ],
    food: [
      {
        name: "Creme Croissant",
        price: "$1.50",
        description: "A delightful croissant filled with rich, creamy custard, perfect for a sweet treat.",
        image: "./creme-croissant.jpg",
        category: "pastry"
      },
      {
        name: "Spicy Noodle",
        price: "$2.50",
        description: "A flavorful dish of noodles tossed in a spicy sauce, garnished with fresh herbs and vegetables.",
        image: "./spicy-noddle.jpg",
        category: "main"
      },
      {
        name: "Bingsu",
        price: "$2.00",
        description: "A refreshing dessert made with shaved ice, coconut cream, and tropical toppings.",
        image: "./bingsu.jpg",
        category: "dessert"
      }
    ]
  };

  // Testimonials
  const testimonials = [
    { name: "Sokha L.", text: "The atmosphere is so welcoming, and the staff are incredibly friendly!" },
    { name: "Vuthy T.", text: "A great place to relax and enjoy a cup of coffee with friends." },
    { name: "Sreyneang M.", text: "Their unique drinks and snacks are a must-try. Highly recommended!" }
  ];

  return (
    <div className="app">
      <header>
        <div className="container">
          <div className="brand">
            <Coffee size={32} />
            <div>
              <h1>Norphealey</h1>
              <p>Coffee & Eatery</p>
            </div>
          </div>

          <button className="mobile-menu-button" onClick={toggleMobileMenu} aria-label="Toggle menu">
            <Menu size={24} />
          </button>

          {/* Desktop navigation */}
          <nav className="desktop-nav">
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="mobile-nav">
            <a href="#about" onClick={toggleMobileMenu}>About</a>
            <a href="#menu" onClick={toggleMobileMenu}>Menu</a>
            <a href="#testimonials" onClick={toggleMobileMenu}>Testimonials</a>
            <a href="#contact" onClick={toggleMobileMenu}>Contact</a>
          </nav>
        )}
      </header>

      <section className="hero" style={{ backgroundImage: 'url("./norph-front.jpg")' }}>
        <div>
          <h2>Welcome to Norphealey</h2>
          <p>Cozy Vibes • Great Coffee • Local Flavors</p>
          <div className="hero-buttons">
            <a href="#menu" className="btn primary">View Menu</a>
            <a href="#contact" className="btn secondary">Find Us</a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <SectionTitle>Our Story</SectionTitle>
          <div className="about-content">
            <img
              src="./lime-on-hand.jpg"
              alt="Coffee shop interior"
              loading="lazy"
            />
            <div>
              <p>
                Established in 2023, Norphealey Coffee & Eatery brings together modern coffee culture with traditional Cambodian flavors.
                Our name comes from the Khmer word "Norphealey" meaning "happiness" - something we aim to bring to every customer.
              </p>
              <p>
                We source our coffee beans from local farmers in Mondulkiri and Ratanakiri provinces, supporting sustainable farming practices
                while delivering exceptional flavor in every cup.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="menu-section">
        <div className="container">
          <SectionTitle>Our Menu</SectionTitle>

          {/* Drinks section */}
          <div className="menu-category">
            <h3>Coffee</h3>
            <div className="menu-grid coffee">
              {menuItems.coffee.map((item, index) => (
                <MenuItem key={`drink-${index}`} item={item} onClick={handleItemClick} />
              ))}
            </div>
          </div>

          {/* Food section */}
          <div className="menu-category">
            <h3>Food</h3>
            <div className="menu-grid food">
              {menuItems.food.map((item, index) => (
                <MenuItem key={`food-${index}`} item={item} onClick={handleItemClick} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="container">
          <SectionTitle>What Our Customers Say</SectionTitle>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`testimonial-${index}`}
                text={testimonial.text}
                author={testimonial.name}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <SectionTitle>Visit Us</SectionTitle>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <ContactItem icon={<MapPin />}>
                <p>434 Chamkar Doung Street (217), Phnom Penh, Cambodia</p>
              </ContactItem>
              <ContactItem icon={<Phone />}>
                <p>+855 86 373 151</p>
              </ContactItem>
              <ContactItem icon={<Mail />}>
                <p>Soteuy_Loeng@yahoo.com</p>
              </ContactItem>
              <ContactItem icon={<Clock />}>
                <div>
                  <p>Mon-Fri: 7:00 AM - 8:00 PM</p>
                  <p>Sat-Sun: 8:00 AM - 9:00 PM</p>
                </div>
              </ContactItem>
            </div>
            <div className="map">
              <iframe
                title="Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1402.995385151323!2d104.8943046054088!3d11.50261243649689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109510d18780973%3A0xcc02fe741737b165!2z4Z6T4Z6X4Z624Z6b4Z-Q4Z6ZLU5vcnBoZWFsZXkgQ29mZmVlIGFuZCBFYXRlcnk!5e1!3m2!1sen!2skh!4v1746115818126!5m2!1sen!2skh"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-brand">
            <Coffee size={20} />
            <span>Norphealey</span>
          </div>
          <div className="footer-links">
            <a href="https://www.facebook.com/NorphealeyCoffee/" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
          <p>© 2025 Norphealey Coffee & Eatery</p>
          <p>
            Developed By: <a href="https://ariankhadem.vercel.app/" target="_blank" rel="noopener noreferrer">Arian K.</a>
          </p>
        </div>
      </footer>

      {/* Item details modal */}
      {isModalOpen && activeItem && (
        <div className="modal-overlay" onClick={(e) => {
          if (e.target.className === 'modal-overlay') {
            handleCloseModal();
          }
        }}>
          <div className="modal">
            <div className="modal-image-container">
              <img src={activeItem.image} alt={activeItem.name} />
              <button onClick={handleCloseModal} aria-label="Close details">&times;</button>
            </div>
            <div className="modal-content">
              <div className="modal-header">
                <h3>{activeItem.name}</h3>
                <span>{activeItem.price}</span>
              </div>
              <p>{activeItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;