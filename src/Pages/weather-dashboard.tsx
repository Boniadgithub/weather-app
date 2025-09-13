

import WeatherSkeleton from '@/components/loading-skeleton';
import {Button} from '@/components/ui/button';
import { useGeolocation } from '@/hooks/use-geolocation';
import {  MapPin, RefreshCw } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

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
   if(locaitonerror){
    return (
      <Alert variant='destructive'>
        <AlertTriangle className='h-4 w-4'/>
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription className='flex flex-col gap-4'>
          <p>{locaitonerror}</p>
         <Button onClick={getLocation} variant={"outline"} className='w-fit' >
          <MapPin className='mr-2 h-4 w-4'/>
            Enable Location
         </Button>
        </AlertDescription>
      </Alert>
    );  
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