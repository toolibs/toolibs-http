import {
    ReflectControllerMetadata,
    Controller,
    ControllerProps,
    Middleware,
    Get,
    RouteMetadata,
    ReflectHandleMetadata,
} from "../../src";

@Middleware((_request, _response, _next) => {})
@Controller("/test")
@Middleware((_request, _response, _next) => {})
class TestController {
    @Middleware((_request, _response, _next) => {})
    @Get()
    hello() {}

    @Get()
    @Middleware((_request, _response, _next) => {})
    @Middleware((_request, _response, _next) => {})
    store() {}
}

describe("Middleware", () => {
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

        it("should return correct metadata for middleware", () => {
            expect(controllerMetadata.target).toBe(TestController);
            expect(controllerMetadata.middlewares.length).toBe(2);
        });
    });

    describe("ReflectHandleMetadata", () => {
        let routeMetadata: RouteMetadata;

        beforeEach(() => {
            routeMetadata = ReflectHandleMetadata.getMetadata(
                TestController,
            ) as RouteMetadata;
        });

        it("should metadata be defined", () => {
            expect(routeMetadata).toBeDefined();
        });

        it("should return correct metadata for middleware of the hello method", () => {
            expect(routeMetadata["hello"].middlewares.length).toBe(1);
        });

        it("should return correct metadata for middleware  of the hello method", () => {
            expect(routeMetadata["store"].middlewares.length).toBe(2);
        });
    });
});
