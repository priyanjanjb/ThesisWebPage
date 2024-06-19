import Image from "next/image";
const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-2  flex flex-wrap items-start">
          <div className="relative w-full px-4 lg:w-1/2">
            <div
              className=" sticky top-0 mx-auto mb-auto aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/demo.jpeg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />

              <Image
                src="/images/about/demo.jpeg"
                alt="about image"
                fill
                className="sticky hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
              
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Objective
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our project&#39;s primary goal is to develop a robust, gesture
                  recognition system that naturally responds to human gestures
                  using advanced machine learning algorithms. This system aims
                  to revolutionize our interaction with machines, making
                  technology more accessible and easier to use, particularly in
                  fields such as prosthetics, robotics, and virtual reality.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Significance of Research and Applications
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The potential applications of our research are extensive. Our
                  technology&#39;s ability to accurately recognize dual-hand
                  gestures paves the way for more intuitive control systems,
                  enhancing the quality of life for amputees. It also offers new
                  possibilities in virtual reality and gaming, allowing users to
                  interact with digital environments more naturally and
                  engagingly. Moreover, the technology holds significant
                  implications for future human-machine interfaces and robotics.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Our Approach
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We utilize deep learning models, specifically Convolutional
                  Neural Networks (CNNs) and Recurrent Neural Networks (RNNs),
                  to process the spatial and temporal data from sEMG signals.
                  The NinaPro DB1 database, a comprehensive dataset of hand
                  gestures, serves as the foundation for training, fine-tuning,
                  and testing our models. This ensures our system is innovative
                  and grounded in rigorous scientific research.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Looking Forward
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  As we continue to refine our models and expand our research,
                  we remain dedicated to pushing the boundaries of gesture
                  recognition technology. Our goal is to develop more adaptive,
                  responsive, and user-friendly systems that can transform how
                  we interact with the digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
