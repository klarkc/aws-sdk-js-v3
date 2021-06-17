import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteTapePoolInput, DeleteTapePoolOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTapePoolCommandInput extends DeleteTapePoolInput {
}
export interface DeleteTapePoolCommandOutput extends DeleteTapePoolOutput, __MetadataBearer {
}
/**
 * <p>Delete a custom tape pool. A custom tape pool can only be deleted if there are no tapes
 *          in the pool and if there are no automatic tape creation policies that reference the custom
 *          tape pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteTapePoolCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteTapePoolCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteTapePoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTapePoolCommandInput} for command's `input` shape.
 * @see {@link DeleteTapePoolCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTapePoolCommand extends $Command<DeleteTapePoolCommandInput, DeleteTapePoolCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DeleteTapePoolCommandInput;
    constructor(input: DeleteTapePoolCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTapePoolCommandInput, DeleteTapePoolCommandOutput>;
    private serialize;
    private deserialize;
}
