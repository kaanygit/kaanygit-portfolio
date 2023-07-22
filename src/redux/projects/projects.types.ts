export enum PROJECTS_TYPES{
    SET_PROJECTS="SET_PROJECTS",
}

export interface ProjectsData{
    id: number;
    name: string;
    imageUrl: string
    lang:string[];
    website: string;
    githubLink: string;
};

export interface SetProductsAction{
    type:PROJECTS_TYPES.SET_PROJECTS,
    payload:ProjectsData[]
}

export type ProductActionTypes=|SetProductsAction;