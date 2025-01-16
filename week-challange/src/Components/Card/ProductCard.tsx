import { ProductData } from "../../Features/Slices/DataApi";
const ProductCard: React.FC<ProductData> = ({
  title,
  price,
  discountPercentage,
  thumbnail,
  rating,
}) => {
  return (
    <div className="bg-slate-400 w-1/6 m-5 border-solid border-2 border-gray-950 rounded-md p-2">
      <div className="p-1 bg-blue-500">
        <div className="bg-yellow-200 h-1/2  justify-center items-center ">
          <img src={thumbnail} alt={title} />
        </div>
        <div>
          <h1>{title}</h1>
          <hr />
          <h3>Price: {price}</h3>
          <div className="flex justify-between">
            <h4>Rating: {rating}</h4>
            <h4> Discount: {discountPercentage}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
