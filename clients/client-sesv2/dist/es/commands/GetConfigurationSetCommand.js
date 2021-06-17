import { __extends } from "tslib";
import { GetConfigurationSetRequest, GetConfigurationSetResponse } from "../models/models_0";
import { deserializeAws_restJson1GetConfigurationSetCommand, serializeAws_restJson1GetConfigurationSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get information about an existing configuration set, including the dedicated IP pool
 *             that it's associated with, whether or not it's enabled for sending email, and
 *             more.</p>
 *         <p>
 *             <i>Configuration sets</i> are groups of rules that you can apply to the
 *             emails you send. You apply a configuration set to an email by including a reference to
 *             the configuration set in the headers of the email. When you apply a configuration set to
 *             an email, all of the rules in that configuration set are applied to the email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetConfigurationSetCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetConfigurationSetCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new GetConfigurationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConfigurationSetCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationSetCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetConfigurationSetCommand = /** @class */ (function (_super) {
    __extends(GetConfigurationSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetConfigurationSetCommand(input) {
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
    GetConfigurationSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "GetConfigurationSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetConfigurationSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetConfigurationSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetConfigurationSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetConfigurationSetCommand(input, context);
    };
    GetConfigurationSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetConfigurationSetCommand(output, context);
    };
    return GetConfigurationSetCommand;
}($Command));
export { GetConfigurationSetCommand };
//# sourceMappingURL=GetConfigurationSetCommand.js.map