import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { DeleteSshPublicKeyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSshPublicKeyCommandInput extends DeleteSshPublicKeyRequest {
}
export interface DeleteSshPublicKeyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a user's Secure Shell (SSH) public key.</p>
 *
 *          <p>No response is returned from this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DeleteSshPublicKeyCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DeleteSshPublicKeyCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new DeleteSshPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSshPublicKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteSshPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSshPublicKeyCommand extends $Command<DeleteSshPublicKeyCommandInput, DeleteSshPublicKeyCommandOutput, TransferClientResolvedConfig> {
    readonly input: DeleteSshPublicKeyCommandInput;
    constructor(input: DeleteSshPublicKeyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSshPublicKeyCommandInput, DeleteSshPublicKeyCommandOutput>;
    private serialize;
    private deserialize;
}
