import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateLaunchTemplateRequest, CreateLaunchTemplateResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLaunchTemplateCommandInput extends CreateLaunchTemplateRequest {
}
export interface CreateLaunchTemplateCommandOutput extends CreateLaunchTemplateResult, __MetadataBearer {
}
/**
 * <p>Creates a launch template. A launch template contains the parameters to launch an
 *             instance. When you launch an instance using <a>RunInstances</a>, you can
 *             specify a launch template instead of providing the launch parameters in the request. For
 *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launching an instance from a
 *                 launch template</a>in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateLaunchTemplateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateLaunchTemplateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateLaunchTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLaunchTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateLaunchTemplateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLaunchTemplateCommand extends $Command<CreateLaunchTemplateCommandInput, CreateLaunchTemplateCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateLaunchTemplateCommandInput;
    constructor(input: CreateLaunchTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLaunchTemplateCommandInput, CreateLaunchTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
