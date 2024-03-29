import {addPost, profileReducer, updateNewPostAC} from "./profileReducer";
import {addMessage, dialogsReducer, updateNewMessageAC} from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";

export let store: StoreType = {
    _state: {
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
            ],
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCounter: 11},
                {id: 2, message: 'It\'s my first post', likesCounter: 54},
                {id: 3, message: 'I\'m learning React', likesCounter: 3},
            ],
            newPostText: '',
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Polina'},
                {id: 3, name: 'Peter'},
            ]
        }
    },
    _callSubscriber(state: StateType) {
        console.log(state)
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action: any) {

        /*this._state.profilePage = profileReducer(this._state.profilePage, action)*/
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sideBarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

// action creators types
export type ActionType =
    ReturnType<typeof addPost> |
    ReturnType<typeof updateNewPostAC> |
    ReturnType<typeof addMessage> |
    ReturnType<typeof updateNewMessageAC>

// types
export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (store: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: any) => void
}
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
    newPostText: string
}
export type SidebarStateType = {
    friends: DialogType[]
}
export type DialogType = {
    id: number | string
    name: string
}
export type MessageType = {
    id: number | string
    message: string
}
export type PostType = {
    id: number | string
    message: string
    likesCounter: number
}