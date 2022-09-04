import React from "react";
import ReactDOM from "react-dom";
import Component from "./Component";
import Approvalcard from "./Approvalcard";
import faker from  "faker";

const App=()=>{
    return(
           
      <div className="ui container comments">
          <Approvalcard>
          <Component name="Sam"  date="Today at 4 pm" text=" Nice Post" avatar={faker.image.avatar()} />
          </Approvalcard>

          <Approvalcard>
          <Component name="Alice"  date="Today at 5:55 pm" text=" It can be better"avatar={faker.image.avatar()} />
          </Approvalcard>

          <Approvalcard>
          <Component name="Jerry"  date="Today at 6:00 pm" text=" Average post" avatar={faker.image.avatar()} />
          </Approvalcard>

         

      </div>
      
    );
};
ReactDOM.render(
    <App />,document.querySelector("#root")
);

