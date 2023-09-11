import Products from '../Products/Products';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';



function Category() {

  const { id } = useParams()


  const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)


  return (
    // categoty-main-content
    <div className='my-8 mx-0 md:my-[75px]'>

      {/* layout */}
      <div className='max-w-[calc(100%-20px)] my-0 mx-auto md:max-w-6xl'>
        {/* category-title */}
        <div className='text-2xl md:text-3xl'>{data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</div>
        <Products innerPage={true} products={data} />
      </div>

    </div>
  )
}

export default Category