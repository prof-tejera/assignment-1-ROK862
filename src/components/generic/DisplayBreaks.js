import React from "react";
import styled from "styled-components";

import Audio from "react-howler";
import Options from "../Inputs/Options";
import Input from "../Inputs/Input";
import AnchorButton from "../buttons/AnchorButton";

const Title = styled.div`
font-size: 30px;
`;

class DisplayBreaks extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Title>{this.props.name}</Title>
                <div className='StopWatch'>
                    <Options options={[...Array(24).keys()]} onChange={this.props.onSetHours} name='Hours' />
                    <Options options={[...Array(60).keys()]} onChange={this.props.onSetMinutes} name='Minutes' />
                    <Options options={[...Array(60).keys()]} onChange={this.props.onSetSeconds} name='Seconds' />
                </div>
                <div className='Preview'>
                    {this.props.onConvertToTime()}
                </div>
            </div>
        )
    }
}
//onSetHours onSetMinutes onSetSeconds onSetRounds onConvertToTime onStartTimming onStopTimer
export default DisplayBreaks;