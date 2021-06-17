import { __extends } from "tslib";
import { ModifyReplicationGroupShardConfigurationMessage, ModifyReplicationGroupShardConfigurationResult, } from "../models/models_0";
import { deserializeAws_queryModifyReplicationGroupShardConfigurationCommand, serializeAws_queryModifyReplicationGroupShardConfigurationCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies a replication group's shards (node groups) by allowing you to
 *             add shards, remove shards, or rebalance the keyspaces among existing shards.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyReplicationGroupShardConfigurationCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyReplicationGroupShardConfigurationCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ModifyReplicationGroupShardConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyReplicationGroupShardConfigurationCommandInput} for command's `input` shape.
 * @see {@link ModifyReplicationGroupShardConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyReplicationGroupShardConfigurationCommand = /** @class */ (function (_super) {
    __extends(ModifyReplicationGroupShardConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyReplicationGroupShardConfigurationCommand(input) {
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
    ModifyReplicationGroupShardConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "ModifyReplicationGroupShardConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyReplicationGroupShardConfigurationMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyReplicationGroupShardConfigurationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyReplicationGroupShardConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyReplicationGroupShardConfigurationCommand(input, context);
    };
    ModifyReplicationGroupShardConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyReplicationGroupShardConfigurationCommand(output, context);
    };
    return ModifyReplicationGroupShardConfigurationCommand;
}($Command));
export { ModifyReplicationGroupShardConfigurationCommand };
//# sourceMappingURL=ModifyReplicationGroupShardConfigurationCommand.js.map