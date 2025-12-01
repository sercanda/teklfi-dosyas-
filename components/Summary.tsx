import React from 'react';
import { Target, Zap, LayoutDashboard, Video, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Section } from './Section';

export const Summary: React.FC = () => {
  return (
    <Section>
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Proje Özeti</h2>
        <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
      </div>

      <div className="prose prose-lg text-slate-600 leading-relaxed mb-12">
        <p className="mb-4">
          Akyüz Market markasını dijital dünyaya en güçlü şekilde taşıyacak, 
          <strong className="text-slate-900"> Getir ve Trendyol standartlarında</strong> modern, hızlı ve kullanıcı dostu bir 
          online sipariş platformu geliştirilecektir.
        </p>
        <p className="mb-4">
          Stratejik planlama gereği proje <strong>iki fazlı</strong> olarak hayata geçirilecektir. İlk aşamada herhangi bir indirme gerektirmeyen,
          mobil uyumlu <strong>Gelişmiş Web Uygulaması (Web App)</strong> yayınlanacak, müşteri kitlesi ve sipariş akışı oturduktan sonra
          ikinci fazda <strong>Mobil Uygulama</strong> mağazalara yüklenecektir.
        </p>
        <p>
          Bu proje, stok ve siparişlerinizi tek ekrandan yönetebileceğiniz, tek tıkla kampanya broşürü hazırlayabileceğiniz uçtan uca bir 
          <span className="bg-orange-100 text-orange-800 px-1 rounded font-semibold mx-1">Dijital Market Ekosistemi</span>dir.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
              <LayoutDashboard size={24} />
            </div>
            <h3 className="font-bold text-slate-900">Yönetim ve Broşür Paneli</h3>
          </div>
          <p className="text-sm text-slate-600">
            Sipariş yönetimine ek olarak, ürünlerinizi seçip saniyeler içinde sosyal medya için profesyonel indirim broşürü oluşturabileceğiniz akıllı panel.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
              <Video size={24} />
            </div>
            <h3 className="font-bold text-slate-900">Profesyonel Tanıtım</h3>
          </div>
          <p className="text-sm text-slate-600">
            Lansman için özel olarak hazırlanmış, modern motion grafiklerle desteklenmiş 30-45 saniyelik tanıtım videosu.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Zap className="text-yellow-500" />
        İşletmeye Sağlayacağı Avantajlar
      </h3>

      <div className="grid grid-cols-1 gap-4">
        {[
          "Telefon trafiğini bitirip, dijitalden hatasız ve otomatik sipariş alma.",
          "Harita entegrasyonu ile adres karmaşasına son verme.",
          "Hazır şablonlarla grafiker gerektirmeden anında kampanya görseli üretme.",
          "Bölgesel hakimiyet ve sadık müşteri kitlesi oluşturma.",
          "Modern ve güven veren kurumsal marka kimliği."
        ].map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
            <span className="text-slate-700 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};