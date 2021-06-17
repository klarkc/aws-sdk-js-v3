import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RevokeClientVpnIngressRequest, RevokeClientVpnIngressResult } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RevokeClientVpnIngressCommandInput extends RevokeClientVpnIngressRequest {
}
export interface RevokeClientVpnIngressCommandOutput extends RevokeClientVpnIngressResult, __MetadataBearer {
}
/**
 * <p>Removes an ingress authorization rule from a Client VPN endpoint. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RevokeClientVpnIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RevokeClientVpnIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RevokeClientVpnIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeClientVpnIngressCommandInput} for command's `input` shape.
 * @see {@link RevokeClientVpnIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RevokeClientVpnIngressCommand extends $Command<RevokeClientVpnIngressCommandInput, RevokeClientVpnIngressCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RevokeClientVpnIngressCommandInput;
    constructor(input: RevokeClientVpnIngressCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeClientVpnIngressCommandInput, RevokeClientVpnIngressCommandOutput>;
    private serialize;
    private deserialize;
}
