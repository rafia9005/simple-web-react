import React from "react";
import { motion } from "framer-motion";

function TimeLine() {
  return (
    <section className="timeline-section">
      <h1>Perjalanan ku</h1>
      <div className="timeline-items">
        <motion.div
          className="timeline-item"
          data-aos="fade-right"
          whileHover={{ scale: 1.02 }}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-date">2021</div>
          <div className="timeline-content">
            <h3>HTML basic</h3>
            <p>
              Aku pertama kali mengenal HTML itu pada saat tahun 2021, saat itu
              aku sedang melihat channel WPU yang membahas tentang pengembangan
              website
            </p>
          </div>
        </motion.div>
        <motion.div
          className="timeline-item"
          data-aos="fade-left"
          whileHover={{ scale: 1.02 }}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-date">2022</div>
          <div className="timeline-content">
            <h3>Front End Devoloper</h3>
            <p>
              Sejak tahun 2022 aku mulai mendalami tentang Front End Devoloper.
              dan saat itu aku pertama kali nya memiliki laptop. dan di situ aku
              mulai belajar
            </p>
          </div>
        </motion.div>
        <motion.div className="timeline-item" data-aos="fade-right"whileHover={{scale: 1.02}}>
          <div className="timeline-dot"></div>
          <div className="timeline-date">2022</div>
          <div className="timeline-content">
            <h3>Back End Devoloper</h3>
            <p>
              pada bulan september aku mulai mendalami ilmu Back End ku yaitu
              tentang PHP, Mysql dan Node Js. dari situ banyak terjadi error dan
              bug, tapi harus tetap semangat
            </p>
          </div>
        </motion.div>
        <motion.div className="timeline-item" data-aos="fade-left" whileHover={{scale: 1.02}}>
          <div className="timeline-dot"></div>
          <div className="timeline-date">2023</div>
          <div className="timeline-content">
            <h3>Full Stack Devoloper</h3>
            <p>
              Dari sini lah aku belajar, bahwa kita mau belajar pasti kita bisa,
              asal ada niat, doa dan semangat belajar. jadi tetap Semangat!!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TimeLine;
