import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/layout/HeroSection";
import About from "../components/layout/About";
import { BarLoader } from "react-spinners";
import Home from "../components/Home";


const Index = () => {
    const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      <div>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <div>
              <BarLoader
                color="#1b1d24"
                loading
                size={200}
                cssOverride={{
                    width: '100%'
                }}
                speedMultiplier={1}
              />
              <h1 style={{ textAlign: "center" }}>Loading</h1>
            </div>
          </div>
        ) : (
          <Home/>
        )}
      </div>
    </>
  );
};

export default Index;
