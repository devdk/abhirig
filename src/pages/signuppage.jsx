import React, { useState, useEffect } from 'react';
import { Col, Input, Row, Button, FormGroup } from 'reactstrap';
import axios from 'axios';
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import gsap from "gsap";

const initialUser = { email: '', username: '', password: '' };

const SignupPage = () => {
    const [user, setUser] = useState(initialUser);
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        gsap.from(".signup", { opacity: 0, y: 100, duration: 2, ease: "power3.out" });
    }, []);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value
        }));
    };

    const validateForm = () => {
        const errors = {};
        if (!user.username.trim()) {
            errors.username = "Full Name is required";
        }
        if (!user.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = "Invalid email address";
        }
        if (!user.password.trim()) {
            errors.password = "Password is required";
        } else if (user.password.length < 6) {
            errors.password = "Password must be at least 6 characters long";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const signUp = async () => {
        try {
            if (validateForm()) {
                const url = `${import.meta.env.VITE_BACKEND_BASE_URL}/api/auth/local/register`;
                const res = await axios.post(url, user);
                if (res.status === 200) {
                    setUser(initialUser);
                    navigate("/login");
                    toast.success("Created Successfully", {
                        hideProgressBar: true,
                    });
                }
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
                        Sign Up
                    </h2>
                    <Row className="signup">
                        <Col>
                            <div>
                                <FormGroup>
                                    <label
                                        htmlFor="username"
                                        className="block text-gray-700 text-sm md:text-base font-bold mb-2"
                                    >
                                        Full Name
                                    </label>
                                    <Input
                                        type="text"
                                        name="username"
                                        value={user.username}
                                        placeholder="Enter your Full Name"
                                        onChange={handleChange}
                                        className={`shadow appearance-none border  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-green-200 focus:shadow-outline ${
                                            formErrors.username && "border-red-500"
                                        }`}
                                    />
                                    {formErrors.username && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {formErrors.username}
                                        </p>
                                    )}
                                </FormGroup>
                                <FormGroup>
                                    <label
                                        htmlFor="email"
                                        className="block text-gray-700 text-sm md:text-base font-bold mb-2"
                                    >
                                        Email
                                    </label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={user.email}
                                        placeholder="Enter your Email"
                                        onChange={handleChange}
                                        className={`shadow appearance-none border  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-green-200 focus:shadow-outline ${
                                            formErrors.email && "border-red-500"
                                        }`}
                                    />
                                    {formErrors.email && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {formErrors.email}
                                        </p>
                                    )}
                                </FormGroup>
                                <FormGroup>
                                    <label
                                        htmlFor="password"
                                        className="block text-gray-700 text-sm md:text-base font-bold mb-2"
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
                                <Button onClick={signUp} className="bg-green-600 mt-4 hover:bg-green-700 transition-all duration-300 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline w-full">Sign Up</Button>
                                <h6 className="mt-4 text-center">
                                    Already have an account?
                                    <Link
                                        to="/login"
                                        className="ml-2 text-darkGreen hover:underline focus:outline-none"
                                    >
                                        Login
                                    </Link>
                                </h6>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SignupPage;
