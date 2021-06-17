import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeNFSFileSharesInput, DescribeNFSFileSharesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeNFSFileSharesCommandInput extends DescribeNFSFileSharesInput {
}
export interface DescribeNFSFileSharesCommandOutput extends DescribeNFSFileSharesOutput, __MetadataBearer {
}
/**
 * <p>Gets a description for one or more Network File System (NFS) file shares from a file
 *          gateway. This operation is only supported for file gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeNFSFileSharesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeNFSFileSharesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeNFSFileSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNFSFileSharesCommandInput} for command's `input` shape.
 * @see {@link DescribeNFSFileSharesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeNFSFileSharesCommand extends $Command<DescribeNFSFileSharesCommandInput, DescribeNFSFileSharesCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeNFSFileSharesCommandInput;
    constructor(input: DescribeNFSFileSharesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNFSFileSharesCommandInput, DescribeNFSFileSharesCommandOutput>;
    private serialize;
    private deserialize;
}
