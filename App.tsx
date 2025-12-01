import React from 'react';
import { CoverPage } from './components/CoverPage';
import { Summary } from './components/Summary';
import { Scope } from './components/Scope';
import { Technologies } from './components/Technologies';
import { Timeline } from './components/Timeline';
import { Pricing } from './components/Pricing';
import { Printer, Download } from 'lucide-react';

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 print:bg-white print:py-0">
      
      {/* Control Bar - Hidden when printing */}
      <div className="no-print fixed top-6 right-6 z-50 flex gap-4">
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-lg hover:bg-slate-800 transition-all font-medium"
        >
          <Printer size={18} />
          <span>Yazdır / PDF Kaydet</span>
        </button>
      </div>

      {/* Control Bar Background for readability on scroll */}
      <div className="no-print fixed top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100 to-transparent pointer-events-none z-40"></div>

      {/* Document Pages */}
      <main className="w-full print:w-full">
        <CoverPage />
        <Summary />
        <Scope />
        <Technologies />
        <Timeline />
        <Pricing />
      </main>

      <div className="no-print text-center text-gray-400 text-sm pb-8">
        <p>Akyüz Market Dijital Dönüşüm Teklifi - 2024</p>
      </div>
    </div>
  );
}

export default App;