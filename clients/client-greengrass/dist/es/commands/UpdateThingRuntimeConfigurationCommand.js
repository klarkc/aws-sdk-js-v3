import { __extends } from "tslib";
import { UpdateThingRuntimeConfigurationRequest, UpdateThingRuntimeConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateThingRuntimeConfigurationCommand, serializeAws_restJson1UpdateThingRuntimeConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Updates the runtime configuration of a thing.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateThingRuntimeConfigurationCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateThingRuntimeConfigurationCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new UpdateThingRuntimeConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateThingRuntimeConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateThingRuntimeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateThingRuntimeConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateThingRuntimeConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateThingRuntimeConfigurationCommand(input) {
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
    UpdateThingRuntimeConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "UpdateThingRuntimeConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateThingRuntimeConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateThingRuntimeConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateThingRuntimeConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateThingRuntimeConfigurationCommand(input, context);
    };
    UpdateThingRuntimeConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateThingRuntimeConfigurationCommand(output, context);
    };
    return UpdateThingRuntimeConfigurationCommand;
}($Command));
export { UpdateThingRuntimeConfigurationCommand };
//# sourceMappingURL=UpdateThingRuntimeConfigurationCommand.js.map