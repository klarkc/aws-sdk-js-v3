import { __extends } from "tslib";
import { ListConfigurationSetsRequest, ListConfigurationSetsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListConfigurationSetsCommand, serializeAws_restJson1ListConfigurationSetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List all of the configuration sets associated with your account in the current
 *             region.</p>
 *         <p>
 *             <i>Configuration sets</i> are groups of rules that you can apply to the
 *             emails you send. You apply a configuration set to an email by including a reference to
 *             the configuration set in the headers of the email. When you apply a configuration set to
 *             an email, all of the rules in that configuration set are applied to the email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListConfigurationSetsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListConfigurationSetsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new ListConfigurationSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConfigurationSetsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationSetsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListConfigurationSetsCommand = /** @class */ (function (_super) {
    __extends(ListConfigurationSetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListConfigurationSetsCommand(input) {
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
    ListConfigurationSetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "ListConfigurationSetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListConfigurationSetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListConfigurationSetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListConfigurationSetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListConfigurationSetsCommand(input, context);
    };
    ListConfigurationSetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListConfigurationSetsCommand(output, context);
    };
    return ListConfigurationSetsCommand;
}($Command));
export { ListConfigurationSetsCommand };
//# sourceMappingURL=ListConfigurationSetsCommand.js.map