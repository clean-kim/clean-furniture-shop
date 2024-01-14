/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_API_PREFIX: string;

  readonly VITE_MSW: 'on' | 'off';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
