import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { DeleteServerRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteServerCommandInput extends DeleteServerRequest {
}
export interface DeleteServerCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the file transfer protocol-enabled server that you specify.</p>
 *
 *          <p>No response returns from this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DeleteServerCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DeleteServerCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new DeleteServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServerCommandInput} for command's `input` shape.
 * @see {@link DeleteServerCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteServerCommand extends $Command<DeleteServerCommandInput, DeleteServerCommandOutput, TransferClientResolvedConfig> {
    readonly input: DeleteServerCommandInput;
    constructor(input: DeleteServerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteServerCommandInput, DeleteServerCommandOutput>;
    private serialize;
    private deserialize;
}
