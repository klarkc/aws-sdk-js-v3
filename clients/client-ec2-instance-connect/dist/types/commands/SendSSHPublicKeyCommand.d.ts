import { EC2InstanceConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2InstanceConnectClient";
import { SendSSHPublicKeyRequest, SendSSHPublicKeyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SendSSHPublicKeyCommandInput extends SendSSHPublicKeyRequest {
}
export interface SendSSHPublicKeyCommandOutput extends SendSSHPublicKeyResponse, __MetadataBearer {
}
/**
 * <p>Pushes an SSH public key to the specified EC2 instance for use by the specified user.
 *             The key remains for 60 seconds. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Connect-using-EC2-Instance-Connect.html">Connect to
 *                 your Linux instance using EC2 Instance Connect</a> in the <i>Amazon EC2
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2InstanceConnectClient, SendSSHPublicKeyCommand } from "@aws-sdk/client-ec2-instance-connect"; // ES Modules import
 * // const { EC2InstanceConnectClient, SendSSHPublicKeyCommand } = require("@aws-sdk/client-ec2-instance-connect"); // CommonJS import
 * const client = new EC2InstanceConnectClient(config);
 * const command = new SendSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link SendSSHPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link EC2InstanceConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SendSSHPublicKeyCommand extends $Command<SendSSHPublicKeyCommandInput, SendSSHPublicKeyCommandOutput, EC2InstanceConnectClientResolvedConfig> {
    readonly input: SendSSHPublicKeyCommandInput;
    constructor(input: SendSSHPublicKeyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2InstanceConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendSSHPublicKeyCommandInput, SendSSHPublicKeyCommandOutput>;
    private serialize;
    private deserialize;
}
