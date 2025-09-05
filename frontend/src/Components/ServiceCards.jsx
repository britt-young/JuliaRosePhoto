import { Link } from "react-router-dom";

// ✅ ServiceCard Component
function ServiceCard({ to, title, description, img, reverse }) {
  return (
    <Link
      to={to}
      className={`group flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:p-1 p-2 hover:cursor-pointer w-full max-w-3xl`}
    >
      {/* Text Side */}
      <div className="flex-1 flex items-center justify-center bg-gray-100 p-6 text-center">
        <div>
          <h4 className="uppercase font-semibold mb-2">{title}</h4>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>

      {/* Image Side */}
      <div className="relative flex-1 min-h-[250px]">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="w-full h-full object-center transition-all duration-300 aspect-auto"
        />
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
      </div>
    </Link>
  );
}

const services = [
  {
    to: "/services/seniors",
    title: "Seniors",
    description:
      "This is a single person session for students graduating from high school, college, or further education.",
    img: "/images/services/senior.webp",
    reverse: false,
  },
  {
    to: "/services/solo",
    title: "Solo",
    description: "This is a single person session.",
    img: "/images/services/solo.jpg",
    reverse: true,
  },
  {
    to: "/services/couples&groups",
    title: "Couples & Groups",
    description: "This session is for 2–10 people.",
    img: "/images/services/couple.webp",
    reverse: false,
  },
  {
    to: "/services/families",
    title: "Families",
    description: "For families with children/pets (3–10 people).",
    img: "/images/services/fam.jpg",
    reverse: true,
  },
  {
    to: "/services/events",
    title: "Events",
    description: "For events, parties, or elopements under 50 people.",
    img: "/images/services/wedding.webp",
    reverse: false,
  },
];

export default function ServiceCards() {
  return (
    <div className="bg-white">
      <div className="flex flex-col gap-6 items-center m-5">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </div>
  );
}
