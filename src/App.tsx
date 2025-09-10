
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';  
import { ThemeProvider } from './context/theme-provider';
import Weatherdashboard from './Pages/weather-dashboard';
import Citypage from './Pages/city-pages';
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient();

function App() {


return(
    <QueryClientProvider client={queryClient}>
      
    
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
<ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
);
}

export default App
