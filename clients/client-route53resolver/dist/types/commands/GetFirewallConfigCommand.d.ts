import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { GetFirewallConfigRequest, GetFirewallConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetFirewallConfigCommandInput extends GetFirewallConfigRequest {
}
export interface GetFirewallConfigCommandOutput extends GetFirewallConfigResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the configuration of the firewall behavior provided by DNS Firewall for a
 * 			single VPC from Amazon Virtual Private Cloud (Amazon VPC). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetFirewallConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetFirewallConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetFirewallConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFirewallConfigCommandInput} for command's `input` shape.
 * @see {@link GetFirewallConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetFirewallConfigCommand extends $Command<GetFirewallConfigCommandInput, GetFirewallConfigCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: GetFirewallConfigCommandInput;
    constructor(input: GetFirewallConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFirewallConfigCommandInput, GetFirewallConfigCommandOutput>;
    private serialize;
    private deserialize;
}
