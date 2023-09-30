import React,{useState, useEffect} from 'react'
import MwobileCategoryProduct from '../components/mobileCategoryProduct'
import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch"
import ShopCartegoryProduct from './component/shopCartegoryProduct';
import Products from '../components/products';
import { Link } from 'react-router-dom';

const page = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = `${import.meta.env.VITE_BACKEND_URL}products/category/${id}`;
  const asisCardRef = React.useRef(null);


  const {data} = useFetch(apiUrl)

  const url = `${
    import.meta.env.VITE_BACKEND_URL
  }products/?categories=${id}`;

  const {data: productsData} = useFetch(url)
  console.log(productsData)

  return (
    <div className='h-full'>
      {data && <section className='flex justify-center  items-start '>
        <div className="">

<ShopCartegoryProduct data={data} />

{productsData && (
            <div>
              <section className="mt-2 flex items-center gap-5">
                {productsData.products?.map((product) => (
                  <div key={product._id}>
                    <Link to={`/product/${product._id}`}>
                      <Products
                        top={asisCardRef.current?.offsetTop}
                        left={asisCardRef.current?.offsetLeft}
                        name={product.name}
                        price={product.price}
                        collaborations={product.collaborations}
                        images={product.images}
                      />
                    </Link>
                  </div>
                ))}
              </section>
            </div>
          )}
                  </div>


      </section>}
    </div>
  )
}

export default page