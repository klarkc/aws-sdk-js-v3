import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeFpgaImageAttributeRequest, DescribeFpgaImageAttributeResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFpgaImageAttributeCommandInput extends DescribeFpgaImageAttributeRequest {
}
export interface DescribeFpgaImageAttributeCommandOutput extends DescribeFpgaImageAttributeResult, __MetadataBearer {
}
/**
 * <p>Describes the specified attribute of the specified Amazon FPGA Image (AFI).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFpgaImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFpgaImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeFpgaImageAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFpgaImageAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeFpgaImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFpgaImageAttributeCommand extends $Command<DescribeFpgaImageAttributeCommandInput, DescribeFpgaImageAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeFpgaImageAttributeCommandInput;
    constructor(input: DescribeFpgaImageAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFpgaImageAttributeCommandInput, DescribeFpgaImageAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
