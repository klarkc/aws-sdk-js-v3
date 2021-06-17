import { InitializeHandlerOptions, InitializeMiddleware, Pluggable } from "@aws-sdk/types";
import { PreviouslyResolved } from "./configurations";
export declare function receiveMessageMiddleware(options: PreviouslyResolved): InitializeMiddleware<any, any>;
export declare const receiveMessageMiddlewareOptions: InitializeHandlerOptions;
export declare const getReceiveMessagePlugin: (config: PreviouslyResolved) => Pluggable<any, any>;
