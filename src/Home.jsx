import React from "react";

export default function Home(){
    
    return(
        <div className="container d-flex w-100 homeBody borders justify-content-around align-items-center">
          
                <div className="container homeLeftDiv  borders">
                    <h1>Hello,</h1>
                    <h2><b>Im</b> Sricharan Sai Krishna Phani</h2>
                    <h2>Web Developer</h2>
                    <p>Designing and developing impactful web solutions with precision and creativity.</p>
                    <button className="homeLeftDivButton  bShadow1">Contact Me  &nbsp;<i class="bi bi-person-lines-fill"></i></button>
 
                </div>
                <div className="container">
                <div className="container homeRightDiv borders">
                        <img src="pic_transparent.  png " alt="Temporarily Blocked" />
                </div>
                </div>

        
        </div>
    );
}