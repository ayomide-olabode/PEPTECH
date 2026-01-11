import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Essential for detecting the #hash
import "../CSS/OurDepartment.css";
import avatar from "/avatar.jpg";
import { leaders } from "../Components/leadersData";
import TimelineItem from "../Components/TimelineItem";


const OurDepartment = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout ensures the DOM has rendered before trying to scroll
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          // Calculate navbar height (e.g., 80px) to avoid overlapping
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]); // Runs every time the #hash in the URL changes

  return (
    <div className="department-container bg-[#121212] text-white py-20">
      {/* Containerized History Section */}
      <section id="history" className="max-w-6xl mx-auto px-6 md:px-12 mb-32 scroll-mt-24">
        <h1 className="text-7xl mb-10 font-bold tracking-tighter">
          Our History
        </h1>

        <div className="history-grid">
          <div className="main-image-wrapper">
            <img
              src={avatar}
              alt="Portrait of Department Leadership"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="flex-1">
            <p className="history-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni eos rerum vero recusandae repudiandae ea fuga quod itaque quia! Quibusdam non totam blanditiis minus nisi molestiae. Illo laborum asperiores hic ab animi molestias voluptate modi dicta facilis minus, quia esse nostrum similique corrupti. Maxime error numquam nulla, blanditiis eos ducimus voluptas vero minima id architecto odit, voluptatem similique doloribus expedita reiciendis. Magni quisquam, corporis pariatur neque, ipsam provident quae debitis eius incidunt voluptates aspernatur quia? Aut, illum neque incidunt perferendis architecto dolor perspiciatis vero tenetur vitae corrupti in iusto!
            </p>
          </div>
        </div>
      </section>

      {/* Past Leadership - Vertical Alternating Timeline */}
      <section id="leadership" className="relative scroll-mt-24">
        <h2 className="section-title text-5xl font-medium mb-16 text-center">
          Past Leadership
        </h2>

        <div className="vertical-timeline-container">
          {/* Central Line Axis */}
          <div className="timeline-center-line"></div>

          <div className="timeline-items-vertical">
            {leaders.map((leader, index) => (
              <TimelineItem
                key={leader.id}
                leader={leader}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </section>
      {/* <section id="mission" className="min-h-screen"><h2>Our Mission</h2></section>
      <section id="honour" className="min-h-screen"><h2>Roll of Honour</h2></section>
      <section id="gallery" className="min-h-screen"><h2>Departmental Gallery</h2></section>
    </div> */}
    </div>
  );
};

export default OurDepartment;
