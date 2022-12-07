import React, {Component} from 'react';
import './App.css';
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import store from "./Redux/redux-store";
import {Gallery} from "./components/Gallery/Gallery";
import {Header} from "./components/Header/Header"
import {Photo} from "./components/Photo/Photo";

class App extends Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className={'bodyWrapper'}>
                <Header />
                <Switch>
                    <Route exact path='/'
                           render={() => <Redirect to={"/gallery"}/>}/>
                    <Route path='/gallery'>
                        <Gallery />
                    </Route>
                    <Route path='/photo/:photoId'>
                        <Photo />
                    </Route>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = () => ({})

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {})
)(App);

const GalleryApp: React.FC = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default GalleryApp;