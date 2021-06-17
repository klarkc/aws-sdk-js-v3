import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeLocationEfsRequest, DescribeLocationEfsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeLocationEfsCommandInput extends DescribeLocationEfsRequest {
}
export interface DescribeLocationEfsCommandOutput extends DescribeLocationEfsResponse, __MetadataBearer {
}
/**
 * <p>Returns metadata, such as the path information about an Amazon EFS location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationEfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationEfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DescribeLocationEfsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocationEfsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationEfsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLocationEfsCommand extends $Command<DescribeLocationEfsCommandInput, DescribeLocationEfsCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: DescribeLocationEfsCommandInput;
    constructor(input: DescribeLocationEfsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocationEfsCommandInput, DescribeLocationEfsCommandOutput>;
    private serialize;
    private deserialize;
}
