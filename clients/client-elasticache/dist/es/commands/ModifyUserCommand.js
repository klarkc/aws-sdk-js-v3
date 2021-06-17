import { __extends } from "tslib";
import { ModifyUserMessage, User } from "../models/models_0";
import { deserializeAws_queryModifyUserCommand, serializeAws_queryModifyUserCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes user password(s) and/or access string.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyUserCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyUserCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ModifyUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyUserCommandInput} for command's `input` shape.
 * @see {@link ModifyUserCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyUserCommand = /** @class */ (function (_super) {
    __extends(ModifyUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyUserCommand(input) {
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
    ModifyUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "ModifyUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyUserMessage.filterSensitiveLog,
            outputFilterSensitiveLog: User.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyUserCommand(input, context);
    };
    ModifyUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyUserCommand(output, context);
    };
    return ModifyUserCommand;
}($Command));
export { ModifyUserCommand };
//# sourceMappingURL=ModifyUserCommand.js.map