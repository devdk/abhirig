import React, { useState } from "react";
import Navbar from "../components/navbar";
import Element from "../components/element";
import Footer from "../components/footer";
import {
  RiCustomerServiceLine,
  RiMapPinLine,
  RiGlobalLine,
} from "react-icons/ri";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <Navbar />
      <div className="coverImg flex flex-col justify-center items-center h-40 md:h-[275px] w-full bg-cover">
        <h1 className="md:text-6xl text-2xl m-4 uppercase font-semibold text-white">
          Connect <span className="text-gray-700">With Us</span>
        </h1>
        <h1 className="md:text-3xl  text-xl uppercase font-light text-gray-700">
          Just few inputs away
        </h1>
      </div>

      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            <div className="w-full flex-col flex items-center justify-center bg-white mx-auto md:p-12 shadow-md">
              <RiMapPinLine color="green" className="w-24 h-24" />
              <h3 className="text-2xl mt-4 uppercase font-semibold tracking-tighter">
                Office Address
              </h3>
              <p className="mt-2 w-2/3 text-center text-gray-600">
                Pashupati Vihar, Opp. MJPRU Bly, India 243001
              </p>
            </div>

            <div className="w-full flex-col flex items-center justify-center bg-white mx-auto md:p-12 shadow-md">
              <RiCustomerServiceLine color="green" className="w-24 h-24" />
              <h3 className="text-2xl mt-4 uppercase font-semibold tracking-tighter">
                Phone Number
              </h3>
              <p className="mt-2 w-2/3 text-center text-gray-600">
                +91 91057 11530
              </p>
              <p className="text-center text-gray-600"></p>
            </div>

            <div className="w-full flex-col flex items-center justify-center bg-white mx-auto md:p-12 shadow-md">
              <RiGlobalLine color="green" className="w-24 h-24" />
              <h3 className="text-2xl mt-4 uppercase font-semibold tracking-tighter">
                Web Connect
              </h3>
              <p className="mt-2 w-2/3 text-center text-gray-600">
                support@abhirigayuveda.com
              </p>
              <p className="text-center text-gray-600">abhirig.com</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col lg:flex-row">
            <div className="relative lg:w-2/3 shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7431122034714!2d-73.98011378459335!3d40.6846297793347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae14e31f7b%3A0x65e1a2d8ff0d2479!2s620%20Atlantic%20Ave%2C%20Brooklyn%2C%20NY%2011217%2C%20USA!5e0!3m2!1sen!2s!4v1629988294780!5m2!1sen!2s"
                width="100%"
                height="100%"
                className="absolute inset-0 border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-3/4 bg-white p-6">
              <h3 className="md:text-5xl text-lg p-4  uppercase font-semibold tracking-tighter mb-4">
                Have questions or inquiries? Reach out to us! Our team at AbhiRig Ayurveda is here to assist you on your wellness journey. 
                 Connect with us today!

              </h3>
              <form onSubmit={handleSubmit} className="">
                <div className="mb-4 p-2 flex gap-4">
                  {" "}
                  <div className="w-1/2">
                    {" "}
                    <label
                      htmlFor="name"
                      className="block text-md font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter Here"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 py-3 p-2 w-full border focus:outline-none focus:ring-2 focus:ring-green-500 border-gray-300"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    {" "}
                    {/* Assign half width for each input */}
                    <label
                      htmlFor="email"
                      className="block text-md font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Here"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 py-3 p-2 w-full border focus:outline-none focus:ring-2 focus:ring-green-500 border-gray-300"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 px-2">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 p-2 py-3 w-full border focus:outline-none focus:ring-2 focus:ring-green-500 border-gray-300"
                    required
                  >
                    <option value="">Select Subject</option>
                    <option value="feedback">Feedback</option>
                    <option value="support">Support</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div className="mb-4  p-2">
                  <label
                    htmlFor="message"
                    className="block text-md font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="mt-2  p-2 w-full border  focus:outline-none focus:ring-2 focus:ring-green-500 border-gray-300"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-green-500 rounded-full text-white px-8 p-4 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Make Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Element/>
      <Footer />
    </>
  );
};

export default ContactPage;
