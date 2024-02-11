import { RouteArgs } from "../types";
import { ReflectHandleMetadata } from "../metadata";

export abstract class HandleDecoratorFactory {
    static build(args: RouteArgs): MethodDecorator {
        return function (
            target: Object,
            methodName: string,
            _descriptor: PropertyDescriptor,
        ) {
            const metadata =
                ReflectHandleMetadata.getMetadata(target.constructor) || {};

            if (metadata[methodName]) {
                metadata[methodName] = {
                    ...metadata[methodName],
                    ...args,
                    methodName,
                };
            } else {
                metadata[methodName] = {
                    ...args,
                    methodName,
                    middlewares: [],
                };
            }

            ReflectHandleMetadata.setMetadata(target.constructor, metadata);
        };
    }
}
