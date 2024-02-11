import {
    ReflectParamMetadata,
    Body,
    Next,
    Query,
    Req,
    Res,
    ParamMetadata,
} from "../../src";

class TestController {
    hello(@Body() _data: any, @Query("id") _id: string) {}

    store(@Req() _req: any, @Res() _res: any, @Next() _next: () => void) {}
}

describe("Handlers", () => {
    describe("ReflectParamMetadata", () => {
        let paramMetadata: ParamMetadata;

        beforeEach(() => {
            paramMetadata = ReflectParamMetadata.getMetadata(TestController);
        });

        it("should metadata be defined", () => {
            expect(paramMetadata).toBeDefined();
        });

        it("should metadata handle method name be defined", () => {
            expect(paramMetadata["hello"]).toBeDefined();
            expect(paramMetadata["store"]).toBeDefined();
        });

        it('should return correct metadata for the "Body" param decorator of the "hello" method', () => {
            expect(paramMetadata["hello"][0].name).toBe("body");
            expect(paramMetadata["hello"][0].asType).toBe("Object");
            expect(paramMetadata["hello"][0].index).toBe(0);
            expect(paramMetadata["hello"][0].property).not.toBeDefined();
        });

        it('should return correct metadata for the "Query" param decorator of the "hello" method', () => {
            expect(paramMetadata["hello"][1].name).toBe("query");
            expect(paramMetadata["hello"][1].asType).toBe("String");
            expect(paramMetadata["hello"][1].index).toBe(1);
            expect(paramMetadata["hello"][1].property).toBe("id");
        });

        it('should return correct metadata for the "Req" param decorator of the "store" method', () => {
            expect(paramMetadata["store"][0].name).toBe("request");
            expect(paramMetadata["store"][0].asType).toBe("Object");
            expect(paramMetadata["store"][0].index).toBe(0);
            expect(paramMetadata["store"][0].property).not.toBeDefined();
        });

        it('should return correct metadata for the "Res" param decorator of the "store" method', () => {
            expect(paramMetadata["store"][1].name).toBe("response");
            expect(paramMetadata["store"][1].asType).toBe("Object");
            expect(paramMetadata["store"][1].index).toBe(1);
            expect(paramMetadata["store"][1].property).not.toBeDefined();
        });

        it('should return correct metadata for the "Res" param decorator of the "store" method', () => {
            expect(paramMetadata["store"][2].name).toBe("next");
            expect(paramMetadata["store"][2].asType).toBe("Function");
            expect(paramMetadata["store"][2].index).toBe(2);
            expect(paramMetadata["store"][2].property).not.toBeDefined();
        });
    });
});
