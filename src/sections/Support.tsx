import { careLocationsList } from "../utils/data";

const Support = () => {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center flex flex-col-reverse md:grid md:gap-10 md:grid-cols-2 items-center">
        <div className="bg-bg-light rounded-2xl p-6 sm:p-10 flex-1 shadow-lg">
          <h4 className="text-primary text-md font-bold underline uppercase mb-4">
            Where We Provide Care
          </h4>
          <ol className="font-medium list-disc space-y-2 px-4">
            {careLocationsList.map((location) => {
              return (
                <li key={location} className="text-primary text-left ">
                  {location}
                </li>
              );
            })}
          </ol>
        </div>
        <div className="flex-1 md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Our Support and Care</h2>
          <p className="sm:text-md  leading-6">
            We provide education, guidance, and emotional support to caregivers throughout the
            hospice journey and offer ongoing bereavement support following the loss of a loved one.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
