import type { RemoteSearchResultItem } from "./RemoteSearchResultItem.ts";

const countryMap = {
  AU: "Australia",
  US: "United States",
  GB: "United Kingdom",
};

class SearchResultItemType {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _state: string;
  private readonly _country: string;
  private readonly _lat: number;
  private readonly _long: number;

  constructor(item: RemoteSearchResultItem) {
    this._id = item.id;
    this._name = item.name;
    this._state = item.state;
    this._country = item.country;
    this._lat = item.lat;
    this._long = item.lon;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get state() {
    return this._state;
  }

  get country() {
    // @ts-ignore
    return countryMap[this._country] || this._country;
  }

  get lat() {
    return this._lat;
  }

  get lon() {
    return this._long;
  }
}

export { SearchResultItemType };
