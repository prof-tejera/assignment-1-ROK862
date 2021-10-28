import React from "react";
import AnchorButton from "../buttons/AnchorButton";
import Helper from "../../utils/helpers";
import styled from "styled-components";
import Options from "../Inputs/Options";
import Input from "../Inputs/Input";
import SoundEffect from "../../audio/SoundEffect";



const DigitalWatch = styled.div`
background: #bb0092;
border-radius: 30px;
font-size: 60px;
text-align: center;
color: white;
`;

class XY extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'inactive',
      date: Helper.sys.getDate(),
      formatedTime: '',
      currentTime: '',
      hours: 0,
      minutes: 0,
      seconds: 0,
      entry: 'new',
      rounds: 1,
      enableSound: false,
    }
  }

  render() {
    console.log(this.state);

    this.onConvertToSeconds = () => this.state.hours * 60 * 60 + (this.state.minutes * 60) + this.state.seconds;
    
    this.onConvertToTime = (input = null) =>  {
      console.log(this.onConvertToSeconds(),"Time Calc");
      let dateTime = new Date(null);
      dateTime.setSeconds((input) ? input : this.onConvertToSeconds()); // specify value of SECONDS
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
      this.setState({
        status: 'inactive',
        currentTime: 0.0
      });
    }

    this.onPauseTimmer = () => {
      this.setState({
        status: 'paused',
      });
    }

    this.onStartTiming = () => {
      const timeInSeconds = 0;
      this.setState({
        status: 'riming',
        currentTime: timeInSeconds
      });
      this.timmerTickTock(true);
    }

    this.onSetHours = (val) => {
      this.setState({
        hours: val,
      });
    }

    this.onSetRounds = (val) => {
      this.setState({
        rounds: val,
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

    this.timmerTickTock = (startOnCurrentThread=false) => {
      if (this.state.status !== 'riming' && !startOnCurrentThread) return;

      setTimeout(()=>{
        let newTime = this.state.currentTime + 1.0;
        const formatedTime = this.onConvertToTime(newTime);
        
        if (this.onConvertToSeconds() <= newTime) {
          console.log(this.onConvertToSeconds(), newTime);
          if (this.state.rounds > 0) {
            const newRounds = this.state.rounds - 1;
            newTime = 0;
            this.setState({
              rounds: newRounds
            });
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
          <div className='StopWatch'>
            <Options options={[...Array(24).keys()]} onChange={this.onSetHours} name='Hours' />
            <Options options={[...Array(60).keys()]} onChange={this.onSetMinutes} name='Minutes' />
            <Options options={[...Array(60).keys()]} onChange={this.onSetSeconds} name='Seconds' />
          </div>
          <div className='Preview'>
          <Input onChange={this.onSetRounds} placeholder='Number of Rounds' />
          </div>
          <div className='Preview'>
            {this.onConvertToTime()}
          </div>
          <AnchorButton name='Start riming' onClick={this.onStartTiming} />
          <AnchorButton name='Close Timer' onClick={this.onStopTimer} />
        </DigitalWatch>
      else if (this.state.status === 'riming')
      return <DigitalWatch>
        <div className='StopWatchLabels'>
          {this.state.rounds}
        </div>
        <div className='StopWatch'>
          {this.state.formatedTime}
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

export default XY;