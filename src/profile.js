import React from 'react';
import './App.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import instagram from './img/instagram.png';
import avi from './img/avi.png';
import Frame from './img/Frame.png';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";




class Profile extends React.Component{
  render(){
    return (
        <div className="profile-container">
       <div className="profile-box">
          <div className="profile-title-icon">
          <Link to="/sign-in"><IoIosArrowRoundBack className="back-icon"/></Link>
            <p>My Profile</p>
          </div>
          <div className="profile-pic">
            <div className="profile-box-one">
            <img classname="avi" src={avi}/>
            <div className="profile-name">
              <ul>
                <li>Mark Lee</li>
                <li className="detail">Female</li>
                <li className="detail">Address</li>
              </ul>
            </div>
            </div>
            
            <p className="edit">Edit</p>
          </div>
          <div className="social-media">
          <div>
            <p>1.2K</p>
            <div className="social-media-icon">
              <FaYoutube className="youtube sm"/><p>Youtube</p>
            </div>
          </div>
          <div>
          <p>+Connect</p>
          <div className="social-media-icon">
            <FaFacebookSquare className="facebook sm"/><p>Facebook</p>
          </div>
          </div>
          <div>
          <p>Connecting...</p>
          <div className="social-media-icon">
            <img src={instagram} className="instagram sm"/><p>Instagram</p>
          </div>
          </div>
          </div>
          <div className="intro">
            <p className="inline-start">Introduction</p>
            <p className="inline-end">Edit</p>
          </div>
          <div className="intro-text">
            <p>I mean, you already have a blog post you want to write. Can't you just dive in and write it? Why all the pomp and circumstance with this dag-blasted introduction?</p>
          </div>
          <div className="notif intro">
            <p className="inline-start">Notification</p>
            <div className="inline">
              <div>10</div>
              <IoIosArrowForward className="forward"/>
            </div>
          </div>
          
          <div className="intro">
            <p className="inline-start">Gallery</p>
          </div>
          <div className="image-grid">
            <div>
            <img className="frame"  src={Frame}/>
            <section>
              <IoIosHeart className="heart"/>
            <p>(15000)</p>
            </section>
            </div>
            <div>
            <img className="frame" src={Frame}/>
            <section>
              <IoIosHeart className="heart"/>
            <p>(15000)</p>
            </section>
            </div>
            <div>
            <img className="frame" src={Frame}/>
            <section>
              <IoIosHeart className="heart"/>
            <p>(15000)</p>
            </section>
            </div>
            <div>
            <img className="frame" src={Frame}/>
            <section>
              <IoIosHeart className="heart"/>
            <p>(15000)</p>
            </section>
            </div>
            <div>
            <img className="frame" src={Frame}/>
            <section>
              <IoIosHeart className="heart"/>
            <p>(15000)</p>
            </section>
            </div>
            <div>
            <img className="frame" src={Frame}/>
            <section>
              <IoIosHeart className="heart"/>
            <p>(15000)</p>
            </section>
            </div>
          
         
          </div>
       </div>
      </div>
        );
    }
  }
  
  
  export default Profile;