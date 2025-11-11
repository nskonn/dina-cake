import { Phone, MessageCircle, Send, Instagram } from 'lucide-react';

export function ContactsSection() {
  const contactInfo = {
    phone: '+7 (999) 123-45-67',
    whatsapp: '+79991234567',
    telegram: 'dinascake',
    instagram: 'dinascake',
  };

  return (
    <section id="contact" className="py-20 bg-[#F5E8DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-gray-900 mb-4"
            style={{
              fontSize: '48px',
              lineHeight: '1.2',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: '500',
            }}
          >
            КОНТАКТЫ
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ fontSize: '20px', lineHeight: '1.6' }}
          >
            Свяжитесь с нами удобным способом, и мы ответим на все ваши вопросы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow group"
          >
            <div className="bg-[#A67C52] text-white p-4 rounded-full group-hover:bg-[#8B6640] transition-colors">
              <Phone size={24} />
            </div>
            <div className="text-center">
              <div className="text-gray-500 text-sm mb-1">Телефон</div>
              <div className="text-gray-900">{contactInfo.phone}</div>
            </div>
          </a>

          <a
            href={`https://wa.me/${contactInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow group"
          >
            <div className="bg-[#A67C52] text-white p-4 rounded-full group-hover:bg-[#8B6640] transition-colors">
              <MessageCircle size={24} />
            </div>
            <div className="text-center">
              <div className="text-gray-500 text-sm mb-1">WhatsApp</div>
              <div className="text-gray-900">{contactInfo.phone}</div>
            </div>
          </a>

          <a
            href={`https://t.me/${contactInfo.telegram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow group"
          >
            <div className="bg-[#A67C52] text-white p-4 rounded-full group-hover:bg-[#8B6640] transition-colors">
              <Send size={24} />
            </div>
            <div className="text-center">
              <div className="text-gray-500 text-sm mb-1">Telegram</div>
              <div className="text-gray-900">@{contactInfo.telegram}</div>
            </div>
          </a>

          <a
            href={`https://instagram.com/${contactInfo.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow group"
          >
            <div className="bg-[#A67C52] text-white p-4 rounded-full group-hover:bg-[#8B6640] transition-colors">
              <Instagram size={24} />
            </div>
            <div className="text-center">
              <div className="text-gray-500 text-sm mb-1">Instagram</div>
              <div className="text-gray-900">@{contactInfo.instagram}</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}


