import React, { useState } from "react";
import { Prop } from "../types/types";

const New: React.FC<Prop> = ({
  author,
  description,
  publishedAt,
  title,
  url,
  urlToImage,
}) => {
  const [translate, setTranslate] = useState<string>("130%");

  return (
    <div
      className="container_new w-full h-full flex flex-col justify-between rounded bg-slate-100 overflow-hidden"
      onMouseEnter={() => setTranslate("0")}
      onMouseLeave={() => setTranslate("130%")}
    >
      <div className="relative" style={{ background: "#ddd" }}>
        <div
          className={`absolute top-[1rem] right-[1rem] translate-x-[${translate}] transition-all duration-200`}
        >
          <small className="bg-red-500 rounded-xl p-1.5 text-white">
            {publishedAt?.split("T")[0]}
          </small>
        </div>
        <img
          loading="lazy"
          decoding="async"
          className="bg-cover bg-no-repeat w-full h-[150px]"
          src={urlToImage ? urlToImage : "https://placehold.co/200x200"}
          alt={`Image of the title: ${title}`}
        />
      </div>
      <div className="p-4 pb-0 flex justify-start">
        {author ? (
          <p className="text-center text-white font-bold text-xs text-ellipsis overflow-hidden whitespace-nowrap p-1 rounded bg-zinc-500">
            By {author?.toUpperCase()}
          </p>
        ) : (
          <p className="text-center text-white font-bold text-xs text-ellipsis overflow-hidden whitespace-nowrap p-1 rounded bg-zinc-500">
            No available
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3 p-4">
        <h4
          className="font-bold line-clamp-3"
          title="Threads globalizes keyword search, takes aim at Twitter"
        >
          {title}
        </h4>
        <p className="w-full opacity-80 text-xs line-clamp-3">{description}</p>
        <div className="flex items-center gap-2 hover:underline cursor-pointer">
          <svg
            className="size-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
              data-name="3-Arrow Right"
            />
          </svg>
          <a className="text-xs" href={url} target="_blank">
            READ MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default New;
