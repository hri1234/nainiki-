import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import pic1 from "../../images/slide16.webp"
import pic2 from "../../images/slide15.webp"
import pic3 from "../../images/slide12.jpg"
import pic4 from "../../images/card1.png"
import pic5 from "../../images/card2.png"
import pic6 from "../../images/card3.jpg"
import pic7 from "../../images/belt.webp"
import pic8 from "../../images/belt1.webp"
import pic9 from "../../images/item2.png"
import pic10 from "../../images/item3.jpg"
import pic11 from "../../images/item7.webp"


const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
      <Fragment>
        <MetaData title="ECOMMERCE" />
        <div className="banner">
          <p>Welcome to Smashdeals </p>
          <h1>FIND AMAZING PRODUCTS BELOW</h1>


          <a href="#container">
            <button>
              Scroll <CgMouse />
            </button>
          </a>
        </div>


        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ "height": "360px" }}>
              <img className="d-block w-100 h-100" src={pic1} alt="First slide" />
            </div>
            <div className="carousel-item" style={{ "height": "360px" }}>
              <img className="d-block w-100 h-100" src={pic2} alt="Second slide" />
            </div>
            <div className="carousel-item" style={{ "height": "360px" }}>
              <img className="d-block w-100 h-100" src={pic3} alt="Second slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="container-fluid p-4">
          <div class="row g-4">
            <div class="col-md-6 col-lg-3 wow fadeInUp mt-3" data-wow-delay="0.3s">
              <div class="card price">
                <img src={pic4} className="img-fluid" alt="..." style={{ height: "220px" }} />
                <div class="card-body">
                  <h5 class="card-title">Product Name</h5>
                  <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus possimus nesciunt </p>
                  <button className=" btn btn-info">Read More</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 wow fadeInUp mt-3 " data-wow-delay="0.3s">
              <div class="card price">
                <img src={pic5} class="card-img-top" alt="..." style={{ height: "220px" }} />
                <div class="card-body">
                  <h5 class="card-title">Product Name</h5>
                  <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus possimus nesciunt  </p>
                  <button className=" btn btn-info">Read More</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 wow fadeInUp mt-3" data-wow-delay="0.3s">
              <div class="card price">
                <img src={pic6} class="card-img-top" alt="..." style={{ height: "220px" }} />
                <div class="card-body">
                  <h5 class="card-title">Product Name</h5>
                  <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus possimus nesciunt , </p>
                  <button className=" btn btn-info">Read More</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 wow fadeInUp mt-3 " data-wow-delay="0.3s">
              <div class="card price">
                <img src={pic7} class="card-img-top" alt="..." style={{ height: "220px" }} />
                <div class="card-body">
                  <h5 class="card-title">Product Name</h5>
                  <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus possimus nesciunt </p>
                  <button className=" btn btn-info">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-4">
          <div class="row g-4">
            <div class="col-md-6 col-lg-3 wow fadeInUp mt-3 " data-wow-delay="0.3s">
              <div class="card price">
                <img src={pic8} class="card-img-top" alt="..." style={{ height: "220px" }} />
                <div class="card-body">
                  <h5 class="card-title">Product Name</h5>
                  <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus possimus nesciunt , </p>
                  <button className=" btn btn-info">Read More</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 wow fadeInUp mt-3 " data-wow-delay="0.3s">
              <div class="card price">
                <img src={pic9} class="card-img-top" alt="..." style={{ height: "220px" }} />
                <div class="card-body">
                  <h5 class="card-title">Product Name</h5>
                  <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus possimus nesciunt  </p>
                  <button className=" btn btn-info">Read More</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 wow fadeInUp mt-3 " data-wow-delay="0.3s">
              <div class="card price">
                <img src={pic10} class="card-img-top" alt="..." style={{ height: "220px" }} />
                <div class="card-body">
                  <h5 class="card-title">Product Name</h5>
                  <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus possimus nesciunt </p>
                  <button className=" btn btn-info">Read More</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 wow fadeInUp mt-3 " data-wow-delay="0.3s">
              <div class="card price">
                <img src={pic11} class="card-img-top" alt="..." style={{ height: "220px" }} />
                <div class="card-body">
                  <h5 class="card-title">Product Name</h5>
                  <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus possimus nesciunt </p>
                  <button className=" btn btn-info">Read More</button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <h2 className="homeHeading">Featured Products</h2>

        <div className="container" id="container">
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>

        <div className="container-fluid" id="mycart">
          <img className="my" src={pic4} alt="the back of random person" />
          <img className="my" src={pic5} alt="an eagle" />
          <img className="my" src={pic6} alt="a cup of something to drink, probably some tea" />
          <img className="my" src={pic9} alt="the back of random person" />
          <img className="my" src={pic10} alt="an eagle" />
          <img className="my" src={pic11} alt="an eagle" />
        </div>
      </Fragment>
      )
      }
    </Fragment >
  );
};

export default Home;
