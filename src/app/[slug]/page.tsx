import Weather from "@/Components/Weather";
import React from "react";

async function page({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${params.slug}&limit=1&appid=${process.env.API_KEY}`
  );
  const loc = await res.json();
  console.log(loc);

  const lat = loc[0]?.lat.toString().slice(0, 5);
  const lon = loc[0]?.lon.toString().slice(0, 5);
  let data: any;

  try {
    const weatherResponse = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${parseInt(
        lat
      )}&lon=${parseInt(lon)}&appid=${process.env.API_KEYS}`
    );
    data = await weatherResponse.json();
    console.log(data);
  } catch (error) {
    console.error("error fetching weather", error);
  }

  return (
    <div>
      <Weather data={data} name={loc[0]?.name} />
    </div>
  );
}

export default page;
