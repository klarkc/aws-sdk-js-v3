import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { DescribeAccessPointsInput, DescribeAccessPointsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeLoadBalancersCommandInput extends DescribeAccessPointsInput {
}
export interface DescribeLoadBalancersCommandOutput extends DescribeAccessPointsOutput, __MetadataBearer {
}
/**
 * <p>Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeLoadBalancersCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeLoadBalancersCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new DescribeLoadBalancersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLoadBalancersCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBalancersCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLoadBalancersCommand extends $Command<DescribeLoadBalancersCommandInput, DescribeLoadBalancersCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: DescribeLoadBalancersCommandInput;
    constructor(input: DescribeLoadBalancersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLoadBalancersCommandInput, DescribeLoadBalancersCommandOutput>;
    private serialize;
    private deserialize;
}
