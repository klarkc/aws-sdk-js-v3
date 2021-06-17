import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateEgressOnlyInternetGatewayRequest, CreateEgressOnlyInternetGatewayResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateEgressOnlyInternetGatewayCommandInput extends CreateEgressOnlyInternetGatewayRequest {
}
export interface CreateEgressOnlyInternetGatewayCommandOutput extends CreateEgressOnlyInternetGatewayResult, __MetadataBearer {
}
/**
 * <p>[IPv6 only] Creates an egress-only internet gateway for your VPC. An egress-only
 * 			internet gateway is used to enable outbound communication over IPv6 from instances in
 * 			your VPC to the internet, and prevents hosts outside of your VPC from initiating an IPv6
 * 			connection with your instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateEgressOnlyInternetGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateEgressOnlyInternetGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateEgressOnlyInternetGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEgressOnlyInternetGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateEgressOnlyInternetGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateEgressOnlyInternetGatewayCommand extends $Command<CreateEgressOnlyInternetGatewayCommandInput, CreateEgressOnlyInternetGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateEgressOnlyInternetGatewayCommandInput;
    constructor(input: CreateEgressOnlyInternetGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEgressOnlyInternetGatewayCommandInput, CreateEgressOnlyInternetGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
