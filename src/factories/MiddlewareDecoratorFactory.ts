import { ClassType, MiddlewareArgs } from "../types";
import { ReflectControllerMetadata, ReflectHandleMetadata } from "../metadata";

export abstract class MiddlewareDecoratorFactory {
    static build(middlewares: MiddlewareArgs) {
        return function (
            target: Object,
            methodName?: string,
            _descriptor?: PropertyDescriptor,
        ) {
            if (methodName) {
                const metadata =
                    ReflectHandleMetadata.getMetadata(target.constructor) || {};

                if (metadata[methodName]) {
                    metadata[methodName].middlewares.push(...middlewares);
                } else {
                    metadata[methodName] = {
                        methodName,
                        middlewares,
                        method: "get",
                        path: "",
                    };
                }

                ReflectHandleMetadata.setMetadata(target.constructor, metadata);
            } else {
                let metadata = ReflectControllerMetadata.getMetadata(target);

                if (metadata) {
                    metadata.middlewares.push(...middlewares);
                } else {
                    metadata = {
                        target: target as ClassType,
                        prefix: "",
                        middlewares,
                    };
                }

                ReflectControllerMetadata.setMetadata(target, metadata);
            }
        };
    }
}
