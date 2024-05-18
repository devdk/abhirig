import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { RiMailSendLine, RiCustomerServiceLine } from "react-icons/ri";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <>
      <Navbar />
      <div className="coverImg flex flex-col justify-center items-center h-40 md:h-[275px] w-full bg-cover">
        <h1 className="md:text-6xl text-2xl m-4 uppercase font-semibold text-white">Connect <span className="text-gray-700">With Us</span></h1>
        <h1 className="md:text-3xl  text-xl uppercase font-light text-gray-700">Just few inputs away</h1>
      </div>
      <section className="flex flex-col-reverse md:flex-row justify-center items-center gap-4 md:gap-0 p-4 md:p-8 h-auto md:h-screen">
        <div className="leftBar md:w-1/3 p-6 bg-gray-100 md:h-full h-auto shadow-lg">
          <h1 className="text-xl md:text-3xl p-2 md:p-4 font-bold text-black">
            Reach us <span className="text-darkGreen">through</span>
          </h1>
          <h4 className="pl-2 md:pl-4 text-sm md:text-base">
            We're eager to receive your feedback. Our approachable team is available to chat anytime.
          </h4>
          <div className="pl-2 md:pl-4 flex gap-2 md:gap-4 items-center mt-4 md:mt-6">
            <RiMailSendLine size={24} md:size={28} color="green" />
            <h2 className="text-base md:text-2xl font-semibold">Via Email</h2>
            <h2 className="text-base md:text-xl font-light">support@abhirig.co.in</h2>
          </div>
          <div className="pl-2 md:pl-4 flex gap-2 md:gap-4 items-center mt-2 md:mt-6">
            <RiCustomerServiceLine size={24} md:size={28} color="green" />
            <h2 className="text-base md:text-2xl font-semibold">Via Phone</h2>
            <h2 className="text-base md:text-xl font-light">+919998881234</h2>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828087052!2d54.89783255663514!3d25.07628045139577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1714739075247!5m2!1sen!2sin"
            width="100%"
            height="70%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-4"
          ></iframe>
        </div>
        <div className="rightBar md:w-1/3 md:h-full p-6 shadow-lg">
          <h1 className="text-xl md:text-4xl p-2 md:p-4 font-bold text-darkGreen">
            Get In Touch
          </h1>
          <h1 className="text-base md:text-3xl pl-2 md:pl-4 font-bold text-black">
            Connect with a single click
          </h1>
          {/* Form */}
          <form className="mt-4 md:mt-8" onSubmit={handleSubmit}>
            <div className="mb-2 md:mb-4">
              <label
                htmlFor="name"
                className="block text-sm md:text-base font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 p-2 w-full border rounded-md focus:outline-none ${
                  formData.name ? "border-green-500" : "border-gray-400"
                }`}
                required
              />
            </div>
            <div className="mb-2 md:mb-4">
              <label
                htmlFor="email"
                className="block text-sm md:text-base font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 p-2 w-full border rounded-md focus:outline-none ${
                  formData.email ? "border-green-500" : "border-gray-400"
                }`}
                required
              />
            </div>
            <div className="mb-2 md:mb-4">
              <label
                htmlFor="phone"
                className="block text-sm md:text-base font-semibold text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 p-2 w-full border rounded-md focus:outline-none ${
                  formData.phone ? "border-green-500" : "border-gray-400"
                }`}
                required
              />
            </div>
            <div className="mb-2 md:mb-4">
              <label
                htmlFor="message"
                className="block text-sm md:text-base font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="10"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none border-gray-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-darkGreen text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none"
            >
              Submit
            </button>
          </form>
          {/* End of Form */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
