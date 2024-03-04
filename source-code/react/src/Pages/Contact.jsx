import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center font-serif">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Contact Us</h1>
        <div className="text-lg mb-8 text-gray-700">
          <p>
            Have a question or need assistance? Feel free to reach out to us using the contact information provided below.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-2">Contact Information</h2>
          <p>
            <strong>Email:</strong> TechStore@Technology.com
          </p>
          <p>
            <strong>Phone:</strong> +91 96555 18888
          </p>
          <p>
            <strong>Address:</strong> 123 Tech Street, Gandhinagar, Gujarat, India
          </p>
        </div>
        <div className="text-lg text-gray-700">
          <h2 className="text-2xl font-bold mt-6 mb-2">Get in Touch</h2>
          <p>
            If you have any inquiries, feedback, or suggestions, please don't hesitate to contact us. We value your
            input and are committed to providing excellent customer service.
          </p>
          <p>
            You can also connect with us on social media for the latest updates and promotions:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Facebook: <a href="https://www.facebook.com/example">ExampleTech</a></li>
            <li>Twitter: <a href="https://twitter.com/exampletech">ExampleTech</a></li>
            <li>Instagram: <a href="https://www.instagram.com/exampletech">ExampleTech</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default Contact