import {useState, useEffect} from "react";
import ProfileWidget from "../components/ProfileWidget";
import NotesWidget from "../components/NotesWidget";
import NewsWidget from "../components/NewsWidget";

function Dashboard() {
  const [news, setNews] = useState({});
  const [newsLoading, setNewsLoading] = useState(true);

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

  useEffect(() => {
    fetchNewsData();
  }, [])

  return (
    <div className="dashboard bg-black h-screen w-full flex justify-center items-center flex-col px-20">
      <div className="flex w-full justify-between h-[85vh]">
        <div className="flex flex-col w-[70%] justify-between h-full">
          <div className="flex w-full h-[58%] justify-between">
            <div className="profileandweather flex flex-col w-[48%] justify-between">
              <ProfileWidget />
              <div className="weather w-full h-[37%] bg-[#101744]"></div>
            </div>
            <NotesWidget />
          </div>
          <div className="timer w-full bg-[#1E2343] h-[38%]"></div>
        </div>
        {news ? <NewsWidget news={news} /> : <div><p>No news available</p></div>}
      </div>
      <button className="bg-white">Browse</button>
    </div>
  );
}

export default Dashboard;
