import React from 'react';
import { ShoppingBasket, TrendingUp } from 'lucide-react';
import { Section } from './Section';

export const CoverPage: React.FC = () => {
  return (
    <Section className="justify-center items-center text-center bg-gradient-to-br from-white via-white to-orange-50/50 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400 opacity-10 rounded-bl-full transform translate-x-20 -translate-y-20 print:opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 opacity-5 rounded-tr-full transform -translate-x-20 translate-y-20 print:opacity-5" />

      <div className="z-10 flex flex-col items-center flex-grow justify-center">
        <div className="mb-12 p-6 bg-orange-500 rounded-3xl shadow-lg shadow-orange-200 print:shadow-none">
          <ShoppingBasket size={80} className="text-white" />
        </div>

        <h2 className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-4">
          Dijital Dönüşüm & E-Ticaret
        </h2>

        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
          Akyüz Market<br />
          <span className="text-blue-600">Online Sipariş</span><br />
          Altyapısı Geliştirme
        </h1>

        <div className="h-1 w-32 bg-gray-200 my-8 rounded-full"></div>

        <div className="flex items-center gap-3 text-slate-500 mb-12">
          <TrendingUp size={20} />
          <span className="text-lg font-medium">Satış Odaklı Profesyonel Çözüm Paketi</span>
        </div>
      </div>

      <div className="z-10 w-full text-left border-l-4 border-orange-500 pl-6 py-2 mt-auto">
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Hazırlayan</p>
        <p className="text-xl font-bold text-slate-800">Sercan Dağdeviren</p>
        <p className="text-sm text-gray-500 mt-1">{new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
    </Section>
  );
};