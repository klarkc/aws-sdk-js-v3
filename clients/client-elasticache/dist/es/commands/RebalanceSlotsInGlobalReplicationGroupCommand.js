import { __extends } from "tslib";
import { RebalanceSlotsInGlobalReplicationGroupMessage, RebalanceSlotsInGlobalReplicationGroupResult, } from "../models/models_0";
import { deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand, serializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Redistribute slots to ensure uniform distribution across existing shards in the cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, RebalanceSlotsInGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, RebalanceSlotsInGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new RebalanceSlotsInGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebalanceSlotsInGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link RebalanceSlotsInGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RebalanceSlotsInGlobalReplicationGroupCommand = /** @class */ (function (_super) {
    __extends(RebalanceSlotsInGlobalReplicationGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RebalanceSlotsInGlobalReplicationGroupCommand(input) {
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
    RebalanceSlotsInGlobalReplicationGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "RebalanceSlotsInGlobalReplicationGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RebalanceSlotsInGlobalReplicationGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: RebalanceSlotsInGlobalReplicationGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RebalanceSlotsInGlobalReplicationGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand(input, context);
    };
    RebalanceSlotsInGlobalReplicationGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand(output, context);
    };
    return RebalanceSlotsInGlobalReplicationGroupCommand;
}($Command));
export { RebalanceSlotsInGlobalReplicationGroupCommand };
//# sourceMappingURL=RebalanceSlotsInGlobalReplicationGroupCommand.js.map