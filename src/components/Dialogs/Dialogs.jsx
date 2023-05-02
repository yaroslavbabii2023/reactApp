import React from "react";
import s from './Dialogs.module.css'


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    Yaroslav
                </div>
                <div className={s.dialog}>
                    Oleksiy
                </div>
                <div className={s.dialog}>
                    Petro
                </div>
                <div className={s.dialog}>
                    Andriy
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hello
                </div>
                <div className={s.message}>
                    How are you
                </div>
                <div className={s.message}>
                    Yolo
                </div>
            </div>
        </div>
    )
}

export default Dialogs