import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ResetImageAttributeRequest } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResetImageAttributeCommandInput extends ResetImageAttributeRequest {
}
export interface ResetImageAttributeCommandOutput extends __MetadataBearer {
}
/**
 * <p>Resets an attribute of an AMI to its default value.</p>
 *          <note>
 *             <p>The productCodes attribute can't be reset.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ResetImageAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetImageAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResetImageAttributeCommand extends $Command<ResetImageAttributeCommandInput, ResetImageAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ResetImageAttributeCommandInput;
    constructor(input: ResetImageAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetImageAttributeCommandInput, ResetImageAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
