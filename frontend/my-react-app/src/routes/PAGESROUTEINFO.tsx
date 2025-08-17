
type navType = {
    name: string;
    href: string;
    detailed?: boolean;
};

const NAV_ITEMS: navType[] = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about-me" ,detailed: true},
    { name: "Tech Article", href: "/tech-article" },
    { name: "Contact", href: "/contact" },
];

export default NAV_ITEMS;