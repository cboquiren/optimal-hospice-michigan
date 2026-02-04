const About = () => {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 ">About Optimal Hospice</h2>
          <p className="leading-relaxed font-medium">
            Optimal Hospice of Michigan provides high-quality, patient-centered hospice care for
            individuals facing life-limiting illness—supporting patients and families with
            compassion, respect, and clinical excellence.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">
          <ul className="space-y-3 text-primary font-bold">
            <li>• Care Wherever You Call Home</li>
            <li>• Support for Patients and Families</li>
            <li>• CMS-Compliant Hospice Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
