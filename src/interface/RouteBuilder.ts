import { ClassType, ParameterProps, RouteProps } from "../types";
import { Builder } from "./Builder";

export interface RouteBuilder<T extends Function> extends Builder<T> {
    build(target: ClassType, route: RouteProps, params: ParameterProps[]): T;
}
