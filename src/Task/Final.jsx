import React, { useState } from 'react';

export default function Final() {
  const [currentPage, setCurrentPage] = useState('Home');

  // New Elegant Color Palette
  const theme = {
    midnight: '#1a1a1a', // Deep Charcoal
    gold: '#c5a059', // Muted Gold
    goldHover: '#e2bc73', // Brighter Gold for buttons
    softWhite: '#f9f9f9', // Background
    textGray: '#4a4a4a'
  };

  const commonStyles = {
    button: { 
      backgroundColor: theme.gold, 
      color: 'white', 
      border: 'none', 
      padding: '12px 24px', 
      borderRadius: '2px', 
      cursor: 'pointer', 
      fontWeight: 'bold', 
      textTransform: 'uppercase', 
      letterSpacing: '1px',
      transition: '0.3s' 
    },
    sectionTitle: { 
      fontSize: '48px', 
      color: theme.midnight, 
      textAlign: 'center', 
      marginBottom: '10px',
      fontFamily: '"Playfair Display", serif' 
    }
  };

  const menuData = {
    "SIGNATURE NON-VEG": [
      { name: "Chicken Biryani", price: "$12", img: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=400" },
      { name: "Chicken Fry", price: "$10", img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400" },
      { name: "Naan & Chicken Curry", price: "$14", img: "https://images.unsplash.com/photo-1603894584134-f132f0193011?w=400" },
      { name: "Fish Fry", price: "$11", img: "https://images.unsplash.com/photo-1599508704512-2f19fe9f27d3?w=400" },
      { name: "Mutton Biryani", price: "$15", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400" },
      { name: "Egg Roast", price: "$6", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400" }
    ],
    "GARDEN FRESH VEG": [
      { name: "Vegetable Biryani", price: "$9", img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=400" },
      { name: "Fried Rice", price: "$8", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400" },
      { name: "Gobi Manchurian", price: "$7", img: "https://images.unsplash.com/photo-1626132646529-500637532537?w=400" }
    ],
    "COLD PRESSED JUICES": [
      { name: "Orange Juice", price: "$4", img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400" },
      { name: "Apple Juice", price: "$4", img: "https://images.unsplash.com/photo-1576673442511-7e39b7ca89c9?w=400" },
      { name: "Pineapple Juice", price: "$5", img: "https://images.unsplash.com/photo-1589733512297-9844383f9823?w=400" },
      { name: "Pomegranate", price: "$6", img: "https://images.unsplash.com/photo-1541345034404-b3d811fd33b7?w=400" }
    ]
  };

  const Menu = () => (
    <div style={{ padding: '60px 5%', backgroundColor: theme.softWhite }}>
      <h2 style={commonStyles.sectionTitle}>Curated Menu</h2>
      <div style={{ width: '60px', hieght: '2px', background: theme.gold, margin: '10px auto 40px' }}></div>
      
      {Object.keys(menuData).map((category) => (
        <div key={category} style={{ marginBottom: '60px' }}>
          <h3 style={{ fontSize: '22px', color: theme.gold, borderLeft: `4px solid ${theme.gold}`, paddingLeft: '15px', marginBottom: '30px', letterSpacing: '2px' }}>
            {category}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {menuData[category].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'white', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderRadius: '12px' }}>
                <div style={{ overflow: 'hidden', height: '200px' }}>
                  <img src={item.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={item.name} />
                </div>
                <div style={{ padding: '20px', textAlign: 'center' }}>
                  <h4 style={{ margin: '0', fontSize: '20px', color: theme.midnight }}>{item.name}</h4>
                  <p style={{ color: theme.gold, fontWeight: 'bold', fontSize: '22px', margin: '10px 0' }}>{item.price}</p>
                  <button style={{ ...commonStyles.button, width: '100%' }}>Order Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const Home = () => (
    <header style={{ height: '85vh', backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', color: 'white', maxWidth: '700px', padding: '0 20px' }}>
        <h1 style={{ fontSize: '72px', margin: '0 0 20px', fontFamily: '"Playfair Display", serif' }}>Experience Divya</h1>
        <p style={{ fontSize: '20px', marginBottom: '40px', fontWeight: '300', letterSpacing: '1px' }}>Authentic flavors reimagined for the modern palate.</p>
        <button style={{ ...commonStyles.button, padding: '15px 40px' }} onClick={() => setCurrentPage('Menu')}>Explore the Menu</button>
      </div>
    </header>
  );

  const Location = () => (
    <div style={{ padding: '100px 10%', textAlign: 'center', backgroundColor: theme.softWhite }}>
      <h2 style={commonStyles.sectionTitle}>Visit Us</h2>
      <div style={{ backgroundColor: theme.midnight, color: 'white', padding: '60px', marginTop: '30px', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
        <h3 style={{ color: theme.gold, fontSize: '28px' }}>THE GOLDEN SQUARE</h3>
        <p style={{ fontSize: '18px', opacity: 0.8 }}>Opposite Tech Park, Spice Street, City Center</p>
        <div style={{ margin: '20px 0', height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
        <p>Mon - Sun: 10:00 AM - 11:30 PM</p>
        <button style={{ ...commonStyles.button, marginTop: '30px' }}>Open in Maps</button>
      </div>
    </div>
  );

  const Contact = () => (
    <div style={{ padding: '80px 10%', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={commonStyles.sectionTitle}>Reservations</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40px' }}>
        <input type="text" placeholder="Full Name" style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none' }} />
        <input type="email" placeholder="Email Address" style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none' }} />
        <textarea placeholder="Special Requests" rows="4" style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none' }}></textarea>
        <button style={commonStyles.button}>Book a Table</button>
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily: '"Inter", sans-serif', margin: 0, backgroundColor: theme.softWhite }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 8%', backgroundColor: 'rgba(26, 26, 26, 0.98)', color: 'white', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(10px)' }}>
        <div style={{ fontSize: '28px', color: theme.gold, cursor: 'pointer', fontWeight: 'bold', letterSpacing: '3px' }} onClick={() => setCurrentPage('Home')}>DIVYA</div>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {['Home', 'Menu', 'Location', 'Contact'].map(page => (
            <span 
              key={page} 
              onClick={() => setCurrentPage(page)} 
              style={{ cursor: 'pointer', color: currentPage === page ? theme.gold : 'white', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1.5px', transition: '0.3s' }}
            >
              {page.toUpperCase()}
            </span>
          ))}
        </div>
      </nav>

      <main>
        {currentPage === 'Home' && <Home />}
        {currentPage === 'Menu' && <Menu />}
        {currentPage === 'Location' && <Location />}
        {currentPage === 'Contact' && <Contact />}
      </main>

      <footer style={{ backgroundColor: theme.midnight, color: 'white', padding: '60px 5%', textAlign: 'center' }}>
        <div style={{ color: theme.gold, fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>DIVYA</div>
        <p style={{ opacity: 0.5, fontSize: '14px' }}>© 2026 DIVYA FINE DINING | ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  );
}
