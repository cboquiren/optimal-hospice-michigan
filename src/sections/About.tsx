const About = () => {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 bg-purple-50">
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-900">
            About Optimal Hospice
          </h2>
          <p className="leading-relaxed text-purple-800">
            Optimal Hospice of Michigan, Inc. is committed to providing high-quality hospice care
            with compassion, respect, and clinical excellence. We are available 24/7 and accept
            referrals from physicians, hospitals, facilities, patients, and families.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 sm:p-8">
          <ul className="space-y-3">
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
