import { BuildHandlerOptions, BuildMiddleware, Pluggable } from "@aws-sdk/types";
import { S3ControlResolvedConfig } from "./configurations";
declare type InputType = {
    OutpostId?: string;
};
/**
 * If OutpostId is set, redirect hostname to Outpost one, and change signing service to `s3-outposts`.
 * Applied to S3Control.CreateBucket and S3Control.ListRegionalBuckets
 */
export declare const redirectFromPostIdMiddleware: ({ isCustomEndpoint }: {
    isCustomEndpoint: boolean;
}) => BuildMiddleware<InputType, any>;
export declare const redirectFromPostIdMiddlewareOptions: BuildHandlerOptions;
export declare const getRedirectFromPostIdPlugin: (options: S3ControlResolvedConfig) => Pluggable<any, any>;
export {};
