import { __extends } from "tslib";
import { DeleteDeviceDefinitionRequest, DeleteDeviceDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteDeviceDefinitionCommand, serializeAws_restJson1DeleteDeviceDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Deletes a device definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteDeviceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteDeviceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new DeleteDeviceDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeviceDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteDeviceDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDeviceDefinitionCommand = /** @class */ (function (_super) {
    __extends(DeleteDeviceDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDeviceDefinitionCommand(input) {
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
    DeleteDeviceDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "DeleteDeviceDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDeviceDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDeviceDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDeviceDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteDeviceDefinitionCommand(input, context);
    };
    DeleteDeviceDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteDeviceDefinitionCommand(output, context);
    };
    return DeleteDeviceDefinitionCommand;
}($Command));
export { DeleteDeviceDefinitionCommand };
//# sourceMappingURL=DeleteDeviceDefinitionCommand.js.map