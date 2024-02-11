export class ReflectMetadata {
    static setMetadata<Value = unknown>(
        target: Object,
        metadataKey: symbol,
        metadataValue: Value,
    ): void {
        Reflect.defineMetadata(metadataKey, metadataValue, target);
    }

    static getMetadata<T = unknown>(target: Object, metadataKey: symbol): T {
        return Reflect.getMetadata(metadataKey, target);
    }

    static cleanUpMetadata(target: Object, metadataKey: symbol): boolean {
        return Reflect.deleteMetadata(metadataKey, target);
    }

    static getParamTypes(target: Object, methodName: string, index: number) {
        return Reflect.getMetadata("design:paramtypes", target, methodName)[
            index
        ].name;
    }
}
