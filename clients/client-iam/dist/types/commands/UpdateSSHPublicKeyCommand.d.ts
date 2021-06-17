import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateSSHPublicKeyRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateSSHPublicKeyCommandInput extends UpdateSSHPublicKeyRequest {
}
export interface UpdateSSHPublicKeyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Sets the status of an IAM user's SSH public key to active or inactive. SSH public
 *             keys that are inactive cannot be used for authentication. This operation can be used to
 *             disable a user's SSH public key as part of a key rotation work flow.</p>
 *         <p>The SSH public key affected by this operation is used only for authenticating the
 *             associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys
 *             to authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for
 *                 SSH connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateSSHPublicKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateSSHPublicKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link UpdateSSHPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSSHPublicKeyCommand extends $Command<UpdateSSHPublicKeyCommandInput, UpdateSSHPublicKeyCommandOutput, IAMClientResolvedConfig> {
    readonly input: UpdateSSHPublicKeyCommandInput;
    constructor(input: UpdateSSHPublicKeyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSSHPublicKeyCommandInput, UpdateSSHPublicKeyCommandOutput>;
    private serialize;
    private deserialize;
}
