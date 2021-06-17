import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateTransitGatewayRouteTableRequest, DisassociateTransitGatewayRouteTableResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateTransitGatewayRouteTableCommandInput extends DisassociateTransitGatewayRouteTableRequest {
}
export interface DisassociateTransitGatewayRouteTableCommandOutput extends DisassociateTransitGatewayRouteTableResult, __MetadataBearer {
}
/**
 * <p>Disassociates a resource attachment from a transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateTransitGatewayRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateTransitGatewayRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateTransitGatewayRouteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateTransitGatewayRouteTableCommandInput} for command's `input` shape.
 * @see {@link DisassociateTransitGatewayRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateTransitGatewayRouteTableCommand extends $Command<DisassociateTransitGatewayRouteTableCommandInput, DisassociateTransitGatewayRouteTableCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisassociateTransitGatewayRouteTableCommandInput;
    constructor(input: DisassociateTransitGatewayRouteTableCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateTransitGatewayRouteTableCommandInput, DisassociateTransitGatewayRouteTableCommandOutput>;
    private serialize;
    private deserialize;
}
