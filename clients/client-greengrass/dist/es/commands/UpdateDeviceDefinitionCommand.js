import { __extends } from "tslib";
import { UpdateDeviceDefinitionRequest, UpdateDeviceDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateDeviceDefinitionCommand, serializeAws_restJson1UpdateDeviceDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Updates a device definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateDeviceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateDeviceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new UpdateDeviceDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeviceDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDeviceDefinitionCommand = /** @class */ (function (_super) {
    __extends(UpdateDeviceDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDeviceDefinitionCommand(input) {
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
    UpdateDeviceDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "UpdateDeviceDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDeviceDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDeviceDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDeviceDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDeviceDefinitionCommand(input, context);
    };
    UpdateDeviceDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDeviceDefinitionCommand(output, context);
    };
    return UpdateDeviceDefinitionCommand;
}($Command));
export { UpdateDeviceDefinitionCommand };
//# sourceMappingURL=UpdateDeviceDefinitionCommand.js.map