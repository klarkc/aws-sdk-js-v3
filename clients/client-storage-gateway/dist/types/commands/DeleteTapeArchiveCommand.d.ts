import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteTapeArchiveInput, DeleteTapeArchiveOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTapeArchiveCommandInput extends DeleteTapeArchiveInput {
}
export interface DeleteTapeArchiveCommandOutput extends DeleteTapeArchiveOutput, __MetadataBearer {
}
/**
 * <p>Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is
 *          only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteTapeArchiveCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteTapeArchiveCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteTapeArchiveCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTapeArchiveCommandInput} for command's `input` shape.
 * @see {@link DeleteTapeArchiveCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTapeArchiveCommand extends $Command<DeleteTapeArchiveCommandInput, DeleteTapeArchiveCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DeleteTapeArchiveCommandInput;
    constructor(input: DeleteTapeArchiveCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTapeArchiveCommandInput, DeleteTapeArchiveCommandOutput>;
    private serialize;
    private deserialize;
}
