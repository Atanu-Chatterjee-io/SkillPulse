import React from "react";
import { motion } from "motion/react";
import { RiRobot2Fill } from "react-icons/ri";
import { HiSparkles } from "react-icons/hi";
import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Footer({ setShowAuth }) {
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state?.user || {});

  return (
    <footer className="w-full bg-[#F8FAFC] pt-14 pb-16 px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* TOP CTA CARD WITH "Pacific Dream" GRADIENT (#34e89e to #0f3443) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#34e89e] to-[#0f3443] p-10 sm:p-14 text-center text-white shadow-xl shadow-teal-900/15"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-sm">
            Prepared to conquer your next interview?
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal">
            Step up your performance, polish your responses, and secure your
            dream role with intelligent practice.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => {
                if (!userData && setShowAuth) {
                  setShowAuth(true);
                  return;
                }
                navigate("/interview");
              }}
              className="bg-white text-slate-900 font-semibold px-7 py-3 rounded-full hover:bg-slate-100 transition-all duration-200 shadow-md text-sm flex items-center gap-2"
            >
              Start Interview &rarr;
            </button>

            <button
              onClick={() => {
                if (!userData && setShowAuth) {
                  setShowAuth(true);
                  return;
                }
                navigate("/history");
              }}
              className="bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20 px-7 py-3 rounded-full transition-all duration-200 text-sm backdrop-blur-sm"
            >
              View History
            </button>
          </div>
        </motion.div>

        {/* BOTTOM LIGHT FOOTER CARD */}
        <div className="bg-white rounded-[28px] border border-slate-200/80 p-8 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-8 border-b border-slate-100">
            {/* Brand Info */}
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-slate-900 text-white p-2.5 rounded-xl flex items-center justify-center shadow-md">
                  <RiRobot2Fill size={20} />
                </div>
                <span className="font-bold text-xl text-slate-900 tracking-wide">
                  SkillPulse
                </span>
                <span className="bg-teal-50 border border-teal-200/60 text-teal-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <HiSparkles size={12} /> Powered by AI
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                An advanced AI-driven mock interview ecosystem built to sharpen
                your technical acumen, enhance articulation, and boost
                professional poise.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl border border-slate-200/80 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm"
              >
                <FaXTwitter size5 size={15} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl border border-slate-200/80 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl border border-slate-200/80 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm"
              >
                <FaLinkedinIn size={15} />
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
            <div>
              &copy; {new Date().getFullYear()} SkillPulse &bull; Developed by{" "}
              <span className="text-slate-700 font-medium">
                Atanu Chatterjee
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-slate-600 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-slate-600 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-slate-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
