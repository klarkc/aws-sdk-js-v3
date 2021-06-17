import { BuildHandlerOptions, BuildMiddleware } from "@aws-sdk/types";
import { PreviouslyResolved } from "./configurations";
export declare function addGlacierApiVersionMiddleware(options: PreviouslyResolved): BuildMiddleware<any, any>;
export declare const addGlacierApiVersionMiddlewareOptions: BuildHandlerOptions;
