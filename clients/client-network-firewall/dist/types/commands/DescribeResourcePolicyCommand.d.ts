import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { DescribeResourcePolicyRequest, DescribeResourcePolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeResourcePolicyCommandInput extends DescribeResourcePolicyRequest {
}
export interface DescribeResourcePolicyCommandOutput extends DescribeResourcePolicyResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a resource policy that you created in a <a>PutResourcePolicy</a> request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeResourcePolicyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeResourcePolicyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new DescribeResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeResourcePolicyCommand extends $Command<DescribeResourcePolicyCommandInput, DescribeResourcePolicyCommandOutput, NetworkFirewallClientResolvedConfig> {
    readonly input: DescribeResourcePolicyCommandInput;
    constructor(input: DescribeResourcePolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkFirewallClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeResourcePolicyCommandInput, DescribeResourcePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
