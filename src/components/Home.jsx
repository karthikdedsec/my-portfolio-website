import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      name="home"
      className="relative overflow-hidden w-full h-screen bg-[#0a1927]"
    >
      {/* container */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full"
      >
        <p className="text-pink-600 font-realtor">Hi, My name is</p>
        <h1 className=" text-4xl sm:text-7xl font-bold font-realtor text-[#ccd6f6]">
          Karthik Raj
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold font-realtor text-[#8892b0]">
          I'am a FullStack web Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] font-realtor">
          I,am a FullStack developer specializing in building and designing
          exceptional digital experiences. Currently, I'm focused on building
          responsive web applications.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="pl-1 ml-2" />
              </span>
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
export default Home;
