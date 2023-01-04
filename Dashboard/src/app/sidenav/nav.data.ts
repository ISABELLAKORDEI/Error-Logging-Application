/*
import { INavbarData } from "./helper";*/

export const navbarData/*: INavbarData[] =*/= [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'errors',
        icon: 'fal fa-exclamation-triangle',
        label: 'Errors',
        items: [
            {
                routelink:'errors/info',
                label: 'INFO'
            },
            {
                routelink:'errors/debug',
                label: 'DEBUG'
            },
            {
                routelink:'errors/error',
                label: 'ERROR'
            },
            {
                routelink:'errors/fatal',
                label: 'FATAL'
            }
        ]
    },
    {
        routeLink: 'recents',
        icon: 'fal fa-clock',
        label: 'Recents'
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings'
    }
]
