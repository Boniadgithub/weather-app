import { useEffect, useState } from "react";
import type { Coordinates } from "@/api/types";


interface GeolocationState{
    coordinates: Coordinates | null;
    error: string | null;
    isloading: boolean;
}

export function useGeolocation(){
    const [locationData, setLocationData]= useState<GeolocationState>({
        coordinates: null,
        error: null,
        isloading: true,
    });

    const getLocation =()=>{
        setLocationData((prev)=>({...prev, isloading:true, error:null}));
        if(!navigator.geolocation){
            setLocationData({
                coordinates: null,
                error: "Geolocation is not supported by your browser",
                isloading: false,
            });
            return;
        }
        navigator.geolocation.getCurrentPosition((position)=>{
            setLocationData({
                coordinates: {  lat: position.coords.latitude, lon: position.coords.longitude},
                error: null,
                isloading: false,
            });
        }, (error)=>{  
            let errorMessage = "";
            switch(error.code){
                case error.PERMISSION_DENIED:
                    errorMessage = "User denied the request for Geolocation.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = "Location information is unavailable.";
                    break;
                case error.TIMEOUT:
                    errorMessage ="location request timed out.";
                    break;
                default:
                    errorMessage="An unknown error occurred";
            }
            setLocationData({
                coordinates: null,
                error: errorMessage,
                isloading: false,
            });
        },{
            enableHighAccuracy:true,
            timeout:5000,
            maximumAge:0,
        });
    };

    useEffect(()=>{
        getLocation();
    }, []);

    return {...locationData, getLocation};
}