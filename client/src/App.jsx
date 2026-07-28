// import React from 'react'
import Header from "./includes/header/Header";
import BarToggle from "./includes/bartoggle/BarToggle";
import Popup from "./includes/popup/Popup";
import Home from "./includes/home/Home";
import About from "./includes/about/About";
// import Experient from "./includes/Experient";
import Work from "./includes/work/Work";
import Resume from "./includes/resume/Resume";
import Personal from "./includes/personal/Tambahan";
import Footer from "./includes/footer/Footer";
const App = () => {
  return (
    <>
      {/* testing */}
      <Header />
      <BarToggle posisiKanan={true} />
      <BarToggle posisiKanan={false} />
      <Popup />
      <Home />
      <About />
      {/* <Experient /> */}
      <Work />
      <Resume />
      <Personal />
      <Footer />
    </>
  );
};

export default App;
