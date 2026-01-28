const About = () => {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 bg-bg-dark">
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
            About Optimal Hospice
          </h2>
          <p className="leading-relaxed text-text-primary">
            Optimal Hospice of Michigan, Inc. is committed to providing high-quality hospice care
            with compassion, respect, and clinical excellence. We are available 24/7 and accept
            referrals from physicians, hospitals, facilities, patients, and families.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">
          <ul className="space-y-3 text-primary font-semibold">
            <li>• Available 24/7</li>
            <li>• Physician-directed care</li>
            <li>• CMS-compliant services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
