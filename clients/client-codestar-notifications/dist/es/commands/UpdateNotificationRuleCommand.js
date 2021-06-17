import { __extends } from "tslib";
import { UpdateNotificationRuleRequest, UpdateNotificationRuleResult } from "../models/models_0";
import { deserializeAws_restJson1UpdateNotificationRuleCommand, serializeAws_restJson1UpdateNotificationRuleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a notification rule for a resource. You can change the events that trigger the
 *             notification rule, the status of the rule, and the targets that receive the
 *             notifications.</p>
 *          <note>
 *             <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, UpdateNotificationRuleCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, UpdateNotificationRuleCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new UpdateNotificationRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNotificationRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateNotificationRuleCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateNotificationRuleCommand = /** @class */ (function (_super) {
    __extends(UpdateNotificationRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateNotificationRuleCommand(input) {
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
    UpdateNotificationRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodestarNotificationsClient";
        var commandName = "UpdateNotificationRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateNotificationRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateNotificationRuleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateNotificationRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateNotificationRuleCommand(input, context);
    };
    UpdateNotificationRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateNotificationRuleCommand(output, context);
    };
    return UpdateNotificationRuleCommand;
}($Command));
export { UpdateNotificationRuleCommand };
//# sourceMappingURL=UpdateNotificationRuleCommand.js.map