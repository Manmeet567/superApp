import pressure from "../assets/pressure.png";
import wind from "../assets/wind.png";
import humidity from "../assets/humidity.png";

function WeatherWidget({ data, loading }) {
  
  const [date, time] = data?.location?.localtime?.split(" ") || ["N/A", "N/A"];

  if (loading) {
    return (
      <div className="weather w-full h-[37%] bg-[#101744] rounded-[19px] flex justify-center items-center">
        <p className="text-white">Loading weather data...</p>
      </div>
    );
  }

  return (
    <div className="weather w-full h-[37%] bg-[#101744] rounded-[19px] overflow-hidden">
      <div className="flex w-full justify-evenly bg-[#FF4ADE] py-1 text-white font-semibold items-center text-[20px] 2xl:text-[30px]">
        <p>{date}</p>
        <p>{time}</p>
      </div>

      <div className="flex justify-evenly items-center p-1 text-white my-1">
        <div className="condition flex flex-col items-center">
          {data?.current?.condition ? (
            <>
              <img
                className="w-[45px] 2xl:w-[60px]"
                src={data.current.condition.icon}
                alt="weather icon"
              />
              <p className="text-white text-[13px] 2xl:text-[16px]">{data.current.condition.text}</p>
            </>
          ) : (
            <p>No condition data</p>
          )}
        </div>

        <div className="border-[0.78px] h-[45px]"></div>

        <div className="temperature flex flex-col items-center">
          <p className="text-[20px] 2xl:text-[40px]">{data?.current?.temp_c ?? "N/A"}°C</p>
          <div className="flex items-center mt-1 2xl:mt-0">
            <img src={pressure} alt="pressure icon" />
            <div className="ml-2 text-[11px] 2xl:text-[13.98px]">
              <p>{data?.current?.pressure_mb ?? "N/A"} mbar</p>
              <p>Pressure</p>
            </div>
          </div>
        </div>

        <div className="border-[0.78px] h-[45px]"></div>

        <div className="wind flex flex-col items-center">
          <div className="flex items-center">
            <img className="w-[22px] 2xl:w-[25px]" src={wind} alt="wind icon" />
            <div className="ml-2 text-[11px] 2xl:text-[13.98px]">
              <p>{data?.current?.wind_kph ?? "N/A"} km/h</p>
              <p>Wind</p>
            </div>
          </div>

          <div className="flex items-center mt-2">
            <img className="w-[15px] 2xl:w-[18px]" src={humidity} alt="humidity icon" />
            <div className="ml-2 text-[11px] 2xl:text-[13.98px]">
              <p>{data?.current?.humidity ?? "N/A"}%</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherWidget;
