const Badges = () => {
  return (
    <div className="py-10 px-6 md:px-4 bg-base-100">
      <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-3 items-center text-center">
        <div className="p-6 rounded-2xl shadow-sm border border-purple-100">
          Licensed Hospice Agency
        </div>
        <div className="p-6 rounded-2xl shadow-sm border border-purple-100">Medicare Certified</div>
        <div className="p-6 rounded-2xl shadow-sm border border-purple-100">CHAP Accredited</div>
      </div>
    </div>
  );
};

export default Badges;
