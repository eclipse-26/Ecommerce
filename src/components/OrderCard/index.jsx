import { useContext } from "react";
import { HiMiniTrash } from "react-icons/hi2";
import { ShoppingCartContext } from "../../Context";

const OrderCard = ({data, orderID}) =>{

    const item = data;
    const { removeProduct } = useContext(ShoppingCartContext)

    return (
        <div
        className='bg-white border p-1 rounded-lg flex items-center gap-2'>
            <figure className='w-2/12 aspect-square'>
                <img src={item.image_url} alt={item.name} 
                    className='w-full h-full object-cover object-cover object-center rounded-lg'/>       
            </figure>
            <p className='w-9/12 flex flex-col items-start justify-start '>
                <span className='text-sm'>{item.name}</span>
                <span className='text-md font-bold'>${item.price}</span>
            </p>
            <HiMiniTrash 
            onClick={(e)=>removeProduct(e, item.id, orderID)}
            className='w-1/12 text-gray-300 hover:text-red-400 cursor-pointer'/>
        </div>
    )
}

export default OrderCard