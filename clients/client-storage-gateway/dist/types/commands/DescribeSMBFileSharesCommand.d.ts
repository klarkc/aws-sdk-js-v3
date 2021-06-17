import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeSMBFileSharesInput, DescribeSMBFileSharesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSMBFileSharesCommandInput extends DescribeSMBFileSharesInput {
}
export interface DescribeSMBFileSharesCommandOutput extends DescribeSMBFileSharesOutput, __MetadataBearer {
}
/**
 * <p>Gets a description for one or more Server Message Block (SMB) file shares from a file
 *          gateway. This operation is only supported for file gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeSMBFileSharesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeSMBFileSharesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeSMBFileSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSMBFileSharesCommandInput} for command's `input` shape.
 * @see {@link DescribeSMBFileSharesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSMBFileSharesCommand extends $Command<DescribeSMBFileSharesCommandInput, DescribeSMBFileSharesCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeSMBFileSharesCommandInput;
    constructor(input: DescribeSMBFileSharesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSMBFileSharesCommandInput, DescribeSMBFileSharesCommandOutput>;
    private serialize;
    private deserialize;
}
