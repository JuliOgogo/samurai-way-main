import {ProfilePageStateType} from './types';
import {addPost, deletePost, profileReducer} from './profileReducer';

let initialState: ProfilePageStateType

beforeEach(() => {
    initialState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCounter: 11},
            {id: 2, message: 'It\'s my first post', likesCounter: 54},
            {id: 3, message: 'I\'m learning React', likesCounter: 3},
        ],
        profile: {
            aboutMe: null,
            contacts: {
                facebook: null,
                website: null,
                vk: null,
                twitter: null,
                instagram: null,
                youtube: null,
                github: null,
                mainLink: null,
            },
            lookingForAJob: false,
            lookingForAJobDescription: null,
            fullName: null,
            userId: 0,
            photos: {
                small: null,
                large: null,
            }
        },
        status: ''
    }
})

test('new post should be added', () => {
    const action = addPost('new test post')
    const endState = profileReducer(initialState, action)

    expect(endState.posts.length).toBe(4)
    expect(endState.posts[0].message).toBe('new test post')
})

test('post should be deleted', () => {
    const action = deletePost(1)
    const endState = profileReducer(initialState, action)

    expect(endState.posts.length).toBe(2)
})