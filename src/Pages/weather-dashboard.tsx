

import WeatherSkeleton from '@/components/loading-skeleton';
import {Button} from '@/components/ui/button';
import { useGeolocation } from '@/hooks/use-geolocation';
import { RefreshCw } from 'lucide-react';

const Weatherdashboard =()=> {
  const {coordinates, error:locaitonerror, getLocation,isloading:locationLoading,}=useGeolocation();
   console.log(coordinates);
   const handleRefersh =()=>{
    getLocation();
    if(coordinates){

    }
   };
   if(locationLoading){
      return<WeatherSkeleton/>
   }
   
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between '>
        <h1 className='text-xl font-bold tracking-tight'>My location</h1>
        <Button variant={"outline"} size="icon" onClick={getLocation} disabled={locationLoading}>
          <RefreshCw className='w-4 h-4'/>
        </Button>
      </div>
      
    </div>
  );
}

export default Weatherdashboard;