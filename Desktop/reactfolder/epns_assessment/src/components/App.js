import React from "react";
import Image from "./Image";
import Image1 from "./Image1";
import Header from "./Header";
import About from "./About";
import Route from "./Route";

import SignUp from "./SignUp";






class App extends React.Component {


    render() {
        return (
            <div>
                
                  <Header />
                  <Route path="/SignUp">
                     <SignUp />
                  </Route>
                  <Route path="/About">
                     <About />
                  </Route>
                  

                
               
              <Route path="/" exact>
              <div className="ui container" style={{ padding: "15px", marginLeft: "50px", marginTop: "20% " }}>
                    <span style={{ marginLeft: "200px" }}  >
                        <Image1 src="/images/Like.png" text="Like" />


                    </span>


                    <span >
                        <Image1 src="/images/Love.png" text="Love" />
                    </span>
                    <span  >
                        <Image1 src="/images/Haha.png" text="Haha" style={{ padding: "20px" }} />
                    </span>
                    <span  >
                        <Image1 src="/images/Wow.png" text="Wow" />
                    </span>
                    <span  >
                        <Image1 src="/images/Sad.png" text="Sad" />
                    </span>
                    <span  >
                        <Image1 src="/images/Angry.png" text="Angry" />
                    </span>


                </div>
              </Route>

                
                
                
            </div>

        );
    }
}
export default App;