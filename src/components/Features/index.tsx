import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Key Features"
            paragraph="This project on sEMG-based dual hand 
            gesture recognition features a novel hybrid machine learning 
            model that combines Convolutional Neural Networks (CNNs) and 
            Gated Recurrent Units (GRUs). This model effectively utilizes the extensive 
            hand gesture data from the NinaPro DB1 database to achieve up to 85% accuracy in 
            recognizing complex dual hand gestures. The approach enhances the potential for 
            more intuitive and functional human-computer interactions, particularly in robotics 
            and prosthetics."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
