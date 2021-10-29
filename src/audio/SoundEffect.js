import React from "react";
import Audio from "react-howler";


class SoundEffect extends React.Component {
    render() {
        const clips = {
            onClick: "https://cdn.videvo.net/videvo_files/audio/premium/audio0046/watermarked/BoneCrabShellBreak%20PE977213_preview.mp3",
            paused: "https://cdn.videvo.net/videvo_files/audio/premium/audio0046/watermarked/BoneCrabShellBreak%20PE977213_preview.mp3",
            timing: "https://assets.mixkit.co/sfx/download/mixkit-game-experience-level-increased-2062.wav",
            default: "https://assets.mixkit.co/sfx/download/mixkit-completion-of-a-level-2063.wav",
        };
        let clipToPlay = clips.default;
        if (this.props.clip) {
            try {
                clipToPlay = clips[this.props.clip];
            } catch (ex) {
                clipToPlay = clips.default;
            }
        }

        this.hasProps = (prop) => (prop) ? prop : false;

        return <Audio volume='0.3' loop={this.hasProps(this.props.loop)} autoplay={this.hasProps(this.props.autoplay)} src={clipToPlay} playing={this.props.isPlaying} />
    }
}

export default SoundEffect;