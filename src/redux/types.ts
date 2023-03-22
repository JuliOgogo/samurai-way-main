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
    usersPage: UsersPageStateType
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
export type UserType = {
    id: string
    followed: boolean
    name: string
    status: string
    location: { city: string, country: string }
    photos: any
}
export type UsersPageStateType = {
    users: UserType[]
}