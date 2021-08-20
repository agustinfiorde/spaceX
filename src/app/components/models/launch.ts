export interface Launch {
  flight_number: number;
  mission_name: string;
  launch_date_unix: number;
  description?: string;
  rocket: any;
}
