import { ComponentType } from "react";

export interface RouteConfiguration {
  path: string;
  Component: ComponentType<any>;
}
