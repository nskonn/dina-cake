import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

export function ProductCard({ title, description, price, image }: ProductCardProps) {
  return (
    <div className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-[#E8C5C5]/50 hover:border-[#A67C52] hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#F5E8DC] to-[#E8C5C5] relative">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 shadow-lg">
          <svg className="w-5 h-5 text-[#A67C52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-gray-900 mb-2 group-hover:text-[#A67C52] transition-colors text-xl" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '600' }}>{title}</h3>
        <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed">{description}</p>
        <div className="flex items-center justify-between pt-3 border-t border-[#E8C5C5]">
          <div className="text-[#A67C52] text-lg">от {price}</div>
          <div className="w-9 h-9 rounded-full bg-[#E8C5C5]/30 flex items-center justify-center group-hover:bg-[#A67C52] transition-all duration-300 group-hover:scale-110">
            <svg className="w-4 h-4 text-[#A67C52] group-hover:text-white transition-colors group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
