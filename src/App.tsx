import { useEffect, useState } from "react";
import { Article, STATUS } from "./types/types";
import { getNews } from "./helper/newsApi";
import New from "./components/New";

const App = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getNews().then((res) => {
      if (res?.status === STATUS.OK) {
        setNews(res.articles);
      } else if (STATUS.INVALIDAPI) {
        console.error("Invalid api key");
      }
    });
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim().length > 0) {
      setLoading(true);
    }

    setTimeout(() => {
      setLoading(false);
    }, 200);
  };

  const newsFiltered: Article[] = news.filter((prevNew) =>
    prevNew.title
      .toLowerCase()
      .trim()
      .startsWith(inputValue.toLowerCase().trim())
  );

  return (
    <main className="p-16">
      <section className="flex flex-col justify-center items-center h-full">
        <article className="w-full flex flex-col items-center">
          <div className="w-full flex justify-start ">
            <input
              type="text"
              value={inputValue}
              className="p-2 rounded mb-4"
              placeholder="Search the news"
              onChange={(e) => handleSearch(e)}
            />
          </div>
          {newsFiltered.length > 0 && !loading ? (
            <div className="my-5 w-full grid gap-12 place-items-center">
              {newsFiltered.map((news) => (
                <New
                  key={news.title}
                  author={news.author}
                  title={news.title}
                  description={news.description}
                  url={news.url}
                  urlToImage={news.urlToImage}
                  publishedAt={news.publishedAt}
                />
              ))}
            </div>
          ) : (
            <div className="w-full">
              {loading ? (
                <p className="text-white">Loading...</p>
              ) : (
                newsFiltered.length === 0 && (
                  <p className="text-white">No news available</p>
                )
              )}
            </div>
          )}
        </article>
      </section>
    </main>
  );
};

export default App;
