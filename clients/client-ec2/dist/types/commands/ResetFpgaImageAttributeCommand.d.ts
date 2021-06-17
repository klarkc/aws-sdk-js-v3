import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ResetFpgaImageAttributeRequest, ResetFpgaImageAttributeResult } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResetFpgaImageAttributeCommandInput extends ResetFpgaImageAttributeRequest {
}
export interface ResetFpgaImageAttributeCommandOutput extends ResetFpgaImageAttributeResult, __MetadataBearer {
}
/**
 * <p>Resets the specified attribute of the specified Amazon FPGA Image (AFI) to its default value.
 * 		    You can only reset the load permission attribute.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetFpgaImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetFpgaImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ResetFpgaImageAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetFpgaImageAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetFpgaImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResetFpgaImageAttributeCommand extends $Command<ResetFpgaImageAttributeCommandInput, ResetFpgaImageAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ResetFpgaImageAttributeCommandInput;
    constructor(input: ResetFpgaImageAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetFpgaImageAttributeCommandInput, ResetFpgaImageAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
