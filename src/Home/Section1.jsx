import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Section1 = () => {
  const [products , setProducts] = useState([])

  const fetchProducts = async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await res.json();
    console.log(data);
    setProducts(data)
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products)
  

  return (
    <div className="flex flex-row justify-center items-center py-[100px]">
      <div className="flex flex-wrap gap-[40px] justify-center ">
        {products.map((el) =>{
          return(
            <div className="relative w-[450px] h-[340px] bg-slate-50 rounded-3xl p-[30px]">
                  <div className="text-start text-black flex flex-col items-start gap-[30px]">
                    <h1 className="text-[30px]">{el.name}</h1>
                    <img
            src={el.image} // Используем el.image для отображения
            alt={el.title} // Добавляем описание
            style={{ width: "150px", height: "150px" }} // Стили (опционально)
          />
                    <p className="absolute bottom-[100px]">
                 {el.price}
                    </p>
                    <p>{el.creationAt}</p>

                    <div className="flex items-center gap-4">
                      <Link to={`/Cards/${el.id}`}>
                        <button className=" absolute bottom-[30px] px-4 py-1 bg-transparent border-[3px] rounded-xl border-black">
                          More
                        </button>
                      </Link>
                     
                    </div>  
                  </div>
                </div>
          )
        }) }
      </div>
    </div>
  );
};

export default Section1;
