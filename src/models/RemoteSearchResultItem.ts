export interface RemoteSearchResultItem {
  id: number;
  name: string;
  state: string;
  country: string;

  lon: number;
  lat: number;

  local_names?: {
    [key: string]: string
  }
}