import { BuildHandlerOptions, BuildMiddleware, Pluggable } from "@aws-sdk/types";
export declare function acceptHeaderMiddleware(): BuildMiddleware<any, any>;
export declare const acceptHeaderMiddlewareOptions: BuildHandlerOptions;
export declare const getAcceptHeaderPlugin: (unused: any) => Pluggable<any, any>;
