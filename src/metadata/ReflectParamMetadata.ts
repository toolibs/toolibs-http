import { ParamMetadata } from "../types";
import { TYPES } from "../constants";
import { ReflectMetadata } from "./ReflectMetadata";

export class ReflectParamMetadata {
    static getMetadata(target: Object): ParamMetadata {
        return ReflectMetadata.getMetadata(target, TYPES.ParameterMetadata);
    }

    static setMetadata(target: Object, metadataValue: ParamMetadata) {
        return ReflectMetadata.setMetadata(
            target,
            TYPES.ParameterMetadata,
            metadataValue,
        );
    }

    static cleanUpMetadata(target: Object): boolean {
        return Reflect.deleteMetadata(TYPES.ParameterMetadata, target);
    }
}
