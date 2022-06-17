import React, { useEffect, useState } from "react";
import "./Product.scss";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { clearErrors, getProduct } from "../../actions/productAction";

const Products = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);

  const { products, loading, error, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const keyword = location.pathname.split("/")[2];
  console.log(keyword);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage));
  }, [dispatch, error, currentPage, keyword]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Products" />
          <div>
            {products.length === 0 ? (
              ""
            ) : (
              <h2 className="tituloPrincipal">Featured Products</h2>
            )}

            {products.length === 0 ? (
              <span
                style={{
                  display: "block",
                  padding: "30px 0",
                  fontSize: "1.5rem",
                  flex: ".9",
                  textAlign: "center",
                }}
              >
                No Product Found ....
              </span>
            ) : (
              <div
                className="products"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  flex: ".9",
                }}
              >
                {products &&
                  products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            )}
          </div>

          <div
            className="pagination__box"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "6vmax",
            }}
          >
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resultPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText="Next"
              prevPageText="Prev"
              firstPageText="First"
              lastPageText="Last"
              itemClass="page-item"
              linkClass="page-link"
              activeClass="pageItemActive"
              activeLinkClass="pageLinkActive"
            />
          </div>
        </>
      )}
    </>
  );
};

export default Products;
