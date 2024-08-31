export interface Device {
  id: number;
  ip: string;
  port: string;

  lastReadingTime?: Date;
  type?: string;
  name?: string;
  model?: string;
  userName?: string;
  passWord?: string;
  installationDate?: Date;
  lifeTime?: string;
  manufacturer?: string;
  madeInCountry?: string;
  state?: number;
  branchId?: number;
}
