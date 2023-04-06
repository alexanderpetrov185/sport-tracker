import { ComponentType } from 'react';
export type TypeRootStackParamList = {
    Auth: undefined;
    Home: undefined;
    Profile: undefined;
    Statistic: undefined;
    Workouts: undefined;
}

export interface IRoute{
    name: keyof TypeRootStackParamList,
    component: ComponentType
}