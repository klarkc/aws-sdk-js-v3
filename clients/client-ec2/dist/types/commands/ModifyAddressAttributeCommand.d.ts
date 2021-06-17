import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyAddressAttributeRequest, ModifyAddressAttributeResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyAddressAttributeCommandInput extends ModifyAddressAttributeRequest {
}
export interface ModifyAddressAttributeCommandOutput extends ModifyAddressAttributeResult, __MetadataBearer {
}
/**
 * <p>Modifies an attribute of the specified Elastic IP address. For requirements, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#Using_Elastic_Addressing_Reverse_DNS">Using reverse DNS for email applications</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyAddressAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyAddressAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyAddressAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyAddressAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyAddressAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyAddressAttributeCommand extends $Command<ModifyAddressAttributeCommandInput, ModifyAddressAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyAddressAttributeCommandInput;
    constructor(input: ModifyAddressAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyAddressAttributeCommandInput, ModifyAddressAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
