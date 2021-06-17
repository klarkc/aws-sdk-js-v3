import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ResetAddressAttributeRequest, ResetAddressAttributeResult } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResetAddressAttributeCommandInput extends ResetAddressAttributeRequest {
}
export interface ResetAddressAttributeCommandOutput extends ResetAddressAttributeResult, __MetadataBearer {
}
/**
 * <p>Resets the attribute of the specified IP address. For requirements, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#Using_Elastic_Addressing_Reverse_DNS">Using reverse DNS for email applications</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetAddressAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetAddressAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ResetAddressAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetAddressAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetAddressAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResetAddressAttributeCommand extends $Command<ResetAddressAttributeCommandInput, ResetAddressAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ResetAddressAttributeCommandInput;
    constructor(input: ResetAddressAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetAddressAttributeCommandInput, ResetAddressAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
