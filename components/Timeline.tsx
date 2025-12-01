import React from 'react';
import { Section } from './Section';
import { Clock } from 'lucide-react';

const steps = [
  {
    title: "1. Analiz & UI/UX Tasarım",
    desc: "Gereksinimlerin netleştirilmesi ve Web arayüzünün tasarlanması.",
    days: "Gün 1-5"
  },
  {
    title: "2. Web App & Yönetim Paneli",
    desc: "Web uygulamasının kodlanması ve veritabanı kurulumu.",
    days: "Gün 6-12"
  },
  {
    title: "3. Akıllı Harita & Broşür Modülü",
    desc: "Google Maps konum servisleri entegrasyonu ve Tek tıkla broşür oluşturma (AI) modülünün geliştirilmesi.",
    days: "Gün 13-16"
  },
  {
    title: "4. Test & Tanıtım Videosu",
    desc: "Sistem testleri, güvenlik kontrolleri ve lansman videosunun hazırlanması.",
    days: "Gün 17-19"
  },
  {
    title: "5. Web App Teslim & Eğitim",
    desc: "Sistemin yayına alınması (Web) ve panel eğitiminin verilmesi.",
    days: "Gün 20-21"
  },
  {
    title: "Sonraki Adım: Mobil Uygulama",
    desc: "Web sürümü oturduktan sonra iOS ve Android market uygulamaları geliştirilecektir (Faz 2).",
    days: "İleri Tarih"
  }
];

export const Timeline: React.FC = () => {
  return (
    <Section>
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Proje Teslim Süreci</h2>
        <div className="h-1 w-20 bg-green-500 rounded-full"></div>
      </div>

      <div className="relative pl-8 border-l-2 border-gray-200 ml-4 space-y-10">
        {steps.map((step, idx) => (
          <div key={idx} className="relative">
            <div className={`absolute -left-[41px] top-1 bg-white border-4 w-5 h-5 rounded-full ${idx === steps.length - 1 ? 'border-gray-400' : 'border-green-500'}`}></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h3 className={`text-xl font-bold ${idx === steps.length - 1 ? 'text-gray-500' : 'text-slate-900'}`}>{step.title}</h3>
              <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mt-1 sm:mt-0 w-fit ${idx === steps.length - 1 ? 'bg-gray-100 text-gray-500' : 'text-green-600 bg-green-50'}`}>
                {step.days}
              </span>
            </div>
            
            <p className="text-slate-600">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-green-50 rounded-xl p-8 flex items-center gap-6 border border-green-100">
        <div className="bg-white p-4 rounded-full shadow-sm text-green-600">
            <Clock size={32} />
        </div>
        <div>
            <h4 className="text-lg font-bold text-green-900 mb-1">Web Platformu Teslim Süresi</h4>
            <p className="text-green-800">
                Proje başlangıç onayından itibaren <span className="font-bold underline">2-3 Hafta</span> içerisinde Web Uygulaması ve Yönetim Paneli anahtar teslim olarak sunulacaktır.
            </p>
        </div>
      </div>
    </Section>
  );
};