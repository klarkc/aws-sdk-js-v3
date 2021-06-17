import { BuildMiddleware, Pluggable, RelativeMiddlewareOptions } from "@aws-sdk/types";
import { BucketEndpointResolvedConfig } from "./configurations";
export declare const bucketEndpointMiddleware: (options: BucketEndpointResolvedConfig) => BuildMiddleware<any, any>;
export declare const bucketEndpointMiddlewareOptions: RelativeMiddlewareOptions;
export declare const getBucketEndpointPlugin: (options: BucketEndpointResolvedConfig) => Pluggable<any, any>;
