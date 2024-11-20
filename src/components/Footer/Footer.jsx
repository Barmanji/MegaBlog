import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="relative mt-auto bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between -mx-4">
          {/* Logo and Copyright */}
          <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
            <Logo width="120px" />
            <p className="mt-4 text-sm">
              &copy; {new Date().getFullYear()} Ajay Barman. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="w-full md:w-2/3 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold text-gray-400 uppercase text-xs mb-4">
                  Company
                </h4>
                <ul>
                  <li className="mb-2">
                    <Link
                      className="hover:text-white transition"
                      to="/"
                    >
                      Features
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      className="hover:text-white transition"
                      to="/"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      className="hover:text-white transition"
                      to="/"
                    >
                      Affiliate Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-white transition"
                      to="/"
                    >
                      Press Kit
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-400 uppercase text-xs mb-4">
                  Support
                </h4>
                <ul>
                  <li className="mb-2">
                    <Link
                      className="hover:text-white transition"
                      to="/"
                    >
                      Account
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      className="hover:text-white transition"
                      to="/"
                    >
                      Help
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      className="hover:text-white transition"
                      to="/"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-white transition"
                      to="/"
                    >
                      Customer Support
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-400 uppercase text-xs mb-4">
                  Legals
                </h4>
                <ul>
                  <li className="mb-2">
                    <Link
                      className="hover:text-white transition"
                      to="/"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      className="hover:text-white transition"
                      to="/"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-white transition"
                      to="/"
                    >
                      Licensing
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-400 uppercase text-xs mb-4">
                  Stay Connected
                </h4>
                <ul className="flex space-x-4">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
