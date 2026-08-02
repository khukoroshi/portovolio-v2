// import React from 'react'
// 1. Import komponen dari Swiper React
import { Swiper, SwiperSlide } from "swiper/react";
// 2. Import modul Swiper yang dibutuhkan (Navigation, Pagination, Autoplay)
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// 3. Import CSS wajib bawaan Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { sertivikatData } from "../../data/imageData";

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
        {sertivikatData.map((src, index) => (
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
