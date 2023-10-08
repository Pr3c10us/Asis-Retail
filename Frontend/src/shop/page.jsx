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

  return (
    <div className="h-full">
      {data && (
        <section className="px-2 flex justify-center flex-col items-center mt-10">
          <div className="flex justify-center">
            <ShopCartegoryProduct data={data} />
          </div>

          {productsData && (
            <div>
              <section className="mt-20 grid grid-cols-2 gap-3">
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
        </section>
      )}
    </div>
  );
}

export default page