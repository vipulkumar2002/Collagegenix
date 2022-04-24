import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cards.css";
import { BsLinkedin } from "react-icons/bs";

const InternshipCard = () => {
  const [profiles, setProfiles] = useState([]);
  // console.log(profiles);
  useEffect(() => {
    getAllProfiles();
  }, []);

  async function getAllProfiles() {
    try {
      const profiles = await axios.get(
        `http://localhost:4040/profiles/internships`
      );
      // console.log(profiles.data.internships);
      setProfiles(profiles.data.internships);
    } catch (error) {
      console.log("Something went wrong");
    }
  }
  return (
    <>
      {profiles.map((profile, i) => {
        return (
          <div className="card main-container" key={i}>
            <div className="div_1 text-muted">
              <div className="img-div">
                <img
                  src={profile.image_url}
                  className="card-image"
                  id="imageUrl"
                  alt="img"
                />
                <img src="" alt="" sizes="" srcset="" />
                <div className="text-center ">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary mt-2 btn-sm btn "
                  >
                    <BsLinkedin className="text-md" />
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="card-body">
                <h6 id="personName" name="person_Name">
                  {profile.person_name}
                </h6>
                <hr />
                <h6 id="jobRole" name="job_Role">
                  {profile.job_role}
                </h6>
                <hr />
                <h6 id="companyName"> {profile.company_name}</h6>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default InternshipCard;
