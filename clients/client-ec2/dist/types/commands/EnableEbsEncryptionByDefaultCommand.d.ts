import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { EnableEbsEncryptionByDefaultRequest, EnableEbsEncryptionByDefaultResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableEbsEncryptionByDefaultCommandInput extends EnableEbsEncryptionByDefaultRequest {
}
export interface EnableEbsEncryptionByDefaultCommandOutput extends EnableEbsEncryptionByDefaultResult, __MetadataBearer {
}
/**
 * <p>Enables EBS encryption by default for your account in the current Region.</p>
 *          <p>After you enable encryption by default, the EBS volumes that you create are
 *       always encrypted, either using the default CMK or the CMK that you specified
 *       when you created each volume. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the
 *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>You can specify the default CMK for encryption by default using <a>ModifyEbsDefaultKmsKeyId</a>
 *       or <a>ResetEbsDefaultKmsKeyId</a>.</p>
 *          <p>Enabling encryption by default has no effect on the encryption status of your
 *       existing volumes.</p>
 *          <p>After you enable encryption by default, you can no longer launch instances
 *       using instance types that do not support encryption. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported
 *         instance types</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableEbsEncryptionByDefaultCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableEbsEncryptionByDefaultCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableEbsEncryptionByDefaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableEbsEncryptionByDefaultCommandInput} for command's `input` shape.
 * @see {@link EnableEbsEncryptionByDefaultCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableEbsEncryptionByDefaultCommand extends $Command<EnableEbsEncryptionByDefaultCommandInput, EnableEbsEncryptionByDefaultCommandOutput, EC2ClientResolvedConfig> {
    readonly input: EnableEbsEncryptionByDefaultCommandInput;
    constructor(input: EnableEbsEncryptionByDefaultCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableEbsEncryptionByDefaultCommandInput, EnableEbsEncryptionByDefaultCommandOutput>;
    private serialize;
    private deserialize;
}
