import { InitializeHandlerOptions, InitializeMiddleware } from "@aws-sdk/types";
import { S3ControlResolvedConfig } from "../configurations";
declare type ArnableInput = {
    Name?: string;
    Bucket?: string;
    AccountId?: string;
};
/**
 * Validate input `Name` or `Bucket` parameter is acceptable ARN format. If so, modify the input ARN to inferred
 * resource identifier, notify later middleware to redirect request to Outpost endpoint, signing service and signing
 * region.
 */
export declare const parseOutpostArnablesMiddleaware: (options: S3ControlResolvedConfig) => InitializeMiddleware<ArnableInput, any>;
export declare const parseOutpostArnablesMiddleawareOptions: InitializeHandlerOptions;
export {};
