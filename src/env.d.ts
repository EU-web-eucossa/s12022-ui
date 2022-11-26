/* eslint-disable @typescript-eslint/naming-convention */
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_PAYPAL_CLIENT_ID: string,
    readonly VITE_PAYPAL_CLIENT_SECRET: string,
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}