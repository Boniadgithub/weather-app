// Add this import or definition at the top of your 
 // Adjust the path as needed

import { API_CONFIG } from "./config";

// If your types are in 'src/types.ts', update the path accordingly:
import type { Coordinates } from "./types";
// Or create 'src/types.ts' and define 'Coordinates' there if it doesn't exist.
import type { WeatherData, ForecastData, GeocodingResponse } from "./types";

class WeatherAPI{
    private createUrl(endpoint:string,
params:Record   <string, string|number>  
    ){
        const searchParams = new URLSearchParams({
            appid: API_CONFIG.API_KEY,
            ...params,
        });
     
    return `${endpoint }?${searchParams.toString()}`;
    }
    private async fetchData<T>(url: string): Promise<T>{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        return response.json();
    }
    async getCurrentWeather({lat ,lon}:Coordinates):Promise<WeatherData>{
        const url = this.createUrl(`${API_CONFIG.BASE_URL}/weather`, {
            lat: lat.toString(),
            lon: lon.toString(),
            units: API_CONFIG.DEFAULT_PARAMS.units,
        });
        return this.fetchData<WeatherData>(url);
    }
    async getForecast({lat ,lon}:Coordinates):Promise<ForecastData>{
        const url = this.createUrl(`${API_CONFIG.BASE_URL}/forecast`, {
            lat: lat.toString(),
            lon: lon.toString(),
            units: API_CONFIG.DEFAULT_PARAMS.units,
        });
        return this.fetchData<ForecastData>(url);
    }
    async reverseGeocode({lat ,lon}:Coordinates):Promise<GeocodingResponse[]>{
        const url = this.createUrl(`${API_CONFIG.GEO}/reverse`, {
            lat: lat.toString(),
            lon: lon.toString(),
            units: API_CONFIG.DEFAULT_PARAMS.units,
            limit:1,
        });
        return this.fetchData<GeocodingResponse[]>(url);
    }
};

export const weatherAPI= new WeatherAPI();