import { __extends } from "tslib";
import { CreateConfigurationSetRequest, CreateConfigurationSetResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateConfigurationSetCommand, serializeAws_restJson1CreateConfigurationSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a configuration set. <i>Configuration sets</i> are groups of
 *             rules that you can apply to the emails you send using Amazon Pinpoint. You apply a configuration
 *             set to an email by including a reference to the configuration set in the headers of the
 *             email. When you apply a configuration set to an email, all of the rules in that
 *             configuration set are applied to the email. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, CreateConfigurationSetCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, CreateConfigurationSetCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new CreateConfigurationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConfigurationSetCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationSetCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateConfigurationSetCommand = /** @class */ (function (_super) {
    __extends(CreateConfigurationSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateConfigurationSetCommand(input) {
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
    CreateConfigurationSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "CreateConfigurationSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateConfigurationSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateConfigurationSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateConfigurationSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateConfigurationSetCommand(input, context);
    };
    CreateConfigurationSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateConfigurationSetCommand(output, context);
    };
    return CreateConfigurationSetCommand;
}($Command));
export { CreateConfigurationSetCommand };
//# sourceMappingURL=CreateConfigurationSetCommand.js.map