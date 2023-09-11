import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useState, useContext, useEffect } from 'react';

import {
  FaFacebookF
  , FaTwitter
  , FaInstagram
  , FaLinkedin,
  FaPinterest,
  FaCartPlus
} from 'react-icons/fa'
import RelatedProducts from './RelatedProducts/RelatedProducts';
import { Context } from '../../utils/context';



function SingleProduct() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { handleAddToCart } = useContext(Context)
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`)

  const increment = () => {
    setQuantity((prevState) => prevState + 1)
  }

  const decrement = () => {
    quantity > 1 && setQuantity((prevState) => prevState + -1)

  }


  if (!data) return;
  const product = data.data[0].attributes

  console.log(id,data, 'single');
  return (
    // single-product-main-content
    <div className='my-5 mx-0 md:my-[74px] md:mx-0'>

      {/* layout */}
      <div className='max-w-[calc(100%-20px)] my-0 mx-auto md:max-w-6xl'>

        {/* singlr-product-page */}
        <div className='flex flex-col md:flex-row'>

          {/* left */}
          <div className='w-full bg-[rgba(0,0,0,0.05)] flex-shrink-0 md:w-[500px] md:h-[500px]'>
            <img
              className='w-full block'
              src={process.env.REACT_APP_DEV_URL + product.img.data[0].attributes.url}
              alt="" />
          </div>

          {/* right */}
          <div className='flex flex-col pt-5 md:py-0 md:mx-8'>
            <span className='text-lg mb-5 md:text-xl leading-7 md:leading-8'>{product.title}</span>
            <span className='text-xl mb-5   leading-8 '>&#8377;{product.price}</span>
            <span className='text-base mb-5 md:text-lg md:leading-6 leading-8 text-[#6b6b6b]'>{product.desc}</span>

            {/* cart-button */}
            <div className='flex md:mt-7'>
              {/* quantity-buttons */}
              <div className='w-[fit-content] flex border-2 border-[rgba(0,0,0,0.2)] mr-3 h-12'>
                <span className='text-lg w-10 flex justify-center items-center cursor-pointer text-[#6b6b6b] border-r-2 border-[rgba(0,0,0,0.2)]' onClick={decrement}>-</span>
                <span className='text-lg w-14 flex justify-center items-center cursor-pointer text-[#6b6b6b]'>{quantity}</span>
                <span className='text-lg w-10 flex justify-center items-center cursor-pointer text-[#6b6b6b] border-l-2 border-[rgba(0,0,0,0.2)]' onClick={increment}>+</span>
              </div>

              {/* add-t--cart-button */}
              <button
                onClick={() => {
                  handleAddToCart(data.data[0], quantity)
                  setQuantity(1)
                }}
                className='outline-0 border-0 h-11 w-[180px] flex justify-center items-center cursor-pointer text-white bg-[#8e2de2] border-b-2 border-[#6516aa] grow md:grow-[unset]'>
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            {/* divider */}
            <span className='my-5 mx-0 h-[1px] w-full bg-[rgba(0,0,0,0.1)]' />

            {/* info-items */}
            <div>
              {/* text-bold */}
              <span className='text-lg font-medium block'>Category: {" "}
                <span className='mb-5 text-[#6b6b6b]'>{product.categories.data[0].attributes.title}</span>
              </span>

              {/* txt-bold */}
              <span className='text-lg font-medium flex  items-center'>Share:
                {/* social-icons */}
                <span className='text-lg font-normal cursor-pointer text-[#6b6b6b] flex'>
                  <FaFacebookF size={16} className='my-0 mx-2' />
                  <FaTwitter size={16} className='my-0 mx-2' />
                  <FaInstagram size={16} className='my-0 mx-2' />
                  <FaLinkedin size={16} className='my-0 mx-2' />
                  <FaPinterest size={16} className='my-0 mx-2' />
                </span>
              </span>
            </div>


          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />

      </div>
    </div>
  )
}

export default SingleProduct