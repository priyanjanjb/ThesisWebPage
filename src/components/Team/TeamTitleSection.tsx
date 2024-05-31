"use client";
import { useState } from "react";
import { Supervisors, Testimonial } from "@/types/testimonial";
import { use } from "react";
import SingleTestimonial from "./SingleTestimonial";
import SingleSupervisor from "./supervisors";

const TeamTitleSection = ({
  title,
  title2,
  paragraph,
  width = "1400px",
  center,
  mb = "100px",
}: {
  title: string;
  title2?: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  const [active, setActive] = useState("team");
  const [view, setView] = useState("supervisor");
  let texture;
  function handle1() {
    setActive("team");
    setView("supervisor");
  }
  function handle2() {
    setActive("supervisor");
    setView("team");      
  }

  const testimonialData: Testimonial[] = [
    {
      id: 1,
      name: "A.K.S. Srinath",
      designation: "Software Engineering",
      content: " ",
      image: "/images/testimonials/srinath.jpeg",
    },
    {
      id: 2,
      name: "H.M.P. Priyanga",
      designation: "Software Engineering",
      content: " ",
      //   "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
      image: "/images/testimonials/priyanjith.jpg",
    },
    {
      id: 3,
      name: "J.B.P. Perera",
      designation: "Software Engineering",
      content: " ",
      //   "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
      image: "/images/testimonials/perera.jpeg",
    },
  ];

  const supervisorData: Supervisors[] = [
    {
      id: 1,
      name: "Dr. Nalaka Lankasena",
      designation: `(Main Supervisor)
      Senior Lecturer, Faculty of 
        Technology,University of Sri Jayewardenepura`,
      content: ``,
      image: "/images/testimonials/nalaka.jpg",
    },
    {
      id: 2,
      name: "Mr. Bathiya Seneviratne ",
      designation: `(Co-Supervisor)Lecturer, Faculty of Technology, 
      University of Sri Jayewardenepura`,
      content: ``,
      image: "/images/testimonials/bathiya.jpeg",
    },
  ];
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <div>
          {view === "supervisor" && (
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              <button className={`${texture}`} onClick={handle1}>
                {title}
              </button>
              <button onClick={handle2}>
                <span className="opacity-60 transition hover:opacity-100 dark:opacity-50 dark:hover:opacity-100">
                  {title2}
                </span>
              </button>
            </h2>
          )}
        </div>
        <div>
          {view === "team" && (
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              <button className="opacity-60 transition hover:opacity-100 dark:opacity-50 dark:hover:opacity-100" onClick={handle1}>
                {title}
              </button>
              <button onClick={handle2}>
                <span>
                  {title2}
                </span>
              </button>
            </h2>
          )}
        </div>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
      <div>
        {active === "team" && (
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {testimonialData.map((testimonial) => (
              <SingleTestimonial
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        )}
        {active === "supervisor" && (
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
            {supervisorData.map((supervisor) => (
              <SingleSupervisor key={supervisor.id} supervisor={supervisor} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TeamTitleSection;
