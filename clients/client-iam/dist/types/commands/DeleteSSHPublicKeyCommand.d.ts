import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteSSHPublicKeyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSSHPublicKeyCommandInput extends DeleteSSHPublicKeyRequest {
}
export interface DeleteSSHPublicKeyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified SSH public key.</p>
 *         <p>The SSH public key deleted by this operation is used only for authenticating the
 *             associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys
 *             to authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for
 *                 SSH connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteSSHPublicKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteSSHPublicKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteSSHPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSSHPublicKeyCommand extends $Command<DeleteSSHPublicKeyCommandInput, DeleteSSHPublicKeyCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteSSHPublicKeyCommandInput;
    constructor(input: DeleteSSHPublicKeyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSSHPublicKeyCommandInput, DeleteSSHPublicKeyCommandOutput>;
    private serialize;
    private deserialize;
}
