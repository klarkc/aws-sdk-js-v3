import { __extends } from "tslib";
import { ModifyUserGroupMessage, UserGroup } from "../models/models_0";
import { deserializeAws_queryModifyUserGroupCommand, serializeAws_queryModifyUserGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the list of users that belong to the user group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyUserGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyUserGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ModifyUserGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyUserGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyUserGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyUserGroupCommand = /** @class */ (function (_super) {
    __extends(ModifyUserGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyUserGroupCommand(input) {
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
    ModifyUserGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "ModifyUserGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyUserGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: UserGroup.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyUserGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyUserGroupCommand(input, context);
    };
    ModifyUserGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyUserGroupCommand(output, context);
    };
    return ModifyUserGroupCommand;
}($Command));
export { ModifyUserGroupCommand };
//# sourceMappingURL=ModifyUserGroupCommand.js.map