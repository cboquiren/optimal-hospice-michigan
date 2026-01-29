import { patientRightsList } from "../utils/data";

const Rights = () => {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 bg-bg-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Patients Rights & Choices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {patientRightsList.map((right) => {
            return (
              <div
                key={right}
                className="bg-base-100 rounded-lg p-4 flex-1 shadow-xl border border-base-300"
              >
                {right}
              </div>
            );
          })}
        </div>
        <p className="font-light">
          Hospice services are covered by Medicare, Medicaid, and most private insurance plans for
          eligible individuals.
        </p>
      </div>
    </div>
  );
};

export default Rights;
