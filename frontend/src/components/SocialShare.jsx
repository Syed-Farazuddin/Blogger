import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

export default function SocialShare({ url, title }) {
  return (
    <div className="flex items-center gap-x-5">
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.facebook.com/dialog/share?app_id=idnum&display=popup&href=${url}`}
      >
        <FaFacebookSquare className="text-[#3b5998] w-12 h-auto" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://api.whatsapp.com/send/?text=${url}`}
      >
        <FaWhatsappSquare className="text-[#25D666] w-12 h-auto" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://twitter.com/intent/tweet?url=${url}`}
      >
        <FaTwitterSquare className="text-[#00acee] w-12 h-auto" />
      </a>
    </div>
  );
}
