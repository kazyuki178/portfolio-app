import Profile from '../components/Profile';
import RecentActivity from '../components/RecentActivity';
import { ReactElement } from 'react';
export const metadata = {
  title: "kazuki’s Portfolio Top | ITエンジニア 矢橋和樹 |",
  description: "kazuki’s Portfolio Top。ITエンジニア矢橋和樹（Kazuki Yahashi）",
};


export default async function App(): Promise<ReactElement>  {
  return (
    <>

      <Profile />
      <RecentActivity /> 
    </>
  );
}
