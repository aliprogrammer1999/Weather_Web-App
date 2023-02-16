import React, { useEffect, useState } from 'react'
function Cart({ data }) {
    const [location, setLocation] = useState('')
    const [current, setCurrent] = useState('')

    useEffect(() => {
        setLocation(data.location)
        setCurrent(data.current)
    }, [data])

    console.log(data)

    return (
        <div className='w-full h-max py-8 bg-[#000000cc] rounded-lg p-4 text-white'>
            <div className='flex justify-between text-sm border-b-2 pb-4 px-3'>
                <h1>Location:<span>{location.tz_id}</span></h1>
                <h1>Lat-Lon:<span>{location.lat}-{location.lon}</span></h1>
                <h1>Local Time:<span>{location.localtime}</span></h1>
            </div>

            <div className='flex items-center justify-between px-5 mt-5'>

                <div className='flex flex-col justify-center w-[70px] items-center'>
                    <img src={data.current.condition.icon} className=' object-cover' />
                    {current.cloud > 0 ? <span>{current.cloud}%</span> : null}

                </div>
                <h1>Country:<span> {location.country}</span></h1>
                <h1>region:<span> {location.region}</span></h1>
                <h1>Your:<span> {location.name}</span></h1>
            </div>
            <div className='flex justify-around gap-3 pt-7'>
                <div className=' flex flex-col gap-3'>
                    <h1>Gust: {current.gust_kph}km / {current.gust_mph}mp</h1>
                    <h1>Pressure: {current.gust_kph}in / {current.gust_mph}mb</h1>
                    <h1>Temp: {current.temp_c}C / {current.temp_f}F</h1>
                    <h1>Precip: {current.precip_in}%</h1>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1>Feels Like: {current.feelslike_c}C / {current.feelslike_f}F</h1>
                    <h1>Wind Degree: {current.wind_degree}</h1>
                    <h1>Wind: {current.wind_kph}km / {current.wind_mph}mp</h1>
                    <h1>Humidity: {current.humidity}%</h1>

                </div>
            </div>
        </div>
    )
}

export default Cart