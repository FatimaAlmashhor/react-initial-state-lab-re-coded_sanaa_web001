// your Bomb code here!
import React from 'react';


export default class Bomb extends React.Component {
state = {
          secondsLeft: this.props.initialCount,
        }
      ;

    render(){
        let message;

        if(this.state.secondsLeft === 0) {
            message ='Boom!';
        }else
        {
            message = `${this.state.secondsLeft} seconds left before I go boom!`;
        }
        return(
            <p>{message}</p>
        );
    }
}