import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetLoadBalancerMetricDataRequest, GetLoadBalancerMetricDataResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLoadBalancerMetricDataCommandInput extends GetLoadBalancerMetricDataRequest {
}
export interface GetLoadBalancerMetricDataCommandOutput extends GetLoadBalancerMetricDataResult, __MetadataBearer {
}
/**
 * <p>Returns information about health metrics for your Lightsail load balancer.</p>
 *          <p>Metrics report the utilization of your resources, and the error counts generated by them.
 *       Monitor and collect metric data regularly to maintain the reliability, availability, and
 *       performance of your resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetLoadBalancerMetricDataCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetLoadBalancerMetricDataCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetLoadBalancerMetricDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLoadBalancerMetricDataCommandInput} for command's `input` shape.
 * @see {@link GetLoadBalancerMetricDataCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLoadBalancerMetricDataCommand extends $Command<GetLoadBalancerMetricDataCommandInput, GetLoadBalancerMetricDataCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetLoadBalancerMetricDataCommandInput;
    constructor(input: GetLoadBalancerMetricDataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLoadBalancerMetricDataCommandInput, GetLoadBalancerMetricDataCommandOutput>;
    private serialize;
    private deserialize;
}
