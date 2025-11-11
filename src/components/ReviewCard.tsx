import { Star, Quote } from "lucide-react";

interface ReviewCardProps {
  cakeName: string;
  review: string;
  image: string;
}

export function ReviewCard({
  cakeName,
  review,
  image,
}: ReviewCardProps) {
  return (
    <div className="group cursor-pointer bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border-l-4 border-[#A67C52]">
      {/* Изображение */}
      <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#F5E8DC] to-[#E8C5C5] relative">
        <img
          src={image}
          alt={cakeName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

        {/* Рейтинг */}
        <div className="absolute bottom-4 left-4 bg-white/20 rounded backdrop-blur-sm px-4 py-2 shadow-lg flex items-center gap-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-[#A67C52] text-[#A67C52]"
            />
          ))}
        </div>
      </div>

      {/* Информация */}
      <div className="p-6 bg-white">
        {/* Название торта */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 bg-[#E8C5C5]"></div>
          <h3
            className="text-gray-900 group-hover:text-[#A67C52] transition-colors"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: "600",
            }}
          >
            {cakeName}
          </h3>
          <div className="h-px flex-1 bg-[#E8C5C5]"></div>
        </div>

        {/* Текст отзыва */}
        <div className="relative bg-[#F5E8DC]/30 p-4 border-l-2 border-[#E8C5C5]">
          <Quote className="absolute top-2 left-2 w-5 h-5 text-[#A67C52] opacity-30" />
          <p
            className="text-gray-700 leading-relaxed italic pl-4"
            style={{ fontSize: "20px", lineHeight: "1.6" }}
          >
            {review}
          </p>
          <Quote className="absolute bottom-2 right-2 w-5 h-5 text-[#A67C52] opacity-30 rotate-180" />
        </div>
      </div>
    </div>
  );
}