import {
    ReflectControllerMetadata,
    ReflectHandleMetadata,
    ReflectParamMetadata,
} from "./metadata";

export function cleanUpMetadata(target: Object): void {
    ReflectHandleMetadata.cleanUpMetadata(target);
    ReflectParamMetadata.cleanUpMetadata(target);
    ReflectControllerMetadata.cleanUpMetadata(target);
}
