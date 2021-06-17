import { __extends } from "tslib";
import { DeleteDomainConfigurationRequest, DeleteDomainConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteDomainConfigurationCommand, serializeAws_restJson1DeleteDomainConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified domain configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteDomainConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteDomainConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteDomainConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDomainConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDomainConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeleteDomainConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDomainConfigurationCommand(input) {
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
    DeleteDomainConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteDomainConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDomainConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDomainConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDomainConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteDomainConfigurationCommand(input, context);
    };
    DeleteDomainConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteDomainConfigurationCommand(output, context);
    };
    return DeleteDomainConfigurationCommand;
}($Command));
export { DeleteDomainConfigurationCommand };
//# sourceMappingURL=DeleteDomainConfigurationCommand.js.map