import { useState } from "react"

export default function Cart(){
    const [type, setType] = useState("");
    const [price, setPrice] = useState();
    const [quantity,setQuantity] = useState()
    const [size, setSize] = useState()
    const [cart, setCart] = useState([]);
    const [show, setShow] = useState(true)

    const handleAddToCart = (e)=>{
        e.preventDefault();
    if(price > 0 && quantity > 0){
        setCart([...cart, {type,price,size,quantity}]);
        setType("");
      setPrice('');
      setQuantity('');
      setSize("")
    }
    else{
        alert("Invalid");
    }        
}

const handleShow = (e)=>{
    e.preventDefault();
    setShow((show)=>!show)
}
    return(
        <> 
        <Form handleAdd={handleAddToCart}
            setPrice={setPrice} 
            setType={setType} 
            setQuantity={setQuantity}
            type={type}
            price={price}
            quantity={quantity}
            show={show}
            handleShow={handleShow} 
            cart={cart}
            size={size}
            setSize={setSize}
            >
        </Form>
        {
            !show && cart.length === 0 && (
                <div className="container">No Item Found</div>
              )
            }
            
            {

           show && cart.length > 0 ? (
                <div className="container">
                {
                    cart.map((item,index)=>
                        <div key={index}>
                            <h1>Type:{item.type}</h1>
                            <h2>Size:{item.size}</h2>
                            <h2>Quantity:{item.quantity}</h2>
                            <h2>Price: ${item.price} * {item.quantity} = ${item.price * item.quantity}</h2>
                            <hr></hr>
                        </div>
                    )
                }
                </div>
            ) : "" 

        }
        </>
    )
}

function Form({cart,show,size,setSize,type,quantity,price,setPrice,setQuantity,setType,handleAdd,handleShow}){
    return(
        <form className="form">
            <p>Type:</p>
            <input value={type} type='text' onChange={(e)=>setType(e.target.value)}></input>
            <p>Size:</p>
            <input value={size} type='number' onChange={(e)=>setSize(e.target.value)}></input>
            <p>Price:</p>
            <input value={price} min={1} type='number' onChange={(e)=>setPrice(Number(e.target.value))}></input>
            <p>Quantity</p>
            <input value={quantity} min={1} type='number' onChange={(e)=>setQuantity(Number(e.target.value))}></input>
            <button onClick={handleAdd}>Add to Cart</button>
            <button onClick={handleShow}>
                {show && cart.length > 0 && "Hide Cart"}
                {show && cart.length===0 && "Show Cart"}
                {!show && cart.length===0 && "Hide Cart"}
                {!show && cart.length > 0 && "Show Cart"}
                </button>
        </form>
    )
}

