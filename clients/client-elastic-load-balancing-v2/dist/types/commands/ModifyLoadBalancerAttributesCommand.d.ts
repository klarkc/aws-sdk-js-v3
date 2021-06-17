import { ElasticLoadBalancingV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingV2Client";
import { ModifyLoadBalancerAttributesInput, ModifyLoadBalancerAttributesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyLoadBalancerAttributesCommandInput extends ModifyLoadBalancerAttributesInput {
}
export interface ModifyLoadBalancerAttributesCommandOutput extends ModifyLoadBalancerAttributesOutput, __MetadataBearer {
}
/**
 * <p>Modifies the specified attributes of the specified Application Load Balancer, Network Load
 *       Balancer, or Gateway Load Balancer.</p>
 *          <p>If any of the specified attributes can't be modified as requested, the call fails. Any
 *       existing attributes that you do not modify retain their current values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyLoadBalancerAttributesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyLoadBalancerAttributesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new ModifyLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyLoadBalancerAttributesCommandInput} for command's `input` shape.
 * @see {@link ModifyLoadBalancerAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyLoadBalancerAttributesCommand extends $Command<ModifyLoadBalancerAttributesCommandInput, ModifyLoadBalancerAttributesCommandOutput, ElasticLoadBalancingV2ClientResolvedConfig> {
    readonly input: ModifyLoadBalancerAttributesCommandInput;
    constructor(input: ModifyLoadBalancerAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyLoadBalancerAttributesCommandInput, ModifyLoadBalancerAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
