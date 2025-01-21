import ProductCard from "../../Components/Card/ProductCard";
import { useGetAllProductsQuery } from "../../Features/Slices/DataApi";
import { useNavigate } from "react-router-dom";

function Store() {
  const { data: myProducts, isLoading } = useGetAllProductsQuery();

  /*
  //Pagination Manenoz
  const [pageNumber, setPageNumber] = useState(0); //which Page we are in

  const productsPerPage = 10;
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = myProducts.products
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => (
      <div key={product.id}>
        <ProductCard />
      </div>
    ));
  //Actual Page Count Calculation

  const pageCount = Math.ceil(myProducts.length / productsPerPage);
  //End Of Pagination Manenoz

  */

  const productNavigation = useNavigate();
  if (isLoading) {
    return (
      <div className="w-full h-lvh bg-slate-600 justify-center items-center justify-items-center content-center">
        <div className=" size-1/4 bg-white rounded justify-center items-center justify-items-center">
          <h1 className="font-bold text-lg">
            <span className="loader"></span>
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-3">
      <div className="flex flex-wrap">
        {myProducts.products.map((product) => (
          <div
            onClick={() => {
              productNavigation(`/store/${product.id}`);
            }}
            key={product.id}
            className="cursor-pointer overflow-hidden hover:shadow-xl rounded-lg m-2"
          >
            <ProductCard
              title={product.title}
              thumbnail={product.thumbnail}
              price={product.price}
              rating={product.rating}
              discountPercentage={product.discountPercentage}
            />
          </div>
        ))}
        {/*{displayProducts}*/}
        <div>
          {/*
         <ReactPaginate
            previousLabel="Prev"
            nextLabel="Next"
            pageCount={pageCount}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Store;
