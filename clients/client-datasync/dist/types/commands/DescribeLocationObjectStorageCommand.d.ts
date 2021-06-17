import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeLocationObjectStorageRequest, DescribeLocationObjectStorageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeLocationObjectStorageCommandInput extends DescribeLocationObjectStorageRequest {
}
export interface DescribeLocationObjectStorageCommandOutput extends DescribeLocationObjectStorageResponse, __MetadataBearer {
}
/**
 * <p>Returns metadata about a self-managed object storage server location. For more information
 *       about self-managed object storage locations, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationObjectStorageCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationObjectStorageCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DescribeLocationObjectStorageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocationObjectStorageCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationObjectStorageCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLocationObjectStorageCommand extends $Command<DescribeLocationObjectStorageCommandInput, DescribeLocationObjectStorageCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: DescribeLocationObjectStorageCommandInput;
    constructor(input: DescribeLocationObjectStorageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocationObjectStorageCommandInput, DescribeLocationObjectStorageCommandOutput>;
    private serialize;
    private deserialize;
}
