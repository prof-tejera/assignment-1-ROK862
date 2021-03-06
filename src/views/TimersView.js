import React from "react";
import styled from "styled-components";

import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
// import Scroll from 'react-scroll';

// const Link = Scroll.Link; 

const Timers = styled.div`
align-items: center;
width: auto;
height: 100%;
overflow-y: scroll;
display: inline-block;
`;

const Timer = styled.div`
font-size: 2.0rem;
padding: 2%;
background: #2b003cc7;
margin: 50px 5.5% 50px 5.5%;
width: 35%;
min-height: 250px;
border-radius: 50px;
display: inline-table;
box-shadow: 10px 30px 40px 5px #00000069;
color: #ffffff;
text-align: center;
font-weight: bold;
-webkit-backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
`;

const TimerTitle = styled.div`
font-size: 1.5rem;
`;
const TimerSubtitle = styled.div`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
font-size: 15px;
padding: 50px;
font-weight: 400;
padding-top: 15px;
`;

function App() {
  const timers = [
    { title: "Time your training with a stop watch.", subTitle: "Let's get you started with a normal timed session. Time your workout and get feedback from the app in realtime.", C: <Stopwatch /> },
    { title: "Set a timed goal, and track your progress.", subTitle: "Be proactive! Let's prepare your training session by setting timed goals.", C: <Countdown recId={1} /> },
    { title: "Goal driven session, with rounds.", subTitle: "Awesome, now let's take this a step further. Set timed goals with multiple rounds.", C: <XY /> },
    { title: "Now, we need to pace your training.", subTitle: "Take a training session with breaks across measurable intervals.", C: <Tabata /> },
  ];

  return (
    <Timers>
      {timers.map((timer) => (
        <Timer>
          <TimerTitle>{timer.title}</TimerTitle>
          <TimerSubtitle>{timer.subTitle}</TimerSubtitle>
          {timer.C}
        </Timer>
      ))}
    </Timers>
  );
}

export default App;
