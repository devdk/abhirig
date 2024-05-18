import React, { useState, useRef } from "react";
import Navbar from "../components/navbar";
import Slider from "../components/slider";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { RiStarFill } from "@remixicon/react";


const ShopDetail = ({ shops }) => {
  const { id } = useParams();
  const shop = shops.data.find((shop) => shop.id.toString() === id);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(
    `https://source.unsplash.com/random/1000x1000?sig=1`
  );

  const [activeTab, setActiveTab] = useState("description");

  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const mainImageRef = useRef(null);

  if (!shop) {
    return <p>Shop post not found for ID: {id}</p>;
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    const totalPrice = shop.attributes.productPrice * quantity;
    alert(`Total price: ₹${totalPrice}`);
  };

  const handleImageClick = (index) => {
    setMainImage(`https://source.unsplash.com/random/1000x1000?sig=${index}`);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = mainImageRef.current.getBoundingClientRect();
    const containerLeft = left + window.pageXOffset;
    const containerTop = top + window.pageYOffset;
    const mouseX = e.pageX - containerLeft;
    const mouseY = e.pageY - containerTop;
    const x = mouseX / width;
    const y = mouseY / height;
    setZoomPosition({ x, y });
  };
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <>
      <Navbar />
      <div className="detailCover flex flex-col justify-center items-center md:h-[275px] h-40 w-full bg-cover">
        <h1 className="md:text-6xl text-3xl m-2 uppercase font-semibold text-gold-100">
          Shop <span className="text-gray-700">Detail</span>
        </h1>
        <h1 className="md:text-3xl text-xl uppercase font-light text-gray-700">
          <Link to="/">Home</Link> | <Link to="/shop">Shop</Link>
        </h1>
      </div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-6 md:py-20 mx-auto">
          <div className="md:w-4/5 mx-auto flex flex-wrap">
            <div className="w-full flex-col md:w-1/3 flex justify-center items-center p-4 relative cursor-move">
              <div
                className="zoom"
                onMouseMove={handleMouseMove}
                ref={mainImageRef}
              >
                <img
                  alt="productImg"
                  className="w-full h-auto object-cover object-center rounded"
                  src={mainImage}
                />
                <div
                  className="zoomed-area"
                  style={{
                    backgroundImage: `url(${mainImage})`,
                    backgroundSize: "200%",
                    backgroundPosition: `${zoomPosition.x * 100}% ${zoomPosition.y * 100}%`,
                  }}
                ></div>
              </div>
              <div className="flex justify-around mt-4 p-2">
                {[1, 2, 3].map((index) => (
                  <img
                    key={index}
                    alt={`p${index}`}
                    className="w-1/5 h-auto object-cover object-center rounded cursor-pointer"
                    src={`https://source.unsplash.com/random/1000x1000?sig=${index}`}
                    onClick={() => handleImageClick(index)}
                  />
                ))}
              </div>
            </div>
            <div className="md:w-2/3 w-full flex flex-col justify-center md:pl-10">
              <h1 className="text-gray-900 text-2xl md:text-4xl tracking-tighter uppercase title-font font-medium mb-1">
                {shop.attributes.productName}
              </h1>
              <h2 className="md:text-lg text-sm font-semibold text-gray-500 tracking-widest capitalize">
                {shop.attributes.productCategory}
              </h2>
              <div className="flex flex-col gap-4 mb-4">
                <div className="mt-2 gap-1 rating flex" title="Product Rating">
                  {Array.from({
                    length: shop.attributes.productRating,
                  }).map((_, index) => (
                    <RiStarFill
                      key={index}
                      size={20}
                      color="orange"
                      className="my-icon hover:cursor-pointer hover:scale-110 transition duration-100 ease-in-out"
                    />
                  ))}
                </div>
                <span className="title-font font-medium md:text-4xl text-2xl text-gray-900">
                  ₹{shop.attributes.productPrice}
                </span>
              </div>
              <p className="leading-relaxed text-justify">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-4 justify-between items-baseline gap-4">
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 text-gray-800 rounded-l px-4 py-2"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <span className="title-font font-medium text-xl text-gray-900 px-4">
                    {quantity}
                  </span>
                  <button
                    className="bg-gray-200 text-gray-800 rounded-r px-4 py-2"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
                <button className="CartBtn mt-2" onClick={addToCart}>
                  <span className="IconContainer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                      fill="rgb(255, 255, 255)"
                      className="cart"
                      color="white"
                    >
                      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c-2.2 11.3-12.1 19.5-23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                    </svg>
                  </span>
                  <p className="cartText">Add to Cart</p>
                </button>
              </div>
            </div>
            <div className="tabMenu mt-8">
              <div className="flex border-b  border-gray-200">
                <button
                  onClick={() => handleTabClick("description")}
                  className={`${
                    activeTab === "description"
                      ? "text-gray-900 border-gray-900"
                      : "text-gray-500"
                  } py-4 px-6 md:text-lg text-sm font-semibold block hover:text-gray-900 focus:outline-none`}
                >
                  Product Description
                </button>
                <button
                  onClick={() => handleTabClick("additional_info")}
                  className={`${
                    activeTab === "additional_info"
                      ? "text-gray-900 border-gray-900"
                      : "text-gray-500"
                  } py-4 px-6 md:text-lg text-sm font-semibold block hover:text-gray-900 focus:outline-none`}
                >
                  Additional Info
                </button>
                <button
                  onClick={() => handleTabClick("reviews")}
                  className={`${
                    activeTab === "reviews"
                      ? "text-gray-900 border-gray-900"
                      : "text-gray-500"
                  } py-4 px-6 md:text-lg text-sm font-semibold   block hover:text-gray-900 focus:outline-none`}
                >
                  Reviews
                </button>
              </div>
              <div className="mt-8 px-6">
                {activeTab === "description" && (
                  <div>
                    <h2 className="md:text-lg text-sm font-semibold">
                      THE TRUE STRENGTH OF ABHIRIG :
                    </h2>
                    <p className="leading-relaxed text-justify">
                      Whey Protein Isolates (WPIs) are the purest form of whey
                      protein that currently exists. WPIs are costly to use, but
                      rate among the best proteins that money can buy. That’s
                      why they’re the first ingredient you read on the Gold
                      Standard 100% Whey™ label. By using WPI as the primary
                      ingredient along with premium ultra-filtered whey protein
                      concentrate (WPC), we’re able to pack 24 grams of protein
                      into every serving to support your muscle building needs
                      after training. ON’attention to detail also extends to
                      mixability. This superior quality powder has been
                      instantized to mix easliy using a shaker cup or just a
                      glass and spoon. There’s no doubt that this is the
                      standard by which all other whey proteins are measured.{" "}
                      <br />
                      <br /> SUXNIX THE BASICS : 82% Protein by Weight (24g of
                      Protein Per 31.5g Serving Size). Whey Protein Isolates
                      (WPI) Main Ingredient. Whey Protein Micro-functions from
                      Whey Protein Isolate and Ultra-Filtered Whey Protein
                      Concentrate. Over 4g of Naturally Occurring Glutamine &
                      Glutamic Acid in Each Serving. More than 5g of the
                      Naturally Occurring Branched Chain Amino Acids (BCAAs)
                      Leucine, Isoleucine, and Valine in Each Serving. The “Gold
                      Standard” for Protein Quality. Banned Substance Tested
                      Protein French Vanilla Creme Flavored Whey Protein Powder
                    </p>
                  </div>
                )}
                {activeTab === "additional_info" && (
                  <div>
                    <h2 className="md:text-lg text-sm font-semibold">
                      Additional Info
                    </h2>
                    <p className="leading-relaxed text-justify"></p>
                  </div>
                )}
                {activeTab === "reviews" && (
                  <div>
                    <h2 className="md:text-lg text-sm font-semibold">
                      Reviews
                    </h2>
                    <p className="leading-relaxed text-justify"></p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Slider />
      <Footer/>
    </>
  );
};

export default ShopDetail;