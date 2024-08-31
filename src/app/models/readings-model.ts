export interface Readings {
  id: number;
  readingValue: number;
  timeStamp: Date;
  deviceId?: number;
  readingLKPId?: number;
}
