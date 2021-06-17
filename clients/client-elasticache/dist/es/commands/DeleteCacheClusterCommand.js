import { __extends } from "tslib";
import { DeleteCacheClusterMessage, DeleteCacheClusterResult } from "../models/models_0";
import { deserializeAws_queryDeleteCacheClusterCommand, serializeAws_queryDeleteCacheClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DeleteCacheClusterCommand = /** @class */ (function (_super) {
    __extends(DeleteCacheClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCacheClusterCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    DeleteCacheClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DeleteCacheClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCacheClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteCacheClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCacheClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteCacheClusterCommand(input, context);
    };
    DeleteCacheClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteCacheClusterCommand(output, context);
    };
    return DeleteCacheClusterCommand;
}($Command));
export { DeleteCacheClusterCommand };
//# sourceMappingURL=DeleteCacheClusterCommand.js.map