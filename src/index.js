import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

// import App from "./App";
// import Map from "./pages/Map";

import Timer from "./pages/timer/Timer";
import TimerHeader from "./pages/timer/Timer_header";


ReactDOM.render(
  <>
    <TimerHeader />
    <Timer 
      // limit={1}
    />
  </>,
  document.getElementById("root")
);

