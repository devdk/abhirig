import React from "react"
import Navbar from "../components/navbar";
import Abtftr from "../components/aboutfeature";
import Abouthero from "../components/abouthero";
import Footer from "../components/footer";

const AboutPage = ()=>{
  return(
    <>
    <Navbar/>
    <Abouthero/>
    <Abtftr/>
    <section className="text-gray-600 body-font">
  <div className="container px-5 md:py-16 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Meet Our Team</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Get to know the talented individuals behind our company.</p>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <img className="w-20 h-20 mb-4 object-cover object-center rounded-full mx-auto" src="https://via.placeholder.com/150" alt="team member"/>
          <h2 className="title-font font-medium md:text-3xl text-lg text-gray-900">John Doe</h2>
          <p className="leading-relaxed">Founder & CEO</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <img className="w-20 h-20 mb-4 object-cover object-center rounded-full mx-auto" src="https://via.placeholder.com/150" alt="team member"/>
          <h2 className="title-font font-medium md:text-3xl text-lg text-gray-900">Jane Smith</h2>
          <p className="leading-relaxed">Creative Director</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <img className="w-20 h-20 mb-4 object-cover object-center rounded-full mx-auto" src="https://via.placeholder.com/150" alt="team member"/>
          <h2 className="title-font font-medium md:text-3xl text-lg text-gray-900">Alex Johnson</h2>
          <p className="leading-relaxed">Lead Developer</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <img className="w-20 h-20 mb-4 object-cover object-center rounded-full mx-auto" src="https://via.placeholder.com/150" alt="team member"/>
          <h2 className="title-font font-medium md:text-3xl text-lg text-gray-900">Emily Brown</h2>
          <p className="leading-relaxed">Marketing Manager</p>
        </div>
      </div>
    </div>
  </div>
</section>

    <Footer/>

    </>
  )
}

export default AboutPage;