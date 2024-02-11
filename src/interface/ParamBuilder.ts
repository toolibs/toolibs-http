import { NextFunction } from "../types";
import { Builder } from "./Builder";

export interface ParamBuilder extends Builder {
    build<TReq, TRes>(req: TReq, res: TRes): unknown[];
    build<TReq, TRes, TNext extends NextFunction>(
        req: TReq,
        res: TRes,
        next: TNext,
    ): unknown[];
}
