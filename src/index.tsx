import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const dialogs: DialogType[] = [
    {id: 1, name: 'Julia'},
    {id: 2, name: 'Maxim'},
    {id: 3, name: 'Katya'},
    {id: 4, name: 'Alex'},
    {id: 5, name: 'Galya'}
]
const messages: MessageType[] = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Lol :D'},
]

const posts: PostType[] = [
    {id: 1, message: 'Hi, how are you?', likesCounter: 11},
    {id: 2, message: 'It\'s my first post', likesCounter: 54},
    {id: 3, message: 'I\'m learning React', likesCounter: 3},
]

ReactDOM.render(
    <App dialogs={dialogs}
         messages={messages}
         posts={posts}
    />,
    document.getElementById('root')
);

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likesCounter: number
}