import {ActionType, SidebarStateType} from "./state";

const initialState: SidebarStateType = {
    friends: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Polina'},
        {id: 3, name: 'Peter'},
    ]
}

export const sideBarReducer = (action: ActionType, state: SidebarStateType = initialState): SidebarStateType => {
    debugger
    return state
}