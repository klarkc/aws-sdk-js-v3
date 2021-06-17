import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DetachInstancesFromLoadBalancerRequest, DetachInstancesFromLoadBalancerResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetachInstancesFromLoadBalancerCommandInput extends DetachInstancesFromLoadBalancerRequest {
}
export interface DetachInstancesFromLoadBalancerCommandOutput extends DetachInstancesFromLoadBalancerResult, __MetadataBearer {
}
/**
 * <p>Detaches the specified instances from a Lightsail load balancer.</p>
 *          <p>This operation waits until the instances are no longer needed before they are detached
 *       from the load balancer.</p>
 *          <p>The <code>detach instances from load balancer</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by <code>load balancer
 *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DetachInstancesFromLoadBalancerCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DetachInstancesFromLoadBalancerCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DetachInstancesFromLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachInstancesFromLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link DetachInstancesFromLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetachInstancesFromLoadBalancerCommand extends $Command<DetachInstancesFromLoadBalancerCommandInput, DetachInstancesFromLoadBalancerCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DetachInstancesFromLoadBalancerCommandInput;
    constructor(input: DetachInstancesFromLoadBalancerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachInstancesFromLoadBalancerCommandInput, DetachInstancesFromLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}
