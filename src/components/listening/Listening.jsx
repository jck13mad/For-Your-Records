import data from '../../data'
import React, { Component } from 'react';
import './Listening.scss'
import Wavesurfer from '../wavesurfer/Wavesurfer';
import { connect } from 'react-redux';
import increment from '../../actions/increment';
import decrement from '../../actions/decrement';
import spotify from '../../pics/media/spotify_white.png'
import apple from '../../pics/media/apple_white.png'
import youtube from '../../pics/media/youtube_white.png'
import insta from '../../pics/media/insta_white.png'
import twitter from '../../pics/media/twitter_white.png'
import spotify_one from '../../pics/media/spotify_black.png'
import apple_one from '../../pics/media/apple_black.png'
import youtube_one from '../../pics/media/youtube_black.png'
import insta_one from '../../pics/media/insta_black.png'
import twitter_one from '../../pics/media/twitter_black.png'

class Listening extends Component {

    render() {
        console.log(this.props)

        return(
            <div className='listening' style={{backgroundImage: `url(` + data[this.props.count].bg + `)`}}>
                <div className='media-2'>
                    <div className='spotify'>
                        <a href="#">
                            <img src={spotify} alt='spotify' className='top' />
                            <img src={spotify_one} alt='spotify_1' className='bottom' />
                        </a>
                    </div>
                    <div className='apple'>
                        <a href="#">
                            <img src={apple} alt='apple' className='top'/>
                            <img src={apple_one} alt='apple_1' className='bottom' />
                        </a>
                    </div>
                    <div className='instagram'>
                        <a href="#">
                            <img src={insta} alt='instagram' className='top' />
                            <img src={insta_one} alt='instagram_1' className='bottom' />
                        </a>
                    </div>
                    <div className='youtube'>
                        <a href="#">
                            <img src={youtube} alt='youtube' className='top' />
                            <img src={youtube_one} alt='youtube_1' className='bottom' />
                        </a>
                    </div>
                    <div className='twitter'>
                        <a href="#">
                            <img src={twitter} alt='twitter' className='top' />
                            <img src={twitter_one} alt='twitter_1' className='bottom' />
                        </a>
                    </div>
                </div>
                <h2 className="song_title">{data[this.props.count].song}</h2>
                <a href="/"><h1 className="back">Back to Main</h1></a>

                <div className="wavesurfer">
                    <Wavesurfer props={this.props}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      count: state.count
    }
  }

const mapDispatchToProps = ({
    // increment: () => dispatch(increment),
    // decrement: () => dispatch(decrement)
    increment: increment,
    decrement: decrement
});

export default connect(mapStateToProps, mapDispatchToProps)(Listening)