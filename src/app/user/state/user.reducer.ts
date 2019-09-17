import {User} from '../user';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserState {
    maskUserName: boolean;
    currentUser: User;
}


const InitialState: UserState = {
    maskUserName: true,
    currentUser: null
};

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
    getUserFeatureState,
    state => state.maskUserName
);

export function reducer(state = InitialState, action): UserState {

    switch (action.type) {
        case 'MASK_USER_NAME':
            console.log('existing state: ' + JSON.stringify(state));
            console.log('payload' + action.payload);
            return{
                ...state,
                maskUserName: action.payload
            };

        default:
            return state;
    }
}
