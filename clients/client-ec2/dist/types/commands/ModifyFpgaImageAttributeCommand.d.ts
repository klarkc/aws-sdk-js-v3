import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyFpgaImageAttributeRequest, ModifyFpgaImageAttributeResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyFpgaImageAttributeCommandInput extends ModifyFpgaImageAttributeRequest {
}
export interface ModifyFpgaImageAttributeCommandOutput extends ModifyFpgaImageAttributeResult, __MetadataBearer {
}
/**
 * <p>Modifies the specified attribute of the specified Amazon FPGA Image (AFI).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyFpgaImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyFpgaImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyFpgaImageAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyFpgaImageAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyFpgaImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyFpgaImageAttributeCommand extends $Command<ModifyFpgaImageAttributeCommandInput, ModifyFpgaImageAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyFpgaImageAttributeCommandInput;
    constructor(input: ModifyFpgaImageAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyFpgaImageAttributeCommandInput, ModifyFpgaImageAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
