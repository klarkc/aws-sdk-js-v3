import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateClientVpnEndpointRequest, CreateClientVpnEndpointResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateClientVpnEndpointCommandInput extends CreateClientVpnEndpointRequest {
}
export interface CreateClientVpnEndpointCommandOutput extends CreateClientVpnEndpointResult, __MetadataBearer {
}
/**
 * <p>Creates a Client VPN endpoint. A Client VPN endpoint is the resource you create and configure to
 * 			enable and manage client VPN sessions. It is the destination endpoint at which all client VPN sessions
 * 			are terminated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateClientVpnEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateClientVpnEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateClientVpnEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClientVpnEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateClientVpnEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateClientVpnEndpointCommand extends $Command<CreateClientVpnEndpointCommandInput, CreateClientVpnEndpointCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateClientVpnEndpointCommandInput;
    constructor(input: CreateClientVpnEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateClientVpnEndpointCommandInput, CreateClientVpnEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
