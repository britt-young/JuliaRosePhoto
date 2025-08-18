import { useNavigate } from "react-router-dom";
import bgImage from "../assets/img/headerimg.jpg";
// import vid from "../assets/vid/alt-video.mp4";

const HomeIntro = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact");
    console.log("Button clicked");
  };

  return (
    <div
      className="relative min-h-[800px] bg-cover bg-no-repeat bg-center flex flex-col text-center items-center font-serif"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Video background */}
      {/* <video
        src={vid}
        type="video/mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      /> */}

      <div className="mx-5 mt-40">
        <h1 className="text-3xl lg:text-5xl lg:mb-5 ">Julia Rose Photography</h1>
        <p className="lg:text-md pb-4 uppercase">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          ratione."
        </p>
        <button onClick={handleClick}>Book with me</button>
      </div>
    </div>
  );
};

export default HomeIntro;
