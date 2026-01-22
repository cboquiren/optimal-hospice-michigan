import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Services = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [Autoplay()]);

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.plugins().autoplay?.play();
  }, [emblaApi]);

  return (
    <div className="embla py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-10 text-purple-900">
          Our Hospice Services
        </h2>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container mb-8">
            {[
              "Physician & Medical Oversight",
              "Skilled Nursing & Symptom Management",
              "Pain & Medication Management",
              "Hospice Aide Personal Care",
              "Social Work & Emotional Support",
              "Spiritual Care Services",
              "Volunteer Support",
              "Medications & Medical Equipment",
              "24/7 On-Call Clinical Support",
            ].map((service) => {
              return (
                <div
                  key={service}
                  className="embla__slide p-6 bg-purple-100 rounded-2xl shadow-sm "
                >
                  {service}
                </div>
              );
            })}
          </div>
        </div>

        <button className="embla__prev btn mr-2 bg-accent" onClick={goToPrev}>
          <ChevronLeft />
        </button>
        <button className="embla__next btn ml-2 bg-accent" onClick={goToNext}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Services;
