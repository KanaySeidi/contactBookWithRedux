import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="contact-hero">
          <img src="https://i.ytimg.com/vi/xFMe7l11BMw/hqdefault.jpg" alt="" />
          <svg
            width="70"
            height="66"
            viewBox="0 0 70 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35 65.2L30.1 60.3C11.9 44.2 0 33.35 0 20.05C0 9.19996 8.4 0.799957 19.25 0.799957C25.2 0.799957 31.15 3.59996 35 8.14996C38.85 3.59996 44.8 0.799957 50.75 0.799957C61.6 0.799957 70 9.19996 70 20.05C70 33.35 58.1 44.2 39.9 60.3L35 65.2Z"
              fill="#D32F2F"
            />
          </svg>
        </div>
        <div className="contact-inp-section">
          <form>
            <input type="text" name="" id="" placeholder="First name" />
            <input type="text" name="" id="" placeholder="Last name" />
            <input type="text" name="" id="" placeholder="City" />
            <input type="text" name="" id="" placeholder="Country" />
            <input type="number" name="" id="" placeholder="Phone Number" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="text" name="" id="" placeholder="Image" />
            <button>Save Contact</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainPage;
