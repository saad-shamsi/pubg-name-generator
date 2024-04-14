"use client"
import React from 'react';
import TestimonialCard from './TestCard'; // Adjust the import path as necessary
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const TestimonialsSection = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      className: "slider variable-width", // Adding custom class for styling
      variableWidth: true
    };
  
    const testimonials = [
        { name: "GamerTag123", quote: "The Random Name Generator helped me find the perfect name that really fits my gaming style. Absolutely love it!" },
        { name: "SniperElite", quote: "Customizing my PUBG name using the Name Transformer was so easy and fun. Highly recommend for anyone looking to stand out!" },
        { name: "TheLastViking", quote: "Thanks to this site, I was able to create a unique name that’s now widely recognized in my gaming community." },
        { name: "StealthRazor", quote: "I never thought a name could make such a big difference in gaming. Thanks for the cool suggestions!" },
        { name: "EchoPhoenix", quote: "Fantastic tool! The names generated are really creative and fitting for my gaming persona." },
        { name: "NightHawk", quote: "Finding a unique name for my character was super easy and fun. Great tool with awesome results!" }
      ];
  
    return (
      <div className='w-full py-16 bg-black text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-12'>What Our Users Say</h2>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4" style={{ width: 300 }}> {/* Provides spacing and sets card width */}
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
  
  export default TestimonialsSection;