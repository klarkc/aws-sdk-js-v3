import { __extends } from "tslib";
import { UpdateConfigurationRequest, UpdateConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateConfigurationCommand, serializeAws_restJson1UpdateConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Updates the specified configuration.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, UpdateConfigurationCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, UpdateConfigurationCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new UpdateConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateConfigurationCommand(input) {
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
    UpdateConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MqClient";
        var commandName = "UpdateConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateConfigurationCommand(input, context);
    };
    UpdateConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateConfigurationCommand(output, context);
    };
    return UpdateConfigurationCommand;
}($Command));
export { UpdateConfigurationCommand };
//# sourceMappingURL=UpdateConfigurationCommand.js.map