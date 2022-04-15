import React from 'react'
import './TeamCard.css'
import { Link} from 'react-router-dom'

function TeamCard(props){
    return(<>
    <div className="container">
    <img src={props.img} alt="" />
    <h5>{props.name}</h5>
    <p>{props.Title}</p>
    <h4>{props.position}</h4>


    <div className='Team-icons'>
            <a href="https://www.facebook.com/profile.php?id=100079480882277" className="fa-icon">
              <i className="fab fa-facebook-f"> </i>
            </a>
            
            <a href="https://www.instagram.com/vishal_patel_0803/" className="ins-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a  href="https://www.linkedin.com/in/vishal-patel-0937721a7/" className="lin-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/YVishal-Patel/" className="git-icon">
              <i className="fab fa-github"></i>
            </a>
          </div>
    </div>
    </>)
}
export default TeamCard;