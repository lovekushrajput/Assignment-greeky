import React from 'react'
import { useNavigate} from 'react-router-dom';


function Product({ id, data }) {

  const navigate = useNavigate()


  return (
    // product-card
    <div className='w-[calc(50%-5px)] mb-5 md:w-[calc(25%-15px)]'
      onClick={
        () => {
          navigate('/product/' + id)
        }}>

      {/* thumbnail */}
      <div className='w-full h-[180px] bg-[rgba(0,0,0,0.05)] mb-3 p-6 flex items-center md:h-[350px]'>
        <img
          src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url}
          style={{ transition: 'all ease 0.3s' }}
          className='block w-full hover:scale-110'
          alt="" />
      </div>

      {/* product-detail */}
      <div>
        {/* name */}
        <span className='block text-ellipsis whitespace-nowrap overflow-hidden text-sm md:text-base md:mb-2'>{data.title}</span>

        {/* price*/}
        <span className='text-lg md:text-xl'>&#8377; {data.price}</span>
      </div>
    </div>
  )
}

export default Product