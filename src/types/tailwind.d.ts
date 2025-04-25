/**
 * TypeScript declarations for Tailwind CSS classes
 */

declare module 'tailwindcss' {
  export interface Config {
    content: string[];
    darkMode?: 'media' | 'class';
    theme?: {
      extend?: {
        colors?: Record<string, any>;
        [key: string]: any;
      };
      [key: string]: any;
    };
    plugins?: any[];
    [key: string]: any;
  }
} 