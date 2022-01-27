import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';
import data from '../../data';
import './Wavesurfer.scss'
import play from '../../pics/svg/play.svg'
import pause from '../../pics/svg/pause.svg'
import next from '../../pics/svg/next.svg'
import previous from '../../pics/svg/previous.svg'

class Wavesurfer extends Component {  

  constructor(props) {
    super(props)

    this.state = {
      playing: false
    }

    this.forward = this.forward.bind(this)
    this.reverse = this.reverse.bind(this)
  }

  componentDidMount() {
    const track = document.querySelector('#track');

    this.waveform = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: '#waveform',
      backend: 'WebAudio',
      height: 80,
      progressColor: 'yellow',
      responsive: true,
      waveColor: 'white',
      cursorColor: 'transparent',
    });

    this.waveform.load(track);
  };
  
handlePlay = () => {
  this.setState({ playing: !this.state.playing });
  this.waveform.playPause();
};

async forward() {
  this.handlePlay()
  this.waveform.destroy()
  await this.props.props.increment()
  this.componentDidMount()
}

async reverse() {
  this.handlePlay()
  this.waveform.destroy()
  await this.props.props.decrement();
  this.componentDidMount() 
}
  
  render() {
    return (
      <div className='waveformContainer'>
          <div className="waveformControls">
            <div className="previous" onClick={this.reverse}>
              <img src={previous} alt="previous" />
            </div>
            <div className="playButton" onClick={this.handlePlay}>
              <img src={!this.state.playing ? play : pause} alt="play or pause"  />
            </div>
            <div className="next" onClick={this.forward}>
              <img src={next} alt='next' />
            </div>
          </div>
        <div className='wave' id="waveform" style={{width: '100%', height: '90px'}} />
        <audio id="track" src={data[this.props.props.count].audio_src} />
      </div>
    );
  }
};

export default Wavesurfer