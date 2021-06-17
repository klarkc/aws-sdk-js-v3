import { ElasticLoadBalancingV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingV2Client";
import { DescribeTargetHealthInput, DescribeTargetHealthOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTargetHealthCommandInput extends DescribeTargetHealthInput {
}
export interface DescribeTargetHealthCommandOutput extends DescribeTargetHealthOutput, __MetadataBearer {
}
/**
 * <p>Describes the health of the specified targets or all of your targets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeTargetHealthCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeTargetHealthCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DescribeTargetHealthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTargetHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeTargetHealthCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTargetHealthCommand extends $Command<DescribeTargetHealthCommandInput, DescribeTargetHealthCommandOutput, ElasticLoadBalancingV2ClientResolvedConfig> {
    readonly input: DescribeTargetHealthCommandInput;
    constructor(input: DescribeTargetHealthCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTargetHealthCommandInput, DescribeTargetHealthCommandOutput>;
    private serialize;
    private deserialize;
}
