import { ParameterArgs } from "../types";
import { ReflectParamMetadata, ReflectMetadata } from "../metadata";

export abstract class ParamDecoratorFactory {
    static build(args: ParameterArgs): ParameterDecorator {
        return function (target: Object, methodName: string, index: number) {
            const metadata =
                ReflectParamMetadata.getMetadata(target.constructor) || {};

            const asType = ReflectMetadata.getParamTypes(
                target,
                methodName,
                index,
            );

            if (!metadata[methodName]) {
                metadata[methodName] = [];
            }

            metadata[methodName][index] = {
                ...args,
                index,
                asType,
            };

            ReflectParamMetadata.setMetadata(target.constructor, metadata);
        };
    }
}
