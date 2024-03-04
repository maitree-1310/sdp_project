/*import React from 'react'

const About = () => {
  return (
    <div>About</div>
  )
}

export default About*/
// AboutUsPage.js

import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center font-serif">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">About Us</h1>
        <div className="text-lg mb-8 text-gray-700">
          <p>
            We've built this website to provide tech enthusiasts with the latest gadgets and accessories. Here's a brief
            introduction about our team:
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-2">ABOUT THE TEAM</h2>
          <p>
            We, the creators of this website, are passionate about technology! With our combined expertise and dedication,
            we strive to bring you the best products and services in the tech industry.
          </p>
          <p>
            Whether you're a professional seeking cutting-edge equipment or an enthusiast looking for the latest gadgets,
            we're here to cater to all your tech needs. Our goal is to make technology accessible and enjoyable for everyone!
          </p>
        </div>
        <div className="text-lg text-gray-700">
          <h2 className="text-2xl font-bold mt-6 mb-2">ABOUT THE TEAM</h2>
          <div className="flex justify-center">
            <img src="https://via.placeholder.com/300" alt="Team" className="rounded-full w-48 h-48 mb-4"/>
          </div>
          <p>
            Hello, we are a team of technology enthusiasts. We come from diverse backgrounds and share a common passion
            for innovation and creativity.
          </p>
          <p>
            Our journey in the tech industry began with a simple idea - to create a platform where people can find
            high-quality tech products at affordable prices. Today, we continue to pursue that vision, striving to
            deliver exceptional value to our customers.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
