import React from "react";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-10 m-6 rounded-3xl p-8 bg-primary sm:flex-row">
        <div className="w-1/2">
          <img
            src="https://arjun6757.github.io/personal-site/Resources/image.png"
            alt="profile"
          />
        </div>
        <div className="text-white flex flex-col justify-center">
          <h1 className="text-2xl my-4">Hi, I'm Arjun Banerjee</h1>
          <p className="text-md break-words">
            I am a Passionate and dedicated computer enthusiast with hands-on
            experience in web development. Skilled in designing and building
            websites to enhance technical proficiency and problem-solving
            abilities. Proven ability to deliver high-quality results and create
            functional, user-friendly web applications.
          </p>
        </div>
      </div>
      <Footer className="text-white text-center w-100% p-5 m-6 bg-primary rounded-xl" />
    </>
  );
}
