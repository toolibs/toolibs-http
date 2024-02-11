import { ControllerDecoratorFactory } from "../factories";

export function Controller(prefix: string) {
    return ControllerDecoratorFactory.build({ prefix });
}
