import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeLocationSmbRequest, DescribeLocationSmbResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeLocationSmbCommandInput extends DescribeLocationSmbRequest {
}
export interface DescribeLocationSmbCommandOutput extends DescribeLocationSmbResponse, __MetadataBearer {
}
/**
 * <p>Returns metadata, such as the path and user information about an SMB location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationSmbCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationSmbCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DescribeLocationSmbCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocationSmbCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationSmbCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLocationSmbCommand extends $Command<DescribeLocationSmbCommandInput, DescribeLocationSmbCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: DescribeLocationSmbCommandInput;
    constructor(input: DescribeLocationSmbCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocationSmbCommandInput, DescribeLocationSmbCommandOutput>;
    private serialize;
    private deserialize;
}
