import Geolocation from "@react-native-community/geolocation"
import { useEffect } from "react"
import { View } from "react-native"

const GeoLocationScreen=()=>{
    useEffect(()=>{
getCurrentLocation()
    },[])


    const getCurrentLocation=async()=>{
    console.log('hii')
     try
     {
        Geolocation.getCurrentPosition(info=>{
            console.log(info)
        },async(error)=>{
            console.log(error)
        })

     }
     catch(error)
     {
        console.log(error)
     }

    }
    return(

        <View></View>
    )
}
export default GeoLocationScreen