import { ElasticLoadBalancingV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingV2Client";
import { DeleteTargetGroupInput, DeleteTargetGroupOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTargetGroupCommandInput extends DeleteTargetGroupInput {
}
export interface DeleteTargetGroupCommandOutput extends DeleteTargetGroupOutput, __MetadataBearer {
}
/**
 * <p>Deletes the specified target group.</p>
 *          <p>You can delete a target group if it is not referenced by any actions. Deleting a target
 *       group also deletes any associated health checks. Deleting a target group does not affect its
 *       registered targets. For example, any EC2 instances continue to run until you stop or terminate
 *       them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DeleteTargetGroupCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DeleteTargetGroupCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DeleteTargetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTargetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteTargetGroupCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTargetGroupCommand extends $Command<DeleteTargetGroupCommandInput, DeleteTargetGroupCommandOutput, ElasticLoadBalancingV2ClientResolvedConfig> {
    readonly input: DeleteTargetGroupCommandInput;
    constructor(input: DeleteTargetGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTargetGroupCommandInput, DeleteTargetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
