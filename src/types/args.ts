import { ControllerProps, ParameterProps, RouteProps } from "./props";

export type ControllerArgs = Pick<ControllerProps, "prefix">;

export type ParameterArgs = Omit<ParameterProps, "index" | "asType">;

export type RouteArgs = Omit<RouteProps, "methodName">;
