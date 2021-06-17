"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyCurrentDBClusterCapacityCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class ModifyCurrentDBClusterCapacityCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "RDSClient";
        const commandName = "ModifyCurrentDBClusterCapacityCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.ModifyCurrentDBClusterCapacityMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.DBClusterCapacityInfo.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryModifyCurrentDBClusterCapacityCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryModifyCurrentDBClusterCapacityCommand(output, context);
    }
}
exports.ModifyCurrentDBClusterCapacityCommand = ModifyCurrentDBClusterCapacityCommand;
//# sourceMappingURL=ModifyCurrentDBClusterCapacityCommand.js.map