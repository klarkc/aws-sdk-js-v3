import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeNetworkInterfaceAttributeRequest, DescribeNetworkInterfaceAttributeResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeNetworkInterfaceAttributeCommandInput extends DescribeNetworkInterfaceAttributeRequest {
}
export interface DescribeNetworkInterfaceAttributeCommandOutput extends DescribeNetworkInterfaceAttributeResult, __MetadataBearer {
}
/**
 * <p>Describes a network interface attribute. You can specify only one attribute at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInterfaceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInterfaceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeNetworkInterfaceAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNetworkInterfaceAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInterfaceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeNetworkInterfaceAttributeCommand extends $Command<DescribeNetworkInterfaceAttributeCommandInput, DescribeNetworkInterfaceAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeNetworkInterfaceAttributeCommandInput;
    constructor(input: DescribeNetworkInterfaceAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNetworkInterfaceAttributeCommandInput, DescribeNetworkInterfaceAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
