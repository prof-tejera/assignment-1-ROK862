import React from "react";
import AnchorButton from "../buttons/AnchorButton";
import Helper from "../../utils/helpers";
import styled from "styled-components";
import SoundEffect from "../../audio/SoundEffect";
import DisplayRounds from "../generic/DisplayRounds";
import DisplayBreaks from "../generic/DisplayBreaks";



const DigitalWatch = styled.div`
background: #bb0092;
border-radius: 30px;
font-size: 60px;
text-align: center;
color: white;
`;

const WorkflowLabel = styled.div`
font-size: 20px;
font-weight: 100;
`;

class Tabata extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workflow: 'Workout Timmer',
      status: 'inactive',
      date: Helper.sys.getDate(),
      formatedTime: '',
      currentTime: '',
      hours: 0,
      minutes: 0,
      seconds: 0,
      break: {
        formatedTime: '',
        currentTime: '',
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      entry: 'new',
      rounds: 1,
      enableSound: false,
    }
  }

  render() {
    console.log(this.state);

    this.onConvertToSeconds = () => this.state.hours * 60 * 60 + (this.state.minutes * 60) + this.state.seconds;
    this.onConvertToBreakSeconds = () => this.state.break.hours * 60 * 60 + (this.state.break.minutes * 60) + this.state.break.seconds;
    
    this.onConvertToTime = (input = null) =>  {
      console.log(this.onConvertToSeconds(),"Time Calc");
      let dateTime = new Date(null);
      dateTime.setSeconds((input) ? input : this.onConvertToSeconds()); // specify value of SECONDS
      return dateTime.toISOString().substr(11, 8);
    }

    this.onConvertToBreakTime = (input = null) =>  {
      console.log(this.onConvertToBreakSeconds(),"Time Calc");
      let dateTime = new Date(null);
      dateTime.setSeconds((input) ? input : this.onConvertToBreakSeconds()); // specify value of SECONDS
      return dateTime.toISOString().substr(11, 8);
    }

    this.onStartTimer = () => {
      this.setState({
        status: 'active',
      });
    }

    this.onStartTimer = () => {
      this.setState({
        status: 'active',
      });
    }

    this.onStopTimer = () => {
      let b = this.state.break;
      b.currentTime = 0.0;
      this.setState({
        status: 'inactive',
        currentTime: 0.0,
        break: b
      });
    }

    this.onPauseTimmer = () => {
      this.setState({
        status: 'paused',
      });
    }

    this.onStartTiming = () => {
      const timeInSeconds = 0;
      let b = this.state.break;
      b.currentTime = timeInSeconds;
      this.setState({
        status: 'riming',
        currentTime: timeInSeconds,
        break: b
      });
      this.timmerTickTock(true);
    }

    this.onSetHours = (val) => {
      this.setState({
        hours: val,
      });
    }

    this.onSetMinutes = (val) => {
      this.setState({
        minutes: val,
      });
    }

    this.onSetSeconds = (val) => {
      this.setState({
        seconds: val,
      });
    }

    this.onSetBreakHours = (val) => {
      let b = this.state.break;
      b.hours = val;

      // Please do not use state like this, make sure you change it before
      // submitting. This may actually not be the current state.
      this.setState({
        break: b
      });
    }

    this.onSetBreakMinutes = (val) => {
      let b = this.state.break;
      b.minutes = val;

      // Please do not use state like this, make sure you change it before
      // submitting. This may actually not be the current state.
      this.setState({
        break: b
      });
    }

    this.onSetBreakSeconds = (val) => {
      const h = this.state.break.hours;
      const m = this.state.break.minutes;
      const s = val;

      // Please do not use state like this, make sure you change it before
      // submitting. This may actually not be the current state.
      this.setState({
        break: {
          hours: h,
          minutes: m,
          seconds: s,
        }
      });
    }
    
    this.onSetRounds = (val) => {
      this.setState({
        rounds: val,
      });
    }

    this.timmerTickTock = (startOnCurrentThread=false) => {
      if (this.state.status !== 'riming' && !startOnCurrentThread) return;

      setTimeout(()=>{
        let newTime = this.state.currentTime + 1.0;
        const formatedTime = this.onConvertToTime(newTime);
        
        if (this.onConvertToSeconds() <= newTime) {
          if (this.state.rounds > 0) {
            this.setState({
              workflow: "Break Timmer",
            });
            this.timmerBreakTickTock();
            return;
          } 
        }
        
        this.setState({
          currentTime: newTime,
          formatedTime: formatedTime,
        });
        if (this.state.rounds > 0 || (this.onConvertToSeconds() > newTime))
          this.timmerTickTock();
      },1000);
    }

    this.timmerBreakTickTock = (startOnCurrentThread=false) => {
      if (this.state.status !== 'riming' && !startOnCurrentThread) return;

      setTimeout(()=>{
        let b = this.state.break;
        let newTime = b.currentTime + 1.0;
        const formatedTime = this.onConvertToBreakTime(newTime);

        b.currentTime = newTime;
        b.formatedTime = formatedTime;
        
        this.setState({          
          break:b
        });
        if ((this.onConvertToBreakSeconds() > newTime)) {
          this.timmerBreakTickTock();
        } else {
          b.currentTime = 0;
          const newRounds = this.state.rounds - 1;
          newTime = 0;
          this.setState({
              workflow: "Workout Timmer",
              rounds: newRounds,
              currentTime: newTime,
              formatedTime: formatedTime,
              break: b
          });
          this.timmerTickTock();
        }
         
      },1000);
    }

    
    this.onTriggerSound = () => {
      const newTime = this.state.currentTime;
      if ((!this.state.enableSound && this.state.rounds > 0) || (this.onConvertToSeconds() > newTime)) {
        return false;
      }
      return true;
    }

    this.renderState = () => {
      if (this.state.status === 'inactive')
        return <AnchorButton name='Start Now' onClick={this.onStartTimer} />;
        else if (this.state.status === 'active')
        return <DigitalWatch>
          <DisplayRounds onSetHours={this.onSetHours} onSetMinutes={this.onSetMinutes} onSetSeconds={this.onSetSeconds} onSetRounds={this.onSetRounds} onConvertToTime={this.onConvertToTime} onStartTiming={this.onStartTiming} onStopTimer={this.onStopTimer} />
          <DisplayBreaks onSetHours={this.onSetBreakHours} onSetMinutes={this.onSetBreakMinutes} onSetSeconds={this.onSetBreakSeconds} onSetRounds={this.onSetRounds} onConvertToTime={this.onConvertToBreakTime} onStartTiming={this.onStartBreakriming} onStopTimer={this.onStopTimer} />
        </DigitalWatch>
      else if (this.state.status === 'riming')
      return <DigitalWatch>
        <WorkflowLabel>
          {this.state.workflow}
        </WorkflowLabel>
        <div className='StopWatchLabels'>
          {this.state.rounds}
        </div>
        <div className='StopWatch'>
          {(this.state.workflow === 'Workout Timmer') ? this.state.formatedTime : this.state.break.formatedTime}
          <SoundEffect isPlaying={this.onTriggerSound()} />
        </div>
        <AnchorButton name='Pause' onClick={this.onPauseTimmer} />
      </DigitalWatch>
       else if (this.state.status === 'paused')
       return <DigitalWatch>
         <div className='StopWatch'>
           {this.state.formatedTime}
         </div>
         <AnchorButton name='Start riming' onClick={this.onStartTiming} />
         <AnchorButton name='Stop riming' onClick={this.onStopTimer} />
       </DigitalWatch>
    }

    return <div className={(this.props.theme) ? this.props.theme : 'Default-Pink-Theme'}>
      {this.renderState()}
    </div>;
  }
}

export default Tabata;