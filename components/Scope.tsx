import React from 'react';
import { Globe, Smartphone, BarChart3, CreditCard, MapPin, Video, MonitorPlay, Instagram } from 'lucide-react';
import { Section } from './Section';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "Web Uygulaması (Öncelikli Faz)",
    icon: Globe,
    items: [
      "Mobil tarayıcıda uygulama gibi çalışan (PWA) altyapı",
      "Hemen kurulum gerektirmeyen hızlı erişim",
      "Getir/Trendyol benzeri modern ve hızlı arayüz",
      "Kategori bazlı gelişmiş ürün listeleme",
      "WhatsApp'a gerek kalmadan tam otomatik sipariş"
    ]
  },
  {
    title: "Gelişmiş Yönetim & Broşür Paneli",
    icon: BarChart3,
    items: [
      "Tek Tıkla Broşür: Panelden ürünleri seç, fiyatları gir, 'Oluştur'a bas.",
      "Yapay Zeka (AI) Entegrasyonu: Grafikere ihtiyaç duymadan saniyeler içinde Instagram Story formatında kampanya görseli.",
      "Kolay ürün ekleme, silme ve fiyat güncelleme",
      "Siparişleri ve kurye durumunu canlı izleme ekranı"
    ]
  },
  {
    title: "Sosyal Medya & Lansman Hazırlığı",
    icon: Instagram,
    items: [
      "Instagram hesabının kurumsal kimliğe uygun hale getirilmesi (Bio, Öne Çıkanlar)",
      "Açılışa özel ilk kampanya görsellerinin hazırlanması",
      "Lansman sürecinde profesyonel içerik desteği",
      "Not: Düzenli içerik üretimi aylık yönetim paketine dahildir."
    ]
  },
  {
    title: "Akıllı Konum & Harita Sistemi",
    icon: MapPin,
    items: [
      "Google Maps API ile nokta atışı adres tespiti",
      "Müşterinin mağazaya uzaklığına göre otomatik gönderim süresi hesabı",
      "Bölge dışı siparişlerde otomatik uyarı ve engelleme",
      "Kurye için optimize edilmiş rota gösterimi"
    ]
  },
  {
    title: "Mobil Uygulama (Faz 2)",
    icon: Smartphone,
    items: [
      "Web uygulaması oturduktan sonra devreye alınacaktır",
      "iOS ve Android marketlere yükleme süreci",
      "Push bildirimleri ile müşteriyi harekete geçirme"
    ]
  }
];

export const Scope: React.FC = () => {
  return (
    <Section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Proje Kapsamı ve Detaylar</h2>
        <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        <p className="mt-4 text-slate-600">
          Akyüz Market operasyonunu dijitalleştirecek modüllerin teknik detayları aşağıda listelenmiştir. Stratejik olarak proje <strong>önce Web App</strong> olarak yayınlanacak, sistem oturduktan sonra mobil market uygulamalarına geçiş yapılacaktır.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm group hover:border-blue-200 transition-colors">
            <div className="bg-slate-50 p-4 border-b border-gray-100 flex items-center gap-3">
              <div className={`p-2 rounded-lg shadow-sm ${feature.title.includes('Faz 2') ? 'bg-gray-100 text-gray-500' : 'bg-white text-blue-600'}`}>
                <feature.icon size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-800">
                {feature.title} 
                {feature.title.includes('Yönetim') && <span className="ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full border border-orange-200">Özel Modül</span>}
              </h3>
            </div>
            <div className="p-4">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${feature.title.includes('Faz 2') ? 'bg-gray-400' : 'bg-blue-500'}`}></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Video Section Highlight */}
        <div className="bg-orange-50 rounded-xl border border-orange-200 p-6 flex flex-col md:flex-row items-center gap-6 mt-2">
            <div className="p-4 bg-orange-100 rounded-full text-orange-600 shrink-0">
                <MonitorPlay size={32} />
            </div>
            <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Profesyonel Tanıtım Videosu</h3>
                <p className="text-sm text-slate-700 mb-2">
                    Uygulamanın kullanımı anlatan, market sahiplerini ve müşterileri ikna edici kurgu.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 30-45 saniye süreli, yüksek tempolu kurgu</li>
                    <li>• Modern motion grafikler ve telefon mockup animasyonları</li>
                </ul>
            </div>
        </div>
      </div>
    </Section>
  );
};