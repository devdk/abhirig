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
                Our features are designed to enhance your productivity and
                streamline your workflow.
              </p>
            </div>
            <div className="w-full max-w-full space-y-4 mx-auto">
              <div className="grid md:grid-cols-3 grid-rows-3 gap-8">
                <div className="flex flex-col space-y-2 border-2 border-gray-400 p-4 rounded-lg">
                  <h2 className=" text-lg md:text-xl font-bold text-black">
                    Smart Inbox
                  </h2>
                  <p className="text-gray-900">
                    Our Smart Inbox feature helps you manage your emails
                    efficiently by prioritizing important emails.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 border-2 border-gray-400 p-4 rounded-lg">
                  <h2 className=" text-lg md:text-xl font-bold text-black">
                    Seamless Integration
                  </h2>
                  <p className="text-gray-900">
                    Seamless Integration allows you to connect with your
                    favorite apps and services without leaving your inbox.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 border-2 border-gray-400 p-4 rounded-lg">
                  <h2 className=" text-lg md:text-xl font-bold text-black">
                    Advanced Customization
                  </h2>
                  <p className="text-gray-900">
                    With Advanced Customization, you can personalize your email
                    client to suit your preferences and work style.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 border-2 border-gray-400 p-4 rounded-lg">
                  <h2 className=" text-lg md:text-xl font-bold text-black">
                    Powerful Search
                  </h2>
                  <p className="text-gray-900">
                    Our Powerful Search feature allows you to find any email,
                    contact, or file in seconds.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 border-2 border-gray-400 p-4 rounded-lg">
                  <h2 className=" text-lg md:text-xl font-bold text-black">
                    Reliable Security
                  </h2>
                  <p className="text-gray-900">
                    With Reliable Security, your data is always safe and
                    protected.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 border-2 border-gray-400 p-4 rounded-lg">
                  <h2 className=" text-lg md:text-xl font-bold text-black">
                    Easy Collaboration
                  </h2>
                  <p className="text-gray-900">
                    Easy Collaboration allows you to share and edit documents
                    with your team in real time.
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


