import React, { useEffect, useContext } from 'react'
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Products from '../Products/Products';
 

function Home({categories,products}) {

  return (
    <div>
      <Banner />

      {/* main-content */}
      <div className='max-w-[calc(100%-20px)] my-0 mx-auto md:max-w-[1200px]'>
        {/* layout */}
        <div>
          <Category categories={categories} />
          <Products products={products} headingText="Popular Products" />
        </div>
      </div>
    </div>
  )
}

export default Home