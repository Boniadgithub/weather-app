
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';  
import { ThemeProvider } from './context/theme-provider';
import Weatherdashboard from './Pages/weather-dashboard';
import Citypage from './Pages/city-pages';

function App() {
return(
<BrowserRouter>
  <ThemeProvider defaultTheme="dark">
    <Layout> 
        <Routes>
            <Route path='/' element={<Weatherdashboard/>}/>
            <Route path='/city/:cityName' element={<Citypage/>}/>
        </Routes>
    </Layout>
  </ThemeProvider>
</BrowserRouter>
);
}

export default App
