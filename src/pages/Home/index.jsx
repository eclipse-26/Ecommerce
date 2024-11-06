import { useContext } from "react"
import Card from "../../components/Card"
import Layout from "../../components/Layout/Layout"
import ProductDetail from "../../components/ProductDetail"
import CheckoutSideMenu from "../../components/checkoutSideMenu"
import { ShoppingCartContext } from "../../Context"




function Home() {
  const {items, setItems, searchByTitle, setSearchByTitle, filteredItems, category} = useContext(ShoppingCartContext)
  
  return (
    <>
      <Layout>
        <h1 className='font-bold text-xl'>Home</h1>
        <input type="search" placeholder="Search a product..."
          onChange={(e) =>{ setSearchByTitle(e.target.value) }}
          className="border py-2 px-3 outline-none rounded-lg focus:border-black"
        />
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          
          
          {
            searchByTitle?.length > 0 ?
              filteredItems?.length > 0 ?
                category !== '' ?
                filteredItems?.filter(item => item.category.toLowerCase() === category).map( item =>(
                  <Card 
                    key={item.id}
                    data={item}
                  />
                ))
                :
                filteredItems?.map( item =>(
                  <Card 
                    key={item.id}
                    data={item}
                  />
                ))
              :
              <p className='text-center col-start-1 col-end-5 text-gray-500'>Any results :(</p>
            :
            category !== '' ?
              items?.filter(item => item.category.toLowerCase() === category).map( item =>(
                <Card 
                  key={item.id}
                  data={item}
                />
              ))
            :
            items?.map( item =>(
              <Card 
                key={item.id}
                data={item}
              />
            ))
          }
        </div> 
        <ProductDetail />
        
      </Layout>
    </>
  )
}

export default Home
