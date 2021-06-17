import { __extends } from "tslib";
import { UpdateIndexingConfigurationRequest, UpdateIndexingConfigurationResponse } from "../models/models_2";
import { deserializeAws_restJson1UpdateIndexingConfigurationCommand, serializeAws_restJson1UpdateIndexingConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the search configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateIndexingConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateIndexingConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateIndexingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIndexingConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateIndexingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateIndexingConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateIndexingConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateIndexingConfigurationCommand(input) {
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
    UpdateIndexingConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateIndexingConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateIndexingConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateIndexingConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateIndexingConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateIndexingConfigurationCommand(input, context);
    };
    UpdateIndexingConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateIndexingConfigurationCommand(output, context);
    };
    return UpdateIndexingConfigurationCommand;
}($Command));
export { UpdateIndexingConfigurationCommand };
//# sourceMappingURL=UpdateIndexingConfigurationCommand.js.map