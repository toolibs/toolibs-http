import { RouteMetadata } from "../types";
import { TYPES } from "../constants";
import { ReflectMetadata } from "./ReflectMetadata";

export class ReflectHandleMetadata {
    static getMetadata(target: Object): RouteMetadata | undefined {
        return ReflectMetadata.getMetadata(target, TYPES.RouteMetadata);
    }

    static setMetadata(target: Object, metadataValue: RouteMetadata) {
        return ReflectMetadata.setMetadata(
            target,
            TYPES.RouteMetadata,
            metadataValue,
        );
    }

    static cleanUpMetadata(target: Object): boolean {
        return Reflect.deleteMetadata(TYPES.RouteMetadata, target);
    }
}
