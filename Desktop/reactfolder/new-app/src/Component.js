import React from "react";
import faker from "faker";


const Component=(props)=>{

    return(
        <div className="comment">
            
              <a href="/" className="avatar">
                  <img alt="avatar" src={props.avatar} />
              </a>
              <div className="content"> 
                  <a href="/" className="author">
                     {props.name}
                  </a>
                   <div className="metadata">
                      <span className="date">{props.date}</span>
                   </div>
                  
                  <div className="text">
                      {props.text}

                  </div>
              </div>
           
              

          </div>

    );
};
export default Component;