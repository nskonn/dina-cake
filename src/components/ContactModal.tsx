import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Phone, MessageCircle, Send } from 'lucide-react';

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const contactInfo = {
    phone: '+7 (918) 547-14-09',
    whatsapp: '+79185471409',
    telegram: 'disk_cake',
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle>Свяжитесь с нами</DialogTitle>
          <DialogDescription>
            Выберите удобный способ связи, и мы ответим на все ваши вопросы о заказе
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3 mt-4">
          <a
            href={`tel:+79185471409`}
            className="flex items-center gap-4 p-4 bg-[#E8C5C5]/30 rounded-lg hover:bg-[#E8C5C5]/50 transition-colors group"
          >
            <div className="bg-[#A67C52] text-white p-3 rounded-full group-hover:bg-[#8B6640] transition-colors">
              <Phone size={20} />
            </div>
            <div>
              <div className="text-gray-500 text-sm">Телефон</div>
              <div className="text-gray-900">{contactInfo.phone}</div>
            </div>
          </a>

          <a
            href={`https://wa.me/+79185471409`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
          >
            <div className="bg-green-500 text-white p-3 rounded-full group-hover:bg-green-600 transition-colors">
              <MessageCircle size={20} />
            </div>
            <div>
              <div className="text-gray-500 text-sm">WhatsApp</div>
              <div className="text-gray-900">{contactInfo.phone}</div>
            </div>
          </a>

          <a
            href={`https://t.me/${contactInfo.telegram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
          >
            <div className="bg-blue-500 text-white p-3 rounded-full group-hover:bg-blue-600 transition-colors">
              <Send size={20} />
            </div>
            <div>
              <div className="text-gray-500 text-sm">Telegram</div>
              <div className="text-gray-900">@{contactInfo.telegram}</div>
            </div>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
