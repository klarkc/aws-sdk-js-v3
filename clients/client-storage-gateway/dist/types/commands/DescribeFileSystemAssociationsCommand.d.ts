import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeFileSystemAssociationsInput, DescribeFileSystemAssociationsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFileSystemAssociationsCommandInput extends DescribeFileSystemAssociationsInput {
}
export interface DescribeFileSystemAssociationsCommandOutput extends DescribeFileSystemAssociationsOutput, __MetadataBearer {
}
/**
 * <p>Gets the file system association information. This operation is only supported for
 *          Amazon FSx file gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeFileSystemAssociationsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeFileSystemAssociationsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeFileSystemAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFileSystemAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeFileSystemAssociationsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFileSystemAssociationsCommand extends $Command<DescribeFileSystemAssociationsCommandInput, DescribeFileSystemAssociationsCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeFileSystemAssociationsCommandInput;
    constructor(input: DescribeFileSystemAssociationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFileSystemAssociationsCommandInput, DescribeFileSystemAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
