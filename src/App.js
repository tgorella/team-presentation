import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FavouritePage from './pages/FavouritePage';
import MemberInfoPage from './pages/MemberInfoPage';
import NavBar from './components/NavBar';
import MembersProvider from './hooks/useMember';
import FeaturesPage from './pages/FeaturesPage';

function App() {
  return (
    <BrowserRouter>
		<NavBar />
		<MembersProvider>
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/favourite" element={<FavouritePage />} />
			<Route path="/features" element={<FeaturesPage />} />
			<Route path="member/:id" element={<MemberInfoPage />} />
			<Route path="/*" element={<MainPage />} />
		</Routes>
		</MembersProvider>
		</BrowserRouter>
  );
}

export default App;
