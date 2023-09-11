import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';


function Search({ setShowSearch }) {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    setQuery(e.target.value)
  }


  let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`)
  if (!query.length) {
    data = null
  }


  return (
    // search-model
    <div
      style={{ transform: 'translateY(100%)' }}
      className='fixed w-full h-full z-50 top-0 left-0 bg-white animate-slideSearchWindow'
    >

      {/* form-field */}
      <div className='relative w-full flex justify-center py-3 px-12 border border-[rgba(0,0,0,0.1)] md:py-5 md:px-0'>

        <input
          type="text"
          autoFocus
          placeholder='Search for products'
          className='w-full max-w-6xl h-12 text-center text-lg font-semibold outline-none text-[#212121] uppercase
          md:text-5xl md:h-[80px]
          '
          value={query}
          onChange={handleChange}
        />

        <MdClose
          onClick={() => setShowSearch(false)}
          style={{ transform: 'translateY(-50%)' }}
          className='absolute text-2xl right-[20px] top-[50%] md:right-[40px]  md:text-5xl cursor-pointer'

        />
      </div>

      {/* search-result-content */}
      <div className='max-w-[calc(100%-20px)] my-0 mx-auto md:max-w-3xl'>
        {/* search-result */}
        <div className='h-[calc(100vh-110px)] overflow-auto my-5 mx-0 md:h-[calc(100vh-160px)]'>
          {/* search-result-items */}

          {data?.data?.map(item => (
            <div
              onClick={() => {
                navigate("product/" + item.id)
                setShowSearch(false)
              }}
              key={item.id}
              className='flex items-center gap-2 py-2 px-0 border-b border-[rgba(0,0,0,0.1)] cursor-pointer'
            >

              {/* img-container */}
              <div className='bg-[rgba(0,0,0,0.05)] w-16 h-16 shrink-0'>
                <img
                  src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url}
                  alt="" className='w-full h-full' />
              </div>


              {/* product-details */}
              <div className='overflow-hidden relative'>
                <span className='text-ellipsis whitespace-nowrap overflow-hidden text-base mb-2 font-semibold block'>{item.attributes.title}</span>
                <span className='text-ellipsis whitespace-nowrap overflow-hidden text-sm mb-2 font-semibold block text-[rgba(0,0,0,0.5)]'>{item.attributes.desc}</span>

              </div>

            </div>
          ))}



        </div>
      </div>


    </div>
  )
}

export default Search