import React from 'react';
import {connect} from 'react-redux';
import {removeAllTodos,showNotification} from "./actionCreators/actionCreaters";

import styled from 'styled-components'

const Button = styled.button`
width: 90%;
margin: 0 auto;
display: block;
margin-top: 15px;
padding: 10px;
border-radius: 10px;
background: #7d3232;
color: #fff;
cursor: pointer;
}
`

class RemoveAll extends React.Component {
    render() {
        return <Button onClick={() => {this.props.removeAllTodos();this.props.showNotification("Tüm todos silidi")}}>
                Tümünü Sil
        </Button>
    }
}

const mapDispatchToProps = dispatch => ({
    removeAllTodos: ( ) => {dispatch(removeAllTodos( ))},
    showNotification: (yazi) => {dispatch(showNotification(yazi))}
});

export default connect(null,mapDispatchToProps)(RemoveAll);
