import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AuthorizeClientVpnIngressRequest, AuthorizeClientVpnIngressResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AuthorizeClientVpnIngressCommandInput extends AuthorizeClientVpnIngressRequest {
}
export interface AuthorizeClientVpnIngressCommandOutput extends AuthorizeClientVpnIngressResult, __MetadataBearer {
}
/**
 * <p>Adds an ingress authorization rule to a Client VPN endpoint. Ingress authorization rules act as
 * 			firewall rules that grant access to networks. You must configure ingress authorization rules to
 * 			enable clients to access resources in AWS or on-premises networks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AuthorizeClientVpnIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AuthorizeClientVpnIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AuthorizeClientVpnIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeClientVpnIngressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeClientVpnIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AuthorizeClientVpnIngressCommand extends $Command<AuthorizeClientVpnIngressCommandInput, AuthorizeClientVpnIngressCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AuthorizeClientVpnIngressCommandInput;
    constructor(input: AuthorizeClientVpnIngressCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AuthorizeClientVpnIngressCommandInput, AuthorizeClientVpnIngressCommandOutput>;
    private serialize;
    private deserialize;
}
