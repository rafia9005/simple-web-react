import React from "react";

function Service() {
  return (
    <>
    <center><p style={{fontSize: '18px'}}>Jasa Website</p></center>
      <div className="service">
        <div className="box">
          <small>Company Website</small>
          <div className="icon">
            <i class="fa-solid fa-building"></i>
          </div>
          <ul>
            <li>React Js</li>
            <li>Next Js</li>
            <li>Vue Js</li>
            <li>TailwindCSS</li>
            <li>Laravel</li>
          </ul>
        </div>
        <div className="box">
          <small>Portofolio Website</small>
          <div className="icon">
            <i class="fa-solid fa-mug-hot"></i>
          </div>
          <ul>
            <li>React Js</li>
            <li>Next Js</li>
            <li>Vue Js</li>
            <li>TailwindCSS</li>
          </ul>
        </div>
        <div className="box">
          <small>Joki Tugas</small>
          <div className="icon">
            <i class="fa-solid fa-book"></i>
          </div>
          <p>Custom sesuai bahasa yang di gunakan.</p>
        </div>
      </div>
    </>
  );
}

export default Service;
