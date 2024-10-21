import { Link } from "react-router-dom";

function NewsWidget({ news }) {
  console.log(news);

  // Ensure valid return with JSX
  return (
    news && (
      <div className="news rounded-[19px] w-[27%] bg-white h-[85vh] overflow-hidden">
        <Link to={news?.url} target="_blank">
          <div className="h-full flex flex-col justify-between">
            <div className="h-full relative">
              {news?.multimedia && news.multimedia.length > 0 ? (
                <img
                  className="h-full w-full object-cover"
                  src={news.multimedia[0].url}
                  alt="news-img"
                />
              ) : (
                <p>No image available</p>
              )}

              {news?.title && (
                <p className="absolute z-10 bottom-0 bg-[#000000BD] font-medium text-[16px] 2xl:text-[22px] p-5 text-white">
                  {news.title}
                </p>
              )}
            </div>

            <div className="p-5 text-[16px] 2xl:text-[18.25px]">{news?.abstract && <p>{news.abstract}</p>}</div>
          </div>
        </Link>
      </div>
    )
  );
}

export default NewsWidget;
