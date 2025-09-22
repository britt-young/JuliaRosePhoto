import { Link } from "react-router-dom";

// ✅ ServiceCard Component
function ServiceCard({ to, title, description, img, reverse }) {
  const isExternal = to.startsWith("http");

  // Choose tag: <a> for external, <Link> for internal
  const Wrapper = isExternal ? "a" : Link;
  const wrapperProps = isExternal
    ? { href: to, target: "_blank", rel: "noopener noreferrer" }
    : { to };

  return (
    <Wrapper
      {...wrapperProps}
      className={`group flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:p-1 p-2 hover:cursor-pointer`}
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
    </Wrapper>
  );
}

// ✅ Services Data
const services = [
  {
    to: "https://juliarosephoto43.pixieset.com/seniors/",
    title: "Seniors",
    description:
      "This is a single person session for students graduating from high school, college, or further education.",
    img: "/images/services/senior.webp",
    reverse: false,
  },
  {
    to: "https://juliarosephoto43.pixieset.com/soloportraits/",
    title: "Solo",
    description: "This is a single person session.",
    img: "/images/services/solo.jpg",
    reverse: true,
  },
  {
    to: "https://juliarosephoto43.pixieset.com/couplesandgroups/",
    title: "Couples & Groups",
    description: "This session is for 2–10 people.",
    img: "/images/services/couple.webp",
    reverse: false,
  },
  {
    to: "https://juliarosephoto43.pixieset.com/familyportraits/",
    title: "Families",
    description: "For families with children/pets (3–10 people).",
    img: "/images/services/fam.jpg",
    reverse: true,
  },
  {
    to: "https://juliarosephoto43.pixieset.com/specialevents/",
    title: "Events",
    description: "For events, parties, or elopements under 50 people.",
    img: "/images/services/wedding.webp",
    reverse: false,
  },
  {
    to: "https://juliarosephoto43.pixieset.com/petportraits/",
    title: "Pets",
    description: "Single animal portraits (owner must be present).",
    img: "/images/services/pet.jpg",
    reverse: true,
  },
];

// ✅ Parent Component
export default function ServiceCards() {
  return (
    <div className="bg-white m-10 md:max-w-7xl md:mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-2 items-center p-2">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </div>
  );
}
