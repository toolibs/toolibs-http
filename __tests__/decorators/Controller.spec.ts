import {
    ReflectControllerMetadata,
    Controller,
    ControllerProps,
} from "../../src";

@Controller("/test")
class TestController {}

describe("Controller", () => {
    describe("ReflectControllerMetadata", () => {
        let controllerMetadata: ControllerProps;

        beforeEach(() => {
            controllerMetadata = ReflectControllerMetadata.getMetadata(
                TestController,
            ) as ControllerProps;
        });

        it("should metadata be defined", () => {
            expect(controllerMetadata).toBeDefined();
        });

        it("should return correct metadata for TestController", () => {
            expect(controllerMetadata.target).toBe(TestController);
            expect(controllerMetadata.prefix).toBe("/test");
            expect(controllerMetadata.middlewares.length).toBe(0);
        });
    });
});
