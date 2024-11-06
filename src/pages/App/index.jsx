import { useRoutes, BrowserRouter } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import ShoppingCartProvider from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import './App.css'
import CheckoutSideMenu from '../../components/checkoutSideMenu'


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/:category', element: <Home /> },
    // { path: '/chair', element: <Home /> },
    // { path: '/controller', element: <Home /> },
    // { path: '/headset', element: <Home /> },
    // { path: '/keyboard', element: <Home /> },
    // { path: '/monitor', element: <Home /> },
    // { path: '/mouse', element: <Home /> },
    // { path: '/all', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes;
}

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
