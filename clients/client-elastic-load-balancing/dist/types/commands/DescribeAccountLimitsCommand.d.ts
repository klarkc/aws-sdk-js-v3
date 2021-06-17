import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { DescribeAccountLimitsInput, DescribeAccountLimitsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAccountLimitsCommandInput extends DescribeAccountLimitsInput {
}
export interface DescribeAccountLimitsCommandOutput extends DescribeAccountLimitsOutput, __MetadataBearer {
}
/**
 * <p>Describes the current Elastic Load Balancing resource limits for your AWS account.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeAccountLimitsCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeAccountLimitsCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new DescribeAccountLimitsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountLimitsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAccountLimitsCommand extends $Command<DescribeAccountLimitsCommandInput, DescribeAccountLimitsCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: DescribeAccountLimitsCommandInput;
    constructor(input: DescribeAccountLimitsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAccountLimitsCommandInput, DescribeAccountLimitsCommandOutput>;
    private serialize;
    private deserialize;
}
