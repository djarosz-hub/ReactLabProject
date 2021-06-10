import { IWorkspacesInfo } from '../entities/workspacesInfo';
import * as actionTypes from '../actions/actionTypes/workspacesPageTypes';
export interface IWorkspacesInfoReducer {
    workspaceInfo: IWorkspacesInfo;
}
const defaultState = (): IWorkspacesInfoReducer =>({
    workspaceInfo: {iconUrl:'entities', title:'Corporate holding'}
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_WORKSPACES: {
            const payLoad: actionTypes.IGetWorkspaces['GET_WORKSPACES'] = action;
            return {
                ...state,
                workspaceInfo: payLoad.workspacesInfo
            }
        }
        default: {
            return state;
        }
    }
}