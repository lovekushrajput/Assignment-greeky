import { useContext, useEffect } from 'react'
import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import CartItem from './Cartitem/CartItem';
import { Context } from '../../utils/context'



function Cart({ setShowCart }) {
  const { cartItems, cartSubTotal } = useContext(Context)

  return (
    // cart-panel
    <div className='fixed top-0 left-0 w-full h-full flex justify-end z-50'>
      {/* opac-layer */}
      <div className='bg-[rgba(0,0,0,0.5)] absolute top-0 left-0 w-full h-full'>

      </div>

      {/* cart-content */}
      <div style={{ transform: 'translateX(100%)' }} className='w-full h-full bg-white relative z-10 flex flex-col  md:w-[340px] animate-slideCartWindow'>

        {/* cart-header */}
        <div className='flex items-center justify-end py-5 px-4 border-b border-[rgba(0,0,0,0.1)]'>
          {/* heading */}
          <span className='grow mb-0 text-xl font-bold uppercase'>Shopping Cart</span>

          {/* close-btn */}
          <span onClick={() => setShowCart(false)} className='flex items-center gap-1 cursor-pointer hover:opacity-50'>
            <MdClose className='text-lg' />
            <span className='uppercase text-sm '>close</span>
          </span>
        </div>


        {
          !cartItems?.length &&
          <div className='flex flex-col items-center gap-5 mt-[100px]'>
            <BsCartX className='text-[120px] opacity-10' />
            <span>No products in the cart.</span>

            <button className='outline-0 border-0 h-9 w-[150px] flex justify-center items-center cursor-pointer text-white bg-[#8e2de2] border-b-2 border-[#6516aa]'>RETURN TO SHOP</button>
          </div>
        }


        {
          !!cartItems?.length && <>
            <CartItem />

            {/* cart-footer */}
            <div className='border-t border-[rgba(0,0,0,0.1)]'>

              {/* sub-total */}
              <div className='py-5 px-4  border-b border-[rgba(0,0,0,0.1)] flex justify-between'>
                {/* text */}
                <span className='mb-0 text-xl font-bold uppercase'>Subtotal:</span>
                {/* text total */}
                <span className='text-[#8e2de2]'>&#8377;{cartSubTotal}</span>
              </div>


              {/* button */}
              <div className='py-5 px-4 '>
                {/* checkout-cta */}
                <button className='outline-0 text-base border-0 h-12 w-full flex justify-center items-center cursor-pointer text-white bg-[#8e2de2] border-b-2 border-[#6516aa]'>Checkout</button>
              </div>



            </div>


          </>
        }



      </div>
    </div>
  )
}

export default Cart