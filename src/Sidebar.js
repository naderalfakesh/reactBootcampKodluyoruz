import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {withRouter} from 'react-router-dom';

const linkList= [
    {path: "/" , name: "Home"},
    {path: "/coinflipper" , name: "Coin flipper"},
    {path: "/burgerbuilder" , name: "Burger builder"},
    {path: "/todolist" , name: "Todo list"},
    {path: "/petsapp" , name: "Pets App"}

]



 class Sidebar extends Component {
    render() {
        const currentPath= this.props.location.pathname;
        return (
            <div>
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>React bootcamp 2019</h3>
                    </div>

                    <ul className="list-unstyled components">
                        {
                            linkList.map((link)=>{
                                return (
                                    <li className={currentPath === link.path ? "active" : ""}  key={Math.random()}>
                                        <Link  to={link.path}>{link.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        )
    }
}

export default withRouter(props => <Sidebar {...props}/>);