import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import BlogPage from "./pages/blogpage";
import BlogPost from "./pages/blogpost";
import ShopPage from "./pages/shoppage";
import ShopDetail from "./pages/shopdetail";
import AboutPage from "./pages/aboutpage";
import ContactPage from "./pages/contactpage";
import LoginPage from "./pages/loginpage";
import SignupPage from "./pages/signuppage";
import AccountPage from "./pages/accountpage";
import useFetch from "./hooks/useFetch";
import NotFound from "./components/notfound";
import Loader from "./components/loader";

const App = () => {
  const {
    loading: blogLoading,
    data: blogData,
    error: blogError,
  } = useFetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/blogs?populate=*`);
  const {
    loading: shopLoading,
    data: shopData,
    error: shopError,
  } = useFetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/shops?populate=*`);

  if (blogLoading || shopLoading) return <Loader />;
  if (blogError || shopError) return <NotFound />;

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/blog"
        element={<BlogPage blogs={blogData ? blogData : []} />}
      />
      <Route
        path="/blog/:id"
        element={<BlogPost blogs={blogData ? blogData : []} />}
      />
      <Route
        path="/shop"
        element={<ShopPage shops={shopData ? shopData : []} />}
      />
      <Route
        path="/shop/:id"
        element={<ShopDetail shops={shopData ? shopData : []} />}
      />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/account" element={<AccountPage />} />
    </Routes>
  );
};

export default App;
