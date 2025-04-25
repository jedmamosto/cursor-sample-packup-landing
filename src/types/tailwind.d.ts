/**
 * TypeScript declarations for Tailwind CSS classes
 */

declare module 'tailwindcss' {
  export interface Config {
    content: string[];
    darkMode?: 'media' | 'class';
    theme?: {
      extend?: {
        colors?: Record<string, unknown>;
        [key: string]: unknown;
      };
      [key: string]: unknown;
    };
    plugins?: unknown[];
    [key: string]: unknown;
  }
} 