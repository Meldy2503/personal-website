import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Flex } from "@chakra-ui/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Title } from "../utils/funcs";

const NextArrow = ({ onClick }: any) => {
  return (
    <Box onClick={onClick} position={"absolute"} bottom="-50px" right="0px">
      <FaAngleRight />
    </Box>
  );
};

const PrevArrow = ({ onClick }: any) => {
  return (
    <Box onClick={onClick} position={"absolute"} bottom="-50px" right="20px">
      <FaAngleLeft />
    </Box>
  );
};

const Recommendations = () => {
  const themeImages = ["box1", "box2", "box3", "box4", "box5", "box6"];
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2, // Add this prop to scroll two items at a time
    centerMode: true,
    centerPadding: 0,
    initialSlide: 0,
    autoplay: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      // {
      //   breakpoint: 1200,
      //   settings: {
      //     slidesToShow: 2,
      //   },
      // },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Box
      id="reviews"
      // px={{ base: ".7rem", sm: "1.5rem", xl: "2.5rem" }}
      // position="relative"
    >
      <Title>Reviews</Title>

      <Box display="block" maxWidth="1000px">
        {/* <Box> */}
        <Slider {...settings}>
          {themeImages.map((review, index) => {
            return (
              <Box key={index}>
                <Flex h="18rem" bg="green" p="2rem" w="34rem" mx="8rem">
                  {review}
                </Flex>
              </Box>
            );
          })}
        </Slider>
        {/* </Box> */}
      </Box>
    </Box>
  );
};

export default Recommendations;

// *****done with swiper

// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// // import "swiper/css/pagination";

// // import "./styles.css";

// // import required modules
// import { Pagination, Navigation, Scrollbar } from "swiper/modules";
// import { Box } from "@chakra-ui/react";

// export default function Recommendations() {
//   return (
//     <Box
//       color="brand.350"
//       px={{ base: ".7rem", sm: "1.5rem", xl: "2.5rem" }}
//       w="1000px"
//     >
//       <Swiper
//         slidesPerView={2}
//         spaceBetween={20}
//         navigation={true}
//         scrollbar={{ draggable: true }}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination, Navigation, Scrollbar]}
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         <SwiperSlide style={{ height: "10rem", backgroundColor: "red" }}>
//           Slide 1
//         </SwiperSlide>
//         <SwiperSlide style={{ height: "10rem", backgroundColor: "red" }}>
//           Slide 2
//         </SwiperSlide>
//         <SwiperSlide style={{ height: "10rem", backgroundColor: "red" }}>
//           Slide 3
//         </SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </Box>
//   );
// }
