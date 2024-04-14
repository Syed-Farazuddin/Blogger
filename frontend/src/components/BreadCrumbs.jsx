/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

export default function BreadCrumbs({ data }) {
  return (
    <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="text-black opacity-50 text-xs md:text-sm font-roboto"
        >
          <Link to={item.link}>
            {item.name}
            {idx !== data.length - 1 && <span className="mx-3">/</span>}
          </Link>
        </div>
      ))}
    </div>
  );
}
