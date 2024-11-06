import { useContext } from "react"
import Layout from "../../components/Layout/Layout"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../components/OrderCard"
import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi2";

function MyOrder() {

  const { order } = useContext(ShoppingCartContext)
  let date = ""
  let time = ""
  let num = 0;

  const orderDetails = (order) =>{
    date = order.date.toLocaleDateString()
    time = order.date.toLocaleTimeString()
    num = order.id
  }
  

  const currentPath = window.location.pathname
  let index = 0;

  if(currentPath.split("/").at(-1) === "last"){
    index = order.length - 1
    orderDetails(order[index])
  }else{
    index = (currentPath.split("/").at(-1) - 1)
    orderDetails(order[index])
  }

  const orderID = order[index].id

  return (
    <>
      <Layout >
        <div className='bg-gray-100 w-full h-screen flex flex-col gap-4 items-center p-20'>
          <div>
            <div className='py-2.5 relative'>
              <Link to='/my-orders'>
                <HiChevronLeft className='absolute left-0 top-[50%] -translate-y-[50%]' />
              </Link>
              <h1 className='text-center'>My Order</h1>
            </div>
            <div className='w-full max-w-[400px] flex flex-col gap-4 p-4 bg-white border rounded-lg'>
              <div className='flex items-center flex-col'>
                <h2 className='font-medium'>Order No. {num}</h2>
                <p className='text-sm text-gray-500'>
                  {date} - {time}
                </p>
              </div>
              <div className='flex flex-col gap-1 overflow-y-auto flex-grow'>
                {
                  order[index].products.map(item => {
                    return (
                      <OrderCard
                        key={item.id}
                        data={item}
                        orderID={orderID}
                      />
                    )
                  })
                }
              </div>
              <div className='flex flex-col gap-6'>
                <p className="flex justify-between font-medium text-xl border-y py-2">
                  <span>TOTAL:</span>
                  <span>${order[index].totalPrice}</span>
                </p>
                <Link to='#payu'>
                  <button className='w-full bg-green-400 rounded-lg p-3 font-medium shadow-md transition-colors hover:bg-green-500'>PAY NOW</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default MyOrder
