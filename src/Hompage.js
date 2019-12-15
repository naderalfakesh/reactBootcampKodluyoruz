import React, { Component } from 'react'

export default class Homepage extends Component {
    render() {
        return (
            <div id="homePage">
                <h2>React bootcamp 2019 at <a href="http://www.kodluyoruz.org">Kodluyoruz Derneği</a> </h2>
                <p>
                Hello everyone, 
                My name is Nadir Alfakesh , I joined React JS bootcamp and I want to share some of the cool project we did with our teacher 
                <a href="https://github.com/yurtarmehmet"> Mehmet Yurtar </a>
                </p>
                <div className="line"></div>
                <h2 className="text-left">Main subjects :</h2>
                <p className="text-left">
                    <ul >
                        <li>Week 1: Modern JavaScript, Intro to React, Virtual DOM, JSX, Class Components vs Function Components</li>
                        <li>Week 2: Props & State, Create React App, React Developer Tools, Sample Project 1</li>
                        <li>Week 3: React Router, Forms in React, Lifecycle Methods, Sample Project 2</li>
                        <li>Week 4: Git Basics, Tooling(Webpack, Babel, Prettier…), State Management, Redux, Redux Middlewares, Redux DevTools, Sample Project 3</li>
                        <li>Week 5: API Requests in React, Styling in React Apps, Code Sharing in React, Type Safety(Typescript vs Flow), Sample Project 3</li>
                        <li>Week 6: Hooks, React Context, Production Builds and Hosting, Server Side Rendering</li>
                    </ul>
                </p>
                <div className="line"></div>
            </div>
        )
    }
}
