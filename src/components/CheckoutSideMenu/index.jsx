import { HiOutlineXMark } from "react-icons/hi2"
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () =>{

    const { checkoutSideMenu, closeCheckoutSideMenu, cartProducts, setCartProducts, order, setOrder } = useContext(ShoppingCartContext);

    const handleCheckout = () =>{
        const orderToAdd = {
            date: new Date(),
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts),
            id: order.length + 1
        }
        setOrder([...order, orderToAdd])
        setCartProducts([])
    }

    return(
        <aside 
        className={`
        ${checkoutSideMenu ? 'flex' : 'hidden'}
        w-[360px] h-[calc(100%-100px)] flex-col gap-4 fixed right-2 bottom-2 bg-white border rounded-lg p-4
        `}
        >
        <div className='flex flex-col justify-between gap-4 h-full overflow-y-auto'>
            <div className="flex justify-between">
                <h2 className=" font-semibold">
                    My order
                </h2>
                <button onClick={()=>closeCheckoutSideMenu()}>
                    <HiOutlineXMark />
                </button>
            </div>
            <div className='flex flex-col gap-1 overflow-y-auto flex-grow'>
                {
                    
                    cartProducts.length > 0 ?
                        cartProducts.map(item=>{
                            return(
                                <OrderCard
                                    key={item.id}
                                    data={item}
                                    orderID={null}
                                />
                            )
                        })
                    :
                        <div className='text-center text-sm'>
                            <p className='text-gray-400'>Cart is empty :(</p>
                            <p className='font-medium'>Add a Product +</p>
                        </div>
                }
            </div>
            </div>
            <div className='flex flex-col gap-6'>
                <p className="flex justify-between font-medium text-xl border-y py-2">
                    <span>TOTAL:</span>
                    <span>${totalPrice(cartProducts)}</span>
                </p>
                <Link 
                    to='/my-orders/last' 
                    className={`${cartProducts.length == 0 ? 'pointer-events-none' : 'pointer-events-auto'}`}
                    onClick={()=>closeCheckoutSideMenu()}
                    >
                    <button className={`${cartProducts.length == 0 ? 'bg-gray-200 text-gray-500 pointer-events-none' : 'bg-green-400'} w-full  rounded-lg p-3 font-medium shadow-md transition-colors hover:bg-green-500`} onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu