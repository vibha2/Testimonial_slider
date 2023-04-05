import React from "react";
import reviews from './data';
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200 text-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonial</h1>
        <div className="bg-violet-400 h-[4px] w-1/6 mt-1 mx-auto"></div>
      </div>
      <Testimonials reviews={reviews}  />

    </div>
  );
};

export default App;
