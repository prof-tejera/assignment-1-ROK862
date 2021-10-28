import React from "react";
import Audio from "react-howler";


class SoundEffect extends React.Component {
    
    render() {
        return <Audio volume='0.4' loop={false} autoplay={false} src="https://assets.mixkit.co/sfx/download/mixkit-completion-of-a-level-2063.wav" playing={this.props.isPlaying} />
    }
}

export default SoundEffect;