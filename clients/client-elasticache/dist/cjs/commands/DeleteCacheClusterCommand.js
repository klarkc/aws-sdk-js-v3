"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCacheClusterCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a previously provisioned cluster.
 *                 <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the
 *             cluster itself. When you receive a successful response from this operation,
 *             Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert
 *             this operation.</p>
 *         <p>This operation is not valid for:</p>
 *         <ul>
 *             <li>
 *                 <p>Redis (cluster mode enabled) clusters</p>
 *             </li>
 *             <li>
 *                 <p>Redis (cluster mode disabled) clusters</p>
 *             </li>
 *             <li>
 *
 *                 <p>A cluster that is the last read replica of a replication group</p>
 *             </li>
 *             <li>
 *                 <p>A cluster that is the primary node of a replication group</p>
 *             </li>
 *             <li>
 *                 <p>A node group (shard) that has Multi-AZ mode enabled</p>
 *             </li>
 *             <li>
 *                 <p>A cluster from a Redis (cluster mode enabled) replication group</p>
 *             </li>
 *             <li>
 *                 <p>A cluster that is not in the <code>available</code> state</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteCacheClusterCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteCacheClusterCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DeleteCacheClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCacheClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteCacheClusterCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteCacheClusterCommand extends smithy_client_1.Command {
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
        const clientName = "ElastiCacheClient";
        const commandName = "DeleteCacheClusterCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteCacheClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteCacheClusterResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDeleteCacheClusterCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDeleteCacheClusterCommand(output, context);
    }
}
exports.DeleteCacheClusterCommand = DeleteCacheClusterCommand;
//# sourceMappingURL=DeleteCacheClusterCommand.js.map