
import React from "react";




const Header = () => {


    return (
        <div>
            <div class="ui secondary pointing menu" style={{ marginTop: "10px", backgroundColor: "DodgerBlue" }} >
                <a class="active item" href="/" >
                    Home
                </a>
                <a class="item" href="/" >
                    EmojiClick
                </a>
                <a  class="item" href="/About" >
                   About
                </a>
                
                <div class="right menu">

                    <a  href="/SignUp" class="ui item" >
                        SignUp
                    </a>
                    <a class="ui item">
                        Logout
                    </a>
                </div>
            </div>
           
        </div>

    );

};


export default Header;