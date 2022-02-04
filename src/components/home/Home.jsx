import React, { Component } from "react";
import './Home.scss'
// import cover from '../../pics/album.png'
import opposite_cut from '../../pics/oppo-cut.webp'
import Parallax from "../parallax/Parallax";
import spotify from '../../pics/media/spotify_black.png'
import apple from '../../pics/media/apple_black.png'
import youtube from '../../pics/media/youtube_black.png'
import insta from '../../pics/media/insta_black.png'
import twitter from '../../pics/media/twitter_black.png'
import cut from '../../pics/cut.webp'
import spotify_one from '../../pics/media/spotify_white.png'
import apple_one from '../../pics/media/apple_white.png'
import youtube_one from '../../pics/media/youtube_white.png'
import insta_one from '../../pics/media/insta_white.png'
import twitter_one from '../../pics/media/twitter_white.png'

class Home extends Component {
    render() {
        window.addEventListener('resize', console.log(window.innerWidth))
        window.addEventListener('resize', console.log(window.innerHeight))
        return(
            <div className="home">
                <div className='media'>
                    <div className='spotify'>
                        <a href="https://open.spotify.com/album/2B3A4dq7jQUvQUSMX1lkzm">
                            <img src={spotify} alt='spotify' className='top' />
                            <img src={spotify_one} alt='spotify_1' className='bottom' />
                        </a>
                    </div>
                    <div className='apple'>
                        <a href="https://music.apple.com/us/album/for-your-records/1595879003">
                            <img src={apple} alt='apple' className='top'/>
                            <img src={apple_one} alt='apple_1' className='bottom' />
                        </a>
                    </div>
                    <div className='instagram'>
                        <a href="https://instagram.com/317young_sam?utm_medium=copy_link">
                            <img src={insta} alt='instagram' className='top' />
                            <img src={insta_one} alt='instagram_1' className='bottom' />
                        </a>
                    </div>
                    <div className='youtube'>
                        <a href="https://youtube.com/playlist?list=OLAK5uy_lZeM7DXeHRrTEPAaZCZ9KBzKW2Zj7tivk">
                            <img src={youtube} alt='youtube' className='top' />
                            <img src={youtube_one} alt='youtube_1' className='bottom' />
                        </a>
                    </div>
                    <div className='twitter'>
                        <a href="https://mobile.twitter.com/samisyoungish">
                            <img src={twitter} alt='twitter' className='top' />
                            <img src={twitter_one} alt='twitter_1' className='bottom' />
                        </a>
                    </div>
                </div>

                <nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                        <ul id="menu">
                            <li><a href="/listening">Listen Now</a></li>
                            <li className="shop"><a href="/">Shop <br />(Coming Soon)</a></li>

                            <div className='media-1'>
                                <div className='spotify'>
                                    <a href="https://open.spotify.com/album/2B3A4dq7jQUvQUSMX1lkzm">
                                        <img src={spotify} alt='spotify' className='top' />
                                        <img src={spotify_one} alt='spotify_1' className='bottom' />
                                    </a>
                                </div>
                                <div className='apple'>
                                    <a href="https://music.apple.com/us/album/for-your-records/1595879003">
                                        <img src={apple} alt='apple' className='top'/>
                                        <img src={apple_one} alt='apple_1' className='bottom' />
                                    </a>
                                </div>
                                <div className='instagram'>
                                    <a href="https://instagram.com/317young_sam?utm_medium=copy_link">
                                        <img src={insta} alt='instagram' className='top' />
                                        <img src={insta_one} alt='instagram_1' className='bottom' />
                                    </a>
                                </div>
                                <div className='youtube'>
                                    <a href="https://youtube.com/playlist?list=OLAK5uy_lZeM7DXeHRrTEPAaZCZ9KBzKW2Zj7tivk">
                                        <img src={youtube} alt='youtube' className='top' />
                                        <img src={youtube_one} alt='youtube_1' className='bottom' />
                                    </a>
                                </div>
                                <div className='twitter'>
                                    <a href="https://mobile.twitter.com/samisyoungish">
                                        <img src={twitter} alt='twitter' className='top' />
                                        <img src={twitter_one} alt='twitter_1' className='bottom' />
                                    </a>
                                </div>
                            </div>
                        </ul>
                    </div>
                </nav>

                <section className="album-parallax">
                    <img src={opposite_cut} alt="Opposite Cut" className="opposite_cut" />
                    <img src={cut} alt="album" className="cut-1" />
                    <Parallax className="parallax"/>
                </section>

                <a href="/listening"><h1 className="listen">CLICK HERE TO LISTEN</h1></a>
                <h1 className="name">SAM YOUNG</h1>
                <h1 className="title">FOR YOUR RECORDS</h1>
            </div>
        )
    }
}

export default Home