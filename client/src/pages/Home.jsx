import React from "react";
import { Header } from "../components/header";
import { Steps } from "../components/Steps";
import { BgSlider } from "../components/BgSlider";
import { Testimonials } from "../components/Testimonials";

export const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <BgSlider/>
      <Testimonials/>
    </div>
  );
};
