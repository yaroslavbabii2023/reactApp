import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let dialogs = [
    {id: 1, name: 'Yaroslav'},
    {id: 2, name: 'Oleksiy'},
    {id: 3, name: 'Petro'},
    {id: 4, name: 'Andriy'},
    {id: 5, name: 'Olga'},
];
let message = [
    {id: 1, message: 'Hello'},
    {id: 1, message: 'How are you'},
    {id: 1, message: 'Yolo'},
    {id: 1, message: 'Yo'},
    {id: 1, message: 'English'},
];

let posts = [
    {id: 1, message: 'Hi, how are you?', likeCount: 12},
    {id: 2, message: 'Its my first post', likeCount: 3},
    {id: 2, message: 'Its my ', likeCount: 5},
]



ReactDOM.render(<App dialogs={dialogs} message={message} posts={posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


