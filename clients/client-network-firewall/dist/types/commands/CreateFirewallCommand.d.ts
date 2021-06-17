import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { CreateFirewallRequest, CreateFirewallResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateFirewallCommandInput extends CreateFirewallRequest {
}
export interface CreateFirewallCommandOutput extends CreateFirewallResponse, __MetadataBearer {
}
/**
 * <p>Creates an AWS Network Firewall <a>Firewall</a> and accompanying <a>FirewallStatus</a> for a VPC. </p>
 *          <p>The firewall defines the configuration settings for an AWS Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall AWS resource. </p>
 *          <p>After you create a firewall, you can provide additional settings, like the logging configuration. </p>
 *          <p>To update the settings for a firewall, you use the operations that apply to the settings
 *          themselves, for example <a>UpdateLoggingConfiguration</a>, <a>AssociateSubnets</a>, and <a>UpdateFirewallDeleteProtection</a>. </p>
 *          <p>To manage a firewall's tags, use the standard AWS resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p>
 *          <p>To retrieve information about firewalls, use <a>ListFirewalls</a> and <a>DescribeFirewall</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, CreateFirewallCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, CreateFirewallCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new CreateFirewallCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFirewallCommandInput} for command's `input` shape.
 * @see {@link CreateFirewallCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateFirewallCommand extends $Command<CreateFirewallCommandInput, CreateFirewallCommandOutput, NetworkFirewallClientResolvedConfig> {
    readonly input: CreateFirewallCommandInput;
    constructor(input: CreateFirewallCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkFirewallClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFirewallCommandInput, CreateFirewallCommandOutput>;
    private serialize;
    private deserialize;
}
