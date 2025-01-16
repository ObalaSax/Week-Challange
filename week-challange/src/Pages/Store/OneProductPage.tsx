import { useNavigate } from "react-router-dom";
import { ProductData } from "../../Features/Slices/DataApi";
const OneProductPage: React.FC<ProductData> = ({ title, rating, images }) => {
  const backNav = useNavigate();
  return (
    <div className="p-3">
      <button
        className="bg-black text-white p-2 mb-2 rounded "
        onClick={() => backNav(-1)}
      >
        Back
      </button>
      <div className="flex w-full p-3 bg-slate-300 h-96 w-50 mb-5 shadow-lg">
        <div className="bg-yellow-300 w-2/5 p-2">
          <div className="bg-amber-950 w-full h-4/5 ">
            <img src="" alt="Product Image" className="bg-slate-400 p-5" />
          </div>
          <hr />
          <div className="bg-gray-400 justify-center content-center items-center align-center h-1/5 ">
            <h1 className="font-bold">Images</h1>
          </div>
        </div>
        <div className="bg-pink-300 w-2/5 p-2">
          <h2>Product Title</h2>
        </div>
        <div className="bg-red-300 w-1/5 p-2">Plala</div>
      </div>
      <div className=" w-full p-3 bg-blue-300 h-1/2">
        <div className="bg-green-300 w-full p-2">Description</div>
        <div className="bg-orange-500  w-full p-2">Comments</div>
      </div>
    </div>
  );
};

export default OneProductPage;
