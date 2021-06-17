import { BuildHandlerOptions, BuildMiddleware } from "@aws-sdk/types";
/**
 * After outpost request is constructed, redirect request to outpost endpoint and set `x-amz-account-id` and
 * `x-amz-outpost-id` headers.
 */
export declare const updateArnablesRequestMiddleware: ({ isCustomEndpoint }: {
    isCustomEndpoint: boolean;
}) => BuildMiddleware<any, any>;
export declare const getOutpostEndpoint: (hostname: string, { isCustomEndpoint, regionOverride }?: {
    isCustomEndpoint?: boolean | undefined;
    regionOverride?: string | undefined;
}) => string;
export declare const updateArnablesRequestMiddlewareOptions: BuildHandlerOptions;
