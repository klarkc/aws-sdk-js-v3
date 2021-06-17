import { __extends } from "tslib";
import { DescribeNotificationRuleRequest, DescribeNotificationRuleResult } from "../models/models_0";
import { deserializeAws_restJson1DescribeNotificationRuleCommand, serializeAws_restJson1DescribeNotificationRuleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a specified notification rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, DescribeNotificationRuleCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, DescribeNotificationRuleCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new DescribeNotificationRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNotificationRuleCommandInput} for command's `input` shape.
 * @see {@link DescribeNotificationRuleCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeNotificationRuleCommand = /** @class */ (function (_super) {
    __extends(DescribeNotificationRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeNotificationRuleCommand(input) {
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
    DescribeNotificationRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodestarNotificationsClient";
        var commandName = "DescribeNotificationRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeNotificationRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeNotificationRuleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeNotificationRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeNotificationRuleCommand(input, context);
    };
    DescribeNotificationRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeNotificationRuleCommand(output, context);
    };
    return DescribeNotificationRuleCommand;
}($Command));
export { DescribeNotificationRuleCommand };
//# sourceMappingURL=DescribeNotificationRuleCommand.js.map