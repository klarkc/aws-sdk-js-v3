import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ListFileSharesInput, ListFileSharesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListFileSharesCommandInput extends ListFileSharesInput {
}
export interface ListFileSharesCommandOutput extends ListFileSharesOutput, __MetadataBearer {
}
/**
 * <p>Gets a list of the file shares for a specific file gateway, or the list of file shares
 *          that belong to the calling user account. This operation is only supported for file
 *          gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListFileSharesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListFileSharesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListFileSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFileSharesCommandInput} for command's `input` shape.
 * @see {@link ListFileSharesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListFileSharesCommand extends $Command<ListFileSharesCommandInput, ListFileSharesCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: ListFileSharesCommandInput;
    constructor(input: ListFileSharesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFileSharesCommandInput, ListFileSharesCommandOutput>;
    private serialize;
    private deserialize;
}
