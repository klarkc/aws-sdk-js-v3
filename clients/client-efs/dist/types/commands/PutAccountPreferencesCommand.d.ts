import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { PutAccountPreferencesRequest, PutAccountPreferencesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutAccountPreferencesCommandInput extends PutAccountPreferencesRequest {
}
export interface PutAccountPreferencesCommandOutput extends PutAccountPreferencesResponse, __MetadataBearer {
}
export declare class PutAccountPreferencesCommand extends $Command<PutAccountPreferencesCommandInput, PutAccountPreferencesCommandOutput, EFSClientResolvedConfig> {
    readonly input: PutAccountPreferencesCommandInput;
    constructor(input: PutAccountPreferencesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EFSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAccountPreferencesCommandInput, PutAccountPreferencesCommandOutput>;
    private serialize;
    private deserialize;
}
