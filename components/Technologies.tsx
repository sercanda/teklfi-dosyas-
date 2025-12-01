import React from 'react';
import { Database, Code2, Map, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { Section } from './Section';
import { TechItem } from '../types';

const techStack: (TechItem & { icon: any })[] = [
  {
    name: "Next.js & React",
    description: "Dünyanın en popüler modern web teknolojisi. Getir, Netflix gibi devlerin kullandığı, yüksek performanslı ve SEO uyumlu framework.",
    icon: Code2
  },
  {
    name: "Supabase",
    description: "Gerçek zamanlı veritabanı altyapısı. Siparişlerin anlık olarak panele düşmesini sağlayan, güvenli ve ölçeklenebilir bulut sistemi.",
    icon: Database
  },
  {
    name: "Google Maps API",
    description: "Dünyanın en hassas harita servisi. Müşteri konumunu nokta atışı tespit eder, rota ve mesafe hesaplamalarını hatasız yapar.",
    icon: Map
  },
  {
    name: "Yapay Zeka (Generative AI)",
    description: "Yönetim panelinde, indirimleriniz için saniyeler içinde profesyonel kalitede broşür görselleri üreten yapay zeka entegrasyonu.",
    icon: Sparkles
  },
  {
    name: "Ödeme Sistemleri",
    description: "Iyzico veya PayTR altyapıları ile 3D Secure uyumlu, BDDK onaylı güvenli ödeme geçidi entegrasyonu.",
    icon: ShieldCheck
  },
  {
    name: "Tailwind CSS & UI Kit",
    description: "Modern, responsive ve estetik tasarım dili. Her ekran boyutunda kusursuz görünen kullanıcı deneyimi tasarımı.",
    icon: Layers
  }
];

export const Technologies: React.FC = () => {
  return (
    <Section>
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Kullanılan Teknolojiler</h2>
        <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
        <p className="mt-4 text-slate-600">
          Projede kullanılan teknoloji yığını, uzun yıllar sorunsuz çalışacak, hızlı ve güncel bir altyapı sunmak için özenle seçilmiştir.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techStack.map((tech, idx) => (
          <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
            <div className="shrink-0 mt-1">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                <tech.icon size={24} />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">{tech.name}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {tech.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-slate-900 rounded-2xl text-white text-center">
        <h3 className="text-lg font-bold mb-2">Neden Bu Teknolojiler?</h3>
        <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Eski nesil hazır paketler yerine, tamamen size özel kodlanan bu modern mimari; 
            sayfa yüklenme hızını maksimuma çıkarır, Google sıralamalarında (SEO) avantaj sağlar 
            ve gelecekte eklenecek yeni özelliklere (örn: sadakat puan sistemi) %100 uyumludur.
        </p>
      </div>
    </Section>
  );
};