import { ControllerProps, ParameterProps, RouteProps } from "./props";
import { MiddlewareType } from "./common";

export type ControllerArgs = Pick<ControllerProps, "prefix">;

export type ParameterArgs = Omit<ParameterProps, "index" | "asType">;

export type RouteArgs = Omit<RouteProps, "methodName" | "middlewares">;

export type MiddlewareArgs = Array<MiddlewareType>;
