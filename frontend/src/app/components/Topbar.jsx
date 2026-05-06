"use client";

import { Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="w-full bg-black text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        
        {/* LEFT - PHONE */}
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <span>Call us: +92-3008111015</span>
        </div>

        {/* CENTER - SOCIAL ICONS */}
        <div className="hidden md:flex items-center gap-4">
          <FaFacebookF className="cursor-pointer hover:text-gray-300 transition" />
          <FaInstagram className="cursor-pointer hover:text-gray-300 transition" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-300 transition" />
        </div>

        {/* RIGHT - EMAIL */}
        <div className="flex items-center gap-2">
          <Mail size={16} />
          <span className="hidden sm:inline">
            Mail us: petsdunya@gmail.com
          </span>
        </div>

      </div>
    </div>
  );
}