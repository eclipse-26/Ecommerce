import { useContext } from "react"
import Layout from "../../components/Layout/Layout"
import { ShoppingCartContext } from "../../Context"
import OrdersCard from "../../components/OrdersCard"
import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi2";

function MyOrders() {

  const { order } = useContext(ShoppingCartContext)

  return (
    <>
      <Layout >
        <div className='bg-gray-100 w-full h-screen flex flex-col gap-4 items-center p-20'>
            <div className='max-w-[400px] w-full'>
            <div className='py-2.5 relative'>
              <Link to='/'>
                <HiChevronLeft className='absolute left-0 top-[50%] -translate-y-[50%]' />
              </Link>
              <h1 className='text-center'>My Orders</h1>
            </div>
            <div className='w-full  flex flex-col gap-4 p-4 bg-white border rounded-lg'>
              <div className='flex flex-col gap-1 overflow-y-auto flex-grow'>
                {
                  order.length > 0 ?
                  order.map((order)=>(
                    <Link key={order.id} to={`/my-orders/${order.id}`}>
                      <OrdersCard 
                        totalPrice = {order.totalPrice}
                        totalProducts = {order.totalProducts}
                        num = {order.id}
                        date = {order.date.toLocaleDateString()}
                        time = {order.date.toLocaleTimeString()}
                      />
                    </Link>
                  ))
                  :
                    <div className='text-center text-sm'>
                      <p className='text-gray-400 mb-4'>No orders yet</p>
                      <Link 
                          to='/' 
                          >
                          <button className='bg-green-400 w-full  rounded-lg p-3 font-medium shadow-md transition-colors hover:bg-green-500'>Show products</button>
                      </Link>
                    </div>
                }
              </div>
            </div>
          </div>
          </div>
      </Layout>
    </>
  )
}

export default MyOrders
