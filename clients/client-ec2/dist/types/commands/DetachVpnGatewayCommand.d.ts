import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DetachVpnGatewayRequest } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetachVpnGatewayCommandInput extends DetachVpnGatewayRequest {
}
export interface DetachVpnGatewayCommandOutput extends __MetadataBearer {
}
/**
 * <p>Detaches a virtual private gateway from a VPC. You do this if you're planning to turn off the VPC and not use it anymore. You can confirm a virtual private gateway has been completely detached from a VPC by describing the virtual private gateway (any attachments to the virtual private gateway are also described).</p>
 *         <p>You must wait for the attachment's state to switch to <code>detached</code> before
 *             you can delete the VPC or attach a different VPC to the virtual private gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachVpnGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachVpnGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DetachVpnGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachVpnGatewayCommandInput} for command's `input` shape.
 * @see {@link DetachVpnGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetachVpnGatewayCommand extends $Command<DetachVpnGatewayCommandInput, DetachVpnGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DetachVpnGatewayCommandInput;
    constructor(input: DetachVpnGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachVpnGatewayCommandInput, DetachVpnGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
