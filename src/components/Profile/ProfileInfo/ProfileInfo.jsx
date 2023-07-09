import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={s.profileBlock}>
            <div>
                <img src='https://media.proglib.io/wp-uploads/2018/04/ethical_hacking.png' alt="img"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;