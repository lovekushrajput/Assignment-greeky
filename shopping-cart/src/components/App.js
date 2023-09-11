import {useEffect,useContext} from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Category from './Category/Category';
import SingleProduct from './SingleProduct/SingleProduct';
import Newsletter from './Footer/Newsletter/Newsletter';
import { fetchDataFromApi } from '../utils/api';
import { Context } from '../utils/context';


function App() {
    const { categories, setCategories, products, setProducts } = useContext(Context)

    useEffect(() => {
      getCategories()
      getProducts()
    }, [])
  
  
    const getCategories = () => {
      fetchDataFromApi('/api/categories?populate=*').then((res) => setCategories(res))
    }
  
    const getProducts = () => {
      fetchDataFromApi('/api/products?populate=*').then((res) => setProducts(res))
    }

    return (
        <div className='font-body'>
            <Header />
            <Routes>
                <Route path='/' element={<Home categories={categories}  products={ products} />} />
                <Route path='/category/:id' element={<Category />} />\
                <Route path='/product/:id' element={<SingleProduct />} />
            </Routes>
            <Newsletter />
            <Footer />
        </div>

    )
}

export default App