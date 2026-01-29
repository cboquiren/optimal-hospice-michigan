import { servicesList } from "../utils/data";

const Services = () => {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 bg-base-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary">Our Services</h2>
        {/* <div className="flex flex-wrap p-6 justify-center">
          {servicesList.map((service) => {
            return (
              <div
                key={service}
                className="bg-neutral text-base-100 text-center font-medium rounded-lg p-6 m-2 shadow-md shadow-primary"
              >
                {service}
              </div>
            );
          })}
        </div> */}

        <div className="bg-neutral text-base-100 font-medium rounded-lg p-6 m-2 shadow-md shadow-primary max-w-md mx-auto text-left">
          <ol className="list-disc space-y-4 px-12 py-4">
            {servicesList.map((service) => {
              return <li key={service}>{service}</li>;
            })}
          </ol>
        </div>
        <p className="mt-8 font-light">
          All services are provided under a physician-directed plan of care and coordinated by an
          interdisciplinary team.
        </p>
      </div>
    </div>
  );
};

export default Services;
