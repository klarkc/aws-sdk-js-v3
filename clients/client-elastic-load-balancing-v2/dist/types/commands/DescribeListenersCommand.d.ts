import { ElasticLoadBalancingV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingV2Client";
import { DescribeListenersInput, DescribeListenersOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeListenersCommandInput extends DescribeListenersInput {
}
export interface DescribeListenersCommandOutput extends DescribeListenersOutput, __MetadataBearer {
}
/**
 * <p>Describes the specified listeners or the listeners for the specified Application Load
 *       Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load
 *       balancer or one or more listeners.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeListenersCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeListenersCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DescribeListenersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeListenersCommandInput} for command's `input` shape.
 * @see {@link DescribeListenersCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeListenersCommand extends $Command<DescribeListenersCommandInput, DescribeListenersCommandOutput, ElasticLoadBalancingV2ClientResolvedConfig> {
    readonly input: DescribeListenersCommandInput;
    constructor(input: DescribeListenersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeListenersCommandInput, DescribeListenersCommandOutput>;
    private serialize;
    private deserialize;
}
