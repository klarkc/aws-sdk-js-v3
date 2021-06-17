import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateLocalGatewayRouteRequest, CreateLocalGatewayRouteResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLocalGatewayRouteCommandInput extends CreateLocalGatewayRouteRequest {
}
export interface CreateLocalGatewayRouteCommandOutput extends CreateLocalGatewayRouteResult, __MetadataBearer {
}
/**
 * <p>Creates a static route for the specified local gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateLocalGatewayRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateLocalGatewayRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateLocalGatewayRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocalGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link CreateLocalGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLocalGatewayRouteCommand extends $Command<CreateLocalGatewayRouteCommandInput, CreateLocalGatewayRouteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateLocalGatewayRouteCommandInput;
    constructor(input: CreateLocalGatewayRouteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLocalGatewayRouteCommandInput, CreateLocalGatewayRouteCommandOutput>;
    private serialize;
    private deserialize;
}
