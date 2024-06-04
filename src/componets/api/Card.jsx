// import { data } from "autoprefixer";
import { propTypes } from "postcss/lib/previous-map";


const Card = ({data}) => {
  const {  name, title,image, description, price, rating } = data;
  return (
    <div className="border p-12">
      <h1>{name}</h1>
      <h1>{title}</h1>
      <img src={image} alt="" />
      <h1>{description}</h1>
      <h1>{price}</h1>
      <h1>{rating}</h1>
    </div>
  );
};


Card.propTypes = {
 
  
};
    
  

export default Card;