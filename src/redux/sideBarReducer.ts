import {ActionType, SidebarStateType} from "./state";

const initialState: SidebarStateType = {
    friends: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Polina'},
        {id: 3, name: 'Peter'},
    ]
}

export const sideBarReducer = (state: SidebarStateType = initialState, action: ActionType): SidebarStateType => {
    return state
}