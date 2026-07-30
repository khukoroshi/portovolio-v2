// import React from 'react'
// 1. Import komponen dari Swiper React
import { Swiper, SwiperSlide } from "swiper/react";
// 2. Import modul Swiper yang dibutuhkan (Navigation, Pagination, Autoplay)
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// 3. Import CSS wajib bawaan Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import imgMDL_504 from "../../assets/img/sertivikat/MDL-504.webp";
import imgMDL_566 from "../../assets/img/sertivikat/MDL-566.webp";
import imgMDL_567 from "../../assets/img/sertivikat/MDL-567.webp";
import imgHactiv8 from "../../assets/img/sertivikat/hactiv8.webp";
import imgIbm5 from "../../assets/img/sertivikat/ibm5.webp";
import imgDicoding from "../../assets/img/sertivikat/dicoding1.webp";

const setivikatData = [
  {
    name: "MDL-504",
    url: imgMDL_504,
  },
  {
    name: "MDL-566",
    url: imgMDL_566,
  },
  {
    name: "MDL-567",
    url: imgMDL_567,
  },
  {
    name: "hactiv8",
    url: imgHactiv8,
  },
  {
    name: "ALM-COURSE_4058918",
    url: imgIbm5,
  },
  {
    name: "Introduction to Financial Literacy",
    url: imgDicoding,
  },
];

const ContentSertivikat = () => {
  return (
    <div className="content-serti">
      <Swiper
        // Masukkan modul yang ingin digunakan
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20} // Jarak antar slide (px)
        slidesPerView={1} // Jumlah slide yang tampil bersamaan
        navigation // Menampilkan panah Kiri/Kanan
        pagination={{ clickable: true }} // Menampilkan titik-titik indikator di bawah
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Geser otomatis per 3 detik
        loop={true} // Berputar tanpa henti (infinity loop)
      >
        {setivikatData.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src.url}
              alt={src.name}
              style={{ width: "100%", borderRadius: "10px", display: "block" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContentSertivikat;
