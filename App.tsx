import React from 'react';
import { CoverPage } from './components/CoverPage';
import { Summary } from './components/Summary';
import { Scope } from './components/Scope';
import { Technologies } from './components/Technologies';
import { Timeline } from './components/Timeline';
import { Pricing } from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 print:bg-white print:py-0">
      
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