import { useNavigate, useParams } from "react-router-dom";
import { useGetOneProductIdQuery } from "../../Features/Slices/DataApi";

function OneProductPage() {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useGetOneProductIdQuery(id);
  const handleBackNav = useNavigate();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center text-red-500 text-lg">Product not found.</div>
    );
  }

  const handleAddToCart = () => {
    alert("Added to cart!");
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <button
        onClick={() => handleBackNav(-1)}
        className="bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded mb-4 mx-auto"
      >
        Back
      </button>
      <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-md">
        <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-auto object-cover rounded-lg shadow-sm "
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-lg font-semibold mb-4">${product.price}</p>{" "}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleAddToCart}
              className="hover:bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Comments</h3>
        <div className="text-gray-600">
          <p>No comments yet.</p>
        </div>
      </div>
    </div>
  );
}

export default OneProductPage;
