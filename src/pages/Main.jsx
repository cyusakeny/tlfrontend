import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Home';
import TypingPage from './TypingPage';
class MainComponent extends Component {
    render() { 
        return (  
<Switch>
<Route exact path='/' component={HomePage}></Route>
<Route exact path='/typing' component={TypingPage}></Route>
</Switch>
        );
    }
}
 
export default MainComponent;