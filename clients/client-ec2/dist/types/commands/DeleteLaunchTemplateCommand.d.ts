import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteLaunchTemplateRequest, DeleteLaunchTemplateResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLaunchTemplateCommandInput extends DeleteLaunchTemplateRequest {
}
export interface DeleteLaunchTemplateCommandOutput extends DeleteLaunchTemplateResult, __MetadataBearer {
}
/**
 * <p>Deletes a launch template. Deleting a launch template deletes all of its versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteLaunchTemplateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteLaunchTemplateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteLaunchTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLaunchTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteLaunchTemplateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLaunchTemplateCommand extends $Command<DeleteLaunchTemplateCommandInput, DeleteLaunchTemplateCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteLaunchTemplateCommandInput;
    constructor(input: DeleteLaunchTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLaunchTemplateCommandInput, DeleteLaunchTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
