import React from 'react';
import { Section } from './Section';
import { Check, Star, Info, Server } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <Section noBreak={false}>
       <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Fiyat Teklifi</h2>
        <div className="h-1 w-20 bg-slate-900 rounded-full mx-auto"></div>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Akyüz Market'in dijital dönüşümü için hazırlanan, sürpriz maliyet içermeyen şeffaf fiyatlandırma tablosu.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 items-stretch">
        
        {/* Main Project Cost */}
        <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-lg relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
            Anahtar Teslim
          </div>
          
          <h3 className="text-lg font-bold text-slate-500 mb-2">Toplam Proje Bedeli</h3>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-4xl font-extrabold text-slate-900">35.000</span>
            <span className="text-xl font-bold text-slate-500">TL</span>
          </div>

          <ul className="space-y-3 mb-6 flex-grow">
            {[
              "Web Uygulaması (Tüm Cihazlara Uyumlu)",
              "Yönetim Paneli & AI Broşür Modülü",
              "Google Haritalar & Konum Entegrasyonu",
              "Tanıtım Videosu Prodüksiyonu",
              "Instagram Lansman Hazırlığı",
              "Mobil Uygulama Altyapı Hazırlığı (Faz 2)"
            ].map((item, i) => (
               <li key={i} className="flex items-start gap-3 text-slate-700">
                <div className="bg-orange-100 p-1 rounded-full text-orange-600 mt-0.5 shrink-0">
                  <Check size={14} />
                </div>
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Monthly Cost */}
        <div className="border border-blue-100 rounded-2xl p-6 bg-blue-50/50 flex flex-col">
          <h3 className="text-lg font-bold text-slate-500 mb-2">Aylık Bakım & Yönetim</h3>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-4xl font-extrabold text-blue-600">5.000</span>
            <span className="text-xl font-bold text-blue-400">TL</span>
          </div>

          <ul className="space-y-3 mb-6 flex-grow">
            {[
              "Sunucu Performans Takibi",
              "Teknik Destek (Hata/Problem Müdahalesi)",
              "Aylık Kampanya & İçerik Yönetimi",
              "İsteğe Bağlı Reklam Yönetimi Desteği",
              "Uygulama İçeriklerinin Güncellenmesi",
              "Yedekleme Hizmeti"
            ].map((item, i) => (
               <li key={i} className="flex items-start gap-3 text-slate-700">
                <div className="bg-blue-200 p-1 rounded-full text-blue-700 mt-0.5 shrink-0">
                  <Star size={14} />
                </div>
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Extra Costs Info Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-4 text-slate-800">
            <Server size={20} className="text-slate-600" />
            <h4 className="font-bold">Ek Maliyetler & Bilgilendirme</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600">
            <div>
                <p className="mb-2"><strong className="text-slate-900">Sunucu & Domain:</strong> Yıllık ortalama maliyetler olup, dilerseniz kendi sunucularımızda güvenle barındırabiliriz.</p>
                <p><strong className="text-slate-900">Google Maps API:</strong> Belirli bir kotaya kadar ücretsizdir, çok yüksek trafiklerde küçük maliyetler oluşabilir.</p>
            </div>
            <div>
                <p className="mb-2"><strong className="text-slate-900">Yapay Zeka Servisleri:</strong> Kullandıkça öde sistemiyle çalışır. Broşür oluşturma sıklığına göre aylık ortalama <strong className="text-green-600">1$ - 5$</strong> gibi cüzi bir maliyeti vardır.</p>
                <p><strong className="text-slate-900">Not:</strong> Bu maliyetler doğrudan servis sağlayıcılara ödenen, aracı olmadığımız giderlerdir.</p>
            </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 mt-auto">
        <h4 className="font-bold text-slate-900 mb-2">Teklif Şartları</h4>
        <ul className="text-xs text-gray-500 space-y-1 list-disc pl-4">
          <li>Fiyatlara KDV dahil değildir.</li>
          <li>Ödeme planı: %50 iş başlangıcında, %50 Web Uygulaması tesliminde tahsil edilir.</li>
          <li>Mobil Uygulama (Store yayınları), Web sürümü devreye alındıktan sonraki süreçte planlanacaktır.</li>
          <li>Broşür oluşturma ve yapay zeka maliyetleri kullanım oranına göre değişkendir.</li>
        </ul>
      </div>
    </Section>
  );
};