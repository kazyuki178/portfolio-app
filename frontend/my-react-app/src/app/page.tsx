

import Profile from '../components/Profile';
import RecentActivity from '../components/RecentActivity';


export const metadata = {
  title: "kazuki’s Portfolio Top | ITエンジニア 矢橋和樹 |",
  description: "kazuki’s Portfolio Top。ITエンジニア矢橋和樹（Kazuki Yahashi）の経歴、スキル、Web制作・インフラ構築の実績を掲載したポートフォリオサイトです。",
};

const App = () => {
  return (
    <>

      <Profile />

      <RecentActivity />
    </>
  );

};

export default App;