import { __extends } from "tslib";
import { SubscribeRequest, SubscribeResult } from "../models/models_0";
import { deserializeAws_restJson1SubscribeCommand, serializeAws_restJson1SubscribeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an association between a notification rule and an SNS topic so that the
 *             associated target can receive notifications when the events described in the rule are
 *             triggered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, SubscribeCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, SubscribeCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new SubscribeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubscribeCommandInput} for command's `input` shape.
 * @see {@link SubscribeCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SubscribeCommand = /** @class */ (function (_super) {
    __extends(SubscribeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SubscribeCommand(input) {
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
    SubscribeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodestarNotificationsClient";
        var commandName = "SubscribeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SubscribeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SubscribeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SubscribeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SubscribeCommand(input, context);
    };
    SubscribeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SubscribeCommand(output, context);
    };
    return SubscribeCommand;
}($Command));
export { SubscribeCommand };
//# sourceMappingURL=SubscribeCommand.js.map