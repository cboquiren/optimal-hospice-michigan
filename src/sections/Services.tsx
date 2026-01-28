import { servicesList } from "../utils/data";

const Services = () => {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 bg-base-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary">Our Services</h2>
        <div className="flex flex-wrap p-6 justify-center">
          {servicesList.map((service) => {
            return (
              <div className="bg-neutral text-base-100 text-center font-medium rounded-lg p-6 m-2 shadow-md shadow-primary">
                {service}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
