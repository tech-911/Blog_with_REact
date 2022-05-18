import React from "react";
import Nav from "../../components/nav";
import Human1 from "../../assets/human1.png";
import Gallery from "../../components/gallery";
import LatestArticles from "../../components/latest_articles"
import Tilt from "react-tilt";
import "./Home.css";
const Home = () => {
  return (
    <div>
      {/* ========================Navigation Bar============================= */}
      <Nav />
      <div className="mt-20">
        <div className="w-full h-[50px] bg-[#111827]"></div>
        {/* =======================Jumbotron============================== */}
        <div className="custom-background-1">
          <div className="container mx-auto pt-6 flex items-center justify-between">
            <div className="w-[50%]">
              <p className="custom-text-1 font-Fira Sans Condensed'">
                Inspiration is everywhere
              </p>
              <p className="font-Inter text-[#E5E7EB] mt-8">
                There is no passion to be found playing small in settling for a
                life that is less than the one you are capable of living
              </p>
              <div className="w-[120px] h-[50px] mt-8 flex items-center justify-center rounded-[5px] custom-button-1 text-[white] font-semibold font-Inter">
                Get started
              </div>
            </div>
            <div>
              <Tilt options={{ max: 5 }}>
                <img src={Human1} alt="not available" />
              </Tilt>
            </div>
          </div>
        </div>

        {/* =======================Gallery============================== */}
        <Gallery />
        {/* =======================Lates Articles============================== */}
        <LatestArticles/>
      </div>
    </div>
  );
};

export default Home;
