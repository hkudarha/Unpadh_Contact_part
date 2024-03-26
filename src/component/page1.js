import React from "react";
import "./page1.css";

function Page1(){
return(
        <>
        <div id="nav">
            <div id="n-left">
                <img src="logo.jpeg" alt=""></img>
            </div>
            <div id="n-cntr">
                <a href="#">Programs <i class="ri-arrow-down-s-line"></i></a>
                <a href="#">Learn courses <i class="ri-arrow-down-s-line"></i></a>
                <a href="#">Become Instructor </a>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
            </div>
            <div id="n-right">
                {/* <i class="ri-shopping-cart-line"></i> */}
                <a href="#">Login</a>
                <button>Sign Up</button>
            </div>
        </div>
        <div id="contact">
            
            <h1>
                Contact
            </h1>
            <p>Relatively permanent change in behavior or potential behavior as a 
                result of the or practice occurring learning is the result of the 
                interaction between stimulus
            </p>
        </div>
        <div id="main-contant">
            
            <div id="c-left">
            <h5>Home / <span>Contact Us</span></h5>
                <h1>Lets,Talk</h1>
                <p>We Do Normally Get Back Within 48hrs. <br></br>
                Please Leave Massage.</p>
                 <div class="input-text">
                        <input type="text" placeholder="Name" ></input>
                        <input type="text" placeholder="Email" ></input>
                 </div>
                <div class="input-text">
                        <input type="password" placeholder="xxxxx" ></input>
                        <input type="text" placeholder="subject" ></input>
                 </div>
                <textarea name="address" placeholder="Massage"></textarea>
                <button>Post Comment <i class="ri-arrow-right-line"></i></button>
            </div>  
            <div id="c-right">
                <div id="information">
                    <h1>Contact info</h1>
                    <div className="info">
                        <i class="ri-map-pin-line"></i>
                        <div className="text">
                                <h6>Location</h6> 
                                <p>01020A EI Camino Real, <br></br> 
                                Menio Park, CA USA*94025</p>
                        </div>
                    </div>
                    <div className="info">
                        <i class="ri-mail-line"></i>
                        <div className="text">
                                <h6>Mail</h6>
                                <p>info@Theunpadh.com</p>
                        </div>
                    </div>
                    <div className="info">
                    <i class="ri-phone-line"></i>
                        <div className="text">
                                <h6>Phone No:</h6>
                                <p>+11) 256 658 957 658</p>
                        </div>
                    </div>
                    <h5>Follow Us</h5>
                
                    <div id="icon">
                        <i class="ri-facebook-fill"></i>
                        <i class="ri-instagram-line"></i>
                        <i class="ri-twitter-fill"></i>
                        <i class="ri-youtube-line"></i>
                    </div>
                       
                </div>
            </div>
        </div>
        </>
        )
}
export default Page1;
    


