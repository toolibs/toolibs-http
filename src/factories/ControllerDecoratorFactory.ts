import { decorate, injectable } from "inversify";

import { ClassType, ControllerArgs } from "../types";
import { ReflectControllerMetadata } from "../metadata";

export abstract class ControllerDecoratorFactory {
    static build(args: ControllerArgs) {
        return (target: ClassType) => {
            // Register service
            decorate(injectable(), target);

            let metadata = ReflectControllerMetadata.getMetadata(target);

            if (metadata) {
                metadata = { ...metadata, ...args, target };
            } else {
                metadata = { ...args, target, middlewares: [] };
            }

            ReflectControllerMetadata.setMetadata(target, metadata);
        };
    }
}
