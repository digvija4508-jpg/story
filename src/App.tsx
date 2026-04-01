/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { Scrollytelling } from './components/Scrollytelling';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="w-full bg-[#fdfcf9] selection:bg-slate-900 selection:text-white">
      <Hero />
      <Scrollytelling />
      <Footer />
    </main>
  );
}

