import {
    ReflectHandleMetadata,
    Delete,
    Get,
    Patch,
    Post,
    Put,
    RouteMetadata,
    cleanUpMetadata,
} from "../../src";

class TestController {
    @Get()
    hello() {
        return "Hello!";
    }

    @Post("/create")
    store() {}

    @Put("/update")
    update() {}

    @Patch("/update/:id")
    updateById() {}

    @Delete("/remove")
    remove() {}
}

describe("Handlers", () => {
    describe("ReflectHandleMetadata", () => {
        let routeMetadata: RouteMetadata;

        beforeEach(() => {
            routeMetadata = ReflectHandleMetadata.getMetadata(
                TestController,
            ) as RouteMetadata;
        });

        afterAll(() => {
            cleanUpMetadata(TestController);
        });

        it("should metadata be defined", () => {
            expect(routeMetadata).toBeDefined();
        });

        it("should metadata handle method name be defined", () => {
            expect(routeMetadata["hello"]).toBeDefined();
            expect(routeMetadata["store"]).toBeDefined();
        });

        it('should return correct metadata for the "Get" decorator of the "hello" method', () => {
            expect(routeMetadata["hello"].method).toBe("get");
            expect(routeMetadata["hello"].path).toBe("/");
            expect(routeMetadata["hello"].methodName).toBe("hello");
            expect(routeMetadata["hello"].middlewares.length).toBe(0);
            expect(routeMetadata["hello"].option).not.toBeDefined();
        });

        it('should return correct metadata for the "Post" decorator of the "store" method', () => {
            expect(routeMetadata["store"].method).toBe("post");
            expect(routeMetadata["store"].path).toBe("/create");
            expect(routeMetadata["store"].methodName).toBe("store");
        });

        it('should return correct metadata for the "Put" decorator of the "update" method', () => {
            expect(routeMetadata["update"].method).toBe("put");
            expect(routeMetadata["update"].path).toBe("/update");
            expect(routeMetadata["update"].methodName).toBe("update");
        });

        it('should return correct metadata for the "Delete" decorator of the "remove" method', () => {
            expect(routeMetadata["remove"].method).toBe("delete");
            expect(routeMetadata["remove"].path).toBe("/remove");
            expect(routeMetadata["remove"].methodName).toBe("remove");
        });

        it('should return correct metadata for the "Patch" decorator of the "updateById" method', () => {
            expect(routeMetadata["updateById"].method).toBe("patch");
            expect(routeMetadata["updateById"].path).toBe("/update/:id");
            expect(routeMetadata["updateById"].methodName).toBe("updateById");
        });
    });
});
