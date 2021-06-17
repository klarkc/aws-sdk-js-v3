import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetTransitGatewayRouteTablePropagationsRequest, GetTransitGatewayRouteTablePropagationsResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTransitGatewayRouteTablePropagationsCommandInput extends GetTransitGatewayRouteTablePropagationsRequest {
}
export interface GetTransitGatewayRouteTablePropagationsCommandOutput extends GetTransitGatewayRouteTablePropagationsResult, __MetadataBearer {
}
/**
 * <p>Gets information about the route table propagations for the specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayRouteTablePropagationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayRouteTablePropagationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetTransitGatewayRouteTablePropagationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTransitGatewayRouteTablePropagationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayRouteTablePropagationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTransitGatewayRouteTablePropagationsCommand extends $Command<GetTransitGatewayRouteTablePropagationsCommandInput, GetTransitGatewayRouteTablePropagationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetTransitGatewayRouteTablePropagationsCommandInput;
    constructor(input: GetTransitGatewayRouteTablePropagationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTransitGatewayRouteTablePropagationsCommandInput, GetTransitGatewayRouteTablePropagationsCommandOutput>;
    private serialize;
    private deserialize;
}
