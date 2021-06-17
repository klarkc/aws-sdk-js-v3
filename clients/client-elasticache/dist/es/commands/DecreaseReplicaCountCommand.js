import { __extends } from "tslib";
import { DecreaseReplicaCountMessage, DecreaseReplicaCountResult } from "../models/models_0";
import { deserializeAws_queryDecreaseReplicaCountCommand, serializeAws_queryDecreaseReplicaCountCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Dynamically decreases the number of replicas in a Redis (cluster mode disabled) replication group or the number of
 *             replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation
 *             is performed with no cluster down time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DecreaseReplicaCountCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DecreaseReplicaCountCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DecreaseReplicaCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DecreaseReplicaCountCommandInput} for command's `input` shape.
 * @see {@link DecreaseReplicaCountCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DecreaseReplicaCountCommand = /** @class */ (function (_super) {
    __extends(DecreaseReplicaCountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DecreaseReplicaCountCommand(input) {
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
    DecreaseReplicaCountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DecreaseReplicaCountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DecreaseReplicaCountMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DecreaseReplicaCountResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DecreaseReplicaCountCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDecreaseReplicaCountCommand(input, context);
    };
    DecreaseReplicaCountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDecreaseReplicaCountCommand(output, context);
    };
    return DecreaseReplicaCountCommand;
}($Command));
export { DecreaseReplicaCountCommand };
//# sourceMappingURL=DecreaseReplicaCountCommand.js.map