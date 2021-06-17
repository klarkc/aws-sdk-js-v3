import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyImageAttributeRequest } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyImageAttributeCommandInput extends ModifyImageAttributeRequest {
}
export interface ModifyImageAttributeCommandOutput extends __MetadataBearer {
}
/**
 * <p>Modifies the specified attribute of the specified AMI. You can specify only one attribute at a time.
 *        You can use the <code>Attribute</code> parameter to specify the attribute or one of the following parameters:
 *        <code>Description</code>, <code>LaunchPermission</code>, or <code>ProductCode</code>.</p>
 *          <p>AWS Marketplace product codes cannot be modified. Images with an AWS Marketplace product code cannot be made public.</p>
 *          <p>To enable the SriovNetSupport enhanced networking attribute of an image, enable SriovNetSupport on an instance
 *        and create an AMI from the instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyImageAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyImageAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyImageAttributeCommand extends $Command<ModifyImageAttributeCommandInput, ModifyImageAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyImageAttributeCommandInput;
    constructor(input: ModifyImageAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyImageAttributeCommandInput, ModifyImageAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
