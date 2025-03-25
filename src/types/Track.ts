export interface Track {
  id: string;
  name: string;
  artists: { name: string; external_urls: {spotify: string} }[];
  album: { 
    name: string;
    images: { url: string }[];
    external_urls: {spotify: string}
  };
  uri: string;
  duration_ms: number;
  external_urls: {spotify: string}
}
  