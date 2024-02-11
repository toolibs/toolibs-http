import { decorate, injectable } from "inversify";

import {
    ClassType,
    MiddlewareArgs,
    MiddlewareConstructor,
    MiddlewareInterface,
    RouteHandlerMethod,
} from "../types";
import { MiddlewareDecoratorFactory } from "../factories";

/**
 * @constructor
 */
export function InjectableMiddleware<T extends MiddlewareInterface>() {
    return function (target: ClassType<T>): void {
        decorate(injectable(), target);
    };
}

export function Middleware(...middlewares: Array<Function>): Function;
export function Middleware(
    ...middlewares: Array<MiddlewareConstructor>
): Function;
export function Middleware(...middlewares: Array<RouteHandlerMethod>): Function;
export function Middleware(...middlewares: Array<RouteHandlerMethod>): Function;
export function Middleware(...middlewares: MiddlewareArgs): Function {
    return MiddlewareDecoratorFactory.build(middlewares);
}
