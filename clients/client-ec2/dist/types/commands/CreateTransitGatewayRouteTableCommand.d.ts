import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTransitGatewayRouteTableRequest, CreateTransitGatewayRouteTableResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTransitGatewayRouteTableCommandInput extends CreateTransitGatewayRouteTableRequest {
}
export interface CreateTransitGatewayRouteTableCommandOutput extends CreateTransitGatewayRouteTableResult, __MetadataBearer {
}
/**
 * <p>Creates a route table for the specified transit gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTransitGatewayRouteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayRouteTableCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTransitGatewayRouteTableCommand extends $Command<CreateTransitGatewayRouteTableCommandInput, CreateTransitGatewayRouteTableCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateTransitGatewayRouteTableCommandInput;
    constructor(input: CreateTransitGatewayRouteTableCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTransitGatewayRouteTableCommandInput, CreateTransitGatewayRouteTableCommandOutput>;
    private serialize;
    private deserialize;
}
