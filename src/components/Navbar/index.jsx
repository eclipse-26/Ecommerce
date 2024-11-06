import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context";
import { HiOutlineShoppingBag } from "react-icons/hi2";



const Navbar = () => {
    const { cartProducts, setCategory, checkoutSideMenu, setCheckoutSideMenu } = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4';
    return (
        <nav className='flex justify-between items-center fixed top-0 w-full py-5 px-8'>
            <ul className='flex gap-4 items-center'>
                <li className='font-bold text-2xl'>
                    <NavLink to='/'
                    onClick={()=>setCategory('')}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/all'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        onClick={()=>setCategory('')}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/chair'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        onClick={()=>setCategory('chair')}
                    >
                        Chair
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/controller'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        onClick={()=>setCategory('controller')}
                    >
                        Controller
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/headset'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        onClick={()=>setCategory('headset')}
                    >
                        Headset
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/keyboard'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        onClick={()=>setCategory('keyboard')}
                    >
                        Keyboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/monitor'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        onClick={()=>setCategory('monitor')}
                    >
                        Monitor
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/mouse'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        onClick={()=>setCategory('mouse')}
                    >
                        Mouse
                    </NavLink>
                </li>
            </ul>
            <ul className='flex gap-4 items-center' >
                <li className='text-black/60'>
                    fsmith.2602@gmail.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Sign In
                    </NavLink>
                </li>
                <li>
                    <NavLink
                            className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        onClick={()=>setCheckoutSideMenu(!checkoutSideMenu)}
                    >  
                        <span className='flex items-center text-xl
                            hover:text-orange-600
                        '>
                            <HiOutlineShoppingBag />
                            ({cartProducts.length})
                        </span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar