import { __extends } from "tslib";
import { ModifyGlobalReplicationGroupMessage, ModifyGlobalReplicationGroupResult } from "../models/models_0";
import { deserializeAws_queryModifyGlobalReplicationGroupCommand, serializeAws_queryModifyGlobalReplicationGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the settings for a Global datastore.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ModifyGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyGlobalReplicationGroupCommand = /** @class */ (function (_super) {
    __extends(ModifyGlobalReplicationGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyGlobalReplicationGroupCommand(input) {
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
    ModifyGlobalReplicationGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "ModifyGlobalReplicationGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyGlobalReplicationGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyGlobalReplicationGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyGlobalReplicationGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyGlobalReplicationGroupCommand(input, context);
    };
    ModifyGlobalReplicationGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyGlobalReplicationGroupCommand(output, context);
    };
    return ModifyGlobalReplicationGroupCommand;
}($Command));
export { ModifyGlobalReplicationGroupCommand };
//# sourceMappingURL=ModifyGlobalReplicationGroupCommand.js.map