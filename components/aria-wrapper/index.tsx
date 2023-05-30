'use client';

import { ReactNode } from 'react';
import { SSRProvider } from 'react-aria-components';


export default function AriaWrapper({ children }: { children: ReactNode}) {
  return (
    <SSRProvider>
      <h1>this is the SSRProvider wrapper, client component</h1>
      {children}
    </SSRProvider>
  )
}