import Slider from "./Slider";

const Reviews = () => {
  return (
    <div id="Reviews" className="pt-[12vh] -mt-[12vh] pb-16">
      <h1 className="w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase">
        Reviews
      </h1>
      <div className="w-[90%] sm:w-[80%] mx-auto mt-20">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Reviews;
