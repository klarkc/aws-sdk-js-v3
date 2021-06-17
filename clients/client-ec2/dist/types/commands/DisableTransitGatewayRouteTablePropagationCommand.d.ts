import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisableTransitGatewayRouteTablePropagationRequest, DisableTransitGatewayRouteTablePropagationResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableTransitGatewayRouteTablePropagationCommandInput extends DisableTransitGatewayRouteTablePropagationRequest {
}
export interface DisableTransitGatewayRouteTablePropagationCommandOutput extends DisableTransitGatewayRouteTablePropagationResult, __MetadataBearer {
}
/**
 * <p>Disables the specified resource attachment from propagating routes to the specified
 *          propagation route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableTransitGatewayRouteTablePropagationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableTransitGatewayRouteTablePropagationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisableTransitGatewayRouteTablePropagationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableTransitGatewayRouteTablePropagationCommandInput} for command's `input` shape.
 * @see {@link DisableTransitGatewayRouteTablePropagationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableTransitGatewayRouteTablePropagationCommand extends $Command<DisableTransitGatewayRouteTablePropagationCommandInput, DisableTransitGatewayRouteTablePropagationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisableTransitGatewayRouteTablePropagationCommandInput;
    constructor(input: DisableTransitGatewayRouteTablePropagationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableTransitGatewayRouteTablePropagationCommandInput, DisableTransitGatewayRouteTablePropagationCommandOutput>;
    private serialize;
    private deserialize;
}
