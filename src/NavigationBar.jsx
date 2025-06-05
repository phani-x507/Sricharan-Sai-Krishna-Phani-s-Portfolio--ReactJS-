import React from "react";

export default function NavigationBar(){
    return(
        <div className="navBar borders container-flex d-flex    justify-content-between" >
            <div className="borders navBar_LeftDiv px-4 py-2 " >
                <h3 className="">Home</h3>
            </div>

            <div className="navSearchBar borders d-flex justify-content-center align-items-center">
                <form action="">
                    <input className="navSearchBar_text" type="text" placeholder="Search Here" /> <button className="btn"><i class="bi bi-search"></i> </button>
                    

                </form>
                 </div>
            <div className="borders px-2 py-2 ">          
                <button className="custNavBtn">Home</button>
                <button className="custNavBtn">About</button>
                <button className="custNavBtn">Skills</button>
                <button className="custNavBtn">Work</button>
                <button className="custNavBtn">Experience</button>
                <button className="custNavBtn">Contact</button>
            </div>
        </div>
    )
}