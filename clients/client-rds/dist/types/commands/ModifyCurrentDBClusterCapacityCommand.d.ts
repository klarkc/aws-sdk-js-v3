import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBClusterCapacityInfo, ModifyCurrentDBClusterCapacityMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyCurrentDBClusterCapacityCommandInput extends ModifyCurrentDBClusterCapacityMessage {
}
export interface ModifyCurrentDBClusterCapacityCommandOutput extends DBClusterCapacityInfo, __MetadataBearer {
}
/**
 * <p>Set the capacity of an Aurora Serverless DB cluster to a specific value.</p>
 *          <p>Aurora Serverless scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale
 *         fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code>
 *         to set the capacity explicitly.</p>
 *          <p>After this call sets the DB cluster capacity, Aurora Serverless can automatically scale
 *             the DB cluster based on the cooldown period for scaling up and the cooldown period
 *             for scaling down.</p>
 *          <p>For more information about Aurora Serverless, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the
 *           <i>Amazon Aurora User Guide</i>.</p>
 *          <important>
 *             <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that
 *               prevent Aurora Serverless from finding a scaling point might be dropped. For more information about scaling points,
 *               see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling">
 *                   Autoscaling for Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          </important>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyCurrentDBClusterCapacityCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyCurrentDBClusterCapacityCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyCurrentDBClusterCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyCurrentDBClusterCapacityCommandInput} for command's `input` shape.
 * @see {@link ModifyCurrentDBClusterCapacityCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyCurrentDBClusterCapacityCommand extends $Command<ModifyCurrentDBClusterCapacityCommandInput, ModifyCurrentDBClusterCapacityCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyCurrentDBClusterCapacityCommandInput;
    constructor(input: ModifyCurrentDBClusterCapacityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyCurrentDBClusterCapacityCommandInput, ModifyCurrentDBClusterCapacityCommandOutput>;
    private serialize;
    private deserialize;
}
