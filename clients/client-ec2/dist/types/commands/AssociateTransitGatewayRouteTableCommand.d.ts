import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateTransitGatewayRouteTableRequest, AssociateTransitGatewayRouteTableResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateTransitGatewayRouteTableCommandInput extends AssociateTransitGatewayRouteTableRequest {
}
export interface AssociateTransitGatewayRouteTableCommandOutput extends AssociateTransitGatewayRouteTableResult, __MetadataBearer {
}
/**
 * <p>Associates the specified attachment with the specified transit gateway route table. You can
 *         associate only one route table with an attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateTransitGatewayRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateTransitGatewayRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateTransitGatewayRouteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateTransitGatewayRouteTableCommandInput} for command's `input` shape.
 * @see {@link AssociateTransitGatewayRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateTransitGatewayRouteTableCommand extends $Command<AssociateTransitGatewayRouteTableCommandInput, AssociateTransitGatewayRouteTableCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AssociateTransitGatewayRouteTableCommandInput;
    constructor(input: AssociateTransitGatewayRouteTableCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateTransitGatewayRouteTableCommandInput, AssociateTransitGatewayRouteTableCommandOutput>;
    private serialize;
    private deserialize;
}
