import { ProductData } from "../../Features/Slices/DataApi";
const ProductCard: React.FC<ProductData> = ({
  title,
  price,
  discountPercentage,
  thumbnail,
  rating,
}) => {
  return (
    <div className=" m-4 p-3 border rounded-md border-black x group-hover:blur-sm">
      <div className="">
        <div className="">
          <img className="" src={thumbnail} alt={title} />
        </div>
        <div>
          <h1 className="font-bold">{title}</h1>
          <hr />
          <h3>Price: {price}</h3>
          <div className="flex justify-between">
            <h4>Rating: {rating}</h4>
            <h4 className="text-gray-500 p-1 rounded-md line-through">
              Discount: {discountPercentage}%
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
