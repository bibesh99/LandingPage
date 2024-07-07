"use client"
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useState } from 'react';
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const fakeData = [
  {
    id: 1,
    heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione iste at quas?",
    image: "/assets/img/lu2.webp",
    case_Insights_link: "https://www.youtube.com/",
  },
  {
    id: 2,
    heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione iste at quas?",
    image: "/assets/img/waterDrop.jpg",
    case_Insights_link: "/",
  },
  {
    id: 3,
    heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione iste at quas?",
    image: "/assets/img/water.jpg",
    case_Insights_link: "/",
  },
  {
    id: 4,
    heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione iste at quas?",
    image: "/assets/img/lu2.webp",
    case_Insights_link: "/",
  },
  {
    id: 5,
    heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione iste at quas?",
    image: "/assets/img/lu2.webp",
    case_Insights_link: "/",
  },
  {
    id: 6,
    heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione iste at quas?",
    image: "/assets/img/lu2.webp",
    case_Insights_link: "/",
  },
];

export default function Slider() {
  const hasData = fakeData.length > 0;
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="md:py-11 md:px-24">
      <div className="">
        <h1 className="text-4xl font-bold py-2 px-4">Case Studies</h1>
        <div className="py-2 px-4 text-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className="relative py-3 px-8">
        {hasData && (
          <div>
            <Swiper
              slidesPerView={3}
              spaceBetween={4}
              style={{
                height: 400,
              }}
              loop={false}
              modules={[Navigation]}
              navigation={{
                prevEl: `#prev_slide`,
                nextEl: `#next_slide`,
              }}
              speed={2000}
              breakpoints={{
                // when window width is <= 640px
                640: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {fakeData.map((data) => (
                <SwiperSlide
                  key={data.id}
                  className="md:flex md:flex-col md:h-[450px] md:w-[450px] rounded-md h-full w-full"
                  onMouseEnter={() => setHovered(data.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="relative h-full">
                    <Image
                      src={data.image}
                      alt={data.heading}
                      layout="fill"
                      objectFit="cover"
                      className="brightness-[45%] hover:brightness-75 transition-all ease-in-out duration-300 rounded-[7px]"
                    />
                  </div>
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-8 ${
                      hovered === data.id
                        ? "transform -translate-y-6 transition-all duration-300"
                        : "transform translate-y-80 transition-all duration-300"
                    }`}
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                  >
                    <h6 className="text-xl font-semibold text-white">
                      {data.heading}
                    </h6>
                    <p className="text-white py-4">{data.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex space-x-1">
            <button
              id="prev_slide"
              type="button"
              className="p-2 border-2 rounded-[7px] bg-slate-900 hover:bg-black backdrop-blur-sm"
            >
              <RxCaretLeft size={32} className="text-white" />
            </button>
            <button
              id="next_slide"
              type="button"
              className="p-2 border-2 rounded-[7px] bg-slate-900 hover:bg-black backdrop-blur-sm"
            >
              <RxCaretRight size={32} className="text-white" />
            </button>
             </div> 

          </div>
        )}
      </div>
    </div>
  );
}
