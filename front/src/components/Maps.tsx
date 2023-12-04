import React, { useState, useRef} from "react";
import "../styles/app.css";
import { MapsHistory } from "./Maps/MapsHistory";
import MapBox from "./Maps/MapBox";

/* 
  This is the class that creates most of our variables that handle state across 
  multiple classes. 
  
  This is where we organize all components in a component folder.
*/


// these are out side of the Mock function so that our Mode REPLfunction can use them
export function setMode(newMode: boolean) {
  mode = newMode;
}
export var mode: boolean = true;



export default function Maps() {
  // history, and how to update it
  const [history, setHistory] = useState<(string | string[][])[][]>([]);
  const updateHistory = (command: (string | string[][])[]) => {
    setHistory([command, ...history]);
  };
  const [selectCounty, setSelectCounty] = useState<(string | string[][])[][]>([]);

  const [value, setValue] = React.useState("fruit");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="maps">
      <div className="left">
        <MapBox updateHistory={updateHistory} />
      </div>
      
      {/* Our input comes before our history so that users can scroll down
      to view the history */}
      <div className="bottom">
        <hr aria-hidden="true"></hr>
        {/* <MapsInput
          updateHistory={updateHistory}
          // setNotification={setNotif}
          isBrief={mode}
          selectCounty={selectCounty}
          setSelectCounty={setSelectCounty}
        /> */}
        <MapsHistory history={history} mode={mode} />
      </div>
    </div>
  );
}