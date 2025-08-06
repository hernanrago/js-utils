import fetch from "node-fetch";

export async function fetchQuote(token, ticker) {
  console.log(`Fetching quote for ${ticker}...`);
  const url = `https://api.invertironline.com/api/v2/bCBA/Titulos/${ticker}/CotizacionDetalle`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    console.error(`Failed to fetch ${ticker}:`, response.status, response.statusText);
    throw new Error(`Failed to fetch ${ticker}: ${response.statusText}`);
  }

  const data = await response.json();
  
  if (!data.puntas || !Array.isArray(data.puntas) || data.puntas.length === 0) {
    if (!data.ultimoPrecio) {
      console.error(`No puntas or ultimoPrecio data for ${ticker}:`, { puntas: data.puntas, ultimoPrecio: data.ultimoPrecio });
      throw new Error(`No price data available for ${ticker}`);
    }
    console.log(`Using ultimoPrecio for ${ticker} (puntas not available)`);
  }

  console.log(`Quote for ${ticker} fetched successfully`);
  return data;
}
