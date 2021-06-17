import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyEbsDefaultKmsKeyIdRequest, ModifyEbsDefaultKmsKeyIdResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyEbsDefaultKmsKeyIdCommandInput extends ModifyEbsDefaultKmsKeyIdRequest {
}
export interface ModifyEbsDefaultKmsKeyIdCommandOutput extends ModifyEbsDefaultKmsKeyIdResult, __MetadataBearer {
}
/**
 * <p>Changes the default customer master key (CMK) for EBS encryption by default for your account in this Region.</p>
 *          <p>AWS creates a unique AWS managed CMK in each Region for use with encryption by default. If
 *       you change the default CMK to a symmetric customer managed CMK, it is used instead of the AWS
 *       managed CMK. To reset the default CMK to the AWS managed CMK for EBS, use <a>ResetEbsDefaultKmsKeyId</a>. Amazon EBS does not support asymmetric CMKs.</p>
 *          <p>If you delete or disable the customer managed CMK that you specified for use with
 *       encryption by default, your instances will fail to launch.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyEbsDefaultKmsKeyIdCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyEbsDefaultKmsKeyIdCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyEbsDefaultKmsKeyIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyEbsDefaultKmsKeyIdCommandInput} for command's `input` shape.
 * @see {@link ModifyEbsDefaultKmsKeyIdCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyEbsDefaultKmsKeyIdCommand extends $Command<ModifyEbsDefaultKmsKeyIdCommandInput, ModifyEbsDefaultKmsKeyIdCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyEbsDefaultKmsKeyIdCommandInput;
    constructor(input: ModifyEbsDefaultKmsKeyIdCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyEbsDefaultKmsKeyIdCommandInput, ModifyEbsDefaultKmsKeyIdCommandOutput>;
    private serialize;
    private deserialize;
}
