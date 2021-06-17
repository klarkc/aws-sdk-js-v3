import { __extends } from "tslib";
import { FailoverGlobalReplicationGroupMessage, FailoverGlobalReplicationGroupResult } from "../models/models_0";
import { deserializeAws_queryFailoverGlobalReplicationGroupCommand, serializeAws_queryFailoverGlobalReplicationGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Used to failover the primary region to a selected secondary region. The selected secondary region will become primary, and all other clusters will become secondary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, FailoverGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, FailoverGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new FailoverGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FailoverGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link FailoverGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var FailoverGlobalReplicationGroupCommand = /** @class */ (function (_super) {
    __extends(FailoverGlobalReplicationGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function FailoverGlobalReplicationGroupCommand(input) {
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
    FailoverGlobalReplicationGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "FailoverGlobalReplicationGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: FailoverGlobalReplicationGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: FailoverGlobalReplicationGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    FailoverGlobalReplicationGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryFailoverGlobalReplicationGroupCommand(input, context);
    };
    FailoverGlobalReplicationGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryFailoverGlobalReplicationGroupCommand(output, context);
    };
    return FailoverGlobalReplicationGroupCommand;
}($Command));
export { FailoverGlobalReplicationGroupCommand };
//# sourceMappingURL=FailoverGlobalReplicationGroupCommand.js.map