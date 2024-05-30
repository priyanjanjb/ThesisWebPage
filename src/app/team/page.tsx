import Testimonials from "@/components/Team";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page ",
  description: "This is About Page",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Testimonials />
    </>
  );
};

export default AboutPage;
