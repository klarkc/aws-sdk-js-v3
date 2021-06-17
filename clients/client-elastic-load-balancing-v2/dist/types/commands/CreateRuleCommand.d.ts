import { ElasticLoadBalancingV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingV2Client";
import { CreateRuleInput, CreateRuleOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateRuleCommandInput extends CreateRuleInput {
}
export interface CreateRuleCommandOutput extends CreateRuleOutput, __MetadataBearer {
}
/**
 * <p>Creates a rule for the specified listener. The listener must be associated with an
 *       Application Load Balancer.</p>
 *          <p>Each rule consists of a priority, one or more actions, and one or more conditions. Rules
 *       are evaluated in priority order, from the lowest value to the highest value. When the
 *       conditions for a rule are met, its actions are performed. If the conditions for no rules are
 *       met, the actions for the default rule are performed. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#listener-rules">Listener rules</a> in the <i>Application Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, CreateRuleCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, CreateRuleCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new CreateRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRuleCommandInput} for command's `input` shape.
 * @see {@link CreateRuleCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateRuleCommand extends $Command<CreateRuleCommandInput, CreateRuleCommandOutput, ElasticLoadBalancingV2ClientResolvedConfig> {
    readonly input: CreateRuleCommandInput;
    constructor(input: CreateRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRuleCommandInput, CreateRuleCommandOutput>;
    private serialize;
    private deserialize;
}
