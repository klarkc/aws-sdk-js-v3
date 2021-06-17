import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyLaunchTemplateRequest, ModifyLaunchTemplateResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyLaunchTemplateCommandInput extends ModifyLaunchTemplateRequest {
}
export interface ModifyLaunchTemplateCommandOutput extends ModifyLaunchTemplateResult, __MetadataBearer {
}
/**
 * <p>Modifies a launch template. You can specify which version of the launch template to
 *             set as the default version. When launching an instance, the default version applies when
 *             a launch template version is not specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyLaunchTemplateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyLaunchTemplateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyLaunchTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyLaunchTemplateCommandInput} for command's `input` shape.
 * @see {@link ModifyLaunchTemplateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyLaunchTemplateCommand extends $Command<ModifyLaunchTemplateCommandInput, ModifyLaunchTemplateCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyLaunchTemplateCommandInput;
    constructor(input: ModifyLaunchTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyLaunchTemplateCommandInput, ModifyLaunchTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
