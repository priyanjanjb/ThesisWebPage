import Testimonials from "@/components/Team";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Meet the Team"
        description="This is the team behind the project."
      />
      <Testimonials />
      
    </>
  );
};

export default AboutPage;
