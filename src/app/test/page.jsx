"use client";
import React, { useEffect, useState } from "react";

function page() {
  const [testimonials, setTestimonials] = useState([]);
  const [NewTestimonials, setNewTestimonials] = useState(null);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const response = await fetch(
          "https://intellex-48404-default-rtdb.firebaseio.com/testimonials.json"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        const firstKey = Object.keys(data);
        const reviews = Array.isArray(data[firstKey]) && data[firstKey];

        setTestimonials(reviews);
      } catch (error) {
        setError(error);
      } finally {
      }
    };

    getTestimonials();
  }, []);
  console.log(testimonials);

  return (
    <div className="grid place-content-center h-[100vh]">
      {testimonials.map((data, index) => (
        <div
          key={index}
          className="flex 1 h-[200px] relative w-[450px] overflow-hidden bg-white  text-black  m-8 rounded-md shadow-xl shadow-black"
        >
          <i
            class="fa fa-quote-right absolute right-2 top-2 text-[#00bf63] text-3xl"
            aria-hidden="true"
          ></i>
          <div className="w-full">
            <img
              className="w-full h-full object-cover"
              src="/images/wallpaperflare.com_wallpaper (16).jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 p-3">
            <p className="text-xs">{data.fieldOfInterest}</p>
            <h2 className="font-semibold">{data.name}</h2>
            <div className="flex gap-1">
              <i class="fa fa-star text-yellow-300" aria-hidden="true"></i>
              <i class="fa fa-star text-yellow-300" aria-hidden="true"></i>
              <i class="fa fa-star text-yellow-300" aria-hidden="true"></i>
              <i class="fa fa-star text-yellow-300" aria-hidden="true"></i>
              <i class="fa fa-star text-yellow-300" aria-hidden="true"></i>
            </div>
            <p className="text-sm border-b-2 pb-2 border-gray-300">
              {data.testimonial.slice(0, 100)}
            </p>
            <div>
              <i
                class="fa text-[#4] fa-play text-[25px] float-end"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
      ))}{" "}
    </div>
  );
}

export default page;
