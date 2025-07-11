"use client";
import Header from "@/components/header";

export default function LandingPage() {
  return (
    <div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* main content goes here  */}
      <div className="relative z-10">
        {/* header  */}

        <Header />
      </div>
    </div>
  );
}

