"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">Piyush Nichat</h1>
          {/* DESC */}
          <p className="md:text-xl">
            Hello, I&apos;m Piyush, a Brand Consultant with a strong background in
            Copywriting. I specialize in crafting comprehensive brand strategies
            and developing compelling brand narratives. I can help you translate
            your vision through strategic insights, clear communication, and
            creative design. Let&apos;s connect to explore how we can create an
            impactful and memorable brand presence for you.
            <br />
            <br />
            Together, we can ensure your brand stands out and thrives.
          </p>

          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            {/* <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button> */}

            <Link href="/about" passHref>
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>

            {/* <button className="p-4 rounded-lg ring-1 ring-black">
            Book a call
            </button> */}

            <Link href="/contact" passHref>
              <button className="p-4 rounded-lg ring-1 ring-black">
                Book a call
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
