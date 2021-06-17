import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateLaunchTemplateVersionRequest, CreateLaunchTemplateVersionResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLaunchTemplateVersionCommandInput extends CreateLaunchTemplateVersionRequest {
}
export interface CreateLaunchTemplateVersionCommandOutput extends CreateLaunchTemplateVersionResult, __MetadataBearer {
}
/**
 * <p>Creates a new version for a launch template. You can specify an existing version of
 *             launch template from which to base the new version.</p>
 *         <p>Launch template versions are numbered in the order in which they are created. You
 *             cannot specify, change, or replace the numbering of launch template versions.</p>
 *         <p>For
 *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#manage-launch-template-versions">Managing launch template versions</a>in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateLaunchTemplateVersionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateLaunchTemplateVersionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateLaunchTemplateVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLaunchTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link CreateLaunchTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLaunchTemplateVersionCommand extends $Command<CreateLaunchTemplateVersionCommandInput, CreateLaunchTemplateVersionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateLaunchTemplateVersionCommandInput;
    constructor(input: CreateLaunchTemplateVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLaunchTemplateVersionCommandInput, CreateLaunchTemplateVersionCommandOutput>;
    private serialize;
    private deserialize;
}
