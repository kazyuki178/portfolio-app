import Header from '../components/common/Header';
import './globals.css';

export const metadata = {
    title: 'kazuki’s Portfolio',
    description: '説明文',
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