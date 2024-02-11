/**
 * Class type.
 */
export type ClassType<T = unknown> = new (...args: any) => T;

export type NextFunction = (err?: Error) => void;

export type RouteHandlerMethod<
    Req = any,
    Res = any,
    Next extends NextFunction = NextFunction,
> = (request: Req, response: Res, next?: Next) => any;

export interface MiddlewareInterface<
    Req = any,
    Res = any,
    Next extends NextFunction = NextFunction,
> {
    use(request: Req, response: Res, next: Next): void;
}

export type MiddlewareConstructor = ClassType<MiddlewareInterface>;

export type MiddlewareType =
    | MiddlewareConstructor
    | ClassType
    | RouteHandlerMethod;

export type MethodType = "get" | "post" | "patch" | "put" | "delete";

export type NormaliseType =
    | "Number"
    | "String"
    | "Boolean"
    | "Symbol"
    | "RegExp"
    | "Promise"
    | "Undefined"
    | "Object"
    | "Array";

export type ParameterName =
    | "body"
    | "headers"
    | "query"
    | "request"
    | "response"
    | "params"
    | "next"
    | "session"
    | "hostname"
    | "ip"
    | "custom";
