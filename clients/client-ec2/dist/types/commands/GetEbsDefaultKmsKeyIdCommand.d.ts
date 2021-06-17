import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetEbsDefaultKmsKeyIdRequest, GetEbsDefaultKmsKeyIdResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEbsDefaultKmsKeyIdCommandInput extends GetEbsDefaultKmsKeyIdRequest {
}
export interface GetEbsDefaultKmsKeyIdCommandOutput extends GetEbsDefaultKmsKeyIdResult, __MetadataBearer {
}
/**
 * <p>Describes the default customer master key (CMK) for EBS encryption by default for your account in this Region.
 *       You can change the default CMK for encryption by default using <a>ModifyEbsDefaultKmsKeyId</a> or
 *       <a>ResetEbsDefaultKmsKeyId</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetEbsDefaultKmsKeyIdCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetEbsDefaultKmsKeyIdCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetEbsDefaultKmsKeyIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEbsDefaultKmsKeyIdCommandInput} for command's `input` shape.
 * @see {@link GetEbsDefaultKmsKeyIdCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEbsDefaultKmsKeyIdCommand extends $Command<GetEbsDefaultKmsKeyIdCommandInput, GetEbsDefaultKmsKeyIdCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetEbsDefaultKmsKeyIdCommandInput;
    constructor(input: GetEbsDefaultKmsKeyIdCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEbsDefaultKmsKeyIdCommandInput, GetEbsDefaultKmsKeyIdCommandOutput>;
    private serialize;
    private deserialize;
}
