import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Profile from "../../Components/Profile/Profile";
import ReviewSlider from "../../Components/ReviewSlider/ReviewSlider";

export default function HomePage() {
  return (
    <div className="h-full">
      <Header />
      <Profile />
      <ReviewSlider />
      <Footer />
    </div>
  );
}
