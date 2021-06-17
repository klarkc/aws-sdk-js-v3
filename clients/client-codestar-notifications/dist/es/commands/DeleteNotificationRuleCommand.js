import { __extends } from "tslib";
import { DeleteNotificationRuleRequest, DeleteNotificationRuleResult } from "../models/models_0";
import { deserializeAws_restJson1DeleteNotificationRuleCommand, serializeAws_restJson1DeleteNotificationRuleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a notification rule for a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, DeleteNotificationRuleCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, DeleteNotificationRuleCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new DeleteNotificationRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNotificationRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationRuleCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteNotificationRuleCommand = /** @class */ (function (_super) {
    __extends(DeleteNotificationRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteNotificationRuleCommand(input) {
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
    DeleteNotificationRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodestarNotificationsClient";
        var commandName = "DeleteNotificationRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteNotificationRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteNotificationRuleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteNotificationRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteNotificationRuleCommand(input, context);
    };
    DeleteNotificationRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteNotificationRuleCommand(output, context);
    };
    return DeleteNotificationRuleCommand;
}($Command));
export { DeleteNotificationRuleCommand };
//# sourceMappingURL=DeleteNotificationRuleCommand.js.map