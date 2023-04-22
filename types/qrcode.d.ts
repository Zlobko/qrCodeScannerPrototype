declare module 'qrcode' {
    export function toDataURL(text: string, options?: object): Promise<string>;
  }