const Hero = () => {
  return (
    <div className="bg-[url('./assets/Hero1.jpg')] h-[75vh] bg-cover bg-center relative">
      <div className="bg-purple-50/20 h-full w-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h1 className="text-2xl lg:text-5xl font-bold tracking-wide text-primary text-center">
            Comfort • Dignity • Quality of Life
          </h1>
          <p className="text-md lg:text-xl/10 max-w-xs lg:max-w-3xl mx-auto text-neutral/75 font-semibold font-[Inter]">
            Optimal Hospice of Michigan provides compassionate, patient-centered hospice care for
            individuals facing life-limiting illness—supporting patients and families wherever they
            call home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
