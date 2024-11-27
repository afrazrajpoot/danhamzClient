import React from "react";

const BlogsCard = ({ img, title, info, avatar, name, keywords }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-102 w-[70vw] md:w-full xl:max-w-[25vw] lg:max-w-[25vw] md:max-w-[25vw] bg-white">
      {/* Image Container */}
      <div className="relative h-[30vw] md:h-[13vw] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          onError={(e) => (e.target.src = "/images/no_preview.jpg")}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="p-4 md:p-5">
        {/* Title */}
        <h2 className="text-[#152347] font-semibold text-[2.7vw] md:text-[1vw] mb-2 line-clamp-2">
          {title}
        </h2>

        {/* Description */}
        <p className="text-[#152347]/80 text-[2.5vw] md:text-[0.8vw] mb-4 line-clamp-3">
          {info?.substring(0, 100)}...
        </p>

        {/* Footer Section */}
        <div className="flex items-center justify-between mt-4 gap-3">
          {/* Author Info */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={avatar || img}
                alt={name}
                className="w-[5vw] h-[5vw] md:w-10 md:h-10 rounded-full object-cover ring-2 ring-amber-400/50"
                onError={(e) => (e.target.src = "/images/no_preview.jpg")}
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div>
              <p className="text-[#152347] font-medium text-[1.7vw] md:text-[1vw]">
                {name}
              </p>
              <p className="text-[#152347]/60 text-[2.5vw] md:text-[0.8vw]">
                Author
              </p>
            </div>
          </div>

          {/* Read More Button */}
          <a
            href={`/blogs/${keywords}`}
            className="inline-flex items-center justify-center px-4 py-2 bg-amber-400 text-[#152347] rounded-lg text-[3vw] md:text-[0.9vw] font-medium transition-colors duration-300 hover:bg-[#152347]  hover:text-white group-hover:shadow-lg"
          >
            Read more
            <svg
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;