import { ElasticLoadBalancingV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingV2Client";
import { ModifyTargetGroupInput, ModifyTargetGroupOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyTargetGroupCommandInput extends ModifyTargetGroupInput {
}
export interface ModifyTargetGroupCommandOutput extends ModifyTargetGroupOutput, __MetadataBearer {
}
/**
 * <p>Modifies the health checks used when evaluating the health state of the targets in the
 *       specified target group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyTargetGroupCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyTargetGroupCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new ModifyTargetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyTargetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyTargetGroupCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyTargetGroupCommand extends $Command<ModifyTargetGroupCommandInput, ModifyTargetGroupCommandOutput, ElasticLoadBalancingV2ClientResolvedConfig> {
    readonly input: ModifyTargetGroupCommandInput;
    constructor(input: ModifyTargetGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyTargetGroupCommandInput, ModifyTargetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
