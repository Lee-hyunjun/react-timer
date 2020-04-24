import React, { useState, useEffect, useCallback } from 'react';
import produce from "immer";
import "./timer_css.css";
import SideMenu from "./side_menu";
import TimerFooter from "./Timer_footer";

const pad = str => {
  return str < 10 ? "0" + str : str;
}

export default function Timer({ limit = 0 }) {

  const [state, setState] = useState({
    now: limit > 0 ? limit : 0,
    viewNow: "00:00:00",
    viewMs:"00",
    start: false,
    timer: false,
    timerCount: 0,
  });

  const [rap, setRap] = useState({
    times: [],
    rap_count: 0,
  })

  const start = (() => {
    setState(
      produce((v) => {
        v.now = v.now + (limit !== 0 ? -1 : 1);
      })
    );

  });

  const toggleStart = () => {
    setState({
      ...state,
      start: !state.start
    });
    
  };

  const timer = () => {
    setState(
      produce((v) => {
        v.timerCount += 1;
        
        if (v.timerCount === 100) {
          start();
          v.timerCount = 0;
        }
      })
    );
  }

  useEffect(() => {
    if ((limit > 0 && state.now < 0) || !state.start) {
      return;
    }
    
    const h = Math.floor(state.now / 3600);
    const m = Math.floor(state.now % 3600 / 60);
    const s = Math.floor(state.now % 60);
    const ms = state.timerCount;

    setState(
      produce((v) => {
       v.viewNow =
          pad(h) +
          ":" +
          pad(m) +
          ":" +
          pad(s);
       v.viewMs = pad(ms);  
      })
    );
  
  }, [state.timerCount])

  useEffect(() => {
    clearInterval(state.timer)

    if (!state.start) {
      return
    }

    setState(
      produce((v) => {
        v.timer = setInterval(() => {
          timer();
        }, 10);
      })
    );
  }, [state.start]);

  const Reset = () => {
    setState(
      produce((x) => {
        x.now = 0;
        x.viewNow = "00:00:00";
        x.viewMs = "00";
      })
    )
    setRap(
      produce((x) => {
        x.times = [];
        x.rap_count = 0;
      })
    )
  }
  const Rap = () => {
    setRap(
      produce((x) => {
        x.rap_count += 1;
      })
    );

    rap.times.push([`${state.viewNow}.${state.viewMs}`,rap.rap_count]);
  }

  return (
    <>
      <div className="timer__main">
        <SideMenu />
        <div className="main__content">
          <div className="content">
            <div className="content__timer">
              <p className="timer">{state.viewNow}<span className="timer__ms">.{state.viewMs}</span></p>
              <div className="buttons">
                <button style={{display: state.start ? 'none' : 'inline'}} onClick={Reset} className="btn time__reset">재설정</button>
                <button style={{display: state.start ? 'none' : 'inline'}} onClick={toggleStart} className="btn time__start">시작</button>
                <button style={{display: !state.start ? 'none' : 'inline'}} onClick={Rap} className="btn time__rap">랩</button>
                <button style={{display: !state.start ? 'none' : 'inline'}} onClick={toggleStart} className="btn time__stop">중지</button>
              </div>
            </div>
            <div className="timer__rap">
              <table>
                <thead className="rap__header">
                  <th>랩</th>
                  <th>랩</th>
                  <th>시간</th>
                </thead>
                <tbody>
                  
                </tbody>
              </table>
            </div>
          </div>
          <TimerFooter />
        </div>
      </div>
    </>
  );
}