import React from "react";

function Footer() {
  return (
    <footer>
      <ul className="sosial">
        <li>
          <a href="">
            <i class="fa-brands fa-discord"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <p>Copyright &copy; 2023 by <a href="https://rafii.site">rafii.site</a></p>
    </footer>
  );
}

export default Footer;
