import React, { Component } from 'react';
import {connect} from "react-redux";
import {hideNotification} from "./actionCreators/actionCreaters"

import styled from 'styled-components'

const Div = styled.div`
text-align: center;
background-color: aquamarine;
height: 24px;
opacity: 100;
}
`

export class Notification extends Component {
    
    componentDidUpdate(prevProps){
        if(this.props.notification !== ""){
            setTimeout(()=>{this.props.hideNotification();},2000)
        }
    }

    render() {
        if(this.props.notification !== "")
        return (<Div  style={{opacity: 100}}  >{this.props.notification}</Div>);
        else
        return (<Div style={{opacity: 0}}  > </Div>);
    }
}



const mapStateToProps = (state) => {
    return {
        notification: state.notification
    }
};

const mapDispatchToProps = dispatch => ({
    hideNotification: () => {dispatch(hideNotification())}
  });


export default  connect(mapStateToProps , mapDispatchToProps)(Notification);
