import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import { PAGESROUTEINFO } from './routes/PAGESROUTEINFO';


const App = () => {
  return (
    <>
      {/* ルーティングの設定 BrowserRouter -> Routes -> Route */}
      <BrowserRouter>
        {/* Headerのlink toを使うためにはBrowserRouterの中にいれる必要がある */}
        <Header />
        <Routes>
          {PAGESROUTEINFO.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </BrowserRouter>






    </>
  );
};
export default App;