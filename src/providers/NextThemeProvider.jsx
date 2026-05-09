'use client';
import React from 'react';
import { ThemeProvider } from 'next-themes';

const NextThemeProvider = ({ children }) => {
   return (
      /**
       * Encountered a script tag while rendering React component-nonce="" prop দেওয়ার কারণে next-themes আর internally <script> inject করে না। এটা essentially script execution বন্ধ করে দেয়।
       */
      <ThemeProvider attribute="class" defaultTheme="light">
         {children}
      </ThemeProvider>
   );
};

export default NextThemeProvider;
