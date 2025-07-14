"use client";

import Image from "next/image";
import { useEffect } from "react";
import ErrorImage from "@/assets/error.jpg";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full min-h-screen">
      <Image src={ErrorImage} className="w-full h-screen" alt="error-image" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col gap-6">
        <h2 className="w-full max-w-sm mx-auto text-xl sm:text-2xl">
          We can&apos;t found the page that you&apos;re looking for {":("}
        </h2>
        <p className="text-4xl sm:text-7xl font-bold text-amber-700">404</p>
        <button className="bg-secondary px-4 py-2 rounded-lg text-white hover:bg-secondary/90 transition-colors duration-300 cursor-pointer" onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </div>
  );
}
