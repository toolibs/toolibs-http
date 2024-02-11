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

            metadata[methodName] = {
                ...args,
                methodName,
            };

            ReflectHandleMetadata.setMetadata(target.constructor, metadata);
        };
    }
}
