import React from "react"; 
import "../scss/_home.scss"; // Make sure to import the SCSS file for styling  
import Hero from "../components/HeroSection/Hero"; 
// import PopularProducts from "../components/PopularProducts/PopularProducts";
// import Section3 from "../components/Section3/Section3";
// import Section4 from "../components/Section4/Section4"; 
// import CardImageSlider from "../components/ImageSlider/ImageSlider";
import ChooseUs from "../components/WhyUs/ChooseUs";
import NewArrivalsSection from "../Section 1/Sectiion1";
import Testimonials from "../components/Testimonials/Testimonial";
import FeaturedProducts from "../components/Featured Product/FeaturedProduct";

function Home() {
  return (
    <main className="home-page">
      <Hero />
      <ChooseUs/>
      <FeaturedProducts/>
      <NewArrivalsSection/>
      {/* <PopularProducts /> */}
      <Testimonials/>
      
    </main>
  );
}

export default Home;
