import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Profile from "../../Components/Profile/Profile";
import ReviewSlider from "../../Components/ReviewSlider/ReviewSlider";
import iHire from "../../Assets/Images/iHire-bg.jpg";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Profile />
      <ReviewSlider />
      <Footer />
    </div>
  );
}
