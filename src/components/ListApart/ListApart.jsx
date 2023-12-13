import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ApartmentCard from "./ApartmentCard";
import { useDispatch, useSelector } from 'react-redux';

import "swiper/css";
import "swiper/css/navigation";
import { getApartments } from "../../redux/actions/apartmentActions";

export default function ListApart() {

  const aparts  = useSelector((state) => state.aparts.apartments);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApartments());
  }, [dispatch]);


  


  return (
    <Flex>
      <Swiper 
        modules={[Navigation]}
        spaceBetween={50}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{ width: "1200px", padding: "50px" }}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {aparts.map((apartment, index) => (
          <SwiperSlide key={index}>
            <ApartmentCard apartment={apartment}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
