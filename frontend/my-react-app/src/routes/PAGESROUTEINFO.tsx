import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import TechArticle from '../pages/TechArticle';
import { ComponentType } from 'react';
import Profile from '../components/Profile';


type RouteType = {
    path: string;
    name: string;
    component: React.ComponentType;
};

export const PAGESROUTEINFO: RouteType[] = [
    {
        path: "/",
        name: "Home",
        component: () => (
            <>
                <Profile />
                {/* recent activity 次期実装 */}
            </>
        ),
    },
    {
        path: "/AboutMe",
        name: "About Me",
        component: AboutMe,
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