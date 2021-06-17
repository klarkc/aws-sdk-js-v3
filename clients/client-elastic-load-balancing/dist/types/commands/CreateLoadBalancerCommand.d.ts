import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { CreateAccessPointInput, CreateAccessPointOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLoadBalancerCommandInput extends CreateAccessPointInput {
}
export interface CreateLoadBalancerCommandOutput extends CreateAccessPointOutput, __MetadataBearer {
}
/**
 * <p>Creates a Classic Load Balancer.</p>
 *
 *         <p>You can add listeners, security groups, subnets, and tags when you create your load balancer,
 *             or you can add them later using <a>CreateLoadBalancerListeners</a>,
 *             <a>ApplySecurityGroupsToLoadBalancer</a>, <a>AttachLoadBalancerToSubnets</a>,
 *             and <a>AddTags</a>.</p>
 *         <p>To describe your current load balancers, see <a>DescribeLoadBalancers</a>.
 *             When you are finished with a load balancer, you can delete it using
 *             <a>DeleteLoadBalancer</a>.</p>
 *
 *         <p>You can create up to 20 load balancers per region per account.
 *             You can request an increase for the number of load balancers for your account.
 *             For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, CreateLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, CreateLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link CreateLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLoadBalancerCommand extends $Command<CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: CreateLoadBalancerCommandInput;
    constructor(input: CreateLoadBalancerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}
