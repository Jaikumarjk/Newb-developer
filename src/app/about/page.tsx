"use client";

import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        About Us
      </h1>
      <Meteors />
      <p className="text-center text-2xl mt-20 pr-4 pl-4">
        {`Welcome to SFDCpathshala, your go-to destination for innovative and
        user-friendly applications developed by Nweb Developer. At
        SFDCpathshala, we believe in the power of technology to transform and
        enrich lives. Our mission is to create cutting-edge solutions that
        enhance your digital experience across various platforms, including
        mobile, web, and beyond. With a passion for creativity and a dedication
        to excellence, our team at Nweb Developer is committed to crafting apps
        that not only meet but exceed your expectations. Whether you're seeking
        inspiration, productivity, or entertainment, SFDCpathshala offers a
        diverse range of applications tailored to suit your needs. Join us on
        this journey of innovation and discovery as we continue to push the
        boundaries of what's possible in the world of app development. Thank you
        for choosing SFDCpathshala by Nweb Developer. Together, let's make
        technology work for you.`}
      </p>
    </div>
  );
}

export default page;
