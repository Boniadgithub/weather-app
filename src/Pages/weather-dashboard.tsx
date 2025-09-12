

import {Button} from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

const Weatherdashboard =()=> {
  // your code here
  return (
    <div className='space-y-4'>
    <div className='flex items-center justify-between '>
      <h1 className='text-xl font-bold tracking-tight'>My location</h1>
      <Button variant={"outline"} size="icon">
        
        <RefreshCw className='w-4 h-4'/>
      </Button>
    </div>
    </div>
  );
}

export default Weatherdashboard;