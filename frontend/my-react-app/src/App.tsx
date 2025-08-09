import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/common/Header';
import Profile from './components/Profile';


const App = () => {
  return (
    <>


      {/* ルーティングの設定 BrowserRouter -> Routes -> Route */}
      <BrowserRouter>
      {/* Headerのlink toを使うためにはBrowserRouterの中にいれる必要がある */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

      <Profile />



    </>
  );
};
export default App;