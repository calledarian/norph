import React, { useState, useEffect } from "react";
import { Coffee, MapPin, Phone, Mail, Clock, Menu, Globe } from "lucide-react";
// TODO: Fix this when we have real styles
import "./App.css";

const App = () => {
  // State management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("preferredLanguage") || "en"
  );

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("preferredLanguage", language);
  }, [language]);

  // Event handlers
  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsModalOpen(true);
    // Analytics tracking
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

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "kh" : "en");
  };

  // Content translations - might move to separate file later
  const translations = {
    en: {
      nav: {
        about: "About",
        menu: "Menu",
        testimonials: "Testimonials",
        contact: "Contact"
      },
      brand: {
        name: "Norphealey",
        altName: "Coffee & Eatery"
      },
      hero: {
        title: "Welcome to Norphealey",
        subtitle: "Cozy Vibes • Great Coffee • Local Flavors",
        viewMenu: "View Menu",
        findUs: "Find Us"
      },
      about: {
        title: "Our Story",
        paragraph1: "Established in 2023, Norphealey Coffee & Eatery brings together modern coffee culture with traditional Cambodian flavors. Our name comes from the Khmer word \"Norphealey\" meaning \"happiness\" - something we aim to bring to every customer.",
        paragraph2: "We source our coffee beans from local farmers in Mondulkiri and Ratanakiri provinces, supporting sustainable farming practices while delivering exceptional flavor in every cup."
      },
      menu: {
        title: "Our Menu",
        coffee: "Coffee",
        food: "Food"
      },
      testimonials: {
        title: "What Our Customers Say"
      },
      contact: {
        title: "Visit Us",
        contactInfo: "Contact Information",
        address: "434 Chamkar Doung Street (217), Phnom Penh, Cambodia",
        hours1: "Mon-Fri: 7:00 AM - 8:00 PM",
        hours2: "Sat-Sun: 8:00 AM - 9:00 PM"
      },
      footer: {
        copyright: "© 2025 Norphealey Coffee & Eatery"
      },
      languageButton: "ភាសាខ្មែរ" // Khmer language text
    },
    kh: {
      nav: {
        about: "អំពីយើង",
        menu: "ម៉ឺនុយ",
        testimonials: "ការវាយតម្លៃ",
        contact: "ទំនាក់ទំនង"
      },
      brand: {
        name: "នភាល័យ",
        altName: "កាហ្វេ និងអាហារដ្ឋាន"
      },
      hero: {
        title: "សូមស្វាគមន៍មកកាន់ ណរភាល័យ",
        subtitle: "បរិយាកាសកក់ក្តៅ • កាហ្វេល្អ • រសជាតិមូលដ្ឋាន",
        viewMenu: "មើលម៉ឺនុយ",
        findUs: "ស្វែងរកយើង"
      },
      about: {
        title: "រឿងរបស់យើង",
        paragraph1: "បង្កើតឡើងនៅឆ្នាំ២០២៣ ណរភាល័យ កាហ្វេនិងអាហារដ្ឋាន បាននាំមកនូវវប្បធម៌កាហ្វេទំនើបជាមួយរសជាតិប្រពៃណីខ្មែរ។ ឈ្មោះរបស់យើងមកពីពាក្យខ្មែរ ណរភាល័យ ដែលមានន័យថា សុភមង្គល ជាអ្វីដែលយើងចង់នាំមកឱ្យអតិថិជនគ្រប់រូប។",
        paragraph2: "យើងប្រមូលគ្រាប់កាហ្វេរបស់យើងពីកសិករក្នុងស្រុកនៅខេត្តមណ្ឌលគិរី និងខេត្តរតនគិរី ដោយគាំទ្រការអនុវត្តកសិកម្មប្រកបដោយនិរន្តរភាព ខណៈពេលផ្តល់រសជាតិពិសេសក្នុងពែងនីមួយៗ។"
      },
      menu: {
        title: "ម៉ឺនុយរបស់យើង",
        coffee: "កាហ្វេ",
        food: "អាហារ"
      },
      testimonials: {
        title: "អ្វីដែលអតិថិជនរបស់យើងនិយាយ"
      },
      contact: {
        title: "មកលេងយើង",
        contactInfo: "ព័ត៌មានទំនាក់ទំនង",
        address: "ផ្លូវចំការដូង (២១៧) លេខ ៤៣៤, រាជធានីភ្នំពេញ, កម្ពុជា",
        hours1: "ចន្ទ-សុក្រ៖ 7:00 ព្រឹក - 8:00 ល្ងាច",
        hours2: "សៅរ៍-អាទិត្យ៖ 8:00 ព្រឹក - 9:00 ល្ងាច"
      },
      footer: {
        copyright: "© ២០២៥ ណរភាល័យ កាហ្វេ និង អាហារដ្ឋាន"
      },
      languageButton: "English" // English language text
    }
  };

  // Current language content
  const content = translations[language];

  // Menu items - FIXME: should load from backend API
  const menuItems = {
    coffee: {
      en: [
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
          price: "$2.00", // was $3 in Khmer version - need to fix
          description: "A creamy and tropical drink with the tangy flavor of passion fruit.",
          image: "./passion-cream.jpg",
          category: "drinks"
        }
      ],
      kh: [
        {
          name: "តែក្រូចឆ្មារមានពពុះរដូវរងារ",
          price: "$2.00",
          description: "ភេសជ្ជៈតែក្រូចឆ្មារត្រជាក់ជាមួយរសជាតិគ្រឿងទេសរដូវរងារ និងគ្រាប់មុខប៉េងប៉ោង។",
          image: "./bubble-winter.jpg",
          category: "drinks"
        },
        {
          name: "សូដាផ្លែទៀប",
          price: "$2.00",
          description: "សូដាផ្លែឈើដែលមានពពុះ និងរសជាតិផ្អែមនៃផ្លែទៀបទុំ។",
          image: "./peach-soda.jpg",
          category: "drinks"
        },
        {
          name: "តែពពុះ",
          price: "$1.75",
          description: "តែទឹកដោះគោក្លាស៊ិកជាមួយគ្រាប់មុខប៉េងប៉ោងសម្រាប់បទពិសោធន៍ឆ្ងាញ់។",
          image: "./milk-tea.jpg",
          category: "drinks"
        },
        {
          name: "ក្រែមផេសិន",
          price: "$2.00", // fixing price discrepancy
          description: "ភេសជ្ជៈដែលមានលក្ខណៈក្រែមីនិងត្រូពិចជាមួយរសជាតិជូរអែមនៃផ្លែសាវម៉ាវ។",
          image: "./passion-cream.jpg",
          category: "drinks"
        }
      ]
    },
    food: {
      en: [
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
          image: "./spicy-noddle.jpg", // typo in image filename - keep for now
          category: "main"
        },
        {
          name: "Bingsu",
          price: "$2.00",
          description: "A refreshing dessert made with shaved ice, coconut cream, and tropical toppings.",
          image: "./bingsu.jpg",
          category: "dessert"
        }
      ],
      kh: [
        {
          name: "ក្រួស្សង់ក្រែម",
          price: "$1.50",
          description: "នំក្រួស្សង់ដ៏ឆ្ងាញ់ដែលមានបំពេញដោយក្រែមសាច់ស្រស់ គឺជាអាហារសម្រន់ផ្អែមដ៏ល្អឥតខ្ចោះ។",
          image: "./creme-croissant.jpg",
          category: "pastry"
        },
        {
          name: "មីហឹរ",
          price: "$2.50",
          description: "ចានមីដ៏ឆ្ងាញ់ដែលចំអិនជាមួយទឹកជ្រលក់ហឹរ និងតុបតែងជាមួយបន្លែនិងគ្រឿងស្រស់ៗ។",
          image: "./spicy-noddle.jpg",
          category: "main"
        },
        {
          name: "ប៊ីងស៊ូ",
          price: "$2.00",
          description: "បង្អែមត្រជាក់ធ្វើពីទឹកកកកោស ក្រែមដូង និងគ្រឿងតុបតែងត្រូពិច។",
          image: "./bingsu.jpg",
          category: "dessert"
        }
      ]
    }
  };

  // Testimonials with translations
  const allTestimonials = {
    en: [
      { name: "Sokha L.", text: "The atmosphere is so welcoming, and the staff are incredibly friendly!" },
      { name: "Vuthy T.", text: "A great place to relax and enjoy a cup of coffee with friends." },
      { name: "Sreyneang M.", text: "Their unique drinks and snacks are a must-try. Highly recommended!" }
    ],
    kh: [
      { name: "សុខា ល.", text: "បរិយាកាសនៅទីនេះស្វាគមន៍ណាស់ ហើយបុគ្គលិកមានភាពរាក់ទាក់គួរឱ្យចាប់អារម្មណ៍!" },
      { name: "វុទ្ធី ធី.", text: "កន្លែងល្អសម្រាប់សម្រាកនិងរីករាយជាមួយពែងកាហ្វេជាមួយមិត្តភក្តិ។" },
      { name: "ស្រីនាង អឹម.", text: "ភេសជ្ជៈនិងអាហារសម្រន់ពិសេសរបស់ពួកគេគឺជារបស់ដែលអ្នកត្រូវតែសាកល្បង។ ខ្ញុំណែនាំខ្លាំង!" }
    ]
  };

  // Keyboard shortcut for language toggle - press 'L' key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'l' && e.altKey) {
        toggleLanguage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [language]); // eslint-disable-line

  return (
    <div className={`app ${language}`}>
      <header>
        <div className="container header-content">
          <div className="brand">
            <Coffee className="brand-icon" size={32} />
            <div>
              <h1 className="brand-title">{content.brand.name}</h1>
              <p className="brand-subtitle">{content.brand.altName}</p>
            </div>
          </div>

          <div className="header-right">
            <button className="language-toggle" onClick={toggleLanguage}>
              <Globe size={18} />
              <span>{content.languageButton}</span>
            </button>

            {/* Mobile menu button */}
            <button
              className="mobile-menu-button"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <Menu size={24} />
            </button>

            {/* Desktop navigation */}
            <nav className="desktop-nav">
              <a href="#about">{content.nav.about}</a>
              <a href="#menu">{content.nav.menu}</a>
              <a href="#testimonials">{content.nav.testimonials}</a>
              <a href="#contact">{content.nav.contact}</a>
            </nav>
          </div>
        </div>

        {/* Mobile navigation - only renders when menu is open */}
        {isMenuOpen && (
          <nav className="mobile-nav">
            <a href="#about" onClick={toggleMobileMenu}>{content.nav.about}</a>
            <a href="#menu" onClick={toggleMobileMenu}>{content.nav.menu}</a>
            <a href="#testimonials" onClick={toggleMobileMenu}>{content.nav.testimonials}</a>
            <a href="#contact" onClick={toggleMobileMenu}>{content.nav.contact}</a>
          </nav>
        )}
      </header>

      <section
        className="hero"
        style={{ backgroundImage: 'url("./norph-front.jpg")' }}>
        <div className="hero-content">
          <h2 className="hero-title">{content.hero.title}</h2>
          <p className="hero-subtitle">{content.hero.subtitle}</p>
          <div className="hero-buttons">
            <a href="#menu" className="btn btn-primary">{content.hero.viewMenu}</a>
            <a href="#contact" className="btn btn-secondary">{content.hero.findUs}</a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="section-title">{content.about.title}</h2>
          <div className="about-content">
            <div className="about-image-container">
              <img
                src="./lime-on-hand.jpg"
                alt="Coffee shop interior"
                className="about-image"
                loading="lazy"
              />
            </div>
            <div className="about-text">
              <p>{content.about.paragraph1}</p>
              <p>{content.about.paragraph2}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="menu-section">
        <div className="container">
          <h2 className="section-title">{content.menu.title}</h2>

          {/* Drinks section */}
          <div className="menu-category coffee">
            <h3 className="menu-category-title">{content.menu.coffee}</h3>
            <div className="menu-grid">
              {menuItems.coffee[language].map((item, index) => (
                <div
                  key={`drink-${index}`}
                  className="menu-item"
                  onClick={() => handleItemClick(item)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${item.name}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-item-image"
                    loading="lazy"
                  />
                  <div className="menu-item-content">
                    <h4 className="menu-item-title">{item.name}</h4>
                    <p className="menu-item-price">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Food section */}
          <div className="menu-category food">
            <h3 className="menu-category-title">{content.menu.food}</h3>
            <div className="menu-grid">
              {menuItems.food[language].map((item, index) => (
                <div
                  key={`food-${index}`}
                  className="menu-item"
                  onClick={() => handleItemClick(item)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${item.name}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-item-image"
                    loading="lazy"
                  />
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
          <h2 className="section-title">{content.testimonials.title}</h2>
          <div className="testimonials-grid">
            {allTestimonials[language].map((testimonial, index) => (
              <div key={`testimonial-${index}`} className="testimonial-card">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2 className="section-title">{content.contact.title}</h2>
          <div className="contact-content">
            <div className="contact-info-container">
              <div className="contact-card">
                <h3 className="contact-title">{content.contact.contactInfo}</h3>
                <div className="contact-info">
                  <div className="contact-info-item">
                    <MapPin className="contact-icon" />
                    <p>{content.contact.address}</p>
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
                      <p>{content.contact.hours1}</p>
                      <p>{content.contact.hours2}</p>
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
                referrerPolicy="no-referrer-when-downgrade"
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
              <span className="footer-brand-name">{content.brand.name}</span>
            </div>
            <div className="footer-links">
              <a href="https://www.facebook.com/NorphealeyCoffee/" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
            <p className="footer-copyright">{content.footer.copyright}</p>
            <div><p>Developed By: </p><a href="https://ariankhadem.vercel.app/ " target="blank"> Arian K.</a></div>
          </div>
        </div>
      </footer>

      {/* Item details modal - only renders when modal is open */}
      {isModalOpen && activeItem && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            // Close when clicking the overlay but not the modal itself
            if (e.target.className === 'modal-overlay') {
              handleCloseModal();
            }
          }}
        >
          <div className="modal" role="dialog" aria-modal="true">
            <div className="modal-image-container">
              <img src={activeItem.image} alt={activeItem.name} className="modal-image" />
              <button
                onClick={handleCloseModal}
                className="modal-close-button"
                aria-label="Close details"
              >
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