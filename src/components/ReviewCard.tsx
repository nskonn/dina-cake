import { Star, Quote } from 'lucide-react';

interface ReviewCardProps {
    cakeName: string;
    review: string;
    image: string;
    onOrderClick: () => void;
}

export function ReviewCard({ cakeName, review, image, onOrderClick }: ReviewCardProps) {
    return (
        <div className="group flex flex-col h-full overflow-hidden border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#F5E8DC] to-[#E8C5C5] relative">
                <img
                    src={image}
                    alt={cakeName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div
                    className="absolute bottom-4 left-4 z-20 bg-white/20 backdrop-blur-sm px-4 py-2 rounded shadow-lg text-white"
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: '500',
                    }}
                >
                    Медовик
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10"></div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <h3
                    className="text-gray-900 text-lg md:text-xl mb-3"
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: '600',
                    }}
                >
                    {cakeName}
                </h3>

                <div
                    className="relative text-gray-700 leading-relaxed text-sm md:text-base mb-5 overflow-hidden text-ellipsis"
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 6,
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    <Quote className="absolute -top-1 -left-1 w-5 h-5 text-[#A67C52] opacity-30" />
                    <p className="pl-4">{review}</p>
                    <Quote className="absolute -bottom-1 -right-1 w-5 h-5 text-[#A67C52] opacity-30 rotate-180" />
                </div>

                <button
                    onClick={onOrderClick}
                    className="mt-auto w-full border border-gray-300 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: '600',
                    }}
                >
                    Заказать
                </button>
            </div>
        </div>
    );
}
