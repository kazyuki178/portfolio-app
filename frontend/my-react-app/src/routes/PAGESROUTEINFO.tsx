import AboutMe from '../pages/AboutMe';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import TechArticle from '../pages/TechArticle';
import Home from '../pages/Home';
import { ComponentType } from 'react';


type RouteType = {
    path: string;
    name: string;
    component: ComponentType<any>;
};

export const PAGESROUTEINFO: RouteType[] = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/AboutMe",
        name: "About Me",
        component: AboutMe,
    },
    {
        path: "/Blog",
        name: "Blog",
        component: Blog,
    },
    {
        path: "/TechArticle",
        name: "Tech Article",
        component: TechArticle,
    },
    {
        path: "/Contact",
        name: "Contact",
        component: Contact,
    }
]