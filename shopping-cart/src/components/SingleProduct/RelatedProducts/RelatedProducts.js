import React, { useState, useEffect } from 'react';
import Products from '../../Products/Products';
import axios from 'axios';


function RelatedProducts({ productId, categoryId }) {
  const [data, setData] = useState('');



  const params = {
    headers: {
      Authorization: 'bearer ' + process.env.REACT_APP_STRIPE_KEY
    }

  }

  const fetchFromApi = async (url) => {
    try {
      const { data } = await axios.get(process.env.REACT_APP_DEV_URL + url,
        params
      )
      setData(data)
    } catch (error) {
      return (error)
    }
  }



  useEffect(() => {
    fetchFromApi(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`)
  }, [productId])



  return (
    // related-products
    <div>
      <Products headingText="Related Products" products={data} />
    </div>
  )
}

export default RelatedProducts