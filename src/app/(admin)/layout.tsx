import type { ReactNode } from 'react';

import { ScrollToTopButton } from '@/components/common/ScrollToTopButton';
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';

export default function webappLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_1fr_min-content]">
      <Header />
      <main className="flex flex-col font-normal">{children}</main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}