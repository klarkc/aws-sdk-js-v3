import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { EnableTransitGatewayRouteTablePropagationRequest, EnableTransitGatewayRouteTablePropagationResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableTransitGatewayRouteTablePropagationCommandInput extends EnableTransitGatewayRouteTablePropagationRequest {
}
export interface EnableTransitGatewayRouteTablePropagationCommandOutput extends EnableTransitGatewayRouteTablePropagationResult, __MetadataBearer {
}
/**
 * <p>Enables the specified attachment to propagate routes to the specified
 *          propagation route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableTransitGatewayRouteTablePropagationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableTransitGatewayRouteTablePropagationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableTransitGatewayRouteTablePropagationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableTransitGatewayRouteTablePropagationCommandInput} for command's `input` shape.
 * @see {@link EnableTransitGatewayRouteTablePropagationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableTransitGatewayRouteTablePropagationCommand extends $Command<EnableTransitGatewayRouteTablePropagationCommandInput, EnableTransitGatewayRouteTablePropagationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: EnableTransitGatewayRouteTablePropagationCommandInput;
    constructor(input: EnableTransitGatewayRouteTablePropagationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableTransitGatewayRouteTablePropagationCommandInput, EnableTransitGatewayRouteTablePropagationCommandOutput>;
    private serialize;
    private deserialize;
}
