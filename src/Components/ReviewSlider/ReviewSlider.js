import Slider from "react-slick";
import "../../index.css";
import ReviewCard from "../ReviewCard/ReviewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ReviewSlider() {
  const reviews = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 7, 9, 3];
  const settings = {
    // dot: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };
  return (
    <div className="my-10 mx-auto max-w-7xl">
      <Slider {...settings} arrows={false}>
        {reviews.map(() => (
          <div className="!flex justify-around">
            <ReviewCard />
          </div>
        ))}
      </Slider>
    </div>
  );
}
