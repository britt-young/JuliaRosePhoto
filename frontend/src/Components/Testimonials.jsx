
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const testimonials = [
  {
    name: "Emily R.",
    text: "Julia was incredible to work with! She made me feel comfortable and the photos turned out better than I imagined.",
    role: "Senior Portrait",
  },
  {
    name: "David & Sarah",
    text: "Our couples session was so fun and natural. Julia captured our personalities perfectly.",
    role: "Couple Session",
  },
  {
    name: "The Johnson Family",
    text: "She was amazing with our kids and pets. The photos are priceless memories we’ll treasure forever.",
    role: "Family Session",
  },
  {
    name: "Sophia M.",
    text: "I loved my solo session! Julia made me feel confident and the results were stunning.",
    role: "Solo Portrait",
  },
  {
    name: "The Lee Family",
    text: "Our family photos turned out amazing. She handled our kids with patience and care.",
    role: "Family Session",
  },
  {
    name: "Michael B.",
    text: "Fantastic experience! The photos captured every emotion perfectly.",
    role: "Senior Portrait",
  },
  {
    name: "Anna K.",
    text: "Julia made our engagement session so fun and easy. Highly recommended!",
    role: "Engagement Session",
  },
  {
    name: "The Patel Family",
    text: "The kids were shy at first, but Julia’s approach made them comfortable and happy.",
    role: "Family Session",
  },
  {
    name: "Liam H.",
    text: "Solo session was seamless. Great communication and amazing results.",
    role: "Solo Portrait",
  },
  {
    name: "Olivia T.",
    text: "Our couple photos are stunning! Julia captured our personalities perfectly.",
    role: "Couple Session",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="w-full h-fit mx-auto">
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            perMove: 1,
            gap: "1rem",
            autoplay: true,
            interval: 2000,
            pauseOnHover: true,
            arrows: false,
            pagination: false,
            speed: 5000,
            breakpoints: {
              1024: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
          }}
        >
          {testimonials.map((t, idx) => (
            <SplideSlide key={idx}>
              <div className="bg-white shadow-lg p-6 text-center h-full flex flex-col justify-between transition-transform duration-300 lg:hover:bg-gray-50">
                <p className="text-gray-700 italic mb-4 flex-grow">“{t.text}”</p>
                <h5 className="font-semibold text-gray-900">{t.name}</h5>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonials;
