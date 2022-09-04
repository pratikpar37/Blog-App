import React from "react";


const Approvalcard=(props)=>{
    return(
        <div className="ui card">
            <div className="content" >{props.children}</div>
           <div className="extra content">
               <div className="ui two buttons">
                   <div className="ui basic green button">Agree</div>
                   <div className="ui basic red button">Disagree</div>
               </div>
           </div>
        </div>
    );
};
 
export default Approvalcard;