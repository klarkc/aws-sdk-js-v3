import { __extends } from "tslib";
import { CreateNotificationRuleRequest, CreateNotificationRuleResult } from "../models/models_0";
import { deserializeAws_restJson1CreateNotificationRuleCommand, serializeAws_restJson1CreateNotificationRuleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a notification rule for a resource. The rule specifies the events you want
 *             notifications about and the targets (such as SNS topics) where you want to receive
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, CreateNotificationRuleCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, CreateNotificationRuleCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new CreateNotificationRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNotificationRuleCommandInput} for command's `input` shape.
 * @see {@link CreateNotificationRuleCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateNotificationRuleCommand = /** @class */ (function (_super) {
    __extends(CreateNotificationRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateNotificationRuleCommand(input) {
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
    CreateNotificationRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodestarNotificationsClient";
        var commandName = "CreateNotificationRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateNotificationRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateNotificationRuleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateNotificationRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateNotificationRuleCommand(input, context);
    };
    CreateNotificationRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateNotificationRuleCommand(output, context);
    };
    return CreateNotificationRuleCommand;
}($Command));
export { CreateNotificationRuleCommand };
//# sourceMappingURL=CreateNotificationRuleCommand.js.map