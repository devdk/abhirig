import React, { useState, useEffect } from "react";
import Loader from "./loader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/shops?populate=*"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const responseData = await response.json();
        console.log(responseData);
        if (Array.isArray(responseData.data)) {
          const formattedProducts = responseData.data.map((item) => ({
            id: item.id,
            name: item.attributes.productName,
            imageUrl: item.attributes.productImage.data.attributes.url,
            price: item.attributes.productPrice,
            rating: item.attributes.productRating,
          }));
          setProducts(formattedProducts);
        } else {
          console.error(
            "API response data is not an array:",
            responseData.data
          );
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <>
      <div className="container flex flex-col mx-auto py-24">
        <h1 className="mb-10 uppercase text-2xl font-extrabold leading-none text-center tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
          Discover our
          <span className="text-gold-100"> all range.. </span>
        </h1>
        {products.length > 0 ? (
          <Slider {...sliderSettings}>
            {products.map((product, index) => (
              <div key={product.id} className="cardSlider mt-4">
                <div className="product-card flex flex-col gap-4 justify-center text-center items-center mx-auto p-4 bg-white">
                  <div
                    className={`w-40 h-36 rounded-full flex justify-center items-center ${
                      index % 2 === 0 ? "bg-yellow-400" : "bg-indigo-400"
                    } shadow-xl border-4 border-white relative`}
                  >
                    <div className="absolute top-0 left-0 rotate-90 right-0 bottom-0 rounded-full bg-gradient-to-r from-white to-transparent"></div>

                    <img
                      className="hover:scale-[1.025] w-28 h-auto transition-all object-contain object-center duration-300 z-10"
                      src={`http://localhost:1337${product.imageUrl}`}
                      alt={product.name}
                    />
                  </div>

                  <div className="mt-2 pb-4">
                    <a
                      href={`/shop/${product.id}`}
                      className="text-lg uppercase text-center font-semibold tracking-tight text-gray-700 hover:text-gold-100 transition-colors duration-300 cursor-pointer"
                    >
                      {product.name}
                    </a>
                    <div className="flex items-center flex-col gap-2 mt-4 justify-around">
                      <span className="text-2xl font-bold text-gray-700">
                        ₹ {product.price}
                      </span>
                      <button className="CartBtn">
                        <span className="IconContainer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512"
                            fill="rgb(255, 255, 255)"
                            className="cart"
                            color="white"
                          >
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                          </svg>
                        </span>
                        <p className="cartText">Add to Cart</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default ProductSlider;
