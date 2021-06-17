import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { UpdateFirewallConfigRequest, UpdateFirewallConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFirewallConfigCommandInput extends UpdateFirewallConfigRequest {
}
export interface UpdateFirewallConfigCommandOutput extends UpdateFirewallConfigResponse, __MetadataBearer {
}
/**
 * <p>Updates the configuration of the firewall behavior provided by DNS Firewall for a single
 * 			VPC from Amazon Virtual Private Cloud (Amazon VPC). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateFirewallConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateFirewallConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new UpdateFirewallConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFirewallConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateFirewallConfigCommand extends $Command<UpdateFirewallConfigCommandInput, UpdateFirewallConfigCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: UpdateFirewallConfigCommandInput;
    constructor(input: UpdateFirewallConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFirewallConfigCommandInput, UpdateFirewallConfigCommandOutput>;
    private serialize;
    private deserialize;
}
