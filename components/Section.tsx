import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  noBreak?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, noBreak = false }) => {
  return (
    <div 
      id={id}
      className={`
        relative bg-white mx-auto w-full max-w-[210mm] min-h-[297mm] p-[15mm] md:p-[20mm] 
        shadow-xl mb-8 print-shadow-none print:mb-0 print:w-full print:max-w-full print:min-h-0
        flex flex-col
        ${!noBreak ? 'page-break' : ''} 
        ${className}
      `}
    >
      {children}
      
      {/* Watermark / Footer for every page */}
      <div className="mt-auto pt-8 border-t border-gray-100 flex justify-between text-xs text-gray-400 print:fixed print:bottom-4 print:left-0 print:right-0 print:px-[20mm] print:border-none">
        <span>Akyüz Market Dijital Dönüşüm Teklifi</span>
        <span>Gizli ve Özeldir</span>
      </div>
    </div>
  );
};