import { decorate, injectable } from "inversify";

import { ClassType, ControllerArgs, ControllerProps } from "../types";
import { ReflectControllerMetadata } from "../metadata";

export abstract class ControllerDecoratorFactory {
    static build(args: ControllerArgs) {
        return (target: ClassType) => {
            // Register service
            decorate(injectable(), target);

            const props: ControllerProps = { ...args, target };

            ReflectControllerMetadata.setMetadata(target, props);
        };
    }
}
