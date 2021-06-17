import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateLoadBalancerRequest, CreateLoadBalancerResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLoadBalancerCommandInput extends CreateLoadBalancerRequest {
}
export interface CreateLoadBalancerCommandOutput extends CreateLoadBalancerResult, __MetadataBearer {
}
/**
 * <p>Creates a Lightsail load balancer. To learn more about deciding whether to load balance
 *       your application, see <a href="https://lightsail.aws.amazon.com/ls/docs/how-to/article/configure-lightsail-instances-for-load-balancing">Configure your Lightsail instances for load balancing</a>. You can create up to 5
 *       load balancers per AWS Region in your account.</p>
 *          <p>When you create a load balancer, you can specify a unique name and port settings. To
 *       change additional load balancer settings, use the <code>UpdateLoadBalancerAttribute</code>
 *       operation.</p>
 *          <p>The <code>create load balancer</code> operation supports tag-based access control via
 *       request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateLoadBalancerCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateLoadBalancerCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link CreateLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLoadBalancerCommand extends $Command<CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateLoadBalancerCommandInput;
    constructor(input: CreateLoadBalancerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}
