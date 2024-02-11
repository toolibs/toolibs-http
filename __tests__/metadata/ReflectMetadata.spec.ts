import { ReflectMetadata } from "../../src";

const Decorator =
    (): MethodDecorator =>
    (
        _target: Object,
        _methodName: string,
        _descriptor: PropertyDescriptor,
    ) => {};

export class TestClass {
    @Decorator()
    testMethod(_param1: string, _param2: number) {}
}

describe("ReflectMetadata", () => {
    it("should set metadata on the target object", () => {
        const target = TestClass.prototype;
        const metadataKey = Symbol("testMetadata");
        const metadataValue = "testValue";

        ReflectMetadata.setMetadata(target, metadataKey, metadataValue);

        expect(Reflect.getMetadata(metadataKey, target)).toBe(metadataValue);
    });

    it("should get metadata from the target object", () => {
        const target = TestClass.prototype;
        const metadataKey = Symbol("testMetadata");
        const metadataValue = "testValue";

        Reflect.defineMetadata(metadataKey, metadataValue, target);

        expect(ReflectMetadata.getMetadata(target, metadataKey)).toBe(
            metadataValue,
        );
    });

    it("should get parameter types from metadata", () => {
        const target = TestClass.prototype;
        const methodName = "testMethod";
        const paramIndex = 0;

        const paramType = ReflectMetadata.getParamTypes(
            target,
            methodName,
            paramIndex,
        );

        expect(paramType).toBe("String");
    });
});
