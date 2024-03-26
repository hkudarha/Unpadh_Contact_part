import React from "react";
import "./contact-footer.css";
function Footer(){
    return(
            <>
            <div id="f-content">
                <div class="box" id="box1">
                    <img src="logo rmbg.png" alt=""></img>
                    <p>Unpadh is an open, online marketplace to access online courses where anyone can upload and sell a class. You don’t need to venture far or browse the different websites to get the quality technology and management course.
                    </p>
                    <div id="icon">
                        <i class="ri-facebook-fill"></i>
                        <i class="ri-instagram-line"></i>
                        <i class="ri-twitter-fill"></i>
                        <i class="ri-youtube-line"></i>
                    </div>
                </div>
                <div class="box" id="box2">
                    <h1>Links</h1>
                    <a href="#">Home</a> <br></br>
                    <a href="#">About</a> <br></br>
                    <a href="#">Programs</a> <br></br>
                    <a href="#">Test Series</a> <br></br>
                    <a href="#">Contact</a> <br></br>
                </div>
                <div class="box" id="box3">
                    <h1>About</h1>
                    <a href="#">Partners</a> <br></br>
                    <a href="#">Careers</a> <br></br>
                    <a href="#">Press</a>  <br></br>
                    <a href="#">Community</a><br></br>
                </div>
                <div class="box" id="box4">
                    <h1>Out Office</h1>
                    <div class="details">
                       <h6>USA</h6>
                       <h6>01020A EI Comino Real, Menlo Park , <br></br>
                       Cslifornia - USA 94025, US</h6>
                    </div>
                    <div class="details">
                       <h6>India</h6>
                       <h6>xxx xxxxxxxxxxxxxx xxx<br></br>
                      xxxxxxxxxxxxxxxxxxx xxx</h6>
                    </div>
                </div>
            </div>
            <div id="f-btm">
            <p>© 2022 Unpadh.com All rights reserved.</p>
                <div id="text">
                    <a href="#">Privacy</a>
                    <a href="#">Security</a>
                    <a href="#">Terms</a>
                </div>

            </div>
            </>
        )
}
export default Footer;
