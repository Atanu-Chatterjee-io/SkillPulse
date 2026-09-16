import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import { RiRobot2Fill } from "react-icons/ri";
import { BsMic, BsClock, BsBarChart, BsFileEarmarkText } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthModel from "../components/AuthModel";
import hrImg from "../assets/HR.png";
import techImg from "../assets/tech.png";
import confidenceImg from "../assets/confi.png";
import creditImg from "../assets/credit.png";
import evalImg from "../assets/ai-ans.png";
import resumeImg from "../assets/resume.png";
import pdfImg from "../assets/pdf.png";
import analyticsImg from "../assets/history.png";
import Footer from "../components/Footer";

function Home() {
  const { userData } = useSelector((state) => state.user);
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#f8fafc] flex flex-col overflow-hidden font-sans">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 pointer-events-none z-0" />

      {/* Exact Glow Positioning as per your screenshot */}
      <div className="absolute top-12 left-10 w-[450px] h-[450px] bg-gradient-to-br from-blue-200/60 via-indigo-100/30 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-[38%] right-0 w-[450px] h-[450px] bg-gradient-to-tl from-emerald-200/50 via-teal-100/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      <Navbar />

      <div className="relative flex-1 px-6 py-20 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top Tag */}
          <div className="flex justify-center mb-6">
            <div className="bg-white border border-slate-200/80 shadow-sm text-slate-700 text-sm px-4 py-2 rounded-full flex items-center gap-2">
              <HiSparkles size={16} className="text-emerald-500" />
              AI Powered Smart Interview Platform
            </div>
          </div>

          <div className="text-center mb-28">
            {/* Main Heading with Pacific Dream Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto"
            >
              Practice Interviews <br />
              <span className="bg-gradient-to-r from-[#34e89e] to-[#0f3443] bg-clip-text text-transparent">
                With AI Intelligence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Role-based mock interviews with smart follow-ups and an AI
              Assistant — built to make you interview-ready.
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <motion.button
                onClick={() => {
                  if (!userData) {
                    setShowAuth(true);
                    return;
                  }
                  navigate("/interview");
                }}
                whileHover={{ opacity: 0.9, scale: 1.03 }}
                whileTap={{ opacity: 1, scale: 0.98 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition shadow-md font-medium flex items-center gap-2"
              >
                Start Interview &rarr;
              </motion.button>

              <motion.button
                onClick={() => {
                  if (!userData) {
                    setShowAuth(true);
                    return;
                  }
                  navigate("/history");
                }}
                whileHover={{ opacity: 0.9, scale: 1.03 }}
                whileTap={{ opacity: 1, scale: 0.98 }}
                className="bg-white border border-gray-300 text-slate-800 px-8 py-3 rounded-xl hover:bg-gray-50 transition font-medium shadow-sm"
              >
                View History
              </motion.button>
            </div>
          </div>

          {/* Steps Section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-28">
            {[
              {
                icon: <RiRobot2Fill size={24} />,
                step: "STEP 1",
                title: "Role & Experience Selection",
                desc: "AI adjusts difficulty based on selected job role.",
              },
              {
                icon: <BsMic size={24} />,
                step: "STEP 2",
                title: "Smart Voice Interview",
                desc: "Dynamic follow-up questions based on your answers.",
              },
              {
                icon: <BsClock size={24} />,
                step: "STEP 3",
                title: "Timer Based Simulation",
                desc: "Real interview pressure with time tracking.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 + index * 0.2 }}
                whileHover={{ rotate: 0, scale: 1.06 }}
                className={`
                  relative bg-white rounded-3xl border-2 border-green-100 
                  hover:border-green-500 p-10 w-80 max-w-[90%] shadow-md hover:shadow-2xl 
                  transition-all duration-300 z-10
                  ${index === 0 ? "rotate-[-4deg]" : ""}
                  ${index === 1 ? "rotate-[3deg] md:-mt-6 shadow-xl" : ""}
                  ${index === 2 ? "rotate-[-3deg]" : ""}
                `}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white border-2 border-green-500 text-green-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                  {item.icon}
                </div>
                <div className="pt-10 text-center">
                  <div className="text-xs text-green-600 font-semibold mb-2 tracking-wider">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-3 text-lg text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Advanced AI Capabilities */}
          <div className="mb-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-semibold text-center mb-16 text-slate-900"
            >
              Advanced AI <span className="text-green-600">Capabilities</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  image: evalImg,
                  icon: <BsBarChart size={20} />,
                  title: "AI Answer Evaluation",
                  desc: "Scores communication, technical accuracy and confidence.",
                },
                {
                  image: resumeImg,
                  icon: <BsFileEarmarkText size={20} />,
                  title: "Resume Based Interview",
                  desc: "Project-specific questions based on uploaded resume.",
                },
                {
                  image: pdfImg,
                  icon: <BsFileEarmarkText size={20} />,
                  title: "Downloadable PDF Report",
                  desc: "Detailed strengths, weaknesses and improvement insights.",
                },
                {
                  image: analyticsImg,
                  icon: <BsBarChart size={20} />,
                  title: "History & Analytics",
                  desc: "Track progress with performance graphs and topic analysis.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all z-10"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 flex justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto object-contain max-h-64"
                      />
                    </div>

                    <div className="w-full md:w-1/2">
                      <div className="bg-green-50 text-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold mb-3 text-xl text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Multiple Interview Modes */}
          <div className="mb-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-semibold text-center mb-16 text-slate-900"
            >
              Multiple Interview <span className="text-green-600">Modes</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  img: hrImg,
                  title: "HR Interview Mode",
                  desc: "Behavioral and communication based evaluation.",
                },
                {
                  img: techImg,
                  title: "Technical Mode",
                  desc: "Deep technical questioning based on selected role.",
                },
                {
                  img: confidenceImg,
                  title: "Confidence Detection",
                  desc: "Basic tone and voice analysis insights.",
                },
                {
                  img: creditImg,
                  title: "Credits System",
                  desc: "Unlock premium interview sessions easily.",
                },
              ].map((mode, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all z-10"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="w-1/2">
                      <h3 className="font-semibold text-xl mb-3 text-slate-900">
                        {mode.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {mode.desc}
                      </p>
                    </div>

                    <div className="w-1/2 flex justify-end">
                      <img
                        src={mode.img}
                        alt={mode.title}
                        className="w-28 h-28 object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}

      {/* Footer wrapped with relative and solid background z-20 to block grid overlay */}
      <div className="relative z-20 bg-white">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
