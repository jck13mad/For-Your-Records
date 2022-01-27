import data from '../../data'
import React, { Component } from 'react';
import './Listening.scss'
import Wavesurfer from '../wavesurfer/Wavesurfer';
import { connect } from 'react-redux';
import increment from '../../actions/increment';
import decrement from '../../actions/decrement';

class Listening extends Component {

    render() {
        console.log(this.props)

        return(
            <div className='listening' style={{backgroundImage: `url(` + data[this.props.count].bg + `)`}}>
                <a href="/"><h1 className="back">Back to Main</h1></a>

                <Wavesurfer props={this.props}/>
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