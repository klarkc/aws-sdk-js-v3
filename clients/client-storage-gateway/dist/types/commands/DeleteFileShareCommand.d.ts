import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteFileShareInput, DeleteFileShareOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFileShareCommandInput extends DeleteFileShareInput {
}
export interface DeleteFileShareCommandOutput extends DeleteFileShareOutput, __MetadataBearer {
}
/**
 * <p>Deletes a file share from a file gateway. This operation is only supported for file
 *          gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteFileShareCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteFileShareCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteFileShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFileShareCommandInput} for command's `input` shape.
 * @see {@link DeleteFileShareCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFileShareCommand extends $Command<DeleteFileShareCommandInput, DeleteFileShareCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DeleteFileShareCommandInput;
    constructor(input: DeleteFileShareCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFileShareCommandInput, DeleteFileShareCommandOutput>;
    private serialize;
    private deserialize;
}
