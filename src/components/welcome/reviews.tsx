import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Typography } from "antd";
import { useEffect, useState } from "react";
//@ts-ignore
import React from "react";
import { useLazyGetReviewsQuery } from "../../store/api";
import CardSkeleton from "../skeleton/card-skeleton";

export default function Reviews() {
  const [mobile, setMobile] = useState(window.innerWidth < 800);
  const [getReviews, { data, isLoading, isFetching }] =
    useLazyGetReviewsQuery();
  const handleResize = () => {
    setMobile(window.innerWidth < 800);
  };
  useEffect(() => {
    getReviews();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(data?.comments, "data");
  const getAvatar = (username: string) =>
    `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`;
  return (
    <div className="w-full px-5 py-20 bg-black">
      <Typography
        children="21,000+ Reviews For A Reason"
        typeof="h1"
        className="text-bold text-white text-5xl font-Lora text-center"
      />
      <div className="pt-10 relative">
        <Swiper
          className="mySwiper"
          freeMode={true}
          navigation
          spaceBetween={30}
          slidesPerView={mobile ? 1 : 2}
        >
          {!isLoading && !isFetching && data?.comments.map((item) => (
            <SwiperSlide
              key={item?.id}
              className="border h-full border-gray-300 rounded-md cursor-pointer"
            >
              <div className="grid grid-cols-2">
                <div className="col-span-1 flex flex-col justify-between p-5">
                  <Typography
                    children={item?.body}
                    typeof="p"
                    className="text-white text-sm"
                  />
                  <Typography
                    children={item?.user?.fullName}
                    typeof="p"
                    className="text-white font-bold"
                  />
                </div>
                <div className="col-span-1 h-full w-full flex">
                  <img
                    src={getAvatar(item?.user?.fullName)}
                    alt={item.body}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          {(isLoading || isFetching) && <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>}
        </Swiper>
      </div>
    </div>
  );
}
