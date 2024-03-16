"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";



function Weather({ data, name }: { data: any; name: string }) {
  const route = useRouter();
  const [location, setLocation] = useState<string>("");
 
  console.log("our data is : ", data);
 
 
const week = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]
  const dayOfDate=(date:string)=>{
      const day = new Date(date).getDay()
      return week[day]
  }

  return (
    <div className="bg-blue-400 h-screen max-lg:h-full max-xl:h-full ">
      <div className="flex max-sm:flex max-sm:justify-center  max-lg:justify-center max-lg:flex max-lg:flex-col max-xl:flex max-xl:flex-col">
        <div className=" ">
          <div  className="flex justify-start pl-10  gap-2 pt-7 max-lg:justify-center max-lg:pr-10 max-xl:justify-center">
            <input
              type="text"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              placeholder="Search"
              className="p-2 rounded-lg outline-none"
            />
            <button
              className=" rounded-lg p-2 bg-white text-bold"
              onClick={() => route.push(`/${location}`)}
            >
              submit
            </button>
          </div>
       

        <div className="justify-start px-12 max-lg:flex flex-col max-lg:text-center max-xl:flex max-xl:items-center ">
          <div className="max-lg:text-center mt-2 max-xl:text-center  ">
            <h2 className="font-light text-5xl mb-8 text-white">{name}</h2>
            <h1 className="font-light text-9xl mb-10 text-white max-sm:text-6xl ">
           {Math.floor(data?.list[0]?.main.temp-273.15) }
              °C
            </h1>
            <h2 className="font-light text-4xl mb-7 text-white">  {data?.list[0]?.weather[0]?.description}</h2>
          </div>

          <div>
            <div className="flex  justify-start gap-10 pt-8 mt-16  max-lg:justify-center">
              <div className="flex flex-col gap-5">
                <div className="bg-gray-500 rounded-lg p-3 w-32">
                  <p className="font-light text-2xl text-white">
             feels like :{Math.round(  data?.list[0]?.main.feels_like-273.15)}
                   °C
                  </p>
                </div>

                <div className="bg-gray-500 rounded-lg p-3 w-32">
                  <p className="font-light text-2xl text-white">wind
                  speed:{data?.list[0]?.wind.speed} km/h</p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="bg-gray-500 rounded-lg p-3 w-32">
                  <p className="font-light text-2xl text-white">
                   visibilty :{Math.round(data?.list[3]?.visibility/1000)} km
                  </p>
                </div>

                <div className="bg-gray-500 rounded-lg p-3 w-32">
                  <p className="font-light text-2xl text-white"> humidity :{data?.list[3]?.main.humidity}% </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
          <div className="flex max-lg:flex max-lg:flex-col max-lg:text-center" >
          
            <div className=" flex justify-center items-center  max-lg:mt-5 max-lg:flex max-lg:justify-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/024/825/155/original/3d-weather-icon-sun-and-wind-free-png.png"
                alt=""
                width={450}
                height={150}
              />
            </div>
            <div className="flex flex-col ml-36 gap-3   mr-0 mt-10 max-lg:flex max-lg:items-center max-lg:justify-center  max-xl:items-center max-xl:pr-32 ">
              <div className="flex gap-3">
                <div className="bg-gray-400 w-36 h-40 p-2 rounded-md">
                  <p className="text-white m-0">{dayOfDate(data?.list[5]?.dt_txt)}</p>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/024/825/155/original/3d-weather-icon-sun-and-wind-free-png.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                  <p className="text-white m-0"> {Math.round(data?.list[5]?.main.temp-273.15) } °C</p>
                  <p className="text-white m-0"> {data?.list[5]?.weather[0]?.description}</p>
                </div>

                <div className="bg-gray-400 w-36 h-40 p-2 rounded-md">
                  <p className="text-white m-0">{dayOfDate(data?.list[13]?.dt_txt)}</p>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/024/825/155/original/3d-weather-icon-sun-and-wind-free-png.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                  <p className="text-white m-0"> {Math.round(data?.list[13]?.main.temp-273.15) } °C</p>
                  <p className="text-white m-0"> {data?.list[13]?.weather[0]?.description}</p>
                </div>
              </div>

              <div className="flex gap-3">
              <div className="bg-gray-400 w-36 h-40 p-2 rounded-md">
                  <p className="text-white m-0">{dayOfDate(data?.list[21]?.dt_txt)}</p>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/024/825/155/original/3d-weather-icon-sun-and-wind-free-png.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                  <p className="text-white m-0"> {Math.round(data?.list[21]?.main.temp-273.15) } °C</p>
                  <p className="text-white m-0"> {data?.list[21]?.weather[0]?.description}</p>
                </div>

                <div className="bg-gray-400 w-36 h-40 p-2 rounded-md">
                  <p className="text-white m-0">{dayOfDate(data?.list[29]?.dt_txt)}</p>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/024/825/155/original/3d-weather-icon-sun-and-wind-free-png.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                  <p className="text-white m-0"> {Math.round(data?.list[29]?.main.temp-273.15) } °C</p>
                  <p className="text-white m-0"> {data?.list[29]?.weather[0]?.description}</p>
                </div>
              </div>

              <div className="bg-gray-400 w-36 h-40 p-2 rounded-md">
                  <p className="text-white m-0">{dayOfDate(data?.list[37]?.dt_txt)}</p>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/024/825/155/original/3d-weather-icon-sun-and-wind-free-png.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                  <p className="text-white m-0"> {Math.round(data?.list[37]?.main.temp-273.15) } °C</p>
                  <p className="text-white m-0"> {data?.list[37]?.weather[0]?.description}</p>
                </div>
            </div>
          </div>;
        
      </div>
    </div>
  );
}

export default Weather;
