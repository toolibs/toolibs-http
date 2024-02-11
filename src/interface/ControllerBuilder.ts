import { ClassType } from "../types";
import { Builder } from "./Builder";

export interface ControllerBuilder extends Builder {
    build(controller: ClassType): void;
}
