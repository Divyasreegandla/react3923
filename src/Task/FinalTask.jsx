import React, { useState } from 'react'

const Menu=({theme,commonStyles,menuData,addToCart,isMobile})=>(
        <div style={{padding:isMobile?"40px 5%":"60px 5%",backgroundColor:theme.softWhite}}>
            <h2 style={commonStyles.sectionTitle}>Divya Foods</h2>
            <div style={{width:"60px",height:"2px",background:theme.gold,margin:"10px auto 40px"}}></div>
            {Object.keys(menuData).map((category)=>(
                <div key={category}
                style={{marginBottom:"50px"}}>
                    <h3 style={{
                        fontSize:"22px",
                        color:theme.gold,
                        borderLeft:`4px solid ${theme.gold}`,
                        paddingLeft:"15px",
                        marginBottom:"30px",
                        letterSpacing:"2px"
                    }}>{category}</h3>
                    <div style={{
                        display:"grid",
                        gridTemplateColumns:isMobile?"1fr":"repeat(auto-fit,minmax(280px,1fr))",
                        gap:isMobile?"20px":"30px"
                    }}>{menuData[category].map((item,i)=>(
                        <div key={i}
                        style={{
                            backgroundColor:"white",
                            overflow:"hidden",
                            boxShadow:"0 10px 30px rgba(0,0,0,0.05)",
                            borderRadius:"12px"
                        }}>
                            <div style={{
                                overflow:"hidden", height:"250px",width:"100%"
                            }}>
                                <img src={item.img} 
                                style={{width:"100%",
                                    height:"100%",
                                    objectFit:"cover"
                                }}
                                alt={item.name} />
                                </div>
                                <div style={{padding:"20px",textAlign:"center"}}>
                                    <h4 style={{
                                        margin:"0",fontSize:"20px",color:theme.midnight
                                    }}>
                                        {item.name}
                                    </h4>
                                    <p style={{
                                        color:theme.gold,
                                        fontWeight:"bold",
                                        fontSize:"22px",
                                        margin:"10px 0"
                                    }}>{item.price}</p>
                                    <button style={{
                                        ...commonStyles.button,width:"100%"
                                    }} onClick={()=>addToCart(item)
                                    }>Add To Cart</button>
                                    </div>
                                    </div>
                    ))}
                    </div>
                    </div>
            ))}
        </div>
    );

    const Cart=({theme,commonStyles,cart,setCart,setCurrentPage,updateQuantity})=>{
        const totalPrice=cart.reduce((acc,item)=>{
            const priceNum=parseInt(item.price.replace(/[^\d]/g,"")) || 0;
            return acc+(priceNum*(item.quantity || 1));
        },0);
    const handlePlaceOrder=()=>{
        if(cart.length>0)
          setCurrentPage('Checkout');
    };
    return(
        <div style={{
            padding:"80px 10%",minHeight:"60vh",textAlign:"center"
        }}>
            <h2 style={commonStyles.sectionTitle}>
                Your Cart
            </h2>
            {cart.length===0?(
                <div style={{marginTop:"40px"}}>
                <p style={{
                    fontSize:"18px",
                    color:"#690b0b",
                    textAlign:"center",
                    marginTop:"40px"
                }}>Your cart is empty. Start adding some delicious food!</p>
                <button style={{
                    ...commonStyles.button,
                    padding:"15px 40px",
                    fontSize:"16px"
                }} onClick={()=>setCurrentPage('Menu')}>Browse menu</button>
                </div>
            ):(
                <div style={{marginTop:"40px",
                }}>{cart.map((item,index)=>(
                    <div key={index} 
                    style={{
                        display:"flex",
                        justifyContent:"space-between",
                        padding:"15px",
                        borderBottom:"1px solid #ddd",
                        alignItems:"center"
                    }}>
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                            gap:"15px"
                        }}>
                            <img src={item.img} alt=""
                            style={{
                                width:"50px",
                                height:"50px",
                                borderRadius:"5px",
                                objectFit:"cover"
                            }} />
                           <span>{item.name}</span>
                        </div>
                        <div style={{display:"flex",
                            alignItems:"center",
                            gap:"15px"
                        }}>
                            <button onClick={()=>updateQuantity(item.name,-1)}
                                style={{
                                    padding:"5px 10px",
                                    cursor:"pointer",
                                    border:`1px solid ${theme.gold}`,
                                    background:"none"
                                }}>-</button>
                                <span style={{fontWeight:"bold"}}>{item.quantity}</span>
                                <button onClick={()=>updateQuantity(item.name,1)}
                                style={{
                                    padding:"5px 10px",
                                    cursor:"pointer",
                                    border:`1px solid ${theme.gold}`,
                                    background:"none"
                                }}>+</button>
                        </div>
                         <span style={{
                                fontWeight:"bold",
                                color:theme.gold
                            }}>{(parseInt(item.price.replace(/[^\d]/g,""))*(item.quantity||1))}/-</span>
                    </div>
                ))}
                <div style={{
                    textAlign:"right",
                    marginTop:"30px"
                }}>
                    <h3>Total: <span style={{color:theme.gold}}>
                      {totalPrice}/-</span></h3>
                      <button style={{
                        ...commonStyles.button,padding:"15px 50px",
                        marginTop:"20px"
                      }} onClick={handlePlaceOrder}>
                        Checkout & Place Order
                      </button>
                      
                </div>
                </div>
            )}
        </div>
    );
    };

    const   Home=({commonStyles,setCurrentPage})=>(
        <header style={{
            height:"85vh",
            backgroundImage:'url("https://t4.ftcdn.net/jpg/02/92/20/37/360_F_292203735_CSsyqyS6A4Z9Czd4Msf7qZEhoxjpzZl1.jpg")'
            ,backgroundSize:"cover",
            backgroundPosition:"center",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}>
            <div style={{
                textAlign:"center",
                color:"white",
                maxWidth:"700px",
                padding:"0 20px"
            }}>
                <h1 style={{
                    fontSize:"65px",
                    margin:"0 0 20px",
                    fontFamily:'"Playfair Display",serif'
                }}>
                    Experience Divya Foods
                </h1>
                <p style={{
                    fontSize:"20px",
                    marginBottom:"40px",
                    fontWeight:"300",
                    letterSpacing:"1px",

                }}>Authentic flavors reimagined for the mordern palate.</p>
                <button style={{
                    ...commonStyles.button,
                    padding:"15px 40px"
                }} onClick={()=>setCurrentPage('Menu')}>Explore the Menu</button>
            </div>
        </header>
    );

    const   Location=({theme,commonStyles})=>(
            <div style={{
                padding:"50px 0%",
                textAlign:"center",
                backgroundColor:theme.softWhite
            }}>
               <h2 style={commonStyles.sectionTitle
               }>Visit Us</h2>
               <div style={{
                backgroundColor:theme.midnight,
                color:"white",
                padding:"60px",
                marginTop:"30px",
                borderRadius:"15px",
                boxShadow:"0 20px 40px rgba(0,0,0,0.2)"
               }}>
                <h3 style={{
                    color:theme.gold,
                    fontSize:"28px"
                }}>The Golden Square</h3>
                <p style={{
                    fontSize:"18px",
                    opacity:0.8,

                }}>Oppostion to sarthak consultancy, Ayaan City, AP-517408</p>
                <div style={{
                    margin:"20px 0",
                    height:"1px",
                    background:"rgba(255,255,255,0.1)"
                }}></div>
                <p style={{
                    letterSpacing:"1px"
                }}>Mon-Sun: 10:00 AM - 11:30 PM</p>
                <button style={{
                    ...commonStyles.button,
                    marginTop:"30px"
                }}>Open in Maps</button>
               </div>
            </div>
    );

    const Contact=({theme,commonStyles,name,setName,email,setEmail,setReserve,setReservedName})=>{
            const [request,setRequest]=useState("");
           
            return(
        <div style={{
            padding:"80px 10%",
            maxWidth:"600px",
            margin:"0 auto"
        }}>
            <h2 style={commonStyles.sectionTitle}>
                Reservations
            </h2>
            <div style={{
                display:"flex",
                flexDirection:"column",
                gap:"20px",
                marginTop:"40px"
            }}>
                <input style={{
                    padding:"15px",
                    border:"1px solid #ddd",
                    borderRadius:"8px",
                    outline:"none"
                }} type="text" placeholder='Enter Full Name'
                value={name}
                onChange={(e)=>setName(e.target.value)} />
                <input style={{
                    padding:"15px",
                    border:"1px solid #ddd",
                    borderRadius:"8px",
                    outline:"none"
                }} type="text" placeholder='Enter Your Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)} />

                <textarea style={{
                    padding:"15px",
                    border:"1px solid #ddd",
                    borderRadius:"8px",
                    outline:"none"
                }}
                placeholder='Special Requests' rows="4"
                value={request}
                onChange={(e)=>setRequest(e.target.value)}></textarea>
                <button style={commonStyles.button} onClick={()=>{
                    if(name.trim()==="" || email.trim()===""){
                        alert("Please enter both your name and email");
                    }else{
                        setReservedName(name);
                        setReserve(true);
        window.scrollTo({top:0,behavior:"smooth"});
        setTimeout(() => setReserve(false),
        5000);
        setName("");
        setEmail("");
        setRequest("");
                    }
                }
                }
                >Book a Table</button>
            </div>
        </div>
  )  };

const CheckOutForm=({theme,commonStyles,setPage,totalPrice,OrderSuccess})=>{
   const handleFormSubmit=(e)=>{
      e.preventDefault();
    const customerDetails = {
        name: e.target[0].value + " " + e.target[1].value, // First + Last Name
        email: e.target[2].value,
        phone: e.target[3].value,
        address: `${e.target[4].value}, ${e.target[6].value}` // House + City
    };
  
    OrderSuccess(customerDetails); 
};
    return(
        <div style={{
            padding:"40px 10%", maxWidth:"800px",margin:"0 auto"
        }}>
            <h2 style={commonStyles.sectionTitle}>Enter your Details</h2>
            <p style={{textAlign:"center",color:"#666",marginBottom:"30px"}}>
                Please fill all the fiields
            </p>
            <form onSubmit={handleFormSubmit} style={{
                display:"flex",
                flexDirection:"column",gap:"20px"
            }}>
                <div>
                    <label style={{display:"block",marginBottom:"8px",fontWeight:"bold"}}>Full Name</label>
                    <div style={{display:"flex",gap:"10px"}}>
                        <input style={formInputStyle} type="text" placeholder="First Name" required />
                        <input style={formInputStyle} type="text" placeholder="Last Name" required />
                    </div>
                </div>

                <div>
                    <label style={{display:"block",marginBottom:"8px",fontWeight:"bold"}}>Email</label>
                    <input style={formInputStyle} type="email" placeholder="Enter email" required />

                </div>
                    <label style={{display:"block",marginBottom:"8px",fontWeight:"bold"}}>Phone Number</label>
                    <input style={formInputStyle} type="text" placeholder="+91 --------" required />
                    
                <div>
                    <div>
                    <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>Address</label>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <input style={formInputStyle} type="text" placeholder="House/Dr No." required />
                        <input style={formInputStyle} type="text" placeholder="Area" />
                        <div style={{ display: "flex", gap: "10px" }}>
                            <input style={formInputStyle} type="text" placeholder="City" required />
                            <input style={formInputStyle} type="text" placeholder="Pincode" required />
                        </div>
                        </div>
                        </div>
                 <button type="submit" style={{ ...commonStyles.button, width: "120px", marginTop: "20px" }}>
                    Place Order
                </button>
                </div>
            </form>
        </div>
    );
};

const OrderSuccess = ({ theme, commonStyles, setCurrentPage, setIsOrdered, trackingId }) => (
    <div style={{
        padding: "100px 10%",
        textAlign: "center",
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }}>
        <div style={{ fontSize: "80px", color: theme.success, marginBottom: "20px" }}>✅</div>
        <h2 style={{color:"#1e6b22"}}>Order Placed Successfully!</h2>
        
        {/* NEW: Tracking ID Display Box */}
        <div style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            margin: "20px 0",
            border: `1px solid ${theme.gold}`
        }}>
            <p style={{ margin: "0 0 10px", fontSize: "14px", color: "#666" }}>YOUR TRACKING ID</p>
            <h3 style={{ margin: 0, fontSize: "24px", color: theme.midnight, letterSpacing: "2px" }}>{trackingId}</h3>
        </div>

        <p style={{ fontSize: "18px", color: "#382c2c", marginBottom: "30px" }}>
            Please save this ID to track your order status.
        </p>
        
        <div style={{display: "flex", gap: "15px"}}>
            <button 
                style={{ ...commonStyles.button, padding: "15px 40px" }}
                onClick={() => {
                    setIsOrdered(false);
                    setCurrentPage('Home');
                }}
            >Back to Home</button>
            
            <button 
                style={{ ...commonStyles.button, backgroundColor: theme.midnight, padding: "15px 40px" }}
                onClick={() => setCurrentPage('Track Order')}
            >Track Order</button>
        </div>
    </div>
);

const formInputStyle={
    padding:"12px",
    border:"1px solid #ccc",
    borderRadius:"4px",
    width:"100%",
    outline:"none",
    fontSize:"14px"
};

const TrackOrder = ({ theme, commonStyles }) => {
    const [searchId, setSearchId] = useState("");
    const [foundOrder, setFoundOrder] = useState(null);

    const handleTrack = () => {
        const orders = JSON.parse(localStorage.getItem('divya_orders') || '[]');
        const order = orders.find(o => o.id === searchId.toUpperCase());
        setFoundOrder(order || "not_found");
    };

    return (
        <div style={{ padding: "80px 10%", textAlign: "center", minHeight: "60vh" }}>
            <h2 style={commonStyles.sectionTitle}>Track Your Order</h2>
            <div style={{ margin: "30px 0" }}>
                <input 
                    style={{ ...formInputStyle, width: "300px", marginRight: "10px" }}
                    placeholder="Enter Tracking ID (e.g., DIV...)"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                />
                <button style={commonStyles.button} onClick={handleTrack}>Track</button>
            </div>

            {foundOrder === "not_found" && <p style={{ color: "red" }}>Order ID not found.</p>}
            
            {foundOrder && foundOrder !== "not_found" && (
                <div style={{ background: "white", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", textAlign: "left", maxWidth: "500px", margin: "0 auto" }}>
                    <h3 style={{ color: theme.gold }}>Order Status: {foundOrder.status}</h3>
                    <p><strong>Tracking ID:</strong> {foundOrder.id}</p>
                    <p><strong>Order Date:</strong> {foundOrder.date}</p>
                    <hr />
                    {foundOrder.items.map((item, i) => (
                        <div key={i} style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>{item.name} x {item.quantity}</span>
                            <span>{item.price}</span>
                        </div>
                    ))}
                    <h4 style={{ textAlign: "right", marginTop: "15px" }}>Total: ₹{foundOrder.total}/-</h4>
                </div>
            )}
        </div>
    );
};
const AdminOrders = ({ theme, commonStyles,isMobile }) => {
    // Get all orders from the "file"
    const [allOrders, setAllOrders] = useState(
        JSON.parse(localStorage.getItem('divya_orders') || '[]')
    );

    const deleteOrder = (id) => {
        const updated = allOrders.filter(order => order.id !== id);
        setAllOrders(updated);
        localStorage.setItem('divya_orders', JSON.stringify(updated));
    };

    return (
        <div style={{ padding: "30px 5%", minHeight: "80vh",width: "100%", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>

            <h2 style={commonStyles.sectionTitle}>Customer Order List</h2>
            <table style={{ width: "100%",
                minWidth:isMobile?"600px":"auto",
                 borderCollapse: "collapse", marginTop: "30px", backgroundColor: "white" }}>
                <thead>
                    <tr style={{ backgroundColor: theme.midnight, color: "white" }}>
                        <th style={{ padding: "15px", textAlign: "left" }}>ID</th>
                        <th style={{ padding: "15px", textAlign: "left" }}>Customer</th>
                        <th style={{ padding: "15px", textAlign: "left" }}>Items</th>
                        <th style={{ padding: "15px", textAlign: "left" }}>Total</th>
                        <th style={{ padding: "15px", textAlign: "left" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allOrders.map((order) => (
                        <tr key={order.id} style={{ borderBottom: "1px solid #ddd" }}>
                            <td style={{ padding: "15px", fontWeight: "bold" }}>{order.id}</td>
                            <td style={{ padding: "15px" }}>{order.customer?.name || "Guest"}</td>
                            <td style={{ padding: "15px" }}>
                                {order.items.map(item => `${item.name} (x${item.quantity})`).join(", ")}
                            </td>
                            <td style={{ padding: "15px" }}>₹{order.total}/-</td>
                            <td style={{ padding: "15px" }}>
                                <button 
                                    onClick={() => deleteOrder(order.id)}
                                    style={{ background: "#e74c3c", color: "white", border: "none", padding: "5px 10px", borderRadius: "4px", cursor: "pointer" }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {allOrders.length === 0 && <p style={{ textAlign: "center", marginTop: "20px" }}>No orders found.</p>}
        </div>
    );
};

export default function FinalTask() {
     const [width, setWidth] = React.useState(window.innerWidth);
const isMobile = width < 768;

React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);

    const [currentPage,setCurrentPage]=useState('Home');
    const [reserve,setReserve]=useState(false);
    const [cart,setCart]=useState([]);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
     const [reserveName,setReserveName]=useState("");
     const [isOrdered,setIsOrdered]=useState(false);
     const [adminPasswordInput, setAdminPasswordInput] = useState("");
     const [isPasswordWrong, setIsPasswordWrong] = useState(false);
     const [showPassword, setShowPassword] = useState(false);
     

    

     const totalPrice = cart.reduce((acc, item) => {
        const priceNum = parseInt(item.price.replace(/[^\d]/g, "")) || 0;
        return acc + (priceNum * (item.quantity || 1));
    }, 0);

    // Helper to generate a unique Tracking ID
const generateTrackingId = () => "DIV" + Math.random().toString(36).substr(2, 9).toUpperCase();

// CRUD: Create and Save Order
const saveOrder = (customerDetails, cartItems, total) => {
    const trackingId = generateTrackingId();
    const newOrder = {
        id: trackingId,
        customer: customerDetails,
        items: cartItems,
        total: total,
        status: "Preparing", // Default status
        date: new Date().toLocaleString()
    };

    // Get existing orders or empty array
    const existingOrders = JSON.parse(localStorage.getItem('divya_orders') || '[]');
    existingOrders.push(newOrder);
    
    // Save back to Local Storage
    localStorage.setItem('divya_orders', JSON.stringify(existingOrders));
    return trackingId;
};

    const theme={
        midnight:"#1a1a1a",
        gold:"#be8f36",
        goldHover:"#d89313",
        softWhite:"#f9f9f9",
        textGray:"a4a4a",
        success:"#27ae60"
    };

    const commonStyles={
        button:{
            backgroundColor:theme.gold,
            color:"white",
            border:"none",
            padding:"12px 24px",
            borderRadius:"2px",
            cursor:"pointer",
            fontWeight:"bold",
            textTrasform:"uppercase",
            letterSpacing:"1px",
            transition:"0.3s",
        },

    sectionTitle:{
        fontSize:"48px",
        color:theme.midnight,
        textAlign:"center",
        marginBottom:"10px",
        fontFamily:'"Playfair Display",serif',
        marginTop:"5px"
    }
    };

    const menuData={
        "NON VEG ITEMS":[
            {name:"Chicken Biryani", price:"₹220/-",img:"https://www.shutterstock.com/image-photo/traditional-chicken-biryani-served-brass-600nw-2622739739.jpg"},
            {name:"Chicken Fry", price:"₹200/-", img:"https://i.pinimg.com/736x/da/bf/22/dabf22d6eb7dcb40f95c3d8d8a2fbfa5.jpg"},
            {name:"Naan & Chicken Curry", price:"₹200/-",img:"https://static.vecteezy.com/system/resources/previews/050/906/536/non_2x/delicious-indian-chicken-curry-served-with-naan-on-a-plate-png.png"},
            {name:"Fish Fry",price:"₹180/-",img:"https://c.ndtvimg.com/2020-01/op8grfc_fish_625x300_11_January_20.jpg"},
            {name:"Mutton Biryani",price:"₹300/-",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7OMNYv05NRtUT3ZpvMHTuTf5X90vlXzOu4w&s"},
            {name:"Tandoori Chicken",price:"Full- ₹320/- & Half- ₹180/-",img:"https://theartisticcook.com/wp-content/uploads/2025/04/Chicken-Tangdi-Kebab-scaled.jpg"},
            {name:"Chicken Fried Rice",price:"₹120/-",img:"https://img.taste.com.au/OPyNo4fh/taste/2025/01/easy-teriyaki-chicken-fried-rice-hero-206903-1.jpg"},
            {name:"Chicken Lollipop",price:"₹150/-",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1rXpnOyjSXpx5K6_ttGFMgG-7-Tx-InzTQ&s.png"},
            {name:"Divya Special Biryani",price:"₹240/-",img:"https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg"}
        ],
        "VEG ITEMS":[
            {name:"Paneer Biryani",price:"₹220/-",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_PYXz7j6BLzFiE3KuW7Phg10VnQyCGJvRA&s.png"},
            {name:"Gobi Manchuri",price:"₹190/-",img:"https://www.indianveggiedelight.com/wp-content/uploads/2017/06/gobi-manchurian-featured.jpg"},
            {name:"Mushroom Biryani",price:"₹200/-",img:"https://images.jdmagicbox.com/justdial/icons/website/dishes/mushroom_biryani.jpg"},
            {name:"Baby Corn 65",price:"₹120/-",img:"https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/arpita-majumder20180813091522872.jpeg"},
            {name:"Paneer Tikka",price:"₹180/-",img:"https://spicecravings.com/wp-content/uploads/2020/10/Paneer-Tikka-Featured-1.jpg"},
            {name:"Mushroom Chilli",price:"₹150/-",img:"https://i.ytimg.com/vi/vKW9Eq_32rU/maxresdefault.jpg"}
        ],
        "MILK SHAKE":[
            {name:"Apple",price:"₹70/-",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJvXwEWW6usbgK-g6KwcBDPRzRPSOvFqCgyQ&s.png"},
            {name:"Banana",price:"₹50/-",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3KBlXTHL5T7y9YFkD4xqT_lJ57ZpGR6Ym8w&s.png"},
            {name:"Chocolate",price:"₹80/-",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRd1mw0tD2ejqNufwEOAKrerHq6qR3EXykDA&s.png"},
            {name:"Pista",price:"₹80/-",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ7Y3c9Ei_LhIw9fp3oJgiug6nfp84O5ZXFg&s.png"},
            {name:"Vanilla",price:"₹70/-",img:"https://www.foodandwine.com/thmb/aYv9IwIyM4EKLL0o7W1CUSfjXzU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Vanilla-Milkshake-FT-MAG-RECIPE-0325-4ad53abc27a74f7687e510cc17d28d1d.jpg"},
            {name:"Mango",price:"₹85/-",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCU-ZEpXlYJ2WbWxfkQE5Hy13C9ZJ8-WXxpA&s.png"}
        ]
    };

    const addToCart=(item)=>{
       setCart(prevCart=>{
        const existingItem=prevCart.find(cartItem=>cartItem.name===item.name);
        if(existingItem){
            return prevCart.map(cartItem=>cartItem.name===item.name?{...cartItem,quantity:cartItem.quantity+1}
                :cartItem
            );
        }
        return [...prevCart,{...item,quantity:1}];
       });
       alert(`${item.name} added to cart!`);
        
    };
    
    const updateQuantity=(itemName,amount)=>{
        setCart(prevCart=>
            prevCart.map(item=>
                item.name===itemName?{...item,quantity:item.quantity+amount}:item
            ).filter(item=>item.quantity>0)
        );
};
const [lastTrackingId, setLastTrackingId] = useState("");

const handleOrderSuccess=(customerDetails)=>{
    const trackId = saveOrder(customerDetails, cart, totalPrice);
    setLastTrackingId(trackId)
    setCart([]);
    setIsOrdered(true);
    setCurrentPage("OrderSuccess");
}
const handleAdminClick = () => {
        setCurrentPage('Admin');
   
};
    
  return (
    <div style={{fontFamily:'"Inter",sans-serif',
        margin:0,
        backgroundColor:theme.softWhite
    }}>
        {reserve&&(<div style={
            {
                backgroundColor:theme.success,
                color:"white",
                textAlign:"center",
                padding:"12px",
                fontWeight:"bold",
                position:"fixed",
                top:"100px",
                left:0,
                right:0,
                zIndex:2000           
                }}>Thank You {reserveName},
            Table Reserved Successfully
            
        </div>)}

      <nav style={{
        display:"flex",
        flexDirection:isMobile?"column":"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:isMobile?"15px 5%":"20px 8%",
        backgroundColor:"rgba(26,26,26,.98)",
        color:"white",
        position:"sticky",
        top:0,
        zIndex:100,
        backdropFilter:'blur(10px)',
        gap:isMobile?"15px":"0px"
      }}>
        <div style={{
            fontSize:"28px",
            color:theme.gold,
            cursor:"pointer",
            fontWeight:"bold",
            letterSpacing:"3px"} }
            onClick={()=>setCurrentPage('Home')}>
            Divya
        </div>
        <div style={{
            display:"flex",
            flexWrap:"wrap",
            gap:isMobile?"15px":"40px",
            fontSize:isMobile?"11px":"13px",
            alignItems:"center"
        }}>{['Home','Menu','Location','Contact','Track Order'].map(page=>(
            <span key={page}
            onClick={()=>setCurrentPage(page)}
            style={{
                cursor:"pointer",
                color:currentPage===page?theme.gold:"white",
                fontSize:"13px",
                fontWeight:"bold",
                letterSpacing:"1.5px",
                transition:"0.3s"
            }}>
                {page.toUpperCase()} 
            </span>
        ))}
        {adminPasswordInput === "divya123" && (
        <span onClick={() => setCurrentPage('Admin')} style={{ color: theme.gold, cursor: "pointer" }}>
            ADMIN
        </span>
    )}

        <div onClick={()=>setCurrentPage('Cart')}
            style={{
                cursor:"pointer",
                position:"relative",
                color:currentPage==='Cart'?theme.gold:"white"
            }}>
             <span style={{fontSize:"30px"}}>🛒</span>
             {cart.length>0 && (
                <span style={{
                    position:"absolute",
                    top:"-18px",
                    right:"-14px",
                    backgroundColor:theme.gold,
                    color:"white",
                    borderRadius:"50%",
                    width:"5px",
                    height:"5px",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    padding:"12px",
                    fontSize:"11px"
                }}>{cart.reduce((total,item)=>total+(item.quantity ||1),0)}</span>
             )}
            </div>
        </div>
      </nav>

      {/* main */}
      <main>
      {currentPage==='Home' && <Home commonStyles={commonStyles}
      setCurrentPage={setCurrentPage}/>}
      {currentPage==='Menu' && <Menu theme={theme}
      commonStyles={commonStyles}
      menuData={menuData}
      addToCart={addToCart}
      isMobile={isMobile}/>}
      {currentPage==='Location' && <Location theme={theme}
      commonStyles={commonStyles}
      
      />}
      
      {currentPage==='Contact' && (
        <Contact
        theme={theme}
        commonStyles={commonStyles}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        setReserve={setReserve}
        setReservedName={setReserveName}/>
      )}
      {currentPage==='Cart' && <Cart theme={theme}
      commonStyles={commonStyles}
      cart={cart}
      setCart={setCart}
      setCurrentPage={setCurrentPage}
      updateQuantity={updateQuantity}/>}

      {currentPage==='Checkout' && (<CheckOutForm theme={theme}
      commonStyles={commonStyles} 
      setPage={setCurrentPage}
      totalPrice={totalPrice}
      OrderSuccess={handleOrderSuccess}/>
      )}

      {/* Change the OrderSuccess call to this: */}
{currentPage==='OrderSuccess' && (
    <OrderSuccess 
        theme={theme}
        commonStyles={commonStyles}
        setCurrentPage={setCurrentPage}
        setIsOrdered={setIsOrdered}
        trackingId={lastTrackingId} 
    />
)}

{/* Add the TrackOrder page call: */}
{currentPage==='Track Order' && (
    <TrackOrder 
        theme={theme} 
        commonStyles={commonStyles} 
    />
)}

{currentPage === 'Admin' && (
    <div style={{ padding: "100px 10%", textAlign: "center", minHeight: "60vh" }}>
        {adminPasswordInput !== "divya123" ? (
            <div style={{ maxWidth: "300px", margin: "0 auto" }}>
                <h2 style={commonStyles.sectionTitle}>Admin Access</h2>
                
                <div style={{ position: "relative", marginBottom: "10px" }}>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Enter Password" 
                        style={{
                            ...formInputStyle, 
                            width: '100%', 
                            paddingRight: '0px', // Space for the eye icon
                            border: isPasswordWrong ? "2px solid #ff4d4d" : `1px solid ${theme.gold}`,
                            outline: 'none'
                        }}
                        onChange={(e) => {
                            const val = e.target.value;
                            setIsPasswordWrong(false); 
                            if(val.trim() === "divya123") {
                                setAdminPasswordInput("divya123");
                            } else if (val.length >= 8) {
                                setIsPasswordWrong(true);
                            }
                        }}
                    />
                    {/* The Toggle Eye Button */}
                    <span 
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                            position: "absolute",
                            right: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                            fontSize: "18px",
                            opacity: 0.7
                        }}
                    >
                        {showPassword ? "👁️‍🗨️" : "👁"}
                    </span>
                </div>
                
                {/* Error Message */}
                <div style={{ minHeight: "24px" }}>
                    {isPasswordWrong && (
                        <p style={{ color: "#ff4d4d", fontSize: "15px", margin: "0 0 10px 0" }}>
                            Wrong Password ❌ 
                        </p>
                    )}
                </div>

                <p style={{ opacity: 0.6, fontSize: "14px" }}>Please enter the admin key to view orders.</p>
                
                <button 
                    style={{ ...commonStyles.button, marginTop: "20px", width: "100%" }} 
                    onClick={() => {
                        setIsPasswordWrong(false);
                        setCurrentPage('Home');
                    }}
                >
                    Back to Home
                </button>
            </div>
        ) : (
            <AdminOrders theme={theme} commonStyles={commonStyles}
            isMobile={isMobile} />
        )}
    </div>
)}


      </main>

      <footer style={{backgroundColor:theme.midnight,color:"white",padding:"60px 5%", textAlign:"center"}}>
        <div style={{color:theme.gold,fontSize:"24px",fontWeight:"bold",marginBottom:"20px"}}>
            DIVYA
        </div>
        <p style={{opacity:0.5, fontSize:"14px"}}>@ 2026 DIVYA FINE DINING | ALL RIGHTS RESERVED </p>
        <p 
        onClick={() => setCurrentPage('Admin')} 
        style={{ opacity: 0.2, fontSize: "10px", marginTop: "20px", cursor: "pointer" }}
    >
        Admin Login
    </p>
    </footer>
    </div>

  )
}
