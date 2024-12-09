import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-28 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-40">
        {/* Bandage Logo and Icons */}
        <div className="flex justify-between items-center font-bold mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>
          <div className="flex space-x-3 mr-20">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition duration-150"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-pink-500 transition duration-150"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition duration-150"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Footer Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Company Info</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Legal</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Features</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Resources</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>iOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Get in Touch</h3>
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full md:w-auto px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              />
              <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-start text-sm text-gray-500">
          <p>Made with Love by Finland All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
