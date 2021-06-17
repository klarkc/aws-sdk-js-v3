import { __extends } from "tslib";
import { IncreaseReplicaCountMessage, IncreaseReplicaCountResult } from "../models/models_0";
import { deserializeAws_queryIncreaseReplicaCountCommand, serializeAws_queryIncreaseReplicaCountCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Dynamically increases the number of replicas in a Redis (cluster mode disabled) replication group or the number of
 *             replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation
 *             is performed with no cluster down time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, IncreaseReplicaCountCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, IncreaseReplicaCountCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new IncreaseReplicaCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link IncreaseReplicaCountCommandInput} for command's `input` shape.
 * @see {@link IncreaseReplicaCountCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var IncreaseReplicaCountCommand = /** @class */ (function (_super) {
    __extends(IncreaseReplicaCountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function IncreaseReplicaCountCommand(input) {
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
    IncreaseReplicaCountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "IncreaseReplicaCountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: IncreaseReplicaCountMessage.filterSensitiveLog,
            outputFilterSensitiveLog: IncreaseReplicaCountResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    IncreaseReplicaCountCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryIncreaseReplicaCountCommand(input, context);
    };
    IncreaseReplicaCountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryIncreaseReplicaCountCommand(output, context);
    };
    return IncreaseReplicaCountCommand;
}($Command));
export { IncreaseReplicaCountCommand };
//# sourceMappingURL=IncreaseReplicaCountCommand.js.map