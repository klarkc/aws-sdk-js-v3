import { __extends } from "tslib";
import { DecreaseNodeGroupsInGlobalReplicationGroupMessage, DecreaseNodeGroupsInGlobalReplicationGroupResult, } from "../models/models_0";
import { deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand, serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Decreases the number of node groups in a Global datastore</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DecreaseNodeGroupsInGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DecreaseNodeGroupsInGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DecreaseNodeGroupsInGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DecreaseNodeGroupsInGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DecreaseNodeGroupsInGlobalReplicationGroupCommand = /** @class */ (function (_super) {
    __extends(DecreaseNodeGroupsInGlobalReplicationGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DecreaseNodeGroupsInGlobalReplicationGroupCommand(input) {
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
    DecreaseNodeGroupsInGlobalReplicationGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DecreaseNodeGroupsInGlobalReplicationGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DecreaseNodeGroupsInGlobalReplicationGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DecreaseNodeGroupsInGlobalReplicationGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DecreaseNodeGroupsInGlobalReplicationGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand(input, context);
    };
    DecreaseNodeGroupsInGlobalReplicationGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand(output, context);
    };
    return DecreaseNodeGroupsInGlobalReplicationGroupCommand;
}($Command));
export { DecreaseNodeGroupsInGlobalReplicationGroupCommand };
//# sourceMappingURL=DecreaseNodeGroupsInGlobalReplicationGroupCommand.js.map