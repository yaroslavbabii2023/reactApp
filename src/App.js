import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import withRouter from "./components/common/withRouter/withRouter";

class App extends React.Component {
    componentDidMount() {
       this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized){
            return <Preloader/>}

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile/:profileId?"
                               element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer/>}/>

                        <Route path="/users/*"
                               element={<UsersContainer/>}/>

                        <Route path="/login/*"
                               element={<LoginPage/>}/>
                    </Routes>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose (
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);