import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTransitGatewayRouteRequest, CreateTransitGatewayRouteResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTransitGatewayRouteCommandInput extends CreateTransitGatewayRouteRequest {
}
export interface CreateTransitGatewayRouteCommandOutput extends CreateTransitGatewayRouteResult, __MetadataBearer {
}
/**
 * <p>Creates a static route for the specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTransitGatewayRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTransitGatewayRouteCommand extends $Command<CreateTransitGatewayRouteCommandInput, CreateTransitGatewayRouteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateTransitGatewayRouteCommandInput;
    constructor(input: CreateTransitGatewayRouteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTransitGatewayRouteCommandInput, CreateTransitGatewayRouteCommandOutput>;
    private serialize;
    private deserialize;
}
