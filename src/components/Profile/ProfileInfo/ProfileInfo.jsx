import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }


    return (
        <div >
            {/*<div className={s.profileBlock}>*/}
            {/*    <img src='https://media.proglib.io/wp-uploads/2018/04/ethical_hacking.png' alt="img"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;