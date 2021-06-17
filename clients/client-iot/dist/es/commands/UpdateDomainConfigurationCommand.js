import { __extends } from "tslib";
import { UpdateDomainConfigurationRequest, UpdateDomainConfigurationResponse } from "../models/models_2";
import { deserializeAws_restJson1UpdateDomainConfigurationCommand, serializeAws_restJson1UpdateDomainConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates values stored in the domain configuration. Domain configurations for default endpoints can't be updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateDomainConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateDomainConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateDomainConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDomainConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDomainConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateDomainConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDomainConfigurationCommand(input) {
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
    UpdateDomainConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateDomainConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDomainConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDomainConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDomainConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDomainConfigurationCommand(input, context);
    };
    UpdateDomainConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDomainConfigurationCommand(output, context);
    };
    return UpdateDomainConfigurationCommand;
}($Command));
export { UpdateDomainConfigurationCommand };
//# sourceMappingURL=UpdateDomainConfigurationCommand.js.map