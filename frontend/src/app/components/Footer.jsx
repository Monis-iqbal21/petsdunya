import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-white">
      {/* Top Contact Strip */}
      <div className="bg-[#9b6cf3]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:px-6 md:flex-row md:px-10">
          <div>
            <h3 className="text-center text-xl font-extrabold md:text-left">
              Need Help Choosing the Right Pet Product?
            </h3>
            <p className="mt-1 text-center text-sm text-white/85 md:text-left">
              Our support team is ready to help you find the best products for your furry friend.
            </p>
          </div>

          <a
            href="tel:18008186767"
            className="flex items-center gap-3 rounded-full bg-white px-6 py-3 font-extrabold text-[#9b6cf3] shadow-lg transition hover:bg-[#fff7d6]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ffc453] text-white">
              <FaPhoneAlt />
            </span>
            <span>+92-3008111015</span>
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:px-10 lg:grid-cols-4">
        {/* Logo + About */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <Image
              src="/assets/petsdunya-logo.png"
              alt="PetsDunya Logo"
              width={150}
              height={70}
              className="h-auto w-[150px]"
            />
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/70">
            PetsDunya brings you quality pet food, accessories, toys, grooming essentials,
            and everyday care products designed to keep pets healthy, happy, and comfortable.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#9b6cf3]"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#9b6cf3]"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#9b6cf3]"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#9b6cf3]"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-5 text-lg font-extrabold">
            Quick Links <span className="text-[#9b6cf3]">🐾</span>
          </h4>

          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a href="#" className="transition hover:text-[#ffc453]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-[#ffc453]">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-[#ffc453]">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-[#ffc453]">
                Featured Products
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-[#ffc453]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="mb-5 text-lg font-extrabold">
            Categories <span className="text-[#9b6cf3]">🐶</span>
          </h4>

          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a href="#" className="transition hover:text-[#ffc453]">
                Pet Food
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-[#ffc453]">
                Pet Accessories
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-[#ffc453]">
                Beds & Sofas
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-[#ffc453]">
                Brushes & Combs
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-[#ffc453]">
                Toys & Carriers
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-5 text-lg font-extrabold">
            Contact Us <span className="text-[#9b6cf3]">🐱</span>
          </h4>

          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <span className="mt-1 text-[#ffc453]">
                <FaPhoneAlt />
              </span>
              <div>
                <p className="font-semibold text-white">Phone</p>
                <a href="tel:18008186767" className="transition hover:text-[#ffc453]">
                  +92-3008111015
                </a>
              </div>
            </li>

            <li className="flex gap-3">
              <span className="mt-1 text-[#ffc453]">
                <FaEnvelope />
              </span>
              <div>
                <p className="font-semibold text-white">Email</p>
                <a
                  href="mailto:support@petsdunya.com"
                  className="transition hover:text-[#ffc453]"
                >
                  support@petsdunya.com
                </a>
              </div>
            </li>

            <li className="flex gap-3">
              <span className="mt-1 text-[#ffc453]">
                <FaMapMarkerAlt />
              </span>
              <div>
                <p className="font-semibold text-white">Location</p>
                <p>Pakistan / Online Pet Store</p>
              </div>
            </li>
          </ul>

          {/* Newsletter */}
          <div className="mt-6">
            <p className="mb-3 text-sm font-semibold text-white">
              Subscribe for pet care deals
            </p>

            <div className="flex overflow-hidden rounded-full bg-white">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 text-sm text-black outline-none"
              />
              <button className="bg-[#9b6cf3] px-5 text-sm font-bold text-white transition hover:bg-[#8758e8]">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-white/60 sm:px-6 md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} PetsDunya. All Rights Reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-[#ffc453]">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-[#ffc453]">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}