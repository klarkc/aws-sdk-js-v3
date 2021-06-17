import { __extends } from "tslib";
import { ListNotificationRulesRequest, ListNotificationRulesResult } from "../models/models_0";
import { deserializeAws_restJson1ListNotificationRulesCommand, serializeAws_restJson1ListNotificationRulesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the notification rules for an AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, ListNotificationRulesCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, ListNotificationRulesCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new ListNotificationRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNotificationRulesCommandInput} for command's `input` shape.
 * @see {@link ListNotificationRulesCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListNotificationRulesCommand = /** @class */ (function (_super) {
    __extends(ListNotificationRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListNotificationRulesCommand(input) {
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
    ListNotificationRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodestarNotificationsClient";
        var commandName = "ListNotificationRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListNotificationRulesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListNotificationRulesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListNotificationRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListNotificationRulesCommand(input, context);
    };
    ListNotificationRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListNotificationRulesCommand(output, context);
    };
    return ListNotificationRulesCommand;
}($Command));
export { ListNotificationRulesCommand };
//# sourceMappingURL=ListNotificationRulesCommand.js.map