import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { DescribeAccountPreferencesRequest, DescribeAccountPreferencesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAccountPreferencesCommandInput extends DescribeAccountPreferencesRequest {
}
export interface DescribeAccountPreferencesCommandOutput extends DescribeAccountPreferencesResponse, __MetadataBearer {
}
export declare class DescribeAccountPreferencesCommand extends $Command<DescribeAccountPreferencesCommandInput, DescribeAccountPreferencesCommandOutput, EFSClientResolvedConfig> {
    readonly input: DescribeAccountPreferencesCommandInput;
    constructor(input: DescribeAccountPreferencesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EFSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAccountPreferencesCommandInput, DescribeAccountPreferencesCommandOutput>;
    private serialize;
    private deserialize;
}
