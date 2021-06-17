import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTransitGatewayMulticastDomainRequest, CreateTransitGatewayMulticastDomainResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTransitGatewayMulticastDomainCommandInput extends CreateTransitGatewayMulticastDomainRequest {
}
export interface CreateTransitGatewayMulticastDomainCommandOutput extends CreateTransitGatewayMulticastDomainResult, __MetadataBearer {
}
/**
 * <p>Creates a multicast domain using the specified transit gateway.</p>
 *         <p>The transit gateway  must be in the available state before you create a domain. Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGateways.html">DescribeTransitGateways</a> to see the state of transit gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayMulticastDomainCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayMulticastDomainCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTransitGatewayMulticastDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayMulticastDomainCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayMulticastDomainCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTransitGatewayMulticastDomainCommand extends $Command<CreateTransitGatewayMulticastDomainCommandInput, CreateTransitGatewayMulticastDomainCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateTransitGatewayMulticastDomainCommandInput;
    constructor(input: CreateTransitGatewayMulticastDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTransitGatewayMulticastDomainCommandInput, CreateTransitGatewayMulticastDomainCommandOutput>;
    private serialize;
    private deserialize;
}
