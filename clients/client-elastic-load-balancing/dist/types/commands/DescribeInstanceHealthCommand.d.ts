import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { DescribeEndPointStateInput, DescribeEndPointStateOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeInstanceHealthCommandInput extends DescribeEndPointStateInput {
}
export interface DescribeInstanceHealthCommandOutput extends DescribeEndPointStateOutput, __MetadataBearer {
}
/**
 * <p>Describes the state of the specified instances with respect to the specified load balancer. If no instances are specified, the call describes the state of all instances that are currently registered with the load balancer. If instances are specified, their state is returned even if they are no longer registered with the load balancer. The state of terminated instances is not returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeInstanceHealthCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeInstanceHealthCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new DescribeInstanceHealthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceHealthCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInstanceHealthCommand extends $Command<DescribeInstanceHealthCommandInput, DescribeInstanceHealthCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: DescribeInstanceHealthCommandInput;
    constructor(input: DescribeInstanceHealthCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstanceHealthCommandInput, DescribeInstanceHealthCommandOutput>;
    private serialize;
    private deserialize;
}
