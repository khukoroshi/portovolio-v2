// import React from 'react'
import Header from "./includes/header/Header";
import BarToggle from "./includes/bartoggle/BarToggle";
import Popup from "./includes/popup/Popup";
import Home from "./includes/home/Home";
import About from "./includes/about/About";
import Experient from "./includes/experient/Experient";
import Work from "./includes/work/Work";
import Resume from "./includes/resume/Resume";
import Personal from "./includes/personal/Tambahan";
import Footer from "./includes/footer/Footer";

import { useState, useEffect, useMemo } from "react";
import throttle from "lodash.throttle";

const App = () => {
  // state variable untuk popup contact
  const [conIsOpen, setConIsOpen] = useState(false);

  // untuk open dan close nya
  const conOpen = () => setConIsOpen(true);
  const conClose = () => setConIsOpen(false);

  // state variable untuk fungsi scroll
  const [isScrolled, setIsScrolled] = useState(false);

  const [isStickyVisible, setIsStickyVisible] = useState(false);

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        if (window.innerWidth <= 768) {
          // Opsional: Reset state jika ingin di HP tampilan kembali ke default
          setIsStickyVisible(false);
          return; // Stop eksekusi di sini!
        }
        const scrollPos = window.scrollY;
        // console.log("Scroll handler dieksekusi!"); // Cek di console
        const windowHeight = window.innerHeight - 50;

        // logika muncul atau engganya
        if (scrollPos > 150) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }

        if (scrollPos > windowHeight) {
          setIsStickyVisible(true);
        } else {
          setIsStickyVisible(false);
        }
      }, 100), // Rentang jeda 100 milidetik
    [],
  );

  useEffect(() => {
    // Pasang event listener saat komponen pertama kali dimuat (mount)
    window.addEventListener("scroll", handleScroll);

    // Cleanup function: Wajib melepas event listener saat komponen ditutup (unmount)
    return () => {
      handleScroll.cancel();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <>
      {/* testing */}
      <Header contactOpen={conOpen} isScroll={isScrolled} />
      <BarToggle posisiKanan={true} isStickyVisible={isStickyVisible} />
      <BarToggle posisiKanan={false} isStickyVisible={isStickyVisible} />
      <Popup contactClose={conClose} contact={conIsOpen} />
      <Home />
      <About />
      <Experient />
      <Work />
      <Resume />
      <Personal />
      <Footer />
    </>
  );
};

export default App;
