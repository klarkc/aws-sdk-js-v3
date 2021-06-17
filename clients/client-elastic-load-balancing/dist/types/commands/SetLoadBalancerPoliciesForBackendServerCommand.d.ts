import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { SetLoadBalancerPoliciesForBackendServerInput, SetLoadBalancerPoliciesForBackendServerOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetLoadBalancerPoliciesForBackendServerCommandInput extends SetLoadBalancerPoliciesForBackendServerInput {
}
export interface SetLoadBalancerPoliciesForBackendServerCommandOutput extends SetLoadBalancerPoliciesForBackendServerOutput, __MetadataBearer {
}
/**
 * <p>Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies.
 *             At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies.</p>
 *         <p>Each time you use <code>SetLoadBalancerPoliciesForBackendServer</code> to enable the policies,
 *             use the <code>PolicyNames</code> parameter to list the policies that you want to enable.</p>
 *         <p>You can use <a>DescribeLoadBalancers</a> or <a>DescribeLoadBalancerPolicies</a> to verify that the policy
 *             is associated with the EC2 instance.</p>
 *
 *         <p>For more information about enabling back-end instance authentication, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html#configure_backendauth_clt">Configure Back-end Instance Authentication</a>
 *             in the <i>Classic Load Balancers Guide</i>. For more information about Proxy Protocol, see
 *             <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html">Configure Proxy Protocol Support</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, SetLoadBalancerPoliciesForBackendServerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, SetLoadBalancerPoliciesForBackendServerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new SetLoadBalancerPoliciesForBackendServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetLoadBalancerPoliciesForBackendServerCommandInput} for command's `input` shape.
 * @see {@link SetLoadBalancerPoliciesForBackendServerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetLoadBalancerPoliciesForBackendServerCommand extends $Command<SetLoadBalancerPoliciesForBackendServerCommandInput, SetLoadBalancerPoliciesForBackendServerCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: SetLoadBalancerPoliciesForBackendServerCommandInput;
    constructor(input: SetLoadBalancerPoliciesForBackendServerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetLoadBalancerPoliciesForBackendServerCommandInput, SetLoadBalancerPoliciesForBackendServerCommandOutput>;
    private serialize;
    private deserialize;
}
