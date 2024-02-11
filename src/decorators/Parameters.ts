import { ParamDecoratorFactory } from "../factories";
import { NextFunction, ParameterOption } from "../types";

export function Req() {
    return ParamDecoratorFactory.build({ name: "request" });
}

/**
 * res object
 */
export function Res() {
    return ParamDecoratorFactory.build({ name: "response" });
}

/**
 * next object
 */
export function Next() {
    return ParamDecoratorFactory.build({ name: "next" });
}

/**
 * req.session object
 */
export function Session() {
    return ParamDecoratorFactory.build({ name: "session" });
}

/**
 * req.ip object
 */
export function Ip() {
    return ParamDecoratorFactory.build({ name: "ip" });
}

/**
 * req.hostname object
 */
export function HostName() {
    return ParamDecoratorFactory.build({ name: "hostname" });
}

/**
 * req.query object
 */
export function Body(property?: string, option?: ParameterOption) {
    return ParamDecoratorFactory.build({ name: "body", property, option });
}

/**
 * req.params object
 */
export function Params(property?: string, option?: ParameterOption) {
    return ParamDecoratorFactory.build({
        name: "params",
        property,
        option,
    });
}

/**
 * req.query object
 */
export function Query(property?: string, option?: ParameterOption) {
    return ParamDecoratorFactory.build({ name: "query", property, option });
}

/**
 * req.headers object
 */
export function Headers(property?: string, option?: ParameterOption) {
    return ParamDecoratorFactory.build({
        name: "headers",
        property,
        option,
    });
}

/**
 * @param handle
 * @param property
 * @param option
 * @constructor
 */
export function CreateParamDecorator<Req = any, Res = any>(
    handle: (request: Req, response: Res, next?: NextFunction) => unknown,
    property?: string,
    option: ParameterOption = {},
) {
    return ParamDecoratorFactory.build({
        name: "custom",
        handle,
        property,
        option,
    });
}
