import {rerenderEntireTree} from "../render";

export const state: StateType = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Julia'},
            {id: 2, name: 'Maxim'},
            {id: 3, name: 'Katya'},
            {id: 4, name: 'Alex'},
            {id: 5, name: 'Galya'},
        ],
        messages: [
            {id: 1, message: 'Hello!'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Lol :D'},
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCounter: 11},
            {id: 2, message: 'It\'s my first post', likesCounter: 54},
            {id: 3, message: 'I\'m learning React', likesCounter: 3},
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Polina'},
            {id: 3, name: 'Peter'},
        ]
    }
}

export const addPost = (post: string) => {
    const newPost: PostType = {
        id: 5,
        message: post,
        likesCounter: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

// types
export type StateType = {
    dialogsPage: DialogsPageStateType
    profilePage: ProfilePageStateType
    sidebar: SidebarStateType
}
export type DialogsPageStateType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
export type ProfilePageStateType = {
    posts: PostType[]
}
export type SidebarStateType = {
    friends: DialogType[]
}
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