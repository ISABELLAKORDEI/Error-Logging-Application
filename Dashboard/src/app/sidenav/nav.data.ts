import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
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
                routeLink:'errors/info',
                label: 'INFO'
            },
            {
                routeLink:'errors/debug',
                label: 'DEBUG'
            },
            {
                routeLink:'errors/error',
                label: 'ERROR'
            },
            {
                routeLink:'errors/fatal',
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
