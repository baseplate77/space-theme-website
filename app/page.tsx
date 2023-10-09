"use client";
import styles from "./page.module.css";
import { useMousePostion } from "./hooks/userMousePostition";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { Dosis } from "next/font/google";
import useWindowDimensions from "./hooks/useWindowDimension";
import Link from "next/link";
const hillray = localFont({
  src: [
    {
      path: "../fonts/hillray/Hillray Extrude.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Home() {
  const { x, y } = useMousePostion();
  const [isHoverred, setIsHoverred] = useState(false);
  const [animationEnded, setAnimationEnded] = useState(false);
  const { width, height } = useWindowDimensions();
  const size = isHoverred ? 400 : 20;
  // console.log("hoverred :", isHoverred);

  return (
    <main
      className={`${styles.main} relative  overflow-hidden ${dosis.className}`}
      style={{ backgroundColor: "white" }}
    >
      <motion.div
        className={`absolute top-0 bottom-0 left-0 right-0 z-30 bg-white ${
          animationEnded ? "hidden" : ""
        }`}
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          opacity: 0,
          scale: 10,
        }}
        onAnimationComplete={() => {
          setAnimationEnded(true);
          console.log("Animate completed");
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 1,
          delay: 0.8,
        }}
      >
        <div className="flex items-center justify-center h-full font-medium text-2xl">
          <Image
            src={"/assets/Craftsmen.svg"}
            width={120}
            height={80}
            alt="craftsmen agency"
          />
        </div>
      </motion.div>
      <nav className=" sticky top-0 flex  p-4 items-center justify-center">
        <div className="font-medium ">NAYAN</div>
        <div className="grow" />
        <div className="block sm:hidden">
          <Image src={"/assets/menu.svg"} width={40} height={30} alt="menu" />
        </div>
        <div className="hidden gap-6 sm:flex">
          <div className="font-medium ">NEWS</div>
          <div className="font-medium ">OBSERVING</div>
          <div className="font-medium ">RESOURCES</div>
          <div className="font-medium ">COMMUNITY</div>
          <div className="font-medium ">ABOUT US</div>
        </div>
      </nav>

      <div
        className={`${styles["bg-animated-image"]} hidden sm:block  absolute top-[25%] left-10 w-56 h-56`}
        style={{ WebkitMaskSize: "230px" }}
      >
        <div className="bg-animation">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
      </div>

      <div
        className={`${styles["bg-animated-image"]} absolute top-[10%] right-10 w-56 h-56 overflow-hidden`}
        style={{ WebkitMaskSize: "230px" }}
      >
        <div className="bg-animation">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
      </div>
      <div
        className={`${styles["bg-animated-image"]} absolute -bottom-[100px] -left-[100px] w-[300px] h-[300px]  sm:w-[600px] sm:h-[600px] sm:-bottom-[300px] sm:-left-[200px] overflow-hidden`}
        style={{ WebkitMaskSize: width! <= 640 ? "605px" : "605px" }}
      >
        <div className="bg-animation">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
      </div>
      <div
        className={`${styles["bg-animated-image"]} absolute -bottom-[300px] -right-[250px] sm:w-[600px] sm:h-[600px] overflow-hidden`}
        style={{ WebkitMaskSize: "605px" }}
      >
        <div className="bg-animation">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
      </div>

      <motion.div
        // animate={animationControls}
        className="absolute "
        initial={{
          opacity: 0.2,
          scale: 0,
          x: "10px",
          y: "80px",
          rotate: -65,
        }}
        animate={{
          x: "350%",
          scale: 1,
          rotate: -10,
          opacity: 1,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 1.5,
          delay: 0.8,
        }}
      >
        <Image
          src={"/assets/saturn.png"}
          width={300}
          height={200}
          alt="saturn"
        />
      </motion.div>

      {/* telescope */}
      <div className="absolute -bottom-20 right-[30%] hidden  xl:block ">
        <Image
          src={"/assets/telescope2.png"}
          width={250}
          height={300}
          alt="telescope"
        />
      </div>

      {/* metoriod */}
      <motion.div
        className=" absolute bottom-28 left-20 hidden sm:block"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          type: "linear",
          // ease: "",
          duration: 10,
          repeat: Infinity,
        }}
      >
        <Image
          src={"/assets/meteoriod.png"}
          width={150}
          height={150}
          alt="meteoriod"
        />
      </motion.div>

      {/* UFO */}

      <motion.div
        className="absolute top-32 "
        initial={{
          x: "-90%",
          y: `${height! * 0.15}px`,

          rotate: 0,
        }}
        animate={{
          x: `${width! <= 640 ? -width! * 0.2 : width! * 0.15}px`,
          y: `${width! <= 640 ? height! * 0.05 : height! * 0}px`,
          scale: `${width! <= 640 ? 0.7 : 1}`,
          rotate: -25,
        }}
        transition={{
          type: "tween",
          ease: "backIn",
          duration: 2,
          delay: 0.8,
        }}
      >
        <Image src={"/assets/ufo.png"} width={300} height={300} alt="UFO" />
      </motion.div>

      {/* astronout */}
      <motion.div
        className="z-20 absolute right-10"
        initial={{
          scale: 1,
          rotate: -20,
          y: 0,
        }}
        animate={{
          scale: 0.9,
          x: ` ${width! <= 640 ? width! * 0.3 : width! * 0.1}px`,
          y: `${width! <= 640 ? height! * 0.5 : height! * 0.25}px`,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 2.5,
          delay: 0.8,
        }}
      >
        <Image
          className="z-10 overflow-clip"
          src={"/assets/astronaut.png"}
          width={600}
          height={600}
          alt="Astronaut"
        />
      </motion.div>
      <motion.div
        className={`${styles.mask}`}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - 56 - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
      >
        <div
          className="z-10"
          onMouseOver={() => setIsHoverred(true)}
          onMouseLeave={(e) => setIsHoverred(false)}
        >
          <div className="text-white text-center w-max flex gap-6 flex-col items-center justify-center ">
            <div className="font-medium text-6xl ">
              Mystery: What came before <br /> the big bang?
            </div>
            <div className="text-lg">
              Sprinkled with hand-drawn diagrams by Kinney, “An Infinity of
              Worlds” introduces readers to the science of <br />
              cosmic inflation and the evidence for it, as well as the theory’s
              shortcomings. The book also delves into weird but wondrous <br />
              consequences of cosmic inflation, like the idea, in a model of
              eternal inflation, that our universe is one of a possibly infinite
              number <br />
              of universes that we’ll never be able to see.
            </div>
          </div>
        </div>
        <div className="bg-animation overflow-hidden">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
      </motion.div>

      <motion.div
        className={`${styles.body} `}
        onMouseOver={() => console.log("Mouse Ente")}
      >
        <div className="flex flex-col gap-4 text-center items-start justify-center w-max  ">
          <p className={`font-bold text-6xl sm:text-8xl  ${hillray.className}`}>
            EXPLORE
            <br />
            THE SPACE
          </p>
          <p className="text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br /> Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s.
          </p>
          <p className="text-base font-medium"> Nayan Jagtap</p>
        </div>

        <div className="absolute sm:flex flex-col sm:flex-row gap-2 hidden  z-30 bottom-4 left-4 ">
          <div className="bg-white rounded-lg p-4">
            {" "}
            Design from <span className="font-bold">Dannniel</span>
          </div>
          <div className="bg-white rounded-lg p-4">
            {" "}
            Developed by{" "}
            <Link
              href={"https://twitter.com/NayanJagtap21"}
              target="_blank"
              className="font-bold underline"
            >
              Nayan
            </Link>
          </div>
        </div>

        <Link
          href={"https://www.craftsmen.agency/"}
          target="_blank"
          className="absolute flex gap-2  z-30 bottom-4 right-4 "
        >
          <div className="bg-white rounded-lg p-4">
            Contact us for <span className="font-bold underline">Work</span>
          </div>
        </Link>
      </motion.div>
    </main>
  );
}
