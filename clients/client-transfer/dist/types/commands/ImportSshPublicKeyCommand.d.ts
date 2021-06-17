import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { ImportSshPublicKeyRequest, ImportSshPublicKeyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ImportSshPublicKeyCommandInput extends ImportSshPublicKeyRequest {
}
export interface ImportSshPublicKeyCommandOutput extends ImportSshPublicKeyResponse, __MetadataBearer {
}
/**
 * <p>Adds a Secure Shell (SSH) public key to a user account identified by a
 *         <code>UserName</code> value assigned to the specific file transfer protocol-enabled server,
 *       identified by <code>ServerId</code>.</p>
 *
 *          <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and
 *       the name of the <code>SshPublicKeyId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ImportSshPublicKeyCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ImportSshPublicKeyCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new ImportSshPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportSshPublicKeyCommandInput} for command's `input` shape.
 * @see {@link ImportSshPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ImportSshPublicKeyCommand extends $Command<ImportSshPublicKeyCommandInput, ImportSshPublicKeyCommandOutput, TransferClientResolvedConfig> {
    readonly input: ImportSshPublicKeyCommandInput;
    constructor(input: ImportSshPublicKeyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportSshPublicKeyCommandInput, ImportSshPublicKeyCommandOutput>;
    private serialize;
    private deserialize;
}
