import Header from '../components/common/Header';
import './globals.css';

export const metadata = {
    title: 'kazuki’s Portfolio',
    description: 'ITエンジニア 矢橋和樹のポートフォリオサイト',
    icons: {
        icon: "/favicon.ico",
    }
};

const RootLayout = ({ children, }: {
    children: React.ReactNode;
}) => {
    return (
        <html lang="ja">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}

export default RootLayout;