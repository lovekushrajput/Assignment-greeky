import { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { Context } from '../../../utils/context';

function CartItem() {
    const { cartItems,  handleCartProductQuantity, handleRemoveFromCart } = useContext(Context)
    return (
        // cart-products
        <div className='grow'>

            {
                cartItems.map((item) => (
                    <div 
                    key={item.id}
                    className='py-5 px-4 gap-2 flex hover:bg-[rgba(0,0,0,0.05)]'>

                        {/* img-container */}
                        <div className='bg-[rgba(0,0,0,0.05)] w-16 h-16 shrink-0'>
                            <img 
                            src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url}
                            alt="" className='w-full h-full' />
                        </div>

                        {/* product-details */}
                        <div className='overflow-hidden relative'>
                            {/* name */}
                            <span className='text-ellipsis whitespace-nowrap overflow-hidden text-base mb-2 font-semibold block pr-6'>{item.attributes.title}</span>

                            {/* close-btn */}
                            <MdClose 
                            onClick={()=> handleRemoveFromCart(item)}
                            className='absolute flex top-[5px] right-0 cursor-pointer'
                             />

                            <div className='w-[fit-content] flex border border-[rgba(0,0,0,0.2)]  h-7 mb-2'>
                                <span className='text-lg w-7 flex justify-center items-center cursor-pointer text-[#6b6b6b] border-r border-[rgba(0,0,0,0.2)]'
                                 onClick={()=> handleCartProductQuantity('dec',item)}>-</span>
                                <span className='text-sm w-10 flex justify-center items-center cursor-pointer text-[#6b6b6b]'>{item.attributes.quantity}</span>
                                <span className='text-lg w-7 flex justify-center items-center cursor-pointer text-[#6b6b6b] border-l border-[rgba(0,0,0,0.2)]'
                                   onClick={()=> handleCartProductQuantity('inc',item)}
                                >+</span>
                            </div>

                            {/* text */}
                            <div className='flex items-center gap-1 text-sm font-semibold'>
                                <span>{item.attributes.quantity}</span>
                                <span>*</span>
                                <span className='text-[#8e2de2]'>&#8377; {item.attributes.price * item.attributes.quantity}</span>
                            </div>
                        </div>

                    </div>
                ))
            }


        </div>
    )
}

export default CartItem