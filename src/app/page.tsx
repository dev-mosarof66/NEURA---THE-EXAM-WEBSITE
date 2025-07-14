"use client";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { FiChevronsRight } from "react-icons/fi";
import axios from "axios";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/store/userSlice";
import { RootState } from "@/store/store";

export default function LandingPage() {
  const user = useSelector((state: RootState) => state.user.data);
  const dispatch = useDispatch();
  console.log("User from Redux:", user);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const fetchUserRole = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const response = await axios.get("/api/auth", {
            params: { email: user.email },
          });
          console.log("User role fetched:", response.data);
          const role = response.data.role;

          const updatedUser = {
            ...response.data.user,
            role: role,
          };

          dispatch(setUser(updatedUser));

          if (role === "Teacher") {
            router.push("/teacher/dashboard");
          } else if (role === "Student") {
            router.push("/student/dashboard");
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
        }
      }
    });
  };

  useEffect(() => {
    fetchUserRole();
  }, []);

  // throw new Error("This is a test error for the error boundary");
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

        <Header setIsOpen={setIsOpen} />
        <Hero setIsOpen={setIsOpen} />
        <About />
        <Footer />
      </div>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed top-0 left-0 w-full h-full bg-black/70 z-40"
        >
          <div className=" max-w-5xl mx-auto h-full flex items-center justify-center">
            <div className="p-6 rounded-lg shadow-lg max-w-md w-full h-64 bg-gray-800 text-white text-center flex flex-col gap-6">
              <div>
                <h2 className="text-xl font-bold">Welcome to Neura</h2>
                <p>How you want to continue with us ?</p>
              </div>
              <div className="flex flex-col gap-2">
                <div
                  onClick={() => setSelectedOption("Teacher")}
                  className={`w-full py-2 ${
                    selectedOption === "Teacher"
                      ? "bg-secondary"
                      : "border border-gray-600"
                  } transition-colors duration-300 cursor-pointer`}
                >
                  As a Teacher
                </div>
                <div
                  onClick={() => setSelectedOption("Student")}
                  className={`w-full py-2 ${
                    selectedOption === "Student"
                      ? "bg-secondary"
                      : "border border-gray-600"
                  } transition-colors duration-300 cursor-pointer`}
                >
                  As a Student
                </div>
              </div>
              <div className="flex items-center justify-end">
                <button
                  onClick={() =>
                    selectedOption !== "" &&
                    router.push(
                      selectedOption === "Teacher"
                        ? "/teacher/login"
                        : "/student/login"
                    )
                  }
                  className="flex items-center gap-2 group hover:text-white/90 cursor-pointer transition duration-300 delay-75"
                >
                  <p>Next</p>
                  <FiChevronsRight
                    size={22}
                    className="group-hover:translate-x-1 transition-transform duration-300 delay-75"
                  />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
