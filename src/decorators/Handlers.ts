import { RouteOption } from "../types";
import { HandleDecoratorFactory } from "../factories";

/**
 * Get request method
 */
export function Get(path?: string | RegExp, option?: RouteOption) {
    return HandleDecoratorFactory.build({
        method: "get",
        path: path || "/",
        option,
    });
}

/**
 * Post request method
 */
export function Post(path: string | RegExp = "/") {
    return HandleDecoratorFactory.build({ method: "post", path });
}

/**
 * Delete request method
 */
export function Delete(path: string | RegExp = "/") {
    return HandleDecoratorFactory.build({ method: "delete", path });
}

/**
 * Put request method
 */
export function Put(path: string | RegExp = "/") {
    return HandleDecoratorFactory.build({ method: "put", path });
}

/**
 * Patch request method
 */
export function Patch(path: string | RegExp = "/") {
    return HandleDecoratorFactory.build({ method: "patch", path });
}
