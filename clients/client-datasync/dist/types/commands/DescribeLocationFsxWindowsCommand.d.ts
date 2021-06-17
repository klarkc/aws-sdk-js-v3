import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeLocationFsxWindowsRequest, DescribeLocationFsxWindowsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeLocationFsxWindowsCommandInput extends DescribeLocationFsxWindowsRequest {
}
export interface DescribeLocationFsxWindowsCommandOutput extends DescribeLocationFsxWindowsResponse, __MetadataBearer {
}
/**
 * <p>Returns metadata, such as the path information about an Amazon FSx for Windows File Server
 *       location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationFsxWindowsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationFsxWindowsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DescribeLocationFsxWindowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocationFsxWindowsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationFsxWindowsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLocationFsxWindowsCommand extends $Command<DescribeLocationFsxWindowsCommandInput, DescribeLocationFsxWindowsCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: DescribeLocationFsxWindowsCommandInput;
    constructor(input: DescribeLocationFsxWindowsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocationFsxWindowsCommandInput, DescribeLocationFsxWindowsCommandOutput>;
    private serialize;
    private deserialize;
}
