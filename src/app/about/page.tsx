import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
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
        pageName="About Hand Gestures"
        description="This website details a thesis on the development of predictive models for sEMG-based dual hand gesture recognition, 
        aiming to advance human-computer interaction technologies. Accurately 
        interpreting simultaneous dual hand gestures remains a significant 
        challenge, and this research employs advanced machine learning techniques 
        to enhance the accuracy and efficiency of gesture recognition systems. 
        Utilizing extensive hand gesture data from the NinaPro DB1 database, 
        the study explores a pre-trained VGG16 model and introduces a novel 
        hybrid model combining Convolutional Neural Networks (CNNs) and Gated 
        Recurrent Units (GRUs). This approach significantly improves accuracy, 
        achieving up to 85% in recognizing dual hand gestures, and outperforming 
        existing models. These findings demonstrate the potential of tailored machine 
        learning models to enhance gesture recognition technology, potentially 
        revolutionizing applications in prosthetics, robotics, and more."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
