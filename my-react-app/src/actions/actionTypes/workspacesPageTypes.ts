import {IWorkspacesInfo} from '../../entities/workspacesInfo';
export const GET_WORKSPACES = 'GET_WORKSPACES';
export interface IGetWorkspaces {
    GET_WORKSPACES: {
        workspacesInfo: IWorkspacesInfo;
    }
}