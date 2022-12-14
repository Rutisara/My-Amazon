import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ id, title, price, image, rating }) {

  const [{basket}, dispatch] = useStateValue();
  
  //  console.log(basket);

  const addToBasket = () => {

    
    dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
      }

})

  }
  return (
    <div className="product">
      <div className="product__info">
        <p className='title'>{title}</p>
        <p className="product__price">
          <small  >$</small>
          <small >{price}</small>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p >🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product



// import "./Product.css";
// import { useStateValue } from "./StateProvider";
// const Product = ({ id, title, price, image, rating }) => {
//   const [{ basket }, dispatch] = useStateValue();

//   console.log(basket);

//   const addToBasket = () => {
//     dispatch({
//       type: "ADD_TO_BASKET",
//       item: {
//         id: id,
//         title: title,
//         image: image,
//         price: price,
//         rating: rating,
//       },
//     });
//   };

//   return (
//     <div className="product">
//       <div className="product__info">
//         <p>{title}</p>
//         <p className="product__price">
//           <small>$</small>
//           <strong>{price}</strong>
//         </p>
//         <div className="product__rating">
//           {Array(rating)
//             .fill()
//             .map((e, i) => (
//               <p key={i}>🌟</p>
//             ))}
//         </div>
//       </div>
//       <img src={image} alt="" />
//       <button onClick={addToBasket}>Add to Basket</button>
//     </div>
//   );
// };

// export default Product;



