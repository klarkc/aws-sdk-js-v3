import { ElasticLoadBalancingV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingV2Client";
import { DeleteListenerInput, DeleteListenerOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteListenerCommandInput extends DeleteListenerInput {
}
export interface DeleteListenerCommandOutput extends DeleteListenerOutput, __MetadataBearer {
}
/**
 * <p>Deletes the specified listener.</p>
 *          <p>Alternatively, your listener is deleted when you delete the load balancer to which it is
 *         attached.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DeleteListenerCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DeleteListenerCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DeleteListenerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteListenerCommandInput} for command's `input` shape.
 * @see {@link DeleteListenerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteListenerCommand extends $Command<DeleteListenerCommandInput, DeleteListenerCommandOutput, ElasticLoadBalancingV2ClientResolvedConfig> {
    readonly input: DeleteListenerCommandInput;
    constructor(input: DeleteListenerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteListenerCommandInput, DeleteListenerCommandOutput>;
    private serialize;
    private deserialize;
}
