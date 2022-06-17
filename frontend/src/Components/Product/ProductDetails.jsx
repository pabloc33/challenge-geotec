import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./Productdetails.scss";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import { clearErrors, getProductDetails } from "../../actions/productAction";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, error, loading } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProductDetails(id));
  }, [dispatch, id, error]);

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`${product.name}`} />
          <div className="ProductDetails">
            <button
              type="button"
              class="btn btn-primary btn-arrow-left"
              onClick={handleClick}
            >
              <ArrowCircleLeftIcon fontSize="large" />
            </button>
            <div className="first__varse">
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>
            <div className="varse__2">
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
              </div>
              <div className="detailsBlock">
                <p className="stock__meta" style={{ paddingBottom: ".5vmax" }}>
                  <b>{`$${product.price}`}</b>
                </p>

                <p className="stock__meta" style={{ paddingBottom: ".5vmax" }}>
                  <b>Size: {product.size}</b>
                </p>
                <p className="stock__meta" style={{ paddingBottom: ".5vmax" }}>
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
                <div className="Description">
                  <b>Description:</b>
                  <p>{product.description}</p>
                </div>

                <div
                  className="pointer flex"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "50%",
                    marginTop: "30px",
                    marginLeft: "20%",
                    padding: "10px 5px",
                    alignItems: "center",
                    backgroundColor: "#0000ff",
                    color: "white",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-bag"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                  <button
                    className="cartBtn"
                    style={{
                      opacity: 0.7,
                      padding: "0px 5px",
                      border: "none",
                      cursor: "pointer",
                      background: "none",
                      color: "white",
                    }}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      )}
    </>
  );
};

export default ProductDetails;
