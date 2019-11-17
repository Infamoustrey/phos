import { ServiceItemTypes } from "../enums/ServiceItemTypes";

export interface ServiceItem {
  id: string;
  presentation_id: string;
  section_id: string;
  type: ServiceItemTypes;
  title: string;
}
