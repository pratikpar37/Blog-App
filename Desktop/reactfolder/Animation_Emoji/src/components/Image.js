import "./Image.css"
import React from "react";
import FacebookEmoji from "react-facebook-emoji";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


class Image extends React.Component {


    

    

    render() {
        return (
            <div className="v1" >
                <span className="emoji"  >
                    
                  <FacebookEmoji type="like" id="like" />
                    <span className="text">Like</span>
                </span>
                

                <span className="emoji">
                    <FacebookEmoji type="love" id="love"  />
                    <span className="text">Love</span>
                </span >
                <span className="emoji">
                    <FacebookEmoji type="haha" id="haha" />
                    <span className="text">Haha</span>
                </span>
                <span className="emoji">
                    <FacebookEmoji type="wow"  id="wow"/>
                    <span className="text">Wow</span>
                </span>
                <span className="emoji">
                    <FacebookEmoji type="sad"  id="sad"/>
                    <span className="text">Sad</span>
                </span>
                <span className="emoji">
                    <FacebookEmoji type="angry" id="like" />
                    <span className="text">Angry</span>
                </span>




            </div>

        );
    }

}

export default Image;


