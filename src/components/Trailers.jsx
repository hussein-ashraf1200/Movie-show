import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import BlurCircle from "../components/BlurCircle";

const Trailers = () => {
  // الحالة لتخزين رابط الفيديو المختار
  const [selectedVideo, setSelectedVideo] = useState(
    dummyTrailers[0].videoUrl.replace("watch?v=", "embed/")
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 mb-14">
      {/* العنوان */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Trailers</h1>
      </div>
      {/* شاشة العرض الرئيسية */}
      <div className="w-full  aspect-video mb-8 rounded-4xl overflow-hidden">
        <iframe
          loading="lazy"
          src={selectedVideo}
          title="Main Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      {/* الشبكة المصغرة للفيديوهات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
        {dummyTrailers.map((item, index) => {
          const embedUrl = item.videoUrl.replace("watch?v=", "embed/");
          return (
            <div
              key={index}
              onClick={() => setSelectedVideo(embedUrl)}
              className="cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <img
                loading="lazy"
                src={item.image}
                alt={`Trailer ${index + 1}`}
                className="rounded-xl w-full h-48 object-cover"
              />
            </div>
          );
        })}
      </div>
      <BlurCircle top="1300px" left="0px" />
      <BlurCircle top="1980px" right="0px" />
    </div>
  );
};

export default Trailers;
