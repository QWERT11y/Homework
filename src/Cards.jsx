import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Cards = () => {
  const { Id } = useParams().Id;
  const [card, setCard] = useState(true);

  useEffect(() => {
    
    if (products) {
      const foundCard = products.find((el) => el.id == Id);
      setCard(foundCard);
    }
  }, [Id, products]);

 
  if (!card) {
    return <p>Продукт не найден!</p>;
  }

  return (
    <div>
      
      <div className="relative w-[450px] h-[340px] bg-slate-50 rounded-3xl p-[30px]">
        <div className="text-start text-black flex flex-col items-start gap-[30px]">
          <h1 className="text-[30px]">{card.title}</h1>
          <img
            src={card.image}
            alt={card.title}
            className=" w-[150px] h-[150px] "
          />
          <p className="absolute bottom-[100px]">${card.price}</p>
          <p>{card.description}</p>
          <div className="flex items-center gap-4">
            <Link to={`/`}>
              <button className="absolute bottom-[30px] px-4 py-1 bg-transparent border-[3px] rounded-xl border-black">
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
