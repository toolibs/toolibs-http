import {
    ClassType,
    MethodType,
    NormaliseType,
    ParameterName,
    RouteHandlerMethod,
} from "./common";
import { ParameterOption, RouteOption } from "./option";

export type ParameterProps = {
    name: ParameterName; // Parameter name
    index: number; // Index of parameter in the method signature
    asType: NormaliseType;
    handle?: RouteHandlerMethod; // handle function use to create custom param decorator
    property?: string;
    option?: ParameterOption;
};

export type RouteProps = {
    path: string | RegExp;
    method: MethodType;
    methodName: string;
    option?: RouteOption;
};

export type ControllerProps = {
    target: ClassType;
    prefix: string;
};
