import React, { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [btnState, setBtnState] = useState(false);

  function navBtn() {
    setBtnState((btnState) => !btnState);
  }
  let navClass = btnState ? `active` : ``;

  const mode = () => {
    const body = document.body;
    if (body.classList.contains("active")) {
      body.classList.remove("active");
    } else {
      body.classList.add("active");
    }
  };

  return (
    <nav>
      <motion.h1>
        <a href="https://github.com/rafia9005" target="_blank">
          rafii.dev
        </a>
      </motion.h1>
      <motion.ul className={`${navClass}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Service</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </motion.ul>
      <motion.div className="btn">
        <i class="fa-solid fa-moon" id="mode" onClick={mode}>
          {" "}
          Mode
        </i>
        <i class="fa-brands fa-discord"></i>
        <i class="fa-brands fa-github"></i>
        <i class={`fa-solid fa-bars`} id="navbtn" onClick={navBtn}></i>
      </motion.div>
    </nav>
  );
}

export default Navbar;
