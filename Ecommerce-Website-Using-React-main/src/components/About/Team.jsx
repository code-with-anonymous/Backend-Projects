import React from "react";

const Team = () => {
  return (
    <>
      <div className="container">
        <div
          className="text-center team" 
        >
          <h1 style={{ fontFamily: "Playfair-Display", fontSize: "50px" }}>
            We Pride Ourselves On Have A <br /> Team Of Highly Skilled
          </h1>
          <p>Preorder now to receive exclusive deals & gifts</p>
        </div>

        <div className="row" style={{ paddingBottom: "100px" }}>
          <div className="col-md-4 team-member text-center">
            <img
              src="http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/aa.jpg"
              className="rounded mb-4"
              alt="Team Member 1"
            />
            <p>Founder, Chief Creative</p>
            <h4 style={{ fontFamily: "playfair-display" }}>John Doe</h4>
          </div>
          <div className="col-md-4 team-member text-center">
            <img
              src="http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/aaa.jpg"
              className="rounded mb-4"
              alt="Team Member 2"
            />
            <p>Valeriia Nadopta</p>
            <h4 style={{ fontFamily: "playfair-display" }}>Founder, COO</h4>
          </div>
          <div className="col-md-4 team-member text-center">
            <img
              src="http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/aaaa.png"
              className="rounded mb-4"
              alt="Team Member 3"
            />
            <p>Jennifer C</p>
            <h4 style={{ fontFamily: "playfair-display" }}>Founder, CEO</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
