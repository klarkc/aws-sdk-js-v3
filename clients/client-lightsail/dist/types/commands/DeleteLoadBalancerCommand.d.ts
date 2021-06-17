import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteLoadBalancerRequest, DeleteLoadBalancerResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLoadBalancerCommandInput extends DeleteLoadBalancerRequest {
}
export interface DeleteLoadBalancerCommandOutput extends DeleteLoadBalancerResult, __MetadataBearer {
}
/**
 * <p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the
 *       load balancer is deleted, you will need to create a new load balancer, create a new
 *       certificate, and verify domain ownership again.</p>
 *          <p>The <code>delete load balancer</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by <code>load balancer name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteLoadBalancerCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteLoadBalancerCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link DeleteLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLoadBalancerCommand extends $Command<DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteLoadBalancerCommandInput;
    constructor(input: DeleteLoadBalancerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}
