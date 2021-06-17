import { InitializeHandlerOptions, InitializeMiddleware, Pluggable } from "@aws-sdk/types";
/**
 * @internal
 */
export declare function validateBucketNameMiddleware(): InitializeMiddleware<any, any>;
/**
 * @internal
 */
export declare const validateBucketNameMiddlewareOptions: InitializeHandlerOptions;
/**
 * @internal
 */
export declare const getValidateBucketNamePlugin: (unused: any) => Pluggable<any, any>;
