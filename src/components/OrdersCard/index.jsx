import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { HiChevronRight } from "react-icons/hi2";

const OrdersCard = ({ totalPrice, totalProducts, num, date, time }) => {

    // const item = data.data;
    // const { totalPrice, totalProducts } = useContext(ShoppingCartContext)

    return (
        <div
            className='bg-white border py-1 px-2 rounded-lg flex items-center hover:bg-gray-50'>
            <div className='flex flex-col justify-between w-full'>
                <h2 className='font-medium text-gray-700'>Order No. {num}</h2>
                <p className='text-sm text-gray-500'>
                    {date} - {time}
                </p>
                <p className='text-sm text-gray-500'>
                    <span>Productos: </span>
                    <span>{totalProducts}</span>

                </p>
            </div>
                <p className='font-medium flex gap-1'>
                    <span>Total: </span>
                    <span>${totalPrice}</span>
                </p>
                <HiChevronRight className='w-1/12 text-gray-400'/>

        </div>
    )
}

export default OrdersCard