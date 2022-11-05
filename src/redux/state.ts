export type StoreType = {
    _state: StateType
    getState: Function
    addPost: () => void
    updateNewPost: (text: string) => void
    addMessage: () => void
    updateNewMessage: (text: string) => void
    _callSubscriber: (state: StateType) => void
    subscriber: (observer: (store: StateType) => void) => void
}

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
    getState() {
        return this._state
    },
    addPost() {
        const newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCounter: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPost(text: string) {
        this._state.profilePage.newPostText = text
        this._callSubscriber(this._state)
    },
    addMessage() {
        const newMessage: MessageType = {
            id: 5,
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    updateNewMessage(text: string) {
        this._state.dialogsPage.newMessageText = text
        this._callSubscriber(this._state)
    },
    _callSubscriber(state: StateType) {
        console.log(state)
    },
    subscriber(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    }
}

/*export const state: StateType = {
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
}*/

/*export const addPost = () => {
    const newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCounter: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}*/

/*export const updateNewPost = (text: string) => {
    state.profilePage.newPostText = text
    rerenderEntireTree(state)
}*/

/*export const addMessage = () => {
    const newMessage: MessageType = {
        id: 5,
        message: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state)
}*/

/*export const updateNewMessage = (text: string) => {
    state.dialogsPage.newMessageText = text
    rerenderEntireTree(state)
}*/

/*let rerenderEntireTree = (state: StateType) => {
    console.log(state)
}

export const subscriber = (observer: (state: StateType) => void) => {
    rerenderEntireTree = observer
}*/

// types
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