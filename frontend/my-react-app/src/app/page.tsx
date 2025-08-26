import Profile from '../components/Profile';
import RecentActivity from '../components/RecentActivity';

export const metadata = {
  title: "kazuki’s Portfolio Top | ITエンジニア 矢橋和樹 |",
  description: "kazuki’s Portfolio Top。ITエンジニア矢橋和樹（Kazuki Yahashi）",
};


export default async function App()  {
  return (
    <>

      <Profile />
      <RecentActivity /> 
    </>
  );
}
