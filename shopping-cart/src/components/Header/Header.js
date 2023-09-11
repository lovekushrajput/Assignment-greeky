import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom';

// icons
import { TbSearch } from 'react-icons/tb';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai'

import Search from './Search/Search';
import Cart from '../Cart/Cart';
import { Context } from '../../utils/context';

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const navigate = useNavigate()
  const { cartCount } = useContext(Context)


  const handleScroll = () => {
    const offset = window.scrollY
    offset > 150 ? setScrolled(true) : setScrolled(false)

  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])


  return (
    <>
      <header className={`w-full z-50 py-0 px-5  bg-black text-white md:py-0 md:px-10 ${scrolled ? 'sticky top-0 animate-stickyHeader' : ''}`}>

        {/* content */}
        <div className='max-w-6xl flex justify-between items-center my-0 mx-auto h-12 leading-none  md:h-20'>

          {/* left */}
          <ul className='flex gap-6 text-sm  font-semibold uppercase cursor-pointer xs:hidden sm:text-sm md:text-base'>

            <Link to={'/'}>Home</Link>
            <li>About</li>
            <li>Categories</li>
          </ul>

          {/* center */}
          <div
            className='text-2xl font-bold cursor-pointer xs:xl md:text-4xl'
            onClick={() => navigate('/')}
          >SHOPPINGCART.</div>

          {/* right */}
          <div className='flex items-center gap-6 text-xl leading-none xs:gap-4 md:text-2xl'>
            <TbSearch className='cursor-pointer' onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />
            <span className='relative' onClick={() => setShowCart(true)}>
              <CgShoppingCart className='cursor-pointer' />
              {!!cartCount && <span className='min-w-[18px] text-xs leading-none text-center bg-purple-700 p-1 absolute top-[-7px] right-[-13px] rounded-full'>{cartCount}</span>}
            </span>
          </div>
        </div>

      </header>
      {showCart && <Cart setShowCart={setShowCart} showCart={showCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  )
}

export default Header