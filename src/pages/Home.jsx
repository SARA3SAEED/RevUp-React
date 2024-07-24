import React, { useState, useEffect } from "react";
import Header from "../components/comHome/Header";
import Footer from "../components/Footer";
import Brand from "../components/comHome/Brand";
import Banner from "../components/comHome/Banner";
import Feature from "../components/comHome/Feature";
import Header2 from "../components/comHome/Header2";
import Header3 from "../components/comHome/Header3";
import SectionFooter from "../components/SectionFooter";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Loader from "../components/Loader";
import Nav2 from "../components/Nav2";

export default function Home() {
  const [featureRef, featureInView] = useInView({ triggerOnce: true });
  const [header3Ref, header3InView] = useInView({ triggerOnce: true });
  const [header2Ref, header2InView] = useInView({ triggerOnce: true });
  const [bannerRef, bannerInView] = useInView({ triggerOnce: true });
  const [brandRef, brandInView] = useInView({ triggerOnce: true });
  const [isLoading, setIsLoading] = useState(true);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setIsLoading(false);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Header />

      <motion.div
        id="feature-section"
        ref={featureRef}
        variants={fadeInUp}
        initial="hidden"
        animate={featureInView ? "visible" : "hidden"}
      >
        <Feature />
      </motion.div>

      <motion.div
        ref={header3Ref}
        variants={fadeInUp}
        initial="hidden"
        animate={header3InView ? "visible" : "hidden"}
      >
        <Header3 />
      </motion.div>

      <motion.div
        ref={header2Ref}
        variants={fadeInUp}
        initial="hidden"
        animate={header2InView ? "visible" : "hidden"}
      >
        <Header2 />
      </motion.div>

      <motion.div
        ref={bannerRef}
        variants={fadeInUp}
        initial="hidden"
        animate={bannerInView ? "visible" : "hidden"}
      >
        <Banner />
      </motion.div>

      <motion.div
        ref={brandRef}
        variants={fadeInUp}
        initial="hidden"
        animate={brandInView ? "visible" : "hidden"}
      >
        <Brand />
      </motion.div>
      <hr />
      <SectionFooter />
      <Footer />
    </>
  );
}
