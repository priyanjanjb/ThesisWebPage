import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const Teammember = ({ testimonial }: { testimonial: Testimonial }) => {
  //pass content to testimonial
  const { name, image, designation } = testimonial;

  return (
    <div className="w-full">
      <div className="rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
        <div className="grid justify-items-center">
          <div className="relative  h-[150px] w-full max-w-[150px] overflow-hidden rounded-full">
            <Image src={image} alt={name} fill />
          </div>
          <div className="w-full pt-4">
            <h3 className="mb-1 text-center text-lg font-semibold text-dark dark:text-white lg:text-base  xl:text-lg ">
              {name}
            </h3>
            <p className="text-center text-sm text-body-color">{designation}</p>
          </div>
        </div>

        {/* <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          “{content}
        </p> */}
      </div>
    </div>
  );
};

export default Teammember;
