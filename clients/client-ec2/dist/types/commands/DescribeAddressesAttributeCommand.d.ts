import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeAddressesAttributeRequest, DescribeAddressesAttributeResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAddressesAttributeCommandInput extends DescribeAddressesAttributeRequest {
}
export interface DescribeAddressesAttributeCommandOutput extends DescribeAddressesAttributeResult, __MetadataBearer {
}
/**
 * <p>Describes the attributes of the specified Elastic IP addresses. For requirements, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#Using_Elastic_Addressing_Reverse_DNS">Using reverse DNS for email applications</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAddressesAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAddressesAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeAddressesAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAddressesAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeAddressesAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAddressesAttributeCommand extends $Command<DescribeAddressesAttributeCommandInput, DescribeAddressesAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeAddressesAttributeCommandInput;
    constructor(input: DescribeAddressesAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAddressesAttributeCommandInput, DescribeAddressesAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
