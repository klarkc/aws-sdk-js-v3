import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetTransitGatewayRouteTableAssociationsRequest, GetTransitGatewayRouteTableAssociationsResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTransitGatewayRouteTableAssociationsCommandInput extends GetTransitGatewayRouteTableAssociationsRequest {
}
export interface GetTransitGatewayRouteTableAssociationsCommandOutput extends GetTransitGatewayRouteTableAssociationsResult, __MetadataBearer {
}
/**
 * <p>Gets information about the associations for the specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayRouteTableAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayRouteTableAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetTransitGatewayRouteTableAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTransitGatewayRouteTableAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayRouteTableAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTransitGatewayRouteTableAssociationsCommand extends $Command<GetTransitGatewayRouteTableAssociationsCommandInput, GetTransitGatewayRouteTableAssociationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetTransitGatewayRouteTableAssociationsCommandInput;
    constructor(input: GetTransitGatewayRouteTableAssociationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTransitGatewayRouteTableAssociationsCommandInput, GetTransitGatewayRouteTableAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
