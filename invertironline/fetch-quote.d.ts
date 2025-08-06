export interface QuotePunta {
  precioCompra: number;
  precioVenta: number;
}

export interface QuoteData {
  puntas?: QuotePunta[];
  ultimoPrecio?: number;
}

export declare function fetchQuote(token: string, ticker: string): Promise<QuoteData>;
