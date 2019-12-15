import React from 'react';
import {connect} from "react-redux";
import {onAddTodo ,showNotification} from "./actionCreators/actionCreaters";



class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputVal: ""
        };
        this.changeInput = this.changeInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    changeInput(e){
        const newVal = e.target.value;
        this.setState({
            inputVal: newVal
        });
    }

    addTodo(event){
        event.preventDefault();
        this.props.onAddTodo(this.state.inputVal);
        this.props.showNotification("Bir tane todo eklendi");
        this.setState({
            inputVal: ""
        });
    }

    render() {
        // const {onAdd} = this.props;
        return <form
            onSubmit={this.addTodo}>
            <input
                type="text"
                value={this.state.inputVal}
                onChange={this.changeInput} />
            <button>Ekle</button>
        </form>
    }
}

const mapDispatchToProps = dispatch => ({
    onAddTodo: (todo) => {dispatch(onAddTodo(todo))},
    showNotification: (yazi) => {dispatch(showNotification(yazi))}
});

export default connect(null, mapDispatchToProps)(AddTodo);
