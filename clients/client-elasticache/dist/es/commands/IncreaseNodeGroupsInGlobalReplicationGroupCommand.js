import { __extends } from "tslib";
import { IncreaseNodeGroupsInGlobalReplicationGroupMessage, IncreaseNodeGroupsInGlobalReplicationGroupResult, } from "../models/models_0";
import { deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand, serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Increase the number of node groups in the Global datastore</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, IncreaseNodeGroupsInGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, IncreaseNodeGroupsInGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new IncreaseNodeGroupsInGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link IncreaseNodeGroupsInGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var IncreaseNodeGroupsInGlobalReplicationGroupCommand = /** @class */ (function (_super) {
    __extends(IncreaseNodeGroupsInGlobalReplicationGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function IncreaseNodeGroupsInGlobalReplicationGroupCommand(input) {
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
    IncreaseNodeGroupsInGlobalReplicationGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "IncreaseNodeGroupsInGlobalReplicationGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: IncreaseNodeGroupsInGlobalReplicationGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: IncreaseNodeGroupsInGlobalReplicationGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    IncreaseNodeGroupsInGlobalReplicationGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand(input, context);
    };
    IncreaseNodeGroupsInGlobalReplicationGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand(output, context);
    };
    return IncreaseNodeGroupsInGlobalReplicationGroupCommand;
}($Command));
export { IncreaseNodeGroupsInGlobalReplicationGroupCommand };
//# sourceMappingURL=IncreaseNodeGroupsInGlobalReplicationGroupCommand.js.map