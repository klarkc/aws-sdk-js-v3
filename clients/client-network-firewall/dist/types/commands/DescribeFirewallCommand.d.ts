import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { DescribeFirewallRequest, DescribeFirewallResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFirewallCommandInput extends DescribeFirewallRequest {
}
export interface DescribeFirewallCommandOutput extends DescribeFirewallResponse, __MetadataBearer {
}
/**
 * <p>Returns the data objects for the specified firewall. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeFirewallCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeFirewallCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new DescribeFirewallCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFirewallCommandInput} for command's `input` shape.
 * @see {@link DescribeFirewallCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFirewallCommand extends $Command<DescribeFirewallCommandInput, DescribeFirewallCommandOutput, NetworkFirewallClientResolvedConfig> {
    readonly input: DescribeFirewallCommandInput;
    constructor(input: DescribeFirewallCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkFirewallClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFirewallCommandInput, DescribeFirewallCommandOutput>;
    private serialize;
    private deserialize;
}
