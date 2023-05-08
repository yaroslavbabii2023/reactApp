import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profileBlock}>
            <div>
                <img src='https://media.proglib.io/wp-uploads/2018/04/ethical_hacking.png' alt="img"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;