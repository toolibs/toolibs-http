import { ControllerProps } from "../types";
import { TYPES } from "../constants";
import { ReflectMetadata } from "./ReflectMetadata";

export class ReflectControllerMetadata {
    static getMetadata(target: Object): ControllerProps {
        return ReflectMetadata.getMetadata(target, TYPES.ControllerMetadata);
    }

    static setMetadata(target: Object, metadataValue: ControllerProps) {
        return ReflectMetadata.setMetadata(
            target,
            TYPES.ControllerMetadata,
            metadataValue,
        );
    }

    static cleanUpMetadata(target: Object): boolean {
        return Reflect.deleteMetadata(TYPES.ControllerMetadata, target);
    }
}
