import { useNavigate } from 'react-router-dom';


function Category({ categories }) {

    const navigate = useNavigate()
    
    return (
        <div className='my-6 mx-0 md:my-12 md:mx-0'>
            <div className='flex flex-wrap gap-2'>
                { 
                  categories?.data?.map((item) => (
                        <div
                            onClick={() => navigate('/category/' + item.id)}
                            key={item.id}
                            className='bg-black w-[calc(50%-5px)] cursor-pointer overflow-hidden md:w-[calc(25%-8px)]'
                        >
                            <img
                                src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url}
                                alt="cat" style={{ transition: 'all ease 0.3s' }}
                                className='w-full block hover:scale-125'
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category