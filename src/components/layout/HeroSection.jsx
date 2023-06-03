import React from "react";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [move, setMove] = React.useState(false);
  return (
    <div className="hero" id="home">
      <motion.div
        className="box"
        animate={{ x: [-1050, 0] }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.5, delay: 1 }}
      >
        <small>Hi, I am Ahmad Rafi'i 👋</small>
        <h1>
          Full Stack <br /> Web{" "}
          <span>
            Devoloper <i class="fa-solid fa-code"></i>
          </span>
        </h1>
        <p>
          Hi, saya adalah seorang Full Stack Web Devoloper dan UI/UX Design,
          <br />
          saya adalah seorang pelajar dari SMP yang ada di Kabupaten Malang,
          <br />
          saya sangat menyukai hal yang berbau teknologi dan komputer. saya
          <br />
          belajar coding sejak kelas 8 SMP.
        </p>
        <div className="btn">
          <motion.a
            href="https://github.com/rafia9005"
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            <i class="fa-brands fa-github"></i> Github
          </motion.a>
          <motion.a
            href="https://wa.me/6282143338737"
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            Contact <i class="fa-solid fa-code-branch"></i>
          </motion.a>
        </div>
      </motion.div>
      <motion.div
        className="img"
        animate={{ x: [1050, 0] }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{
            scale: 0.8,
            borderRadius: "100%",
          }}
          src={logo}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
