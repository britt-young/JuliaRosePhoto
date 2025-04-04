import React from "react";
import { TypeAnimation } from "react-type-animation";
import riley from "../assets/img/riley.jpg";

const AboutMe = () => {
  return (
    <div className="flex my-10 min-h-screen max-w-7xl mx-auto gap-10 flex-col lg:flex-row items-center justify-center p-4">
      <div className="w-full items-start text-start">
        <h3 className="uppercase font-bold">about saying here </h3>
        <h2 className="uppercase mb-10">Meet Riley</h2>
        
        <p className="mb-6 indent-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus magni sapiente consectetur voluptatum, ducimus nobis! Id suscipit necessitatibus tempora exercitationem voluptas, quasi, nobis ipsam, quaerat blanditiis soluta quas totam deserunt dolore ex sunt consectetur? Quae doloremque, minima ipsum optio quo consequuntur et repellendus dolor nam! Doloribus mollitia vero temporibus pariatur.</p>
        <p className="indent-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, facilis atque dolorem commodi animi tempore architecto eum fugit tenetur nam amet consectetur eaque sunt nisi dignissimos dolor iure doloremque fuga ut corrupti! Assumenda voluptates placeat quas veniam, ea, qui eum velit omnis possimus deleniti temporibus repellendus repudiandae. Dolorum perspiciatis sunt laudantium hic modi eum distinctio explicabo, similique veritatis. Voluptate numquam saepe iure enim dignissimos unde quo temporibus minima distinctio fugiat fuga, cupiditate dolores reprehenderit laboriosam dolorum dolorem, nisi recusandae illum quam ipsam nemo vitae? Doloremque error sed, laudantium provident molestiae cupiditate optio fugit! Reprehenderit perspiciatis, omnis quas odio recusandae id.</p>
        <h4 className="mt-20 text-black">
          {" "}
          <TypeAnimation
            sequence={[
              "3+ years of experience",
              500,
              "quick edit turn-around",
              500,
              "50+ five star reviews",
              500,
              "natural soft editing style",
              500,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h4>
      </div>
      <picture className="m-0 flex justify-center items-center">
      <img
          src={riley}
          className="w-full object-cover rounded-full"
        />
        </picture>
    </div>
  );
};

export default AboutMe;
