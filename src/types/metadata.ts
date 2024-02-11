import { ParameterProps, RouteProps } from "./props";

export type RouteMetadata = Record<string, RouteProps>;

export type ParamMetadata = Record<string, ParameterProps[]>;
