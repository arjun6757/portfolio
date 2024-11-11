import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 mx-auto my-16">
      <div className="flex justify-center ">
        <img className="h-64 w-64" src="https://arjun6757.github.io/personal-site/Resources/image.png" alt="profile" />
      </div>
      <div className="text-white text-center">
        <h1 className="text-2xl my-4">Hi, I'm Arjun Banerjee</h1>
        <p className="text-md">
          I am a Passionate and dedicated computer enthusiast with hands-on
          experience in web development. Skilled in designing and building
          websites to enhance technical proficiency and problem-solving
          abilities. Proven ability to deliver high-quality results and create
          functional, user-friendly web applications.
        </p>
      </div>
    </div>
  );
}
