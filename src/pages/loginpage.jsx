import React, { useState, useEffect } from "react";
import { Input, Row, Button, FormGroup } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useUserData } from "../hooks/helpers";
import gsap from "gsap";

const initialUser = { password: "", identifier: "" };

const LoginPage = () => {
  const [user, setUser] = useState(initialUser);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const { updateUserAndStore } = useUserData();

  useEffect(() => {
    // GSAP animations when the component mounts
    gsap.from(".login", {
      opacity: 0,
      y: 100,
      duration: 2,
      ease: "power3.out",
    });
  }, []);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!user.identifier.trim()) {
      errors.identifier = "Email is required";
    }
    if (!user.password.trim()) {
      errors.password = "Password is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLogin = async () => {
    try {
      if (validateForm()) {
        const url = `${import.meta.env.VITE_BACKEND_BASE_URL}/api/auth/local`;
        const res = await axios.post(url, user);
        console.log(res);
        const userData = res.data.user;
        const jwt = res.data.jwt;
        updateUserAndStore({ user: userData, jwt });
        // Notify user and redirect
        toast.success("Logged In, Welcome!", {
          hideProgressBar: true,
        });
        setUser(initialUser);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center py-16">
        <div className="md:w-1/3 px-8 pt-6 pb-8 mb-4">
          <h2 className="md:text-4xl text-2xl uppercase font-light mb-6 md:text-center">
            Login
          </h2>
          <Row className="login">
            <div>
              <FormGroup>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm md:text-base font-bold mb-2"
                >
                  Email
                </label>
                <Input
                  type="email"
                  name="identifier"
                  value={user.identifier}
                  placeholder="Enter your Email"
                  onChange={handleChange}
                  className={`shadow appearance-none border  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-green-200 focus:shadow-outline ${
                    formErrors.identifier && "border-red-500"
                  }`}
                />
                {formErrors.identifier && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.identifier}
                  </p>
                )}
              </FormGroup>
              <FormGroup>
                <label
                  htmlFor="password"
                  className="block text-gray-700  text-sm md:text-base font-bold mb-2"
                >
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  value={user.password}
                  placeholder="Enter your Password"
                  onChange={handleChange}
                  className={`shadow appearance-none border  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-green-200 focus:shadow-outline ${
                    formErrors.password && "border-red-500"
                  }`}
                />
                {formErrors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.password}
                  </p>
                )}
              </FormGroup>
              <Button
                onClick={handleLogin}
                className="mt-4 bg-green-600  hover:bg-green-700 transition-all duration-300 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline w-full"
              >
                Login
              </Button>
              <h6 className="mt-4 text-center">
                Don't have an account?
                <Link
                  to="/signup"
                  className="ml-2 text-darkGreen hover:underline focus:outline-none"
                >
                  Create a new
                </Link>
              </h6>
            </div>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
