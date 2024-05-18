import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useUserData } from "../hooks/helpers";

function AccountPage() {
  const { user } = useUserData();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTab, setSelectedTab] = useState("Personal Information");
  const [editMode, setEditMode] = useState(false); 
  const [faqSections] = useState([
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes 3-5 business days depending on your location.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers.",
    },
    {
      question: "Can I return products?",
      answer:
        "Yes, we have a 30-day return policy. Please refer to our Returns & Refunds policy for more details.",
    },
    {
      question: "Do you provide tracking information for orders?",
      answer:
        "Yes, tracking information is provided once your order has been shipped.",
    },
    {
      question: "Are your products organic?",
      answer:
        "Yes, our products are sourced from organic and natural ingredients.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our customer support team through email or phone. Visit our Contact Us page for more information.",
    },
  ]);

  useEffect(() => {
    if (user) {
      setUsername(user.username || "");
      setEmail(user.email || "");
    }
  }, [user]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update user data goes here
    // Example: call an API to update user data
    setEditMode(false); // Exit edit mode after submission
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto bg-gray-100 p-8">
        <div className="flex gap-4 flex-col md:flex-row justify-between">
          <div className="md:w-1/4">
            <div className="bg-white border md:h-screen">
              <div className="profile flex flex-col p-4 justify-center gap-4 items-center">
                <div className="h-20 w-20 bg-gray-300 border-2 border-darkGreen rounded-full">
                  <img
                    src="https://source.unsplash.com/random/200x200/?technology"
                    alt="Random Portrait"
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <h2 className="text-2xl font-semibold capitalize text-gray-600">
                 {username}
                </h2>
              </div>
              <ul className="tracking-wide">
                <li
                  className={`cursor-pointer p-4 ${
                    selectedTab === "Personal Information"
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : " text-gray-600 hover:bg-blue-100 hover:text-blue-500"
                  }`}
                  onClick={() => handleTabChange("Personal Information")}
                >
                  Profile Information
                </li>
                <li
                  className={`cursor-pointer p-4 ${
                    selectedTab === "My Orders"
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : " text-gray-600 hover:bg-blue-100 hover:text-blue-500"
                  }`}
                  onClick={() => handleTabChange("My Orders")}
                >
                  My Orders
                </li>
                <li
                  className={`cursor-pointer p-4 ${
                    selectedTab === "Saved Addresses"
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : " text-gray-600 hover:bg-blue-100 hover:text-blue-500"
                  }`}
                  onClick={() => handleTabChange("Saved Addresses")}
                >
                  Saved Addresses
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="bg-white border md:h-screen p-8">
              {user ? (
                <>
                  <div className="flex gap-6 items-center mb-6">
                    <h1 className="text-2xl font-normal text-gray-800">
                      {selectedTab}
                    </h1>
                    {selectedTab === "Personal Information" && (
                      <button
                        onClick={handleEditToggle}
                        className="text-blue-600 font-semibold focus:outline-none"
                      >
                        {editMode ? "Cancel" : "Edit"}
                      </button>
                    )}
                  </div>
                  {selectedTab === "Personal Information" && (
                    <div>
                      {editMode ? (
                        <form onSubmit={handleSubmit}>
                          <div className="grid md:grid-cols-2 grid-col-1 gap-6">
                            <div>
                              <label
                                htmlFor="username"
                                className="text-lg font-semibold text-gray-800 "
                              >
                                Full Name
                              </label>
                              <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 mt-2 w-full  focus:outline-none focus:border-blue-500"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="email"
                                className="text-lg font-semibold text-gray-800"
                              >
                                Email ID
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 mt-2 w-full  focus:outline-none focus:border-blue-500"
                              />
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="bg-blue-500 text-white font-semibold px-3 py-2 mt-4 border-2 w-24 transition-all duration-150 hover:bg-blue-400 hover:text-white"
                          >
                            Save
                          </button>
                        </form>
                      ) : (
                        <div>
                          <div className="grid md:grid-cols-2 grid-col-1 gap-6">
                            <div>
                              <p className="text-lg font-semibold text-gray-800">
                                Full Name
                              </p>
                              <p className="text-gray-400 mt-2 border-2 py-3 px-3">
                                {username}
                              </p>
                            </div>
                            <div>
                              <p className="text-lg font-semibold text-gray-800">
                                Email ID
                              </p>
                              <p className="text-gray-400 mt-2 border-2 py-3 px-3">
                                {email}
                              </p>
                            </div>
                            <div>
                              <p className="text-lg font-semibold text-gray-800">
                                Mobile Number
                              </p>
                              <p className="text-gray-400 mt-2 border-2 py-3 px-3">
                                +919045225228
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="mt-6">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">
                          FAQs
                        </h2>
                        {faqSections.map((section, index) => (
                          <div key={index} className="mb-4">
                            <h3 className="text-md m-4 font-semibold text-gray-800">
                              {section.question}
                            </h3>
                            <p className="text-gray-600 m-4 ">
                              {section.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {selectedTab === "My Orders" && (
                    <section className="bg-white shadow-md rounded-md p-4">
                      <h2 className="text-xl font-semibold mb-4 text-gray-800">
                        Order History
                      </h2>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Order ID
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Items
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Amount
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {/* Example Order Data */}
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                123456
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                2024-05-12
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {/* Example order details */}
                                <ul className="list-disc list-inside">
                                  <li>DAB AYUR WHEY x 4</li>
                                  {/* Add more items if needed */}
                                </ul>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                2345/-
                              </td>
                            </tr>
                            {/* You can map over actual order data here */}
                          </tbody>
                        </table>
                      </div>
                    </section>
                  )}

                  {selectedTab === "Saved Addresses" && (
                    <div>
                      <h2 className="text-xl font-semibold mb-4 text-gray-800">
                        Addresses
                      </h2>
                      <p className="text-gray-600">
                        Manage your addresses and shipping information.
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-xl uppercase text-gray-800">
                    Please{" "}
                    <span className="text-blue-500 font-semibold">
                      {" "}
                      <a href="/login">log in </a>
                    </span>
                    first to view your account information.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AccountPage;
