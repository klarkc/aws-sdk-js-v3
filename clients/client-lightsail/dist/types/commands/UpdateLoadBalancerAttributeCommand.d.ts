import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { UpdateLoadBalancerAttributeRequest, UpdateLoadBalancerAttributeResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateLoadBalancerAttributeCommandInput extends UpdateLoadBalancerAttributeRequest {
}
export interface UpdateLoadBalancerAttributeCommandOutput extends UpdateLoadBalancerAttributeResult, __MetadataBearer {
}
/**
 * <p>Updates the specified attribute for a load balancer. You can only update one attribute at
 *       a time.</p>
 *          <p>The <code>update load balancer attribute</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by <code>load balancer
 *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateLoadBalancerAttributeCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateLoadBalancerAttributeCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateLoadBalancerAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLoadBalancerAttributeCommandInput} for command's `input` shape.
 * @see {@link UpdateLoadBalancerAttributeCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateLoadBalancerAttributeCommand extends $Command<UpdateLoadBalancerAttributeCommandInput, UpdateLoadBalancerAttributeCommandOutput, LightsailClientResolvedConfig> {
    readonly input: UpdateLoadBalancerAttributeCommandInput;
    constructor(input: UpdateLoadBalancerAttributeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLoadBalancerAttributeCommandInput, UpdateLoadBalancerAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
