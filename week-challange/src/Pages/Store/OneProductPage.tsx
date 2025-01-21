import { useNavigate, useParams } from "react-router-dom";
import {
  ProductData,
  useGetOneProductIdQuery,
} from "../../Features/Slices/DataApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Features/Slices/CartSlice";
import { myRootState } from "../../Features/Store/MainStore";

const OneProductPage: React.FC<ProductData> = ({
  id,
  title,
  price,
  thumbnail,
  description,
  images,
  rating,
  discountPercentage,
}) => {
  const navigate = useNavigate();
  const AddToCartDispatch = useDispatch();
  //const myOneProduct = useGetOneProductIdQuery(id);
  const params = useParams();

  const handleAddToCart = (id) => {
    AddToCartDispatch(addToCart(id));
  };

  //Get One Product

  return (
    <div className="container mx-auto p-4">
      <button
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-2/5 p-4">
          <div className="relative pb-[100%] md:pb-[75%] overflow-hidden rounded-lg">
            <img
              src={params.thumbnail || params.images?.[0]}
              alt={params.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">More Images</h2>
            <div className="flex overflow-x-auto space-x-2">
              {images?.map((image, index) => (
                <div
                  key={index}
                  className="w-20 h-20 rounded-lg overflow-hidden shrink-0"
                >
                  <img
                    src={image}
                    alt={`Product Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:w-3/5 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-gray-700">{rating}</span>
            <span className="text-gray-500 ml-2">({discountPercentage}%)</span>
          </div>
          <p className="text-gray-700 mb-6">{description}</p>
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold text-gray-900">${price}</p>
            {/* Add to cart button here */}
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Comments section (you can add more styling as needed) */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Comments</h2>
        <div>
          {/* Add comments here */}
          <p className="text-gray-700">No comments yet.</p>
        </div>
      </div>
    </div>
  );
};

export default OneProductPage;
