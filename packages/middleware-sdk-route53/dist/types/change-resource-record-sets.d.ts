import { InitializeHandlerOptions, InitializeMiddleware, Pluggable } from "@aws-sdk/types";
export interface Change {
    ResourceRecordSet: {
        AliasTarget?: {
            HostedZoneId: string;
        };
    };
}
export interface ChangeBatchBearer {
    ChangeBatch: {
        Changes: Iterable<Change>;
    };
}
export declare function changeResourceRecordSetsMiddleware(): InitializeMiddleware<any, any>;
export declare const changeResourceRecordSetsMiddlewareOptions: InitializeHandlerOptions;
export declare const getChangeResourceRecordSetsPlugin: (unused: any) => Pluggable<any, any>;
