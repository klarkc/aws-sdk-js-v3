import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetSSHPublicKeyRequest, GetSSHPublicKeyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSSHPublicKeyCommandInput extends GetSSHPublicKeyRequest {
}
export interface GetSSHPublicKeyCommandOutput extends GetSSHPublicKeyResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the specified SSH public key, including metadata about the key.</p>
 *         <p>The SSH public key retrieved by this operation is used only for authenticating the
 *             associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys
 *             to authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for SSH
 *                 connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetSSHPublicKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetSSHPublicKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link GetSSHPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSSHPublicKeyCommand extends $Command<GetSSHPublicKeyCommandInput, GetSSHPublicKeyCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetSSHPublicKeyCommandInput;
    constructor(input: GetSSHPublicKeyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSSHPublicKeyCommandInput, GetSSHPublicKeyCommandOutput>;
    private serialize;
    private deserialize;
}
