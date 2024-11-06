import { createContext, useEffect, useState } from "react"
import productsJson from "../api-local/products.json"

export const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) =>{

    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    useEffect(()=>{
    //     fetch("https://api.escuelajs.co/api/v1/products")
    //   .then(response => response.json())
    // .then(data => setItems(data))
    setItems(productsJson.products)
    }, [])

    const [count, setCount] = useState(0)
    const [ProductDetailOpen, setProductDetailOpen] = useState(false)
    const [checkoutSideMenu, setCheckoutSideMenu] = useState(false)

    const openProductDetail = () =>{
        setProductDetailOpen(true)
    }

    const closeProductDetail = () =>{
        setProductDetailOpen(false)
    }

    const openCheckoutSideMenu = () =>{
        setCheckoutSideMenu(true)
    }

    const closeCheckoutSideMenu = () =>{
        setCheckoutSideMenu(false)
    }

    const [productToShow, setProductToShow] = useState({})
    const [cartProducts, setCartProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    const [order, setOrder] = useState([])
    const [searchByTitle, setSearchByTitle] = useState('')
    const [category, setCategory] = useState('')

    const removeProduct = (e, id, orderID) =>{
        const newCartProducts = [...cartProducts]
        const index = newCartProducts.findIndex(object => {
            return object.id === id;
        });
        newCartProducts.splice(index, 1)
        setCartProducts(newCartProducts)

        if(orderID){
            console.log("Order", order[orderID - 1].products)
            const newOrderProducts = [...order[orderID - 1].products]
            const index = newOrderProducts.findIndex(object => {
                return object.id === id;
            });

            console.log(index)
            
            newOrderProducts.splice(index, 1)
            console.log(newOrderProducts)
            console.log(order)
            // setCartProducts(newOrderProducts)
        }
        
    }
    

    const cartCountSum = (e, listProducts) =>{
        e.stopPropagation()
        setCount(listProducts.length + 1)
    }

    const cartCountRes = (e, listProducts) =>{
        e.stopPropagation()
        setCount(listProducts.length)
    }

    

    

    const filteredItemsByTitle = (items) => {
        return items?.filter( item => item.name.toLowerCase().includes (searchByTitle.toLowerCase()))
    }

    useEffect(()=>{
        if(searchByTitle){
            setFilteredItems(filteredItemsByTitle(items, searchByTitle))
            
        }
        return () =>{
        }
        
    }, [items, searchByTitle])

        

    return(
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                ProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                totalPrice,
                setTotalPrice,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                setCheckoutSideMenu,
                checkoutSideMenu,
                removeProduct,
                order,
                setOrder,
                cartCountSum,
                cartCountRes,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                category,
                setCategory,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider