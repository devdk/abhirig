import React from "react";

export default function Abtftr() {
  return (
    <section className="w-full py-12 md:py-20 ">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="md:text-3xl font-bold tracking-tighter text-2xl mb-4 xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-darkGreen to-lightGreen">
                Discover Our Unique Features
              </h1>
              <p className="max-w-96 text-gray-900 md:text-xl mx-auto">
                Our offerings are designed to enhance your health and well-being naturally through the power of ayurveda.
              </p>
            </div>
            <div className="w-full max-w-full space-y-4 mx-auto">
              <div className="grid md:grid-cols-3 grid-rows-3 gap-8">
                <div className="flex flex-col space-y-2 border-2 border-gray-400 p-4 rounded-lg">
                  <h2 className=" text-lg md:text-xl font-bold text-black">
                    Premium Quality
                  </h2>
                  <p className="text-gray-900">
                    Experience the finest ayurvedic products made from the highest quality natural ingredient,
                    ensuring purity and effectiveness.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 border-2 border-gray-400 p-4 rounded-lg">
                  <h2 className=" text-lg md:text-xl font-bold text-black">
                    Holistic Healing
                  </h2>
                  <p className="text-gray-900">
                    Our remedies are crafted to promote holistic healing,
                    addressing the root cause of ailments and fostering overall wellness.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 border-2 border-gray-400 p-4 rounded-lg">
                  <h2 className=" text-lg md:text-xl font-bold text-black">
                  Personalized Solution
                  </h2>
                  <p className="text-gray-900">
                    With personalized ayurvedic solution, you can tailor your wellness journey to suit your individual health needs and lifestyle.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 border-2 border-gray-400 p-4 rounded-lg">
                  <h2 className=" text-lg md:text-xl font-bold text-black">
                    Sustainable Practices
                  </h2>
                  <p className="text-gray-900">
                   We are commited to sustainability, ensuring our products are environment friendly and ethically sourced.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 border-2 border-gray-400 p-4 rounded-lg">
                  <h2 className=" text-lg md:text-xl font-bold text-black">
                    Trusted Expertise
                  </h2>
                  <p className="text-gray-900">
                    Backed by the ancient wisdom of ayurveda and modern research, our products are formulated by experts you can trust.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 border-2 border-gray-400 p-4 rounded-lg">
                  <h2 className=" text-lg md:text-xl font-bold text-black">
                  Commitment to the earth
                  </h2>
                  <p className="text-gray-900">
                    Our dedication to sustainability is unwavering, reflected in our eco-conscious practices and responsibly sourced ingredients,
                    ensuring a healthier planet for generation to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


