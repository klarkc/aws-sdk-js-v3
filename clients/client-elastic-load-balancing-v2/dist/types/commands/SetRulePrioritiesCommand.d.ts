import { ElasticLoadBalancingV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingV2Client";
import { SetRulePrioritiesInput, SetRulePrioritiesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetRulePrioritiesCommandInput extends SetRulePrioritiesInput {
}
export interface SetRulePrioritiesCommandOutput extends SetRulePrioritiesOutput, __MetadataBearer {
}
/**
 * <p>Sets the priorities of the specified rules.</p>
 *          <p>You can reorder the rules as long as there are no priority conflicts in the new order. Any
 *       existing rules that you do not specify retain their current priority.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, SetRulePrioritiesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, SetRulePrioritiesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new SetRulePrioritiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetRulePrioritiesCommandInput} for command's `input` shape.
 * @see {@link SetRulePrioritiesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetRulePrioritiesCommand extends $Command<SetRulePrioritiesCommandInput, SetRulePrioritiesCommandOutput, ElasticLoadBalancingV2ClientResolvedConfig> {
    readonly input: SetRulePrioritiesCommandInput;
    constructor(input: SetRulePrioritiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetRulePrioritiesCommandInput, SetRulePrioritiesCommandOutput>;
    private serialize;
    private deserialize;
}
