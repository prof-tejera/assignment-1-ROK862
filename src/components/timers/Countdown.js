import React from "react";
import AnchorButton from "../buttons/AnchorButton";
import Helper from "../../utils/helpers";
import styled from "styled-components";
import Options from "../Inputs/Options";

const DigitalWatch = styled.div`
background: #bb0092;
border-radius: 30px;
font-size: 60px;
text-align: center;
color: white;
`;

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'inactive',
      date: Helper.sys.getDate(),
      currentTime: '',
      hours: 0,
      minutes: 0,
      seconds: 0,
      entry: 'new',
      score: -1
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
      const timeInSeconds = this.onConvertToSeconds();
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
        const newTime = this.state.currentTime - 1.0;
        if (newTime < 0)
          return;
        const formatedTime = this.onConvertToTime(newTime);
        this.setState({
          currentTime: newTime,
          formatedTime: formatedTime,
        });
        this.timmerTickTock();
      },1000);
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
            {this.onConvertToTime()}
          </div>
          <AnchorButton name='Start riming' onClick={this.onStartTiming} />
          <AnchorButton name='Close Timer' onClick={this.onStopTimer} />
        </DigitalWatch>
      else if (this.state.status === 'riming')
      return <DigitalWatch>
        <div className='StopWatch'>
          {this.state.formatedTime}
        </div>
        <AnchorButton name='Pause' onClick={this.onPauseTimmer} />
      </DigitalWatch>
       else if (this.state.status === 'paused')
       return <DigitalWatch>
         <div className='StopWatch'>
           {this.state.formatedTime} s
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

export default Countdown;