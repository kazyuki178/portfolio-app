import Profile from '../components/Profile';
import RecentActivity from '../components/RecentActivity';
import { getQiitaItems } from '../lib/qiita';

export const metadata = {
  title: "kazuki’s Portfolio Top | ITエンジニア 矢橋和樹 |",
  description: "kazuki’s Portfolio Top。ITエンジニア矢橋和樹（Kazuki Yahashi）",
};


export default async function App()  {
  const items = await getQiitaItems();
  return (
    <>

      <Profile mode={"top"}/>
      < RecentActivity items={items}/> 
    </>
  );
}
