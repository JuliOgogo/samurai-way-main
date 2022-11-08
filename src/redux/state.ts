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
            newMessageText: 'new message'
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCounter: 11},
                {id: 2, message: 'It\'s my first post', likesCounter: 54},
                {id: 3, message: 'I\'m learning React', likesCounter: 3},
            ],
            newPostText: 'new post text'
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
    subscriber(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCounter: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST') {
            this._state.profilePage.newPostText = action.text
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage: MessageType = {
                id: 5,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.dialogsPage.newMessageText = action.text
            this._callSubscriber(this._state)
        }
    }
}

// types
export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    subscriber: (observer: (store: StateType) => void) => void
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
    newMessageText: string
}
export type ProfilePageStateType = {
    posts: PostType[]
    newPostText: string
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