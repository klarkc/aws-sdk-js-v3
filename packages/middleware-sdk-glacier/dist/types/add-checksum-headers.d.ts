import { BuildHandlerOptions, BuildMiddleware } from "@aws-sdk/types";
import { PreviouslyResolved } from "./configurations";
export declare function addChecksumHeadersMiddleware(options: PreviouslyResolved): BuildMiddleware<any, any>;
export declare const addChecksumHeadersMiddlewareOptions: BuildHandlerOptions;
