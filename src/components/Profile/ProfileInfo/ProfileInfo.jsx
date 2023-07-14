import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {Navigate} from "react-router-dom";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }


    return (
        <div >
            <div className={s.profileBlock}>
                <img src='https://media.proglib.io/wp-uploads/2018/04/ethical_hacking.png' alt="img"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <span>description</span>
            </div>
        </div>
    )
}

export default ProfileInfo;