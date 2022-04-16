import React from "react";
import "./Team.css";
import TeamCard from "./TeamCard";
import img1 from "./TeamAssets/Image1.jpeg";

function Team() {
  return (
    <>
      <div className="team">
        <div className="team-heading">
          <h1>Meet Our Team</h1>
        </div>
        <div className="team-item">
          <div className="team-items-container">
            <TeamCard
              name="Vishal Patel"
              img={img1}
              Title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptatum ullam optio similique dolorem fuga, ratione iure architecto libero laborum."
              position="Frontend Developer"
              faLink="https://www.facebook.com/profile.php?id=100079480882277"
              linkeLink="https://www.linkedin.com/in/vishal-patel-0937721a7/"
              gitLink="https://github.com/YVishal-Patel/"
            />
          </div>
          <div className="team-items-container">
            <TeamCard
              name="Vipul  Patel"
              img={img1}
              Title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptatum ullam optio similique dolorem fuga, ratione iure architecto libero laborum."
              position="Backend Developer"
            />
          </div>
          <div className="team-items-container">
            <TeamCard
              name="Himanshi Lakhera"
              img={img1}
              Title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptatum ullam optio similique dolorem fuga, ratione iure architecto libero laborum."
              position="Frontend Developer"
              abc="https://stackoverflow.com/"
            />
          </div>
          <div className="team-items-container">
            <TeamCard
              name="Keshav Kasera"
              img={img1}
              Title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptatum ullam optio similique dolorem fuga, ratione iure architecto libero laborum."
              position="Web Designer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Team;
