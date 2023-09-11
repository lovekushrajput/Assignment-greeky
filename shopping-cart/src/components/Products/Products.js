import React from 'react'
import Product from './Product/Product'

function Products({ innerPage, headingText, products }) {

  return (
    // product-container
    <div className='my-13 mx-0 md:my-[75px] md:mx-0'>

      {/* sub-heading */}
      {!innerPage && <div
        className='mb-5 text-lg font-semibold uppercase 
        after:content-[""] after:block after:mt-2 after:w-12 after:h-1 after:bg-[#8e2de2]
      md:after:mt-3  md:mb-[35px] md:text-2xl'
      >{headingText}</div>}

      {/* products */}
      <div className='flex flex-wrap gap-2 md:gap-4'>
        { 
          products?.data?.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              data={item.attributes}
            />
          ))
        }
      </div>

    </div>
  )
}

export default Products