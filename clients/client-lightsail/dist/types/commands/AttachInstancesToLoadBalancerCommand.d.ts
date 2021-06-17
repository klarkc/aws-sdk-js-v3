import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { AttachInstancesToLoadBalancerRequest, AttachInstancesToLoadBalancerResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AttachInstancesToLoadBalancerCommandInput extends AttachInstancesToLoadBalancerRequest {
}
export interface AttachInstancesToLoadBalancerCommandOutput extends AttachInstancesToLoadBalancerResult, __MetadataBearer {
}
/**
 * <p>Attaches one or more Lightsail instances to a load balancer.</p>
 *          <p>After some time, the instances are attached to the load balancer and the health check
 *       status is available.</p>
 *          <p>The <code>attach instances to load balancer</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by <code>load balancer
 *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, AttachInstancesToLoadBalancerCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, AttachInstancesToLoadBalancerCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new AttachInstancesToLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachInstancesToLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link AttachInstancesToLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AttachInstancesToLoadBalancerCommand extends $Command<AttachInstancesToLoadBalancerCommandInput, AttachInstancesToLoadBalancerCommandOutput, LightsailClientResolvedConfig> {
    readonly input: AttachInstancesToLoadBalancerCommandInput;
    constructor(input: AttachInstancesToLoadBalancerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachInstancesToLoadBalancerCommandInput, AttachInstancesToLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}
