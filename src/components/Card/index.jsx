import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { HiCheck, HiPlus } from "react-icons/hi2";

const Card = (data) =>{

    const item = data.data;
    const { openProductDetail, setProductToShow, cartProducts, setCartProducts, openCheckoutSideMenu} = useContext(ShoppingCartContext);

    const showProduct = (ProductDetail) =>{
        openProductDetail(true)
        setProductToShow(ProductDetail)
    }

    const addProductToCart = (productData, e) =>{
        setCartProducts([...cartProducts, productData])
        openCheckoutSideMenu()
    }

    const renderIcon = (id) =>{

        const isInCart = cartProducts.filter(product => product.id === id).length > 0
        if(isInCart){
            return(
                <button className='absolute top-2 right-2 flex justify-center items-center rounded-full bg-green-400  p-2 shadow-md font-bold'>
                    <HiCheck />
                </button>
            )
        } else{
            return(
                <button 
                    className='absolute top-2 right-2 flex justify-center items-center rounded-full bg-white p-2 shadow-md font-bold'
                    onClick={(e) => addProductToCart(data.data, e)}>
                        <HiPlus />
                </button>
            )
        }

        
    }


    return (
        <div onClick={()=>{showProduct(data.data)}} 
        className='bg-white cursor-pointer h-60 w-56 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5 overflow-hidden'>
                <span className='absolute bottom-2 left-2 bg-white/60 rounded-lg text-black text-xs p-2 shadow-md'>{item.category}</span>
                <img src={item.image_url} alt={item.name} 
                    className='w-full h-full object-cover object-center rounded-lg'                />
                {renderIcon(item.id)}
                    
            </figure>
            <p className='h-1/5 flex items-center justify-between'>
                <span className='text-sm'>{item.name}</span>
                <span className='text-lg font-bold'>${item.price}</span>
            </p>
        </div>
    )
}

export default Card