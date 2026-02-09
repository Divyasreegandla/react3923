import React, { useState } from 'react'

const Menu=({theme,commonStyles,menuData,addToCart})=>(
        <div style={{padding:"60px 5%",backgroundColor:theme.softWhite}}>
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
                        gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
                        gap:"30px"
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
    OrderSuccess(); 
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

const OrderSuccess = ({ theme, commonStyles, setCurrentPage, setIsOrdered }) => (
    <div style={{
        padding: "100px 10%",
        textAlign: "center",
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }}>
        <div style={{
            fontSize: "80px",
            color: theme.success,
            marginBottom: "20px"
        }}>✅</div>
            <h2 style={{color:"#1e6b22"}}>Order Placed Successfully!</h2>
        <p style={{ fontSize: "18px", color: "#382c2c", marginBottom: "30px" }}>
            Your delicious food is being prepared and will be delivered soon.
        </p>
        <button 
            style={{ ...commonStyles.button, padding: "15px 40px" }}
            onClick={() => {
                setIsOrdered(false);
                setCurrentPage('Home');
            }}
        >
            Back to Home
        </button>
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

export default function FinalTask() {

    const [currentPage,setCurrentPage]=useState('Home');
    const [reserve,setReserve]=useState(false);
    const [cart,setCart]=useState([]);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
     const [reserveName,setReserveName]=useState("");
     const [isOrdered,setIsOrdered]=useState(false);

     const totalPrice = cart.reduce((acc, item) => {
        const priceNum = parseInt(item.price.replace(/[^\d]/g, "")) || 0;
        return acc + (priceNum * (item.quantity || 1));
    }, 0);

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
const handleOrderSuccess=()=>{
    setCart([]);
    setIsOrdered(true);
    setCurrentPage("OrderSuccess");
}
    
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
        justifyContent:"space-between",
        padding:"20px 8%",
        backgroundColor:"rgba(26,26,26,.98)",
        color:"white",
        position:"sticky",
        top:0,
        zIndex:100,
        backdropFilter:'blur(10px)'
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
            gap:"40px",
            alignItems:"center"
        }}>{['Home','Menu','Location','Contact'].map(page=>(
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
      addToCart={addToCart}/>}
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

      {currentPage==='OrderSuccess' && (
        <OrderSuccess theme={theme}
        commonStyles={commonStyles}
        setCurrentPage={setCurrentPage}
        setIsOrdered={setIsOrdered}/>
      )}
      </main>

      <footer style={{backgroundColor:theme.midnight,color:"white",padding:"60px 5%", textAlign:"center"}}>
        <div style={{color:theme.gold,fontSize:"24px",fontWeight:"bold",marginBottom:"20px"}}>
            DIVYA
        </div>
        <p style={{opacity:0.5, fontSize:"14px"}}>@ 2026 DIVYA FINE DINING | ALL RIGHTS RESERVED </p>
      </footer>
    </div>
  )
}
