export interface RequestEstimate {
  locations: {
    type: string;
    latitude: number;
    longitude: number;
  }[];
  item_value?: string | number;
}
