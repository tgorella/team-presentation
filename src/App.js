import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FavouritePage from './pages/FavouritePage';
import MemberInfoPage from './pages/MemeberInfoPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
		<NavBar />
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/favourite" element={<FavouritePage />} />
			<Route path="member/:id" element={<MemberInfoPage />} />
			<Route path="/*" element={<MainPage />} />
		</Routes>
		</BrowserRouter>
  );
}

export default App;
