import { useState, useEffect } from "react";
import ProfileWidget from "../components/ProfileWidget";
import NotesWidget from "../components/NotesWidget";
import NewsWidget from "../components/NewsWidget";
import WeatherWidget from "../components/WeatherWidget";

function Dashboard() {
  const [news, setNews] = useState({});
  const [newsLoading, setNewsLoading] = useState(true);

  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [weather, setWeather] = useState({});
  const [weatherLoading, setWeatherLoading] = useState(true);

  // Function to get the user's location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          // Set fallback coordinates (e.g., for London) if geolocation fails
          setLatitude("51.5171");
          setLongitude("-0.1062");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      // Set fallback coordinates
      setLatitude("51.5171");
      setLongitude("-0.1062");
    }
  };

  const fetchNewsData = async () => {
    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${
          import.meta.env.VITE_NYTIMES_API_KEY
        }`
      );
      const data = await response.json();
      setNews(data.results[0]);
    } catch (error) {
      console.error("Error fetching news data:", error);
    } finally {
      setNewsLoading(false);
    }
  };

  const fetchWeather = async () => {
    if (!latitude || !longitude) return; // Check that we have valid coordinates

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${latitude},${longitude}`
      );
      const data = await response.json();
      setWeather(data); // Store weather data
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setWeatherLoading(false);
    }
  };

  useEffect(() => {
    getUserLocation();
    fetchNewsData();
  }, []);

  useEffect(() => {
    fetchWeather();
  }, [latitude, longitude]);

  return (
    <div className="dashboard bg-black h-screen w-full flex justify-center items-center flex-col px-20">
      <div className="flex w-full justify-between h-[85vh]">
        <div className="flex flex-col w-[70%] justify-between h-full">
          <div className="flex w-full h-[58%] justify-between">
            <div className="profileandweather flex flex-col w-[48%] justify-between">
              <ProfileWidget />
              {weather ? (
                <WeatherWidget data={weather} loading={weatherLoading} />
              ) : (
                <div>
                  <p>Weather data not available</p>
                </div>
              )}
            </div>
            <NotesWidget />
          </div>
          <div className="timer w-full bg-[#1E2343] h-[38%]"></div>
        </div>
        {news ? (
          <NewsWidget news={news} />
        ) : (
          <div>
            <p>No news available</p>
          </div>
        )}
      </div>
      <button className="bg-white">Browse</button>
    </div>
  );
}

export default Dashboard;
