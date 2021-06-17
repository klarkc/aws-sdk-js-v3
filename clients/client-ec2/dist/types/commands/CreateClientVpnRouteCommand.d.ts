import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateClientVpnRouteRequest, CreateClientVpnRouteResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateClientVpnRouteCommandInput extends CreateClientVpnRouteRequest {
}
export interface CreateClientVpnRouteCommandOutput extends CreateClientVpnRouteResult, __MetadataBearer {
}
/**
 * <p>Adds a route to a network to a Client VPN endpoint. Each Client VPN endpoint has a route table that describes the
 * 			available destination network routes. Each route in the route table specifies the path for traﬃc to speciﬁc resources or networks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateClientVpnRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateClientVpnRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateClientVpnRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClientVpnRouteCommandInput} for command's `input` shape.
 * @see {@link CreateClientVpnRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateClientVpnRouteCommand extends $Command<CreateClientVpnRouteCommandInput, CreateClientVpnRouteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateClientVpnRouteCommandInput;
    constructor(input: CreateClientVpnRouteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateClientVpnRouteCommandInput, CreateClientVpnRouteCommandOutput>;
    private serialize;
    private deserialize;
}
