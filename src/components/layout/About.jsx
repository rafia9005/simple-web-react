import React from "react";
import { motion, useDragControls } from "framer-motion";
import logo from "../../assets/logo.png";

function About() {
  return (
    <div className="about" id="about">
      <motion.div className="box" style={{ cursor: "pointer" }}>
        <div className="img">
          <motion.img src={logo} alt="" />
        </div>
        <small>Full Stack Web Devoloper</small>
        <p>
          ``Hi, Saya adalah seorang Full Stack Web Devoloper 👋, saya adalah
          <br />
          soerang siswa kelas 9 SMP, saya sangat berminat tentang dunia
          <br />
          pemrogramman sejak kelas 8 SMP. saya juga seorang Freelance. saya
          <br />
          ingin menjadi Full Stack Devoloper yang sukses.``
        </p>
        <div className="btn">
          <a href="">More</a>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
