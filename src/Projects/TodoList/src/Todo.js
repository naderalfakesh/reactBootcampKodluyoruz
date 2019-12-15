import React from 'react';
import {connect} from "react-redux";
import { removeTodo,toggleCompleteStatus,showNotification} from "./actionCreators/actionCreaters";

import styled from 'styled-components'

const Span = styled.span`
background-color: #76030B;
  font-weight: bold;
  display: inline-block;
  margin-left: 10px;
  padding: 5px;
  color: #fff;
  border-radius: 5px;
}
`


function Todo(props) {
    const {content, id, checked} = props;
    let itemClass= "todo-item";
    if(checked){
        itemClass += " checked";
    }
    return (
        <div className={itemClass} onClick={() => {props.toggleCompleteStatus(id);}}>
            {content}
            <Span
                
                onClick={(e) => {e.stopPropagation();props.removeTodo(id);props.showNotification("bir tane todo silindi")}}>X</Span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeTodo: (id) => {dispatch(removeTodo(id))},
    toggleCompleteStatus: (id) => {dispatch(toggleCompleteStatus(id))},
    showNotification: (yazi) => {dispatch(showNotification(yazi))}
});

export default connect(null, mapDispatchToProps)(Todo);
